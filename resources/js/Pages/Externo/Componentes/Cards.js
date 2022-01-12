import { useEffect, Component } from 'react'
import {Col, Row, Card, Button, Image, Spinner} from 'react-bootstrap'
import  dateFormat,{ masks  } from 'dateformat'
import './card.css'

const CardInfo = (props) => {
    const {_id,link, titulo, categoria, descricao, img, tipo, created_at, updated_at} = {...props}
    const redirect = (cat) =>{
            cat = cat.split(" ").join("-")
            return '/'+cat+'/'+_id

    }

    return(
        <Col xs={12} sm={12} md={4} lg={2} >
            <Card>
                <Card.Header>
                    { titulo }
                </Card.Header>
                {
                    img?.length == 0 || typeof img === 'undefined' ?
                    (
                        <Image src="/img/generico/reactangle.png" className="card-img-top" style={{ height:"280px" }} height="280px"/>)
                    :
                    (
                        <Image src={img[0]} onError={(e) => e.target.src = "/img/generico/reactangle.png"} className="card-img-top" style={{ height:"280px" }} height="280px" />)
                }
                <Card.Body className="card-orverflowy">
                <span className="card-category">
                    {categoria}
                    {
                        tipo == "whatsapp" ? (<Image src="/img/generico/whatsapp.png" />) : (<Image src="/img/generico/telegram.png" />                        )
                    }
                </span>
                <div className="my-2">
                    <div>
                        {
                            created_at ? (
                                <span className="fs-6"><b>Criado em: </b>{ dateFormat(created_at, "dd-mm-yyyy hh:MM") }</span>
                            ):(
                                ''
                            )
                        }
                    </div>
                    <div>
                    {
                            updated_at ? (
                                <span className="fs-6"><b>Atualizado em: </b>{ dateFormat(updated_at, "dd-mm-yyyy hh:MM") }</span>
                            ):(
                                ''

                            )
                        }
                    </div>
                </div>
                <p className="text-justify">
                    { descricao }
                </p>
                </Card.Body>
                <Card.Footer className="text-center">
                    <a className="btn btn-success" href={redirect(categoria)} role="button">Informações</a>
                </Card.Footer>
            </Card>
        </Col>
    )
}

const CardAds = (props) => {
    useEffect(() => {
        try{
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            console.log("sucesso: ",window.adsbygoogle)
        }catch{
            console.log("erro carregamento ads: ",window.adsbygoogle)
            //document.getElementsByName("ins")[0].setAttribute("hidden","true")
        }
    })
    useEffect(() => {
        console.log("TESTE: ",process)
    })

    function AdsComponent(){
        return(
            <Col xs={12} sm={12} md={4} lg={2}>
                <Card id="google-ads">
                    <Card.Header>
                        Patrocinado
                    </Card.Header>
                        <ins className="adsbygoogle"
                             style={{ display: "block" }}
                             data-ad-format="fluid"
                             data-ad-layout-key="+2f+pt+42-22+39"
                             data-ad-client="ca-pub-8817634033676287"
                             data-adtest={process.env.MIX_APP_ENV == "production" ? 'off' : 'on' }
                             data-ad-slot="2754058875">
                        </ins>
                    </Card>
                <Card.Footer className="text-center">
                    {/*<a className="btn btn-success" role="button">Saiba mais</a>*/}
                </Card.Footer>
            </Col>
        )
    }
    return(
        window?.adsbygoogle?.loaded ? (window?.adsbygoogle?.push.length ? (<AdsComponent/>) : '' ) : ('')
    );

}


const CardInfo2 = (props) => {
    const {_id,link, titulo, categoria, descricao, img, created_at, updated_at} = {...props}
    const redirect = (cat) =>{
        cat = cat.split(" ").join("-")
        return '/'+cat+'/'+_id
    }
    return(
        <Col xs={12} sm={12} md={12} lg={12}>
            <Card>
                <Card.Header>
                    { titulo }
                </Card.Header>
                {
                    img?.length == 0 || typeof img === "undefined"?
                    (
                        <Image src="/img/generico/reactangle.png" className="card-img-top"/>)
                    :
                    (
                        <Image src={img[0]} onError={(e) => e.target.src = "/img/generico/reactangle.png"} className="card-img-top"/>)
                }
                <Card.Body className="card-orverflowy">
                <span className="card-category">{categoria}</span>
                <div className="my-2">
                    <div>
                        {
                            created_at ? (
                                <span className="fs-6"><b>Criado em: </b>{ dateFormat(created_at, "dd-mm-yyyy hh:MM") }</span>
                            ):(
                                ''
                            )
                        }
                    </div>
                    <div>
                    {
                            updated_at ? (
                                <span className="fs-6"><b>Atualizado em: </b>{ dateFormat(updated_at, "dd-mm-yyyy hh:MM") }</span>
                            ):(
                                ''

                            )
                        }
                    </div>
                </div>
                <p className="text-justify">
                    { descricao }
                </p>
                </Card.Body>
                <Card.Footer className="text-center">
                    <a className="btn btn-success" href={redirect(categoria)} role="button">Informações</a>
                </Card.Footer>
            </Card>
        </Col>
    )
}


