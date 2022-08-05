import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../Layout'
import { Container, Form, Image, Card, Button,Spinner } from 'react-bootstrap';
import dateFormat, { masks } from "dateformat";
import './style.css'

const Index = (props) => {
    const { _token, _id, titulo, descricao, categoria, categorias, tipo, user_id, sensivel, ativo, updated_at, created_at, img } = { ...props };
    
    const [body, setData] = useState({
        "_id": _id,
        "_token": _token
    })
    const [erros, setErros] = useState({})
    const [loading, setLoading] = useState(false)


    const changeData = (e) => {
        let { name, value } = e.target
        setData(val => ({ ...val, [name]: value }))
    }
    
    const submit = () => {
        setLoading(true)
        fetchRequest()

    }

    const fetchRequest =  async () => {
        try{
          const response =  await fetch('/editar',{
              method: 'POST',
              body: JSON.stringify(body),
              headers: new Headers({
                "Content-Type": "application/json"
              })
          })
          const dados = await response.json()
          if(response.ok){
            window.location.reload()
            setLoading(false)
          }else{
            setErros(dados)
            setLoading(false)
          }
        }catch(e){
            setLoading(false)
        }
    }

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

                            <Form className="my-2" method='POST' onSubmit={submit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Descrição: </Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={5} 
                                        name="descricao" 
                                        defaultValue={descricao} 
                                        onChange={changeData}
                                        isInvalid={erros?.descricao} 
                                        />
                                    <Form.Control.Feedback type="invalid" className="text-left" >
                                    {
                                        erros?.descricao?.map((e, a, i) => {
                                            return (<li key={i}>{e}</li>)
                                        })
                                    }
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                        <Form.Label>Categoria: </Form.Label>
                                        <Form.Control 
                                            as="select" 
                                            name="categoria"
                                            onChange={changeData}
                                            defaultValue={null}
                                            >
                                            <option defaultValue=''></option>
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
                                {
                                    loading ? (
                                        <>
                                            <Button variant="success" type="button" style={{ width: "100%" }}>
                                                <Spinner
                                                    as="span"
                                                    animation="border"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                                <span className="visually-hidden">Loading...</span>
                                            </Button>{' '}
                                        </>
                                    ) : (
                                        <Button className="w-100" variant="success" type="button" onClick={submit}>
                                            Enviar
                                        </Button>
                                    )
                                }
                            </Form>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </Layout>
    )
}

export default Index;