import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Footer from '../components/Footer';
import skyline from '../assests/skyline.jpg';
import './Home.css';

const Home = () => {
    return (
        <div id='home'>
            <Container className='themed-container'>
                <Row>
                    <Col s={12} >
                            <p id='greeting' style={{ fontFamily: 'Permanent Marker', fontSize: '50px', color: '#D0E1F9' }}>Hello, I'm Spencer!</p>    
                    </Col>
                </Row>
                
                    <Row id='bioRow'>
                        <Col xs={12} s={12} >
                            <p id='homeBio' style={{ fontFamily: 'Ubuntu' , color: '#283655' }}>A Full Stack Web Developer based in Kansas City who enjoys building Web
                                Apps and brining them to life!</p> 
                        </Col>
                    </Row>   
                    <Row> 
                          <Image id='home-img' src={skyline} fluid style={{ position: 'relative', zIndex: '-1' }}  />       
                    </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Home;