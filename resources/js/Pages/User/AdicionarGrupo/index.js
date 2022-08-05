import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../Layout'
import { Container, Spinner, Form, Button } from 'react-bootstrap';

const Index = (props) => {
    const { categorias, _token } = { ...props };
    const [erros, setErros]            = useState({});

    const [infoClient, setInfoCliente] = useState({
        "titulo" : "Sem titulo",
        "descricao": "Sem descricao",
        "categoria": null,
        "tipo": null,
        "_token": _token,
        "link": link
    });

    const [loading, setLoading] = useState(false)

    //const [erros, setErros]            = useState({});

    const link          =       useRef(null)
    const descricao     =       useRef(null)
    const categoria     =       useRef(null)

    const setingClients = (event) => {
        let obj = {
            [event.target.name]: event.target.value
        }
        setInfoCliente(value => ({ ...value, ...obj }))
    }

    const submit = () => {
        setLoading(true)
        fetchRequest()

    }

    const fetchRequest =  async () => {
        try{
          const response =  await fetch('/adicionar-grupo',{
              method: 'POST',
              body: JSON.stringify(infoClient),
              headers: new Headers({
                "Content-Type": "application/json"
              })
          })
          const dados = await response.json()
          if(response.ok){
            window.location.href =  dados.redirect
            setLoading(false)
          }else{
            setErros(dados)
            setLoading(false)
          }
        }catch(e){
            setLoading(false)
        }
    }

    function AnalizarUrl(url){
        if(/^https:\/\/chat.whatsapp.com\/\w{5,}|^https:\/\/t.me\/\w{4,}/.test(url.target.value)){

            let tipo = url.target.value.match(/(whatsapp)|(t.me)/g)[0]

            console.log({"tipo": tipo,"teste": "whatsapp" === tipo })

            if( "whatsapp" === tipo){
                setInfoCliente((value) => ({ ...value, tipo : "whatsapp", [url.target.name]:url.target.value }))
            }else if("t.me" === tipo){
                setInfoCliente((value) => ({ ...value, tipo : "telegram", [url.target.name]:url.target.value }))
            }

            setErros((values) => ({ ...values, [url.target.name]: null }))
        }else{
            setErros((values) => ({ ...values, [url.target.name]: ["Aceitamos apenas URLs de Telegram e WhatsApp. As URLs devem começar com \"https\"."]  }))
        }
    }

    return (
        <Layout
            {...props}
        >
            <Container>
                <Form>

                    <Form.Group className="mb-3" controlId="linkWhatsapp">
                        <Form.Label>Link:</Form.Label>
                        <Form.Control type="text" name="link" placeholder="Link do grupo" ref={link} onChange={(e) => {
                            AnalizarUrl(e)
                        }} isInvalid={erros?.link} />
                        <Form.Control.Feedback type="invalid" className="text-left" >
                            {
                                erros?.link?.map((e, a, i) => {
                                    return (<li key={i}>{e}</li>)
                                })
                            }
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="descricao">
                        <Form.Label>Descrição: </Form.Label>
                        <Form.Control type="text" name="descricao" as="textarea" rows={3} placeholder="Descrição" ref={descricao} onChange={setingClients} isInvalid={erros?.descricao} />
                        <Form.Control.Feedback type="invalid" className="text-left" >
                            {
                                erros?.descricao?.map((e, a, i) => {
                                    return (<li key={i}>{e}</li>)
                                })
                            }
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Categoria: </Form.Label>
                        <Form.Control as="select" name="categoria" aria-label="Escreva uma descição para o seu grupo" ref={categoria} onChange={setingClients} isInvalid={erros?.categoria}>
                            <option value=''></option>
                             {
                                categorias?.sort( (e,a) => {
                                
                                    if(e["categoria"] < a["categoria"]){
                                        return -1;
                                    }

                                    if( e["categoria"] > a["categoria"] ){
                                        return 1;
                                    }

                                    return 0;
                                }).map(
                                    (e, i, a) => {
                                        return (
                                            <option key={e["_id"]} value={e["categoria"]}>{e["categoria"]}</option>
                                        )
                                    }
                                )
                            } 
                        </Form.Control>
                        <Form.Control.Feedback type="invalid" className="text-left" >
                            {
                                erros?.categoria?.map((e, a, i) => {
                                    return (<li key={i}>{e}</li>)
                                })
                            }
                        </Form.Control.Feedback>
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
            </Container>
        </Layout>
    )
}

export default Index;