import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../Layout'
import { Container, Tabs, Tab, Form, Button } from 'react-bootstrap';

import './style.css'

const FormAdd = () => {
    return(
        <Form>  
            <Form.Group className="mb-3" controlId="url">
                <Form.Label>Link do grupo:</Form.Label>
                <Form.Control type="text" name="url" placeholder="https://chat.whatsapp.com/XXXX..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="url">
                <Form.Label>Categoria: </Form.Label>
                <Form.Control as="select" name="categoria" aria-label="Escreva uma descição para o seu grupo">
                        <option value=''></option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="descricao">
                <Form.Label>Descrição: </Form.Label>
                <Form.Control type="text" name="descricao" as="textarea" rows={3} placeholder="Descrição"/>
                {/* <Form.Control.Feedback type="invalid"  className="text-left" >
                                    {
                                        erros?.descricao?.map( (e,a,i) => {
                                            return (<li key={i}>{e}</li>)
                                        } )
                                    }
                </Form.Control.Feedback> */}
            </Form.Group>
            <Button variant="success" type="button" style={{ width: "100%" }}>
                Enviar
            </Button>
        </Form>
    )
}
const Index = (props) => {
    const { user, verified, authenticated } = { ...props };
    return (
        <Layout
            user={!user}
            verified={!verified}
            authenticated={!authenticated}
        >
            <Container>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Meus grupos">
                    Aqui fica a lista de grupos criados pelo usuário
                </Tab>
                <Tab eventKey="add" title="Adicionar Grupo">
                    <FormAdd/>
                </Tab>
                <Tab eventKey="profile" title="Perfil">
                    Aqui fica os dados do perfil do usuário
                </Tab>
            </Tabs>
            </Container>
        </Layout>
    )
}

export default Index;