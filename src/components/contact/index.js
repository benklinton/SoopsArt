import React from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';



function Contact() {
    return (
        <>
            <header className="contact-bg">
                <Container className=" h-100">
                    <Row className='h-100 align-items-center'>
                        <Col lg={6} className="padding-right">
                            <h1 className="text-format">Contact Me!</h1>
                            <h3>
                                If you have questions about my products, art, commissions or just wanna chat
                                you can reach me though Instagram DMs or by filling out this form.
                            </h3>
                            <h3>Instagram: @soopsart</h3>
                        </Col>
                        <Col lg={6} className='padding-left'>
                        <Form>
                            <Form.Row>
                                <Col>
                                    <Form.Control className='form-style' placeholder="Name" />
                                </Col>
                                <Col>
                                    <Form.Control className='form-style' placeholder="Email" />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                <Form.Control className='mt-3 form-style' placeholder='Subject'/>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                <Form.Control className="mt-3 form-style" placeholder="Type your message here..." as='textarea' rows={4}></Form.Control>
                                </Col>
                            </Form.Row>
                            <Button className='mt-3' variant="outline-custom" block>Submit</Button>
                        </Form>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default Contact;