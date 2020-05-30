import React from 'react';
import { Col, Row, Container } from '../components/Grid';
import BioPic from '../assests/bio_pic.jpg';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <Container fluid>
            <Nav />
            <Row>
                <Col size='md-6'>
                    <img src={BioPic} style={{height: '70%'}} />
                </Col>
                <Col size='md-6'>
                    <text>
                    I'm a husband, father of 2 children who is currently working full-time and has an unheathly obsession with memes and sour candy.<br /><br /> I'm taking the coding bootcamp because coding has been something that has always interested me and I'm looking to start a new career upon completion.
                    In my freetime I enjoy watching movies with my family or alone.  I also enjoy lifting weights in my newly completed garage gym. <br /><br />Sometimes when I get downtime before bed I enjoy surfing social media or Reddit for a good laugh.
                    </text>
                </Col>
            </Row>
                <Footer />
        </Container>
    )
}

export default Home;
