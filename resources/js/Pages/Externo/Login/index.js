import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../Layout'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';


const Index = (props) => {
    const { user, verified, authenticated, csrf_token, erros } = { ...props };

    return (
        <Layout
            user={!user}
            verified={!verified}
            authenticated={!authenticated}
        >
            <Container>
                <h1 className="text-center">Login</h1>
                <div>
                    <Form method='POST' action='/login'>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Seu e-mail" isInvalid={erros?.email}/>
                            <Form.Control.Feedback type="invalid">
                                { erros?.email?.[0] }
                            </Form.Control.Feedback>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Senha" isInvalid={erros?.password}/>
                            <Form.Control.Feedback type="invalid">
                                { erros?.password?.[0] }
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="hidden" name="_token" value={csrf_token}/>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </Container>
        </Layout>
    )
}

export default Index;