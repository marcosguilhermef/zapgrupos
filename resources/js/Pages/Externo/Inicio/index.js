import React ,{useEffect, useRef, useState}from 'react'
import Layout from '../../Layout'
import './grupo.css'
import CardGrupo from './CardGrupo'
import store from '../../../Api/store';
import { Provider } from 'react-redux';

import { Container } from 'react-bootstrap';


const Index = (props) => {
    const { user, api, titulo, titulo_2, authenticated, verified } = { ...props }
    return(
        <Provider store={store}>
            <Layout user={user} verified={verified} authenticated={authenticated}>
                <h1 className="text-center my-4">{ titulo }</h1>
                <h3 className="text-center my-4">{ titulo_2 }</h3>
                <CardGrupo api={api}></CardGrupo>
            </Layout>
        </Provider>
    )
}
export default Index;
