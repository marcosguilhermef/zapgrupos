import React ,{useEffect, useRef, useState}from 'react'
import Layout from '../../Layout'
import store from '../../../Api/store'; 
import { Provider } from 'react-redux';

import { Container, Card, Row, Col, Button, Image } from 'react-bootstrap'; 
const Index = (props) => {
    useEffect( () => {
    })
    return(
        <Provider store={store}>
            <Layout user={props?.user} verified={props?.verified} authenticated={props?.authenticated}>
                <Container>
                    <h3>O que o site zapgrupos.xyz?</h3>
                    <p>
                        Atravéz do nosso site, você tem acesso a vários links de grupos de WhatsApp que mais se adeque a seu interesse. Caso você queira divultar o seu grupo, aqui é um ponto de partida.
                    </p>

                    <h3>Como faço para o meu grupo chegar no topo?</h3>
                    <p>
                        Para chegar no topo, há uma serie de quesitos que devem ser atendidos. Contamos com algoritmo de pontuação. Quanto maior a pontuação, mas bem posicionado o grupo estará.
                    </p>

                </Container>
            </Layout>
        </Provider>
    )
}
export default Index;