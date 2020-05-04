import React from 'react';
import { Col, Row, Container } from '../components/Grid';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Projects = () => {
    return (
        <Container fluid>
          <Navbar /> 
            <Row>
                <Col size="md-3">
                    <div class="card">
                        <img class="card-img-top" src="../assets/burger.png" alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"><a>Burger Shop</a></h4>
                                <p class="card-text"></p>
                                {/* <!-- Button --> */}
                                <a href="#" class="btn btn-primary">Button</a>
                                
                            </div>
                    </div>
             </Col>
             <Col size="md-3">
                    <div class="card">
                        <img class="card-img-top" src="" alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"><a>Password Generator</a></h4>
                                <p class="card-text"></p>
                                {/* <!-- Button --> */}
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                    </div>
            </Col>
            <Col size="md-3">
                    <div class="card">
                        <img class="card-img-top" src=" " alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"><a>Daily Planner</a></h4>
                                <p class="card-text"> </p>
                                {/* <!-- Button --> */}
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                    </div>
            </Col>
           
             <Col size="md-3">
                <div class="card">
                        <img class="card-img-top" src=" " alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"><a>Luke and Morty</a></h4>
                                <p class="card-text"> </p>
                                {/* <!-- Button --> */}
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                    </div>
                </Col>
                <Col size="md-3">
                    <div class="card">
                        <img class="card-img-top" src=" " alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"><a>Budget Tracker</a></h4>
                                <p class="card-text"> </p>
                                {/* <!-- Button --> */}
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                    </div>
                </Col>
                <Col size="md-3">
                    <div class="card">
                        <img class="card-img-top" src=" " alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"><a>Employee Tracker</a></h4>
                                <p class="card-text"> </p>
                                {/* <!-- Button --> */}
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                    </div>
                    
            </Col>
        </Row>
    <Footer />
</Container>
    )
}

export default Projects;