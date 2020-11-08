import React from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';



class Contact extends React.Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: ''

    }
    onNameChange(e) {
        this.setState({name: e.target.value})
    }
    onEmailChange(e) {
        this.setState({email: e.target.value})
    }
    onSubjectChange(e) {
        this.setState({subject: e.target.value})
    }
    onMsgChange(e) {
        this.setState({message: e.target.value})
    }
render() {
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
                            <Form onSubmit={this.submitEmail.bind(this)} method="POST">
                                <Form.Row>
                                    <Col>
                                        <Form.Control className='form-style' placeholder="Name" 
                                        required value={this.state.name} onChange={this.onNameChange.bind(this)} />
                                    </Col>
                                    <Col>
                                        <Form.Control className='form-style' placeholder="Email"
                                        required value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Control className='mt-3 form-style' placeholder='Subject'
                                        required value ={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Control className="mt-3 form-style" placeholder="Type your message here..." as='textarea' rows={4}
                                        required value={this.state.message} onChange={this.onMsgChange.bind(this)}></Form.Control>
                                    </Col>
                                </Form.Row>
                                <Button className='mt-3' type='submit' variant="outline-custom" block>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
    }
    }

export default Contact;