import React from 'react';
import './Contact.css';
import { Col, Row, Container, Card, CardBody, CardText } from 'reactstrap';
import Nav2 from '../components/Navbar2';
import Footer from '../components/Footer';

const Contact = () => {

    return (
        <div id='contact' style={{ fontFamily:'Ubuntu' }}>
            <Container className='themed-container' fluid={true} >
               <Nav /> 
                    <Row>
                        <Col s='2'>
                        <Card>
                        <CardBody>
                            <CardText>
                                Have a question?
                            </CardText>
                            <CardText>
                            Let's get to know each other. How can I be useful to your service?
                            </CardText>
                             <CardText>   
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
                                    <CardText>
                                        Here take a look at my resume.
                                    </CardText>
                                    <CardText>
                                        816-695-0587
                                    </CardText>
                                    <CardText>
                                        spencer.wood@me.com
                                    </CardText>
                                    <CardText>
                                    <a href = "https://github.com/whit3hat" className="nav-link"><i className="fab fa-github fa-lg"></i></a>
                                    <a href="https://www.linkedin.com/in/spencer-wood-73158b61/" className="nav-link"><i className="fab fa-linkedin fa-lg"></i></a>
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