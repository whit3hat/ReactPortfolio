import React from 'react';
import { Col, Row, Container } from '../components/Grid';

const NoMatch = () => {
    return (
        <Container fluid>
            <Row>
                <Col size='md-12'>
                    <h1>404 This isn't the page you're looking for...</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default NoMatch;
