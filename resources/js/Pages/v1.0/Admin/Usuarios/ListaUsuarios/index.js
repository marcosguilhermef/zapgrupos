import React from 'react'
import Layout from '../../../Layout'
import { Button, Container, Table } from 'react-bootstrap'

const Index = (props) => {
    const { user, verified, authenticated, data,role, next_page_url, prev_page_url } = { ...props };
    return(
        <Layout
        user={user}
        verified={verified}
        authenticated={authenticated}
        role={role}
        >
            <Container>
                <h1 className="text-center">Lista de grupos</h1>
                    <Table>
                        <thead>
                            <th>
                                Nome
                            </th>
                            <th>
                                E-mail
                            </th>
                            <th>
                                Nível
                            </th>
                            <th>
                                Opções
                            </th>
                        </thead>
                        <tbody>
                            {
                                data.map( (e,i,a) => {
                                    return(
                                        <tr>
                                            <td>
                                                { e.name }
                                            </td>
                                            <td>
                                                { e.email }
                                            </td>
                                            <td>
                                                { e.role }
                                            </td>
                                            <td>
                                                <Button variant='success' onClick={() => (window.location.href = `/usuario/${e._id}`)}>
                                                    Informações
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                } )
                            }
                        </tbody>
                    </Table>
                <div className='text-center'>
                    <a href={prev_page_url}>Anterior</a> | <a href={next_page_url}>Proxímo</a>
                </div>
            </Container>
        </Layout>
    )
}

export default Index;