import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
    return (
        <div id='home' style={{ paddingTop:'100px' }}>
            <Container className='themed-container' fluid={true}>
            <Nav />
                <div>
                    <Row>
                        <div id='greeting' style={{ fontFamily: 'Permanent Marker', fontSize: '50px' }}>
                            <p>Hello, I'm Spencer!</p>
                        </div>
                    </Row>
                    <Row>
                        Full Stack Web Developer based in Kansas City who enjoys building Web
                        Apps and brining them to life!
                    </Row>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Home;