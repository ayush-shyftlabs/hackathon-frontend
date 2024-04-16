import React, { useState, useEffect } from 'react';
import { FundProjectionScreenOutlined, CreditCardOutlined, LoginOutlined, PieChartOutlined, FundOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

function getItem(label, key, icon, path = null, children, onClick = null) {
    return {
        key,
        icon,
        children,
        label,
        path,
        onClick,
    };
}

const NavBar = () => {
    const location = useLocation(); // Get current location
    const [collapsed, setCollapsed] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

    useEffect(() => {
        // Fetch login status from localStorage
        const loggedIn = localStorage.getItem('login');
        setIsLoggedIn(loggedIn === 'true'); // Convert string to boolean
    }, []);

    let activeKey = null;

    const items = [
        getItem('All Campaigns', '1', <FundProjectionScreenOutlined />, '/campaign', null),
        getItem('Analytics', 'sub2', <FundOutlined />, null, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Billing', '2', <CreditCardOutlined />, null, null),
        isLoggedIn && getItem('User', 'sub1', <UserOutlined />, null),
        isLoggedIn ? getItem('Logout', 'sub1', <LogoutOutlined />, null, null, () => handleLogout()) : getItem('LogIn', '9', <LoginOutlined />, '/login'),
    ];

    items.some((item) => {
        if (location.pathname.includes(item.path)) {
            activeKey = item.key;
            return true; // Exit the loop
        }
        return false; // Continue iterating
    });

    const handleLogout = () => {
        // Clear login status from localStorage
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={[activeKey]} mode="inline">
                {items.map((item) => (
                    item && // Ensure item is not null before rendering
                    <Menu.Item key={item.key} icon={item.icon}>
                        {item.path ? (
                            <Link to={item.path}>{item.label}</Link>
                        ) : (
                            <span onClick={item.onClick}>{item.label}</span>
                        )}
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
    );
};

export default NavBar;
