import React, { useEffect, useState } from 'react'
import Layout ,{ Header, Body, Foot } from '../../Layout'
import { Grupo } from '../../Component/Grupo'
import { GrupoLoading } from '../../Component/GrupoLoading'
import { Button } from 'react-bootstrap'

const GroupsContainer = (props) => {

    const { api } = props

    const [grupos, setGrupos] = useState({
        data : [],
        current_page: 1,
        first_page_url : null,
        from : null,
        last_page : null,
        last_page_url : null,
        links : null,
        next_page_url : null,
        path : null,
        per_page : null,
        prev_page_url : null,
        to : null,
        total : null,
    })    

    const [loading, setLoading] = useState(true)

    const {
        data,
        current_page,
        first_page_url,
        from,
        last_page,
        last_page_url,
        links,
        next_page_url,
        path,
        per_page,
        prev_page_url,
        to,
        total,
    } = grupos

    async function request(page = 1){
        setLoading(true)
        const url = "/"+api + `?page=${page}`
        const request = fetch(url,{
            method: 'GET',
            
        });

        const status = await (await request).ok
        const dados = await (await request).json()

        if(status){
            setLoading(false)
            let object = { ...dados, data: [...data, ...dados.data ] }
            setGrupos(object)
        }else{
            setLoading(false)
            console.log("erro", (await request).status)
        }
    }

    async function nextPage(page){
        page = page+1;
        await request(page)
    }

    useEffect( async () => {
        await request();
    },[])

    useEffect(  () => {
        console.log("change",grupos)
    })
    
    const RenderGrupo = () => {
        return(
            <>
                {
                    grupos?.data?.map( (e,i,a) => 
                        (
                            <Grupo 
                                titulo={ e?.titulo }
                                descricao={ e?.descricao }
                                categoria={ e?.categoria }
                                img={e?.img}
                                _id={ e?._id }
                                key={e?._id}
                                />
                        )
                    )
                }
                <Button 
                    className="w-100 mt-5 mais-grupos-button" 
                    onClick={() => { nextPage(current_page) }}
                    hidden={loading}
                    >
                    Veja Mais
                </Button>
        </>
        )
    }

    if(loading){
        return(
            <>
                <RenderGrupo/>
                {
                    [1,2,3,4,5,6,7,8,9,10].map( (e,i,a) => (
                        <GrupoLoading key={i+"-grupo"}/>
                    ))
                }
            </>
        )
    }

    return(
        <>
            <RenderGrupo/>
        </>
        
    )

}

const Apresentacao = (props) => {
    const { titulo, titulo_2 } =  { ...props }
    return(
        <>
            <h1 className="text-center">
                { titulo_2 }
            </h1>
            <h5 className="text-center">
                Já são mais de 90 mil grupos encontrados
            </h5>   

        </>
    )
}

const Index = (props) => {
    const { user, verified, authenticated, role, titulo, titulo_2, api } =  { ...props }
    return(
        <Layout 
            user={user}
            verified={verified}
            authenticated={authenticated}
            role={role}>

            <Apresentacao 
                titulo={titulo} 
                titulo_2={titulo_2}
            />

            <GroupsContainer 
                api={api}
            />
        </Layout>
    )
}

export default Index;