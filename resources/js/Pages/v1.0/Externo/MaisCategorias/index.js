import React ,{useEffect, useRef, useState}from 'react'
import Layout from '../../Layout'
import store from '../../../Api/store';
import { Provider } from 'react-redux';

import { Container, Card, Row, Col, Button, Image } from 'react-bootstrap';
const Index = (props) => {
    const redirect = (cat) =>{
        cat = cat.split(" ").join("-")
        return cat

    }
    const style = {
        height: "280px",
        objectFit: "cover",
    }
    return(
        <Provider store={store}>
            <Layout {...props}>
                <Container>
                    <Row>
                        {
                            props?.dados?.data.map((e,i,a) =>
                                (
                                    <Col xs={12} sm={12} md={4} lg={3} className="m-1">
                                        <Card>
                                            <Card.Header>
                                                { e["categoria"] }
                                            </Card.Header>
                                            {
                                                !e.img ?
                                                (
                                                    <Image src="/img/generico/reactangle.png" className="card-img-top" style={style}/> )
                                                :
                                                (
                                                    <Image  src={e.img} onError={(e) => e.target.src = "/img/generico/reactangle.png"} style={style} className="card-img-top"/>)
                                            }
                                            <Card.Footer className="text-center">
                                                <a className="btn btn-success" href={redirect(e["categoria"])} role="button">Informações</a>
                                                {/* <Button variant="success" onClick={() =>document.location.href = ("/"+redirect(e["categoria"]))}>Informações</Button> */}
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                )
                            )
                        }
                    </Row>
                </Container>
            </Layout>
        </Provider>
    )
}
export default Index;
