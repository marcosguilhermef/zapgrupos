import React ,{useEffect, useRef, useState}from 'react'
import Layout from '../../Layout'
import store from '../../../Api/store'; 
import { Provider } from 'react-redux';
import { Container, Form, Button, Row, Col} from 'react-bootstrap';
import { CardInfo, CardPreview, } from '../Componentes/Cards'

const Index = (props) => {

    const categorias = props?.categorias || []

    const dadosGrupo = useState({
        "titulo" : "Sem titulo",
        "descricao": "Sem descricao",
        "categoria": "Sem categoria" 
    })

    useEffect( () => {
            console.log(dadosGrupo[0])
        }
    )

    return(
        <Provider store={store}>
            <Layout user={props?.user} verified={props?.verified} authenticated={props?.authenticated}>
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
                                    <Form.Control type="text" placeholder="Link do grupo" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="nomeGrupo">
                                    <Form.Label>Nome do grupo:</Form.Label>
                                    <Form.Control type="text" placeholder="Nome do grupo" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="descricao">
                                    <Form.Label>Descrição: </Form.Label>
                                    <Form.Control type="text" as="textarea" rows={3} placeholder="Descrição" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Categoria: </Form.Label>
                                    <Form.Control as="select" aria-label="Escreva uma descição para o seu grupo">
                                        {
                                            categorias.map(
                                                (e,i,a) =>{
                                                    return(
                                                        <option value={e["_id"]}>{e["categoria"]}</option>
                                                    )
                                                }
                                            )    
                                        } 
                                    </Form.Control> 
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="seuEmail">
                                    <Form.Label>Seu e-mail:</Form.Label>
                                    <Form.Control type="email" placeholder="E-mail" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="seuTelefone">
                                    <Form.Label>Seu telefone:</Form.Label>
                                    <Form.Control type="telefone" placeholder="Telefone" />
                                </Form.Group>
                                
                                <Button variant="success" type="submit" style={{ width: "100%" }}>
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