import {Button, Card, Col, Row} from "antd";
import AddCampaignCard from "../../common/AddCampaignCard";
import {ADDCampaignConstantData} from "./AddCampaignConstantData";
import {useState} from "react";

const AddCampaign = () => {
    const [selectedIndex,setSelectedIndex] = useState(null);
    const handleSelect=(index)=>{
        setSelectedIndex(index);
    }
                return <div style={{minHeight: '100vh',display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>
                <Card title="Add Campaign" style={{minWidth:'80%',minHeight:'70vh'}}>
                    <Col>
                        <Row>
                          <p style={{color:'gray'}}>Select an objective to tailor your experience to the goals and settings that will work best for your campaign</p>
                        </Row>
                        <Row>
                            {
                                ADDCampaignConstantData.objective.map((item, index) => (
                                   <AddCampaignCard {...item} handleSelect={handleSelect} isSelected={index===selectedIndex} index={index} key={index} />
                                ))
                            }
                        </Row>
                    </Col>
                </Card>

                    <div style={{minWidth:'80%',paddingTop:'4vh',display:'flex',justifyContent:'flex-end',alignItems: 'flex-end'}}>
                        <Button type={'link'}>Cancel</Button>
                        <Button type={'primary'}>Continue</Button>
                    </div>
                </div>
}





export default AddCampaign;