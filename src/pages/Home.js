import React from 'react';
import './Home.css';
import { Col, Row, Container } from 'reactstrap';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Nav />
            <Container className='themed-container' fluid={true}>

            </Container>
            <Footer />
        </div>
    )
}

export default Home;