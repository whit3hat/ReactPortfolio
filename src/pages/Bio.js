import React from 'react';
import './Bio.css';
import { Col, Row, Container } from 'reactstrap';
import BioPic from '../assests/bio_pic.jpg';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';



const Home = () => {
    return (
        <div id='profile' style={{paddingTop:'100px'}}>
            <Container className='themed-container' fluid={true}>
            <Nav />
            <Row>
             
                <Col xs={{ size: 'auto'}} sm={{ size: 'auto' }} md='6' lg='6'>
                    <img src={BioPic} />
                </Col>
        
                <Col xs={{ size: 'auto'}} sm={{ size: 'auto'}} md='6' lg='6'>
                    <text>
                    I'm a husband, father of 2 children who is currently working full-time and has an unheathly obsession with memes and sour candy.<br /><br /> I'm taking the coding bootcamp because coding has been something that has always interested me and I'm looking to start a new career upon completion.
                    In my freetime I enjoy watching movies with my family or alone.  I also enjoy lifting weights in my newly completed garage gym. <br /><br />Sometimes when I get downtime before bed I enjoy surfing social media or Reddit for a good laugh.<br /> <br />
                    </text>
                    <h3>Current Technologies</h3>
                    <ul>
                        <li>ReactJs</li>
                        <li>NodeJs</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Git</li>
                        <li>BootStrap Framework</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                    </ul>
                </Col>
               
            </Row>
               
        </Container>
        <Footer />
                
        </div>
    )
}

export default Home;
