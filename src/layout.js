import React from 'react';
import { Layout } from 'antd'; // Import Layout from antd
import Navbar from './Components/Navbar/Navbar';

const { Content } = Layout; // Destructure Content from Layout

const Wrapper = ({ children }) => { // Accept children prop directly
    const clientId = process.env.GOOGLE_CLIENT_ID || '201891706446-0rtnh7ickkgeve8aol9d3f6k1uthso6e.apps.googleusercontent.com';
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Navbar />
            <Layout>
                <Content>{children}</Content> {/* Render children within Content component */}
            </Layout>
        </Layout>
    );
};

export default Wrapper;
