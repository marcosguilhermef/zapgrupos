import React ,{useEffect, useRef, useState}from 'react'
import Layout from '../../Layout'
import './grupo.css'
import CardGrupo from './CardGrupo'
import store from '../../../Api/store';
import { Provider } from 'react-redux';

import { Container } from 'react-bootstrap';
const Index = (props) => {
    return(
        <Provider store={store}>
            <Layout user={props?.user} verified={props?.verified} authenticated={props?.authenticated}>
                <h1 className="text-center my-4">{ props?.titulo }</h1>
                <CardGrupo api={props?.api}></CardGrupo>
            </Layout>
        </Provider>
    )
}
export default Index;
