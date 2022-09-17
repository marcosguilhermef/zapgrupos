import React from 'react'
import Layout from '../../../Layout'
import { Container, Table, Card, Button, Image } from 'react-bootstrap';

const Index = (props) => {
    const { user, verified, authenticated, data } = { ...props }
    return (
            <Layout {...props}>
                <Container>
                    <Card>
                        <Card.Header>
                            { data?.categoria }
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <span>
                                    Categoria:
                                </span>
                                <span>
                                    { " "+data?.categoria }
                                </span>
                            </div>
                            <div>
                                <span>
                                    Descrição:
                                </span>
                                <span>
                                    { typeof data?.descricao === undefined ? '' : data?.descricao }
                                </span>
                            </div>
                            <div>
                                <span>
                                    Url imagem:
                                </span>
                                <span>
                                    { typeof data?.img?.[0] === undefined ? '' : data?.img?.[0] }
                                </span>
                            </div>
                            <div>
                                { 
                                    (typeof data?.img?.[0] === "undefined") ||  (data?.img?.[0] === null)
                                    ?     
                                    (<Image style={{ width: "100px", height: "100px" }} src='/img/generico/reactangle.png'/>)
                                    :
                                    (<Image style={{ width: "100px", height: "100px" }} src={data?.img?.[0]} />)                                    
                                }
                            </div>
                            <div>
                                <Button className="my-2 w-100" onClick={ () => ( window.location.href = `/atualizar-categoria/${data?._id}` ) }>
                                    Editar
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </Layout>
        )
            
}

export default Index;