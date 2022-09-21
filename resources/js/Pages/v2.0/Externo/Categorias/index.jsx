import React from "react";
import Layout ,{ Header, Body, Foot } from '../../Layout'
import GrupoInfo from "../../Component/GrupoInfo"
import CategoriaInfo from '../../Component/CategoriaInfo'
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
    const { user, verified, authenticated, role, dados } =  props 
    const { data } = dados
    return(
        <Layout 
            user={user}
            verified={verified}
            authenticated={authenticated}
            role={role}>
            {
                data.map( (e,i,a) => (
                        <CategoriaInfo {...e}/>
                    ) 
                )
            }
        </Layout>
    )   
}

export default Index;