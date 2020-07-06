import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';
import skyline from '../assests/skyline.jpg';
import './Home.css';

const Home = () => {
    return (
        <div id='home' style={{ paddingTop:'100px' }}>
            <Container className='themed-container' fluid={true} style={{ paddingLeft: '50px' }} >
            <Nav />
                <div>
                    <Row>
                        <div id='greeting' style={{ fontFamily: 'Permanent Marker', fontSize: '50px', color: '#D0E1F9' }}>
                            <p>Hello, I'm Spencer!</p>
                        </div>
                    </Row>
                    <Row>
                        <div id='homeBio' style={{ fontFamily: 'Ubuntu' , color: '#283655'}}>
                            <p>Full Stack Web Developer based in Kansas City <br/> who enjoys building Web
                                Apps and brining them to life!</p> 
                        </div>
                    </Row>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Home;