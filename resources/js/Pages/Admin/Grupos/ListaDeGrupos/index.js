import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../../Layout'
import { Container, Form, Button, Image, Row, Col } from 'react-bootstrap';

import './style.css'
const Grupos = (props) => {
    const {grupo} = { ...props }
    const {titulo, img, categoria ,descricao, _id} = { ...grupo }
    return(
        <div className="groups">
            <div className="group-image-div">
                {
                    img?.[0] ? (
                        <Image className="gruoup-img" src={img?.[0]} onError={(e) => e.target.src = "/img/generico/reactangle.png"}/>
                    ) 
                    : 
                    (
                        <Image className="gruoup-img" src='./img/generico/reactangle.png'/>
                    )
                }
            </div>
            <div className="group-info">
                <div className="group-title">
                    { `${titulo} (${categoria})` }
                </div>
                <div className="group-descricao">
                    { descricao }
                </div>
                <div className="group-options">
                    <a href={`/grupo-info/${_id}`}>Informações</a>
                </div>
            </div>
        </div>
    )
}

const Index = (props) => {
    const { user, verified, authenticated, data, next_page_url, prev_page_url } = { ...props };
    return (
        <Layout
            user={!user}
            verified={!verified}
            authenticated={!authenticated}
        >
            <Container>
                <h1 className="text-center">Lista de grupos</h1>
                {
                    data.map( (e,i) => <Grupos grupo={e}/>)
                } 
                <div className='text-center'>
                    <a href={prev_page_url}>Anterior</a> | <a href={next_page_url}>Proxímo</a>
                </div>
            </Container>
        </Layout>
    )
}

export default Index;