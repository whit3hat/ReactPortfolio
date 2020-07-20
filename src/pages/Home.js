import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import Footer from '../components/Footer';
import skyline from '../assests/skyline.jpeg';
import './Home.css';

const Home = () => {
    return (
        <div id='home'>
            <Container className='themed-container' fluid='sm' >
           
                <Row>
                    <Col xs={12} s={12}>
                            <p id='greeting' style={{ fontFamily: 'Permanent Marker', fontSize: '50px', color: '#D0E1F9' }}>Hello, I'm Spencer!</p>
                        
                    </Col>
                </Row>
                
                    <Row id='bioRow'>
                        <Col xs={12} s={12} >
                            <p id='homeBio' style={{ fontFamily: 'Ubuntu' , color: '#283655' }}>Full Stack Web Developer based in Kansas City <br/> who enjoys building Web
                                Apps and brining them to life!</p> 
                        </Col>
                    </Row>   
                    <Row> 
                        <Col xs={12} s={12}>  
                        <img src ={skyline} style={{ position: 'relative', zIndex: '-1' }} />
                        </Col>
                    </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Home;