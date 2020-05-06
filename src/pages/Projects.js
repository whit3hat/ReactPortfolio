import React from 'react';
import './Reset.css';
import './Projects.css';
import { Col, Row, Container } from '../components/Grid';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Burger from '../assests/burger.png';
import Planner from '../assests/dailyplanner.png';
import Password from '../assests/password.jpeg';
import Quiz from '../assests/quiz.jpeg';


const Projects = () => {
    return (
        <Container fluid>
          <Navbar /> 
            <Row>
                <Col size="lg-6 md-3">
                    <div className="card">
                        <img className="card-img-top" src={Burger} alt="Card image cap" />
                            <div className="card-body"> 
                                <h4 className="card-title"><a>Burger Shop</a></h4>
                                <p className="card-text"></p>
                                {/* <!-- Button --> */}
                                <a href="#" className="btn btn-primary">Button</a>
                                
                            </div>
                    </div>
             </Col>
             <Col size="lg-6 md-3">
                    <div className="card">
                        <img className="card-img-top" src={Password} alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title"><a>Password Generator</a></h4>
                                <p className="card-text"></p>
                                {/* <!-- Button --> */}
                                <a href="#" className="btn btn-primary">Button</a>
                            </div>
                    </div>
            </Col>
            <Col size="lg-6 md-3">
                    <div className="card">
                        <img className="card-img-top" src={Planner} alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title"><a>Daily Planner</a></h4>
                                <p className="card-text"> </p>
                                {/* <!-- Button --> */}
                                <a href="#" className="btn btn-primary">Button</a>
                            </div>
                    </div>
            </Col>
           </Row>
           <Row>
             <Col size="lg-6 md-3">
                <div className="card">
                        <img className="card-img-top" src={Quiz} alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title"><a>Luke and Morty</a></h4>
                                <p className="card-text"> </p>
                                {/* <!-- Button --> */}
                                <a href="#" className="btn btn-primary">Button</a>
                            </div>
                    </div>
                </Col>
                <Col size="lg-6 md-3">
                    <div className="card">
                        <img className="card-img-top" src=" " alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title"><a>Budget Tracker</a></h4>
                                <p className="card-text"> </p>
                                {/* <!-- Button --> */}
                                <a href="#" className="btn btn-primary">Button</a>
                            </div>
                    </div>
                </Col>
                <Col size="lg-6 md-3">
                    <div className="card">
                        <img className="card-img-top" src=" " alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title"><a>Employee Tracker</a></h4>
                                <p className="card-text"> </p>
                                {/* <!-- Button --> */}
                                <a href="#" className="btn btn-primary">Button</a>
                            </div>
                    </div>
                    
            </Col>
        </Row>
    <Footer />
</Container>
    )
}

export default Projects;