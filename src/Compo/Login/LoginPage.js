import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginPage.css';

const LoginPage = () => {
    const initialFormData = {
        email: '',
        password: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form data submitted:', formData);

        if (formData.email.toLowerCase() === "lecturer") {
            toast.success(`${formData.email} logged in successfully`);
            navigate('/dashboard');
        } else if (formData.email.toLowerCase() === 'student') {
            toast.success(`${formData.email} logged in successfully`);
            navigate("/dashboard");
        } else {
            setError("User not found");
        }
    };

    return (
        <Container className="login-container">
            <Row className="justify-content-center">
                <Col md="6">
                    {error && <Alert color="danger">{error}</Alert>}
                    <Card>
                        <CardBody>
                            <h2 className="text-center mb-4">Login</h2>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        // required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        // required
                                    />
                                </FormGroup>
                                <Button color="primary" type="submit" block>
                                    Login
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default LoginPage;
