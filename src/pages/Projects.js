import React from 'react';
import './Projects.css';
import { Col, Row, Container } from 'reactstrap';
import Footer from '../components/Footer';
import Nav2 from '../components/Navbar2';
import Burger from '../assests/burger.png';
import Planner from '../assests/DailyPlanner.png';
import Budget from '../assests/BudgetTracker.png'
import Password from '../assests/password.jpeg';
import EmployeeTracker from '../assests/EmployeeTracker.png';
import Quiz from '../assests/quiz.jpeg';


const Projects = () => {
    return (
        <div>
        <Container className='themed-container' fluid={true}>
          <Nav2 />
          
            <Row>
                <Col size="lg-4 md-4">
                    <div className="card">
                        <img className="card-img-top" src={Burger} alt="" />
                            <div className="card-body"> 
                                <h4 className="card-title">Burger Shop</h4>
                                <p className="card-text"></p>
                                {/* <!-- Button --> */}
                                <div className='d-flex justify-content-center'>
                                <a href="https://github.com/whit3hat/BurgerShop " className="btn btn-primary">GitHub Link</a>
                                </div>
                            </div>
                    </div>
             </Col>
             <Col size="lg-4 md-4">
                    <div className="card">
                        <img className="card-img-top" src={Password} alt="" />
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
            <Col size="lg-4 md-4">
                    <div className="card">
                        <img className="card-img-top" src={Planner} alt="" />
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
             <Col size="lg-4 md-4">
                <div className="card">
                        <img className="card-img-top" src={Quiz} alt="" />
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
                <Col size="lg-4 md-4">
                    <div className="card">
                        <img className="card-img-top" src={Budget} alt="" />
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
                <Col size="lg-4 md-4">
                    <div className="card">
                        <img className="card-img-top" src={EmployeeTracker} alt="" style={{ alignSelf: 'center' }}/>
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
</div>
    )
}

export default Projects;