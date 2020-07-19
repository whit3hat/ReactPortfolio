import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';
import skyline from '../assests/skyline.jpeg';
import './Home.css';

const Home = () => {
    return (
        <div id='home'>
            <Container className='themed-container' fluid={true}  >
            <Nav />
                <Col xs={12} s={12}>
                    <Row>
                        <div id='greeting' style={{ fontFamily: 'Permanent Marker', fontSize: '50px', color: '#D0E1F9' }}>
                            <p>Hello, I'm Spencer!</p>
                        </div>
                    </Row>
                </Col>
                <Col xs={12} s={12} >
                    <Row id='bioRow'>
                        <div id='homeBio' style={{ fontFamily: 'Ubuntu' , color: '#283655' }}>
                            <p>Full Stack Web Developer based in Kansas City <br/> who enjoys building Web
                                Apps and brining them to life!</p> 
                        </div>
                    </Row>   
                    <Row>   
                        <img src ={skyline} style={{ position: 'relative', zIndex: '-1' }} />
                    </Row>
                </Col>
            </Container>
            <Footer />
        </div>
    )
}

export default Home;