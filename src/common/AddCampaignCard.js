import React, { useState } from 'react';
import { Card, Checkbox, Col, Row } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const { Meta } = Card;

const AddCampaignCard = ({ icon, heading, description,handleSelect,isSelected ,index}) => {



    return (
        <div
            style={{ border: isSelected ? '2px solid blue' : '2px solid lightgrey', padding: '3%', width: 'calc(25% - 2rem)', minWidth: '200px', minHeight: '200px', justifyContent: 'center', alignItems: 'center', margin: '1%', position: 'relative', fontSize: '1em',borderRadius:"10px"}}
            onClick={()=>handleSelect(index)}
        >
            <Col>
                <Row>
                    {icon?.map((icon, index) => (icon))}
                </Row>
                <Col>
                    <Row span={4}>
                        <p style={{ fontSize: '1em', fontWeight: 'bold' }}>{heading}</p>
                    </Row>
                    <Row span={5}>
                        <p style={{ fontSize: '0.9em' }}>{description}</p>
                    </Row>
                </Col>
            </Col>
            {isSelected && <CheckOutlined style={{ position: 'absolute', top: 5, right: 5, fontSize: '1.5em', color: 'blue' }} />}
        </div>
    );
};

export default AddCampaignCard;
