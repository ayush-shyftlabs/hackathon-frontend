import { Button, Card, Row, Col, Form, Input, Select } from "antd";
import { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';

const { Option } = Select;

const NewCampaign = () => {
    const [index, setIndex] = useState(null);

    const initialValues = {
        campaignName: '',
        input2: '',
        dropdown1: '',
        dropdown2: '',
        dropdown3: '',
        dropdown4: ''
    };

    const validationSchema = Yup.object().shape({
        input1: Yup.string().required('Input 1 is required'),
        input2: Yup.string().required('Input 2 is required'),
        dropdown1: Yup.string().required('Dropdown 1 is required'),
        // Add validation for other fields as needed
    });

    const handleSubmit = (values, { setSubmitting }) => {
        // Handle form submission
        console.log(values);
        setSubmitting(false);
    };

    return (
        <div style={{ padding: '20px' }}>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={12} md={8}>
                    <Card title='Add Campaign'>
                        <p>Select Campaign Type</p>
                        <Button type={index === 0 ? 'primary' : 'default'} style={{ marginRight: '10px' }} onClick={() => setIndex(0)}>Search Ad</Button>
                        <Button type={index ? 'primary' : 'default'} onClick={() => setIndex(1)}>Display Ad</Button>
                    </Card>
                </Col>
            </Row>

            {index !== null && (
                <Row gutter={[16, 16]} justify="center">
                    <Col xs={24} sm={12} md={8}>
                        <Card title='Fill Information'>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form layout="vertical">
                                        <Form.Item label="Campaign Name" name="campaignName" rules={[{ required: true, message: 'Campaign Name is required' }]}>
                                            <Input placeholder="Campaign Name" />
                                        </Form.Item>

                                        <Form.Item label="Input 2" name="input2" rules={[{ required: true, message: 'Input 2 is required' }]}>
                                            <Input placeholder="Input 2" />
                                        </Form.Item>

                                        <Form.Item label="Dropdown 1" name="dropdown1" rules={[{ required: true, message: 'Dropdown 1 is required' }]}>
                                            <Select placeholder="Select option">
                                                <Option value="option1">Option 1</Option>
                                                <Option value="option2">Option 2</Option>
                                                <Option value="option3">Option 3</Option>
                                            </Select>
                                        </Form.Item>

                                        {/* Add more fields and validation rules as needed */}

                                        <Button type="primary" htmlType="submit" loading={isSubmitting} style={{ marginTop: '10px' }}>
                                            Submit
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </Card>
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default NewCampaign;
