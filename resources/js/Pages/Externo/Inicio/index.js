import React ,{useEffect, useRef, useState}from 'react'
import Layout from '../../Layout'
import './grupo.css'
import CardGrupo from './CardGrupo'
const Index = (props) => {
    return(
        <Layout user={props?.user} verified={props?.verified} authenticated={props?.authenticated}>
            <h3 className="text-center my-4">Grupos mais acessados</h3>
            <CardGrupo></CardGrupo>
        </Layout>
    )
}
export default Index;