import React, {useState, useEffect} from "react";
import Layout ,{ Header, Body, Foot } from '../../Layout'
import { Container, Form, Button } from 'react-bootstrap';
import { default as ReactGA4 } from 'react-ga4';


const Index = (props) => {
    const { user, verified, authenticated, csrf_token, erros } = { ...props };

    function register(){
        window.location.href = '/register'
    }
    return (
        <Layout
            user={!user}
            verified={!verified}
            authenticated={false}
        >
            <Container>
                <h1 className="text-center">Registar</h1>
                <div>
                    <Form method='POST' action='/register'>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nome de usuário</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Seu nome de usuário" isInvalid={erros?.name}/>
                            <Form.Control.Feedback type="invalid">
                                { erros?.name?.[0] }
                            </Form.Control.Feedback>

                        </Form.Group>

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

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirmar senha</Form.Label>
                            <Form.Control type="password" name="password_confirmation" placeholder="Confirmar senha" isInvalid={erros?.password_confirmation}/>
                            <Form.Control.Feedback type="invalid">
                                { erros?.password_confirmation?.[0] }
                            </Form.Control.Feedback>
                        </Form.Group>


                        <Form.Group>
                            <Form.Control type="hidden" name="_token" value={csrf_token}/>
                        </Form.Group>
                        <Button className="w-100 mb-2" variant="success" type="submit">
                            REGISTRAR
                        </Button>
                    </Form>
                </div>
            </Container>
        </Layout>
    );
}

export default Index;