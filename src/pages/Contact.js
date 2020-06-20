import React from 'react';
import './Contact.css';
import { Col, Row, Container, Card, CardBody, CardText } from 'reactstrap';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {

    return (
        <div>
            <Container className='themed-container' fluid={true} >
               <Nav /> 
                    <Row>
                        <Col s='2'>
                        <Card>
                        <CardBody>
                            <CardText>
                                Have a question?
                                Let's get to know each other. How can I be useful to your service?
                                Please feel free to reach out to me. I would be delighted to answer all your questions or concerns.
                            </CardText>
                        </CardBody>
                        </Card>
                         </Col>

                        <Col s='2'>
                            <Card>
                                <CardBody>
                                    <CardText>
                                        Feel free to call, email or connect on LinkedIn.
                                        
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                
            </Container>
           <Footer />
        </div>
    )
};

export default Contact;