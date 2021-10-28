import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Join = () => {
    const handleSubmit = (e) =>{
        // stop default behavior of form submit to prevent page loading
        e.preventDefault();
    }
    return (
        <div className="container mb-5">
            <h1 className="my-5" >Thanks for joining</h1>
            <hr />
            <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sit pariatur corporis dolorum repellendus dignissimos?</h5>
            <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>FirstName</Form.Label>
                <Form.Control type="text" placeholder="Enter FirstName" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>LastName</Form.Label>
                <Form.Control type="text" placeholder="Enter LastName" />
                </Form.Group>
            </Row>


            <Button onClick={handleSubmit} variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    );
};

export default Join;