const CardWait = (props) => {
    const {ativo} = {...props}
    return(
            <Col xs={12} sm={12} md={4} lg={2} hidden={ativo}>
                <Card>
                    <Card.Header>
                        Aguarde
                    </Card.Header>
                    <Image src="/img/generico/reactangle.png" className="card-img-top"/>
                    <Card.Body className="card-orverflowy">
                    <span className="card-category"> Aguarda </span>
                    <div className="cardx"></div>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Button variant="success">
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                        </Button>
                    </Card.Footer>
                </Card>
            </Col>
    )
}

const CardInfoLink = (props) => {
    const {_id,link, titulo, categoria, descricao, img, created_at, updated_at } = {...props}
    const redirect = (cat) =>{
        cat = cat.split(" ").join("-")
        return `/grupo/${_id}`
    }

    return(
        <Col xs={12} sm={12} md={12} lg={12}>
            <Card>
                <Card.Header>
                    { titulo  }
                </Card.Header>
                {
                    img?.length == 0 || typeof img === "undefined"?
                        (
                            <Image src="/img/generico/reactangle.png" className="card-img-top"/>)
                        :
                        (
                            <Image src={img[0]} onError={(e) => e.target.src = "/img/generico/reactangle.png"} className="card-img-top"/>)
                }
                <Card.Body className="card-orverflowy">
                <span className="card-category">{categoria}</span>
                <div className="my-2">
                    <div>
                        {
                            created_at ? (
                                <span className="fs-6"><b>Criado em: </b>{ dateFormat(created_at, "dd-mm-yyyy hh:MM") }</span>
                            ):(
                                ''
                            )
                        }
                    </div>
                    <div>
                    {
                            updated_at ? (
                                <span className="fs-6"><b>Atualizado em: </b>{ dateFormat(updated_at, "dd-mm-yyyy hh:MM") }</span>
                            ):(
                                ''

                            )
                        }
                    </div>
                </div>
                <p className="text-justify">
                    { descricao }
                </p>
                </Card.Body>
                <Card.Footer className="text-center">
                    <a className="btn btn-success" href={`/grupo/${_id}`} role="button">Entrar</a>
                    {/* <Button variant="success" onClick={() => redirect(categoria)}>Entrar</Button> */}
                </Card.Footer>
            </Card>
        </Col>
    )
}

const CardPreview = (props) => {
    const {_id,link, titulo, categoria, descricao, img, tipo, created_at, updated_at } = {...props ||'Informacao Auxente'}
    const redirect = (cat) =>{
        cat = cat.split(" ").join("-")
        window.location.href = window.location.origin+'/'+cat+'/'+_id
    }
    function imageGroup(tipo){
        switch (tipo){
            case "whatsapp": return (<Image src="/img/generico/whatsapp.png" />);
            break;
            case "t.me": return (<Image src="/img/generico/telegram.png" />);
            break;
            default: return '';
            break;
        }
    }
    return(
        <Col xs={12} sm={12} md={12} lg={12}>
            <Card>
                <Card.Header>
                    { titulo }
                </Card.Header>
                {
                    img?.length == 0 || typeof img === "undefined"?
                        (
                            <Image src="/img/generico/reactangle.png" className="card-img-top"/>)
                        :
                        (
                            <Image src={img[0]} onError={(e) => e.target.src = "/img/generico/reactangle.png"} className="card-img-top"/>)
                }
                <Card.Body className="card-orverflowy">
                <span className="card-category">
                    {categoria}
                {
                    imageGroup(tipo)
                }
                </span>
                <p className="text-justify">
                    { descricao }
                </p>
                </Card.Body>
            </Card>
        </Col>
    )
}

export {CardWait,CardInfo,CardInfoLink,CardInfo2,CardPreview, CardAds}
