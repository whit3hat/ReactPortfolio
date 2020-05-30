import React from 'react';
import { Col, Row, Container } from '../components/Grid';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <Container fluid>
            <Nav />
            <Row>
                <Col size='md-6'>

                </Col>
                <Col size='md-6'>
                    <text>
                        I'm a father of two.
                    </text>
                </Col>
            </Row>
                <Footer />
        </Container>
    )
}

export default Home;
