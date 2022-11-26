import React, { useEffect, useState } from 'react'
import Layout from '../../Layout'
import { Grupo } from '../../Component/Grupo'
import { GrupoLoading } from '../../Component/GrupoLoading'
import { Button } from 'react-bootstrap'
import Ads from '../../Component/Ads'
const GroupsContainer = (props) => {

    const { api } = props

    const [grupos, setGrupos] = useState({
        data: [],
        current_page: 1,
        first_page_url: null,
        from: null,
        last_page: null,
        last_page_url: null,
        links: null,
        next_page_url: null,
        path: null,
        per_page: null,
        prev_page_url: null,
        to: null,
        total: null,
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

    async function request(page = 1) {
        setLoading(true)
        const url = "/" + api + `?page=${page}`
        const request = fetch(url, {
            method: 'GET',

        });

        const status = await (await request).ok
        const dados = await (await request).json()

        if (status) {
            setLoading(false)
            let object = { ...dados, data: [...data, ...dados.data] }
            setGrupos(object)
        } else {
            setLoading(false)
            console.log("erro", (await request).status)
        }
    }

    async function nextPage(page) {
        page = page + 1;
        await request(page)
    }

    useEffect(async () => {
        await request();
    }, [])

    useEffect(() => {
        console.log("change", grupos)
    })

    const RenderGrupo = () => {
        return (
            <>
                {
                    grupos?.data?.map((e, i, a) => {

                        if ((i == 3) && (i != 0)) {
                            return (
                                <>
                                    <Grupo
                                        titulo={e?.titulo}
                                        descricao={e?.descricao}
                                        categoria={e?.categoria}
                                        img={e?.img}
                                        _id={e?._id}
                                        key={e?._id}
                                    />
                                    <Ads
                                        path='/22764566987/c3834062-64c2-11ed-9022-0242ac120002'
                                        size={['fluid']}
                                        id='div-gpt-ad-1668509046500-0'
                                        style={{
                                            marginTop: "25px",
                                            marginBotton: "25px",
                                        }}
                                    />
                                </>
                            )
                        }

                        return (
                            <Grupo
                                titulo={e?.titulo}
                                descricao={e?.descricao}
                                categoria={e?.categoria}
                                img={e?.img}
                                _id={e?._id}
                                key={e?._id}
                            />
                        )
                    }

                    )
                }
                <Button
                    className="w-100 mt-5 mais-grupos-button"
                    onClick={() => { nextPage(current_page) }}
                    hidden={loading}
                >
                    <a 
                        style={{ color: "#ffffff", textDecoration: "none" }}
                        href="">Veja Mais</a>
                </Button>
            </>
        )
    }

    if (loading) {
        return (
            <>
                <RenderGrupo />
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i, a) => (
                        <GrupoLoading key={i + "-grupo"} />
                    ))
                }
            </>
        )
    }

    return (
        <>
            <RenderGrupo />
        </>

    )

}

const Apresentacao = (props) => {
    const { titulo, titulo_2 } = { ...props }
    return (
        <>
            <h1 className="text-center">
                {titulo_2}
            </h1>
            <h5 className="text-center">
                Já são mais de 90 mil grupos encontrados
            </h5>

        </>
    )
}

/*
    Este componente não tem nenhuma função de a não ser ajudar no rankeamento da página.
*/
const Seo = () => {
    return (

        <div className="my-5">
            <h1 className='my-5'>
                Pergundas Frequentes(FAQ)
            </h1>

            <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 itemprop="name">O que é o zapgrupos?</h2>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                        O zapgrupos é o maior repositório de grupos de WhatsApp e Telegram do mundo. Atualmente contamos com mais de 90 mil grupos de WhatsApp e Telegram. Ajudamos você a encontrar novos grupos de amigos, de gamers ou de notícias.
                    </div>
                </div>
            </div>

            <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 itemprop="name">O zapgrupos se responsabiliza pelo que os usuários postam?</h2>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                        Nós não nos responsabilizamos pelo conteúdo postado pelos usuários. Porém, contamos com uma equipe de moderação que sempre remove conteúdos nocivos do catálogo. Caso você encontra algum grupo nocivo. Clique em "Denunciar" que está presente nas opções dos grupos.
                    </div>
                </div>
            </div>

            <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 itemprop="name">Como faço para cadastrar um grupo no zapgrupos?</h2>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                        Para cadastrar um grupo no site você deve possuir um cadastro. <a href="/cadastrar">Clique aqui</a> para se cadastrar e poder publicar grupos.
                    </div>
                </div>
            </div>

            <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 itemprop="name">Como criar um grupo no WhatsApp?</h2>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                        <ul>
                            <li>Clique em ⋮ no seu WhatsApp;</li>
                            <li>Clique em "Novo Grupo";</li>
                            <li>Escolha os participantes, defina um nome e uma imagem para o seu grupo;</li>
                            <li>Todo grupo deve ter no mínimo um participante (além de você) para poder ser criado.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 itemprop="name">Como encontrar um grupo de WhatsApp?</h2>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    Aqui mesmo no zapgrupos temos vários grupos de WhatsApp para você se participar. Basta clicar em "Entrar" para poder fazer parte de um. O mesmo vale para grupos de Telegram.
                </div>
            </div>


        </div>
    )
}
const Index = (props) => {
    const { user, verified, authenticated, role, titulo, titulo_2, api } = { ...props }
    return (
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