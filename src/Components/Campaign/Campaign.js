import Wrapper from "../../layout";
import {Button, Col, Row, Table} from "antd";
import {Link} from "react-router-dom";
import { PlusOutlined } from '@ant-design/icons';


const CampaignPage = () => {
    const columns = [
        {
            title: 'Campaign',
            dataIndex: 'campaign',
            key: 'Campaign',
            fixed: 'left',
            width: 150,
        },
        {
            title: 'Budget',
            dataIndex: 'budget',
            key: 'budget',
            width: 150,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 150,
        },
        {
            title: 'Optimization Score',
            dataIndex: 'optimization_score',
            key: 'optimization_score',
            width: 150,
        },
        {
            title: 'Campaign Type',
            dataIndex: 'campaign_type',
            key: 'campaign_type',
            width: 150,
        }, {
            title: 'Campaign Type',
            dataIndex: 'campaign_type11',
            key: 'campaign_type1',
            width: 150,
        }, {
            title: 'Campaign Type',
            dataIndex: 'campaign_type2',
            key: 'campaign_type2',
            width: 150,
        }, {
            title: 'Campaign Type',
            dataIndex: 'campaign_type3',
            key: 'campaign_type3',
            width: 150,
        },{
            title: 'Campaign Type',
            dataIndex: 'campaign_type4',
            key: 'campaign_type4',
            width: 150,
        },{
            title: 'Campaign Type',
            dataIndex: 'campaign_type5',
            key: 'campaign_type5',
            width: 150,
        },{
            title: 'Campaign Type',
            dataIndex: 'campaign_type6',
            key: 'campaign_type6',
            width: 150,
        },{
            title: 'Campaign Type',
            dataIndex: 'campaign_type7',
            key: 'campaign_type7',
            width: 150,
        },




    ];
    return<>
        <Col style={{minWidth:"100%",minHeight:"100%"}} justify="start" align="start">
            <Row  style={{padding:'2%'}}>
                <Link to={'/campaign/add'}style={{textDecoration:'none',paddingTop:'1%'}}>
                    <Button type="primary" style={{padding:'1%', display:'flex', justifyContent:'center', alignItems: 'center',borderRadius:'10px'}}>
                        <PlusOutlined/>  Add Campaign
                    </Button>
                </Link>
            </Row>
            <Row style={{minWidth:"100%"}}>
                <Table columns={columns} dataSource={[]} style={{minWidth:'100%'}} scroll={{ x: '100%', y: 300 }}/>
            </Row>
        </Col>
    </>
}

// const CampaignPage=Wrapper(Campaign);

export default CampaignPage;