import React, { useState } from "react";
import Layout from '../../../Layout'
import { Container, Form, Button } from 'react-bootstrap';

const Index = (props) => {
    const { user, verified, authenticated, data, _token } = { ...props }
    const [dadosForm, setDados] = useState({
        "img": '',
        "categoria": '',
        "descricao": ''
    });

    const [ erros, setErros ] = useState({})

    const setDadosForm = (event) => {
        const { name, value, files, id } = event.target
        if(name === "img"){
            var reader = new FileReader();
            reader.onloadend = function() {
                setDados({...dadosForm, [name]: reader.result })
            }
            return  reader.readAsDataURL(files[0]);
        }
        return setDados({...dadosForm, [id]: value})
    }

    const Post = async () => {
        console.log(JSON.stringify(dadosForm));
        try{
            const response =  await fetch(
                "/adicionar-categoria",
                {   
                    method: "POST",
                    body: JSON.stringify(dadosForm),
                    headers: new Headers({
                        "Accept": "application/json",
                        "Content-Type" : 'application/json',
                        "X-CSRF-TOKEN": _token
                    })
                }
            )

            const dados    =  await response.json()
             if(response.ok){
                 alert("Categoria cadastrada com sucesso.");
            }else{
              setErros(dados)
              console.log(dados)
            }
        }catch(e){
            console.log('algum erro ',e)
        }
    }

        
    return (
            <Layout {...props}>
                <Container>
                    <h1 className="text-center">
                        Adicionar Categoria
                    </h1>
                    <Form>
                        <Form.Group className="mb-3" onChange={setDadosForm} controlId="categoria" >
                            <Form.Label>Categoria: </Form.Label>
                            <Form.Control type="text" name="categoria" placeholder="Categoria" isInvalid={erros?.erro?.categoria}/>
                            <Form.Control.Feedback type="invalid">
                                {
                                    erros?.erro?.categoria?.map( (e) => (<li> {e} </li>))
                                }
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" onChange={setDadosForm} controlId="descricao">
                            <Form.Label>Descrição: </Form.Label>
                            <Form.Control type="text" name="descricao" as="textarea" rows={5} isInvalid={!!erros?.erro?.descricao}/>
                            <Form.Control.Feedback type="invalid">
                                {
                                    erros?.erro?.descricao?.map( (e) => (<li> {e} </li>))
                                }
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="img" className="mb-3">
                            <Form.Label>Imagem: </Form.Label>
                            <Form.Control type="file" name="img" onChange={setDadosForm} isInvalid={!!erros?.img?.[0]} accept="image/png, image/jpeg, image/jpg" />
                        </Form.Group>

                        <Form.Group>
                            <Button className="w-100" onClick={Post}>
                                Salvar
                            </Button>
                        </Form.Group>

                    </Form>
                </Container>
            </Layout>
        )
    
}

export default Index;