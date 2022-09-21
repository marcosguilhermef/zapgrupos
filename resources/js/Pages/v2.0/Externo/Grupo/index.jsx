import React from "react";
import Layout ,{ Header, Body, Foot } from '../../Layout'
import GrupoInfo from "../../Component/GrupoInfo"
const Apresentacao = (props) => {
    const { titulo, titulo_2 } =  { ...props }
    return(
        <>
            <h1 className="text-center">
                { titulo }
            </h1>
            <h3 className="text-center">
                Já são mais de 90 mil grupos encontrados
            </h3>   
        </>
    )
}

const Index = (props) => {
    const { user, verified, authenticated, role, titulo, titulo_2, api, grupo } =  { ...props }
    return(
        <Layout 
            user={user}
            verified={verified}
            authenticated={authenticated}
            role={role}>

            <Apresentacao 
                titulo={grupo?.[0].categoria}
                titulo_2={titulo_2}
            />
            <GrupoInfo {...grupo?.[0]}/>
        </Layout>
    )   
}

export default Index;