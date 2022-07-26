import React from 'react'
import Layout from '../../../Layout'
import { Container, Table, Button } from 'react-bootstrap';

const Index = (props) => {
    const { user, verified, authenticated, data ,role, next_page_url, prev_page_url } = { ...props };
    return (
        <Layout
            {...props}
        >
            <Container>
                <h1 className='text-center'>Denúncias</h1>
                    <Table>
                        <thead>
                            <th>
                                _id
                            </th>
                            <th>
                                id
                            </th>
                            <th>
                                Data 
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
                                                { e._id }
                                            </td>
                                            <td>
                                                { e.id }
                                            </td>
                                            <td>
                                                { e?.created_at }
                                            </td>
                                            <td>
                                                <Button variant='success' onClick={() => (window.location.href = `/grupo-info/${e.id}`)}>
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