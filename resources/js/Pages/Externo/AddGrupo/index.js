import React ,{useEffect, useRef, useState}from 'react'
import Layout from '../../Layout'
import store from '../../../Api/store'; 
import { Provider } from 'react-redux';
import { Container, Form, Button, Row, Col} from 'react-bootstrap';
import { CardInfo, CardPreview, } from '../Componentes/Cards'
import Header from '../../Layout/Header';

const Index = (props) => {

    //const categorias = props?.categorias || []
    const {user,verified,authenticated, categorias, _token} = {...props}
    const [infoClient, setInfoCliente] = useState({
    });
    const [erros, setErros]            = useState({});


    const setingClients = (event) => {
        let obj = {
            [event.target.name]: event.target.value
        }
        setInfoCliente(value => ({ ...value, ...obj }))
    }

    const dadosGrupo = useState({
        "titulo" : "Sem titulo",
        "descricao": "Sem descricao",
        "categoria": "Sem categoria" 
    })
    const link          =       useRef(null)
    const titulo        =       useRef(null)
    const descricao     =       useRef(null)
    const categoria     =       useRef(null)
    const email         =       useRef(null)
    const telefone      =       useRef(null)

    const submit = () => {
        fetchRequest(infoClient)
    }
    const fetchRequest =  async () => {
        try{
          const response =  await fetch('/api/add-banca',{
              method: 'POST',
              body: JSON.stringify(infoClient),
              headers: new Headers({
                "Content-Type": "application/json"
              })              
          })
          const dados    =  await response.json()
          if(response.ok){
            console.log(response.status," ",dados)
          }else{
            setErros(dados)
          }
        }catch(e){
            console.log(e)
        }
    }

    return(
        <Provider store={store}>
            <Layout user={user} verified={verified} authenticated={authenticated}>
                <h3 className="text-center my-4">Adicionar grupo</h3>
                <p className="text-center">
                    Adicione o seu grupo ao nosso site. Assim novas pessoas poderão participar.
                </p>
                <Container>
                    <Row>
                        <Col xs={12} lg={6} md={6} sm={12}>
                            <Form>

                                <Form.Group className="mb-3" controlId="linkWhatsapp">
                                    <Form.Label>Link:</Form.Label>
                                    <Form.Control type="text" name="link" placeholder="Link do grupo" ref={link} onChange={setingClients} isInvalid={erros?.link}/>
                                    <Form.Control.Feedback type="invalid"  className="text-left" >
                                    {
                                        erros?.link?.map( (e,a,i) => {
                                            return (<li key={i}>{e}</li>)
                                        } )
                                    }
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="nomeGrupo">
                                    <Form.Label>Nome do grupo:</Form.Label>
                                    <Form.Control type="text" name="titulo" placeholder="Nome do grupo" ref={titulo} onChange={setingClients} isInvalid={erros?.titulo}/>
                                    <Form.Control.Feedback type="invalid"  className="text-left" >
                                    {
                                        erros?.titulo?.map( (e,a,i) => {
                                            return (<li key={i}>{e}</li>)
                                        } )
                                    }
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="descricao">
                                    <Form.Label>Descrição: </Form.Label>
                                    <Form.Control type="text" name="descricao" as="textarea" rows={3} placeholder="Descrição" ref={descricao} onChange={setingClients} isInvalid={erros?.descricao}/>
                                    <Form.Control.Feedback type="invalid"  className="text-left" >
                                    {
                                        erros?.descricao?.map( (e,a,i) => {
                                            return (<li key={i}>{e}</li>)
                                        } )
                                    }
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Categoria: </Form.Label>
                                    <Form.Control as="select" name="categoria" aria-label="Escreva uma descição para o seu grupo" ref={categoria} onChange={setingClients} isInvalid={erros?.categoria}>
                                        {
                                            categorias.map(
                                                (e,i,a) =>{
                                                    return(
                                                        <option key={e["_id"]} value={e["_id"]}>{e["categoria"]}</option>
                                                    )
                                                }
                                            )    
                                        } 
                                    </Form.Control> 
                                    <Form.Control.Feedback type="invalid"  className="text-left" >
                                    {
                                        erros?.categoria?.map( (e,a,i) => {
                                            return (<li key={i}>{e}</li>)
                                        } )
                                    }
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="seuEmail">
                                    <Form.Label>Seu e-mail:</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="E-mail" ref={email} onChange={setingClients} isInvalid={erros.email}/>
                                    <Form.Control.Feedback type="invalid"  className="text-left" >
                                    {
                                        erros?.email?.map( (e,a,i) => {
                                            return (<li key={i}>{e}</li>)
                                        } )
                                    }
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="seuTelefone">
                                    <Form.Label>Seu telefone:</Form.Label>
                                    <Form.Control type="telefone" name="telefone" placeholder="Telefone" ref={telefone} onChange={setingClients} isInvalid={erros.telefone}/>
                                    <Form.Control.Feedback type="invalid"  className="text-left" >
                                    {
                                        erros?.telefone?.map( (e,a,i) => {
                                            return (<li key={i}>{e}</li>)
                                        } )
                                    }
                                    </Form.Control.Feedback>
                                </Form.Group>
                                
                                <Button variant="success" type="button" onClick={submit} style={{ width: "100%" }}>
                                    Enviar
                                </Button>
                            </Form>
                        </Col>
                        <Col xs={12} lg={6} md={6} sm={12}>
                            <CardPreview titulo={dadosGrupo[0].titulo} categoria={dadosGrupo[0].categoria} descricao={dadosGrupo[0].descricao} img={[]}/>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </Provider>
    )
}
export default Index;