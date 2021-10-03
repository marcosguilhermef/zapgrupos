import React ,{useEffect, useRef, useState}from 'react'
import Layout from '../../Layout'
import { Container,Row, Col, Card } from 'react-bootstrap'
import { CardInfo, CardWait,CardInfoLink } from '../Componentes/Cards'
import  Carousel  from './Carousel'
import './grupo.css';

const Index = (props) => {
    const {_id,titulo,categoria,descricao,url,img} = { ...props.grupo[0] }

    return(
        <Layout user={props?.user} verified={props?.verified} authenticated={props?.authenticated}>
            <div className="m-lg-5 mx-sm-5 mt-5 mx-1 px-lg-5 px-md-3 px-0">
                <h3 className="text-center my-3">Informações do grupo</h3>
                <Row className="text-center">
                    <Col lg={6}>
                        <h3 className="text-center my-3">Grupo que você escolheu</h3>
                        <CardInfoLink _id={_id} titulo={titulo} categoria={categoria} descricao={descricao} link={url} img={img}/>
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