import React ,{useEffect, useRef, useState}from 'react'
import Layout from '../../Layout'
import { Container,Row, Col, Card } from 'react-bootstrap'
import { CardInfo, CardWait,CardInfoLink } from '../Componentes/Cards'
import  Carousel  from './Carousel'
import './grupo.css';

const Index = (props) => {
    console.log(props)
    return(
        <Layout user={props?.user} verified={props?.verified} authenticated={props?.authenticated}>
            <div className="m-lg-5 mx-sm-5 mt-5 mx-1 px-lg-5 px-md-3 px-0">
                <h3 className="text-center my-3">Informações do grupo</h3>
                <Row className="text-center">
                    <Col lg={6}>
                        <h3 className="text-center my-3">Grupo que você escolheu</h3>
                        <CardInfoLink titulo={props?.grupo[0]?.titulo} categoria={props?.grupo[0]?.categoria} descricao={props?.grupo[0]?.descricao} link={props?.grupo[0]?.url} img={props?.grupo[0]?.img}/>
                    </Col>
                    <Col lg={6}>
                        <h3 className="text-center my-3">Grupos semelhantes a esse</h3>
                        <Carousel grupos={props?.maisgrupos}></Carousel>
                    </Col>
                </Row>
               
            </div>
        </Layout>
    )
}

export default Index;