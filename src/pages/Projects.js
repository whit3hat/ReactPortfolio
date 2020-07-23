import React from 'react';

import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Burger from '../assests/burger.png';
import Planner from '../assests/DailyPlanner.png';
import Budget from '../assests/BudgetTracker.png'
import Password from '../assests/password.jpeg';
import EmployeeTracker from '../assests/EmployeeTracker.png';
import Quiz from '../assests/quiz.jpeg';
import './Projects.css';

const Projects = () => {
    return (
        <Container fluid>          
            <Row className='justify-content-md-center'>
                <Col sm='12' lg='4'>
                    
                  <Card >
                    
                        <Card.Img variant='top' id='cardImg' src={Burger} />
                    
                        
                            <Card.Body>
                                <Card.Title>Burger Shop</Card.Title>
                                <Button variant='primary'>GitHub</Button>
                            </Card.Body>
                    </Card>
                   
             </Col>
             <Col sm='12' lg='4'>
                    <div className="card">
                        <img className="card-img-top" id='cardImg'src={Password} />
                            <div className="card-body">
                                <h4 className="card-title"><a>Password Generator</a></h4>
                                <p className="card-text"></p>
                                {/* <!-- Button --> */}
                                <div className='d-flex justify-content-center'>
                                    <a href="https://github.com/whit3hat/pwdmgr" className="btn btn-primary">GitHub Link</a>
                                </div>
                            </div>
                    </div>
            </Col>
            <Col sm='12' lg='4'>
                    <div className="card">
                        <img className="card-img-top" id='cardImg' src={Planner} />
                            <div className="card-body">
                                <h4 className="card-title"><a>Daily Planner</a></h4>
                                <p className="card-text"> </p>
                                {/* <!-- Button --> */}
                                <div className='d-flex justify-content-center'>
                                <a href="https://github.com/whit3hat/Scheduler" className="btn btn-primary">GitHub Link</a>
                            </div>
                            </div>
                    </div>
            </Col>
           </Row>
           
           <Row>
           <Col sm='12' lg='4'>
                <div className="card">
                        <img className="card-img-top" id='cardImg' src={Quiz} />
                            <div className="card-body">
                                <h4 className="card-title"><a>Luke and Morty</a></h4>
                                <p className="card-text"> </p>
                                {/* <!-- Button --> */}
                                <div className='d-flex justify-content-center'>
                                <a href="https://github.com/whit3hat/Luke-and-Morty" className="btn btn-primary">GitHub Link</a>
                            </div>
                            </div>
                    </div>
                </Col>
                <Col sm='12' lg='4'>
                    <div className="card">
                        <img className="card-img-top" id='cardImg' src={Budget} />
                            <div className="card-body">
                                <h4 className="card-title"><a>Budget Tracker</a></h4>
                                <p className="card-text"> </p>
                                {/* <!-- Button --> */}
                                <div className='d-flex justify-content-center'>
                                <a href="https://github.com/whit3hat/Budget_Tracker" className="btn btn-primary">GitHub Link</a>
                            </div>
                            </div>
                    </div>
                </Col>
                <Col sm='12' lg='4'>
                    <div className="card">
                        <img className="card-img-top" id='cardImg' src={EmployeeTracker} />
                            <div className="card-body">
                                <h4 className="card-title"><a>Employee Tracker</a></h4>
                                <p className="card-text"> </p>
                                {/* <!-- Button --> */}
                                <div className='d-flex justify-content-center'>
                                <a href="https://github.com/whit3hat/EmployeeTracker" className="btn btn-primary">GitHub Link</a>
                            </div>
                            </div>
                    </div>
                
            </Col>
        </Row>
    <Footer />
</Container>

    )
}

export default Projects;