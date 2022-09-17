import React from 'react'
import Layout from '../../../Layout'
import { Card, Container, Table, Form, Button } from 'react-bootstrap'

const Index = (props) => {
    const { user, verified, authenticated, role} = { ...props };
    const { name , email, created_at, gruops, _id, status  } = { ...props.data }
    const level = props.data.role

    return(
        <Layout
            user={user}
            verified={verified}
            authenticated={authenticated}
            role={role}
        >
            <Container>
                <h1 className="text-center">Usuario</h1>
                <Card>
                    <Card.Header>
                        Informações do usuário
                    </Card.Header>
                    <Card.Body>
                        <Table>
                            <tbody>
                                <tr>
                                    <th>
                                        _id: 
                                    </th>
                                    <td>    
                                        { _id }
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Nome: 
                                    </th>
                                    <td>        
                                        { name }
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Email: 
                                    </th>
                                    <td>    
                                        { email }
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Grupos: 
                                    </th>
                                    <td>    
                                        { gruops }
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Created At: 
                                    </th>
                                    <td>    
                                        { created_at }
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Status: 
                                    </th>
                                    <td>    
                                        { status }
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Nivel: 
                                    </th>
                                    <td>    
                                        { level }
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <div>
                            <div>
                                <Form.Group className="mb-3">
                                    <Form.Label>Status: </Form.Label>
                                    <Form.Control as="select" name="status" >
                                        <option value="true">
                                            Ativo
                                        </option>
                                        <option value="false">
                                            Bloqueado
                                        </option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nivel: </Form.Label>
                                    <Form.Control as="select" name="nivel" >
                                        <option value="admin">
                                            admin
                                        </option>
                                        <option value="user">
                                            user
                                        </option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group className="mb-3">
                                    <Button className="w-100">
                                        Salvar
                                    </Button>
                                </Form.Group>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </Layout>
    )
}

export default Index;