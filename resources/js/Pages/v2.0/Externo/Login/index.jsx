import React, {useState, useEffect} from "react";
import Layout ,{ Header, Body, Foot } from '../../Layout'
import { Container, Form, Button } from 'react-bootstrap';
import { default as ReactGA4 } from 'react-ga4';


const Index = (props) => {
    const { user, verified, authenticated, csrf_token, erros } = { ...props };
    const [email, setEmail]      = useState(null)
    const [password, setPassword] = useState(null)

    function register(){
        window.location.href = '/register'
    }

    async function post() {
        let body = {
            'email': email,
            'password': password
        }
        
        let header = new Headers()
        header.append("Content-Type","application/json")

        let init = {
            'method': 'POST',
            'headers': header,
            'body': JSON.stringify(body)
        }

        let response = await fetch("/login", init)
        let dados    = await response.json()


        if(response.ok){
            setErrors(null)
            ReactGA4.gtag("event", "login", {
                method: "normal"
            });
        }else if( response.status == 400){
            setErrors(dados)
        }
    }

    function setData(e) {
        let { id, value } = e.target

        if (id == "email") {
            setEmail(value);
        }
        else if (id == "password") {
            setPassword(value);
        }

    }

    return (
        <Layout
            user={!user}
            verified={!verified}
            authenticated={false}
        >
            <Container>
                <h1 className="text-center">Login</h1>
                <div>
                    <Form method='POST'>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" name="email" onChange={setData} placeholder="Seu e-mail" isInvalid={erros?.email}/>
                            <Form.Control.Feedback type="invalid">
                                { erros?.email?.[0] }
                            </Form.Control.Feedback>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" name="password" onChange={setData} placeholder="Senha" isInvalid={erros?.password}/>
                            <Form.Control.Feedback type="invalid">
                                { erros?.password?.[0] }
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="hidden" name="_token" value={csrf_token}/>
                        </Form.Group>
                        <Button className="w-100 mb-2" variant="success" onClick={post}type="submit">
                            LOGIN
                        </Button>
                        <Button className="w-100" variant="success" onClick={register}>
                            REGISTRAR-SE
                        </Button>
                    </Form>
                </div>
            </Container>
        </Layout>
    )
}

export default Index;