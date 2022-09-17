import React from 'react'
import Layout from '../../../Layout'
import { Container, Table, Button } from 'react-bootstrap';

const Index = (props) => {
    const { user, verified, authenticated, data } = { ...props }
    return (
            <Layout {...props}>
                <Container>
                    <Button className="my-5 float-right" onClick={() => ( window.location.href = '/adicionar-categoria')}>
                        Adicionar Grupo
                    </Button>
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    Categoria
                                </th>
                                <th>
                                    Opções
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map( (e,i,a) => {
                                    return(
                                        <tr>
                                            <td>
                                                { 
                                                    e['categoria']
                                                }
                                            </td>
                                            <td>
                                                <Button onClick={ () => ( window.location.href = `categoria/${e["_id"]}` ) }>
                                                    Ver categoria
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                } )
                            }
                        </tbody>
                    </Table>
                </Container>
            </Layout>
        )
            
}

export default Index;