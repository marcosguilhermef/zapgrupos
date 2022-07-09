import React, { useState } from 'react'
import Layout from '../../../Layout'
import { Card, Container, Form, Image, Button, Badge } from 'react-bootstrap';
import dateFormat, { masks } from "dateformat";
import './style.css';

const Index = (props) => {

    const {
        _id,
        url,
        titulo,
        descricao,
        tipo,
        ativo,
        pais,
        categoria,
        linkOrigem,
        vizita,
        siteMae,
        sensivel,
        created_at,
        img,
        updated_at,
        user,
        verified,
        authenticated,
        email,
        telefone,
        categorias,
        _token
    } = { ...props };

    const [data, setData] = useState({
        "_id": _id,
        "ativo": ativo,
        "categoria": categoria,
        "sensivel": sensivel,
        "_token": _token

    })

    const image = img?.[0]

    const changeData = (e) => {
        let { name, value } = e.target
        setData(val => ({ ...val, [name]: value }))
    }

    const send = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/grupo-info',{
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                  "Content-Type": "application/json"
                })
            })
            const dados = await response.json()
            if (response.ok) {
                location.reload()
            }
        } catch (e) {
           
        }

    }

    return (
        <Layout
            user={!user}
            verified={!verified}
            authenticated={!authenticated}
        >
            <Container>
                <h1 className="text-center">Informações do grupo</h1>
                <Card>
                    <Card.Header>
                        {`${titulo} (${categoria})`}

                    </Card.Header>
                    <Card.Body>
                        <div>
                            <div>
                                <span className="grupo-campo">Imagem: </span>
                                {
                                    image ? (
                                        <Image className="gruoup-img" src={image} onError={(e) => e.target.src = "/img/generico/reactangle.png"} />
                                    )
                                        :
                                        (
                                            <Image className="gruoup-img" src='/img/generico/reactangle.png' />
                                        )
                                }
                            </div>
                            <div>
                                <span className="grupo-campo">descricao: </span> {descricao}
                            </div>

                            <div>
                                <span className="grupo-campo">Email: </span> {email}
                            </div>
                            <div>
                                <span className="grupo-campo">Telefone: </span> {telefone}
                            </div>
                            <div>
                                <span className="grupo-campo">tipo: </span>{tipo}
                            </div>
                            <div>
                                <span className="grupo-campo">ativo: </span>
                                {
                                    
                                    ativo ? 
                                    (
                                        <Badge variant='success'>true</Badge>   
                                    ) : (
                                        <Badge variant='danger'>false</Badge>   
                                    )                                
                                }
                            </div>
                            <div>
                                <span className="grupo-campo">linkOrigem: </span>{linkOrigem}
                            </div>
                            <div>
                                <span className="grupo-campo">pais: </span>{pais}
                            </div>
                            <div>
                                <span className="grupo-campo">siteMae: </span>{siteMae}
                            </div>
                            <div>
                                <span className="grupo-campo">vizita: </span>{vizita}
                            </div>
                            <div>
                                <span className="grupo-campo">sensivel: </span>
                                {
                                    sensivel ? 
                                    (
                                        <Badge variant='success'>true</Badge>   
                                    ) : (
                                        <Badge variant='danger'>false</Badge>   
                                    )                                
                                }
                            </div>

                            <div>
                                <span className="grupo-campo">created_at: </span>{dateFormat(created_at, "d/m/yyyy H:MM:s")}
                            </div>
                            <div>
                                <span className="grupo-campo">updated_at: </span>{dateFormat(updated_at, "d/m/yyyy H:MM:s")}
                            </div>
                            <div>
                                <span className="grupo-campo">ver grupos: </span> 
                                <a href={`${window.location.origin}/${categoria}/${_id}`}> Ver grupo </a>
                            </div>
                            <div>
                                <span className="grupo-campo">reload: </span> 
                                <a href={`/reload/${_id}`}> Reload </a>
                            </div>
                            <div>
                                <Form method="POST" action="/grupo-info" onSubmit={send}>
                                    <Form.Group>
                                        <Form.Control type="hidden" name="_id" value={_id} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Categoria: </Form.Label>
                                        <Form.Control as="select" name="categoria" onChange={changeData}>
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
                                    <Form.Group className="mb-3" onChange={changeData}>
                                        <Form.Label>Ativo: </Form.Label>
                                        <Form.Control as="select" name="ativo">
                                            <option></option>
                                            <option value={true}>Sim</option>
                                            <option value={false}>Não</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mb-3" onChange={changeData}>
                                        <Form.Label>Sensível: </Form.Label>
                                        <Form.Control as="select" name="sensivel">
                                            <option></option>
                                            <option value={true}>Sim</option>
                                            <option value={false}>Não</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Button type="submit">
                                        Salvar
                                    </Button>
                                </Form>
                            </div>
                        </div>

                    </Card.Body>
                </Card>
            </Container>
        </Layout>
    )
}

export default Index;