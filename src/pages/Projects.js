import React from 'react';
import { Col, Row, Container } from '../components/Grid';
import Footer from '../components/Footer';

const Projects = () => {
    return (
        <Container fluid>
            <Row>
                <Col size='lg-3'>
                    <div class="card">
                        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"><a>Card title</a></h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                content.</p>
                                {/* <!-- Button --> */}
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                    </div>
             </Col>
             <Col size='lg-3'>
                    <div class="card">
                        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"><a>Card title</a></h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                content.</p>
                                {/* <!-- Button --> */}
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                    </div>
            </Col>
            <Col size='lg-3'>
                    <div class="card">
                        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"><a>Card title</a></h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                content.</p>
                                {/* <!-- Button --> */}
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                    </div>
            </Col>
           
             <Col size='lg-3'>
                <div class="card">
                        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"><a>Card title</a></h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                content.</p>
                                {/* <!-- Button --> */}
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                    </div>
                </Col>
                    <div class="card">
                        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"><a>Card title</a></h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                content.</p>
                                {/* <!-- Button --> */}
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                    </div>
                <Col size='lg-4'>
                    <div class="card">
                        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"><a>Card title</a></h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                content.</p>
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