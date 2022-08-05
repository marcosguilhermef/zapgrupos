import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../Layout'
import { Container, Form, Image, Card } from 'react-bootstrap';
import dateFormat, { masks } from "dateformat";
import './style.css'

const Index = (props) => {
    const { _token, _id, titulo, descricao, categoria, categorias, tipo, user_id, sensivel, ativo, updated_at, created_at, img } = { ...props };
    return (
        <Layout
            {...props}
        >
            <Container>
                <h1 className="text-center">Editar</h1>
                <Card>
                    <Card.Header>
                        { titulo }
                    </Card.Header>
                    <Card.Body>
                        <div>

                            <div>
                                {
                                    
                                    img?.[0] ? (
                                            <Image className="gruoup-img"  style={{ width: "100px" }} src={img?.[0]} onError={(e) => e.target.src = "/img/generico/reactangle.png"} />
                                            )
                                            :
                                            (
                                            <Image className="gruoup-img" style={{ width: "100px" }} src='/img/generico/reactangle.png' />
                                            )
                                    
                                }
                            </div>

                            <div>
                                <span>Categoria: </span> {categoria}
                            </div>

                            <div>
                                <span>Ativo: </span> {ativo.toString()}
                            </div>

                            <div>
                                <span>Sensivel: </span> {sensivel.toString()}
                            </div>

                            <div>
                                <span>Data de criação: </span> { dateFormat(created_at, "d/m/yyyy H:MM:s") }
                            </div>

                            <div>
                                <span>Data de atualização: </span> { dateFormat(updated_at, "d/m/yyyy H:MM:s") }
                            </div>

                            <Form className="my-2">
                                <Form.Group className="mb-3">
                                    <Form.Label>Descrição: </Form.Label>
                                    <Form.Control type="text" name="descricao" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                        <Form.Label>Categoria: </Form.Label>
                                        <Form.Control as="select" name="categoria">
                                            <option value=''></option>
                                            {
                                                categorias.map(
                                                    (e) => {
                                                        return (
                                                            categoria == e?.categoria
                                                                ? (
                                                                    <option key={e?._id} selected>{e?.categoria}</option>
                                                                ) : (
                                                                    <option key={e?._id}>{e?.categoria}</option>
                                                                )
                                                        )
                                                    }
                                                )
                                            }
                                        </Form.Control>
                                    </Form.Group>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </Layout>
    )
}

export default Index;