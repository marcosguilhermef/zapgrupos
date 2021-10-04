import { useEffect } from 'react'
import {Col, Row, Card, Button, Image, Spinner} from 'react-bootstrap'
import './card.css'
const CardInfo = (props) => {
    const {_id,link, titulo, categoria, descricao, img} = {...props}
    const redirect = (cat) =>{
        cat = cat.replaceAll(" ","-")
        window.location.href = window.location.origin+'/'+cat+'/'+_id
    }
    return(
        <Col xs={12} sm={12} md={4} lg={2}>
            <Card>
                <Card.Header>
                    { titulo }
                </Card.Header>
                {
                    img.length == 0 ?
                    (
                        <Image src="/img/generico/reactangle.png" className="card-img-top"/>)
                    :
                    (
                        <Image src={img[0]}  onError={(e) => e.target.src = "/img/generico/reactangle.png"} className="card-img-top"/>)
                }
                <Card.Body className="card-orverflowy">
                <span className="card-category">{categoria}</span>
                <p className="text-justify">
                    { descricao }
                </p>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Button variant="success" onClick={() => redirect(categoria)}>Informações</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}
const CardInfo2 = (props) => {
    const {_id,link, titulo, categoria, descricao, img} = {...props}
    const redirect = (cat) =>{
        cat = cat.replaceAll(" ","-")
        window.location.href = window.location.origin+'/'+cat+'/'+_id
    }
    return(
        <Col xs={12} sm={12} md={12} lg={12}>
            <Card>
                <Card.Header>
                    { titulo }
                </Card.Header>
                {
                    img.length == 0 ?
                    (
                        <Image src="/img/generico/reactangle.png" className="card-img-top"/>)
                    :
                    (
                        <Image src={img[0]} onError={(e) => e.target.src = "/img/generico/reactangle.png"} className="card-img-top"/>)
                }
                <Card.Body className="card-orverflowy">
                <span className="card-category">{categoria}</span>
                <p className="text-justify">
                    { descricao }
                </p>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Button variant="success" onClick={() => redirect(categoria)}>Informações</Button>
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
    const {_id,link, titulo, categoria, descricao, img} = {...props}
    const redirect = (cat) =>{
        cat = cat.replaceAll(" ","-")
        window.location.href = `/grupo/${_id}`
    }
   
    return(
        <Col xs={12} sm={12} md={12} lg={12}>
            <Card>
                <Card.Header>
                    { titulo  }
                </Card.Header>
                {
                    img.length == 0 ?
                    (
                        <Image src="/img/generico/reactangle.png" className="card-img-top"/>)
                    :
                    (
                        <Image src={img[0]} onError={(e) => e.target.src = "/img/generico/reactangle.png"}  className="card-img-top"/>)
                }
                <Card.Body className="card-orverflowy">
                <span className="card-category">{categoria}</span>
                <p className="text-justify">
                    { descricao }
                </p>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Button variant="success" onClick={() => redirect(categoria)}>Entrar</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}

const CardPreview = (props) => {
    const {_id,link, titulo, categoria, descricao, img} = {...props ||'Informacao Auxente'}
    const redirect = (cat) =>{
        cat = cat.replaceAll(" ","-")
        window.location.href = window.location.origin+'/'+cat+'/'+_id
    }
    return(
        <Col xs={12} sm={12} md={12} lg={12}>
            <Card>
                <Card.Header>
                    { titulo }
                </Card.Header>
                {
                    img.length == 0 ?
                    (
                        <Image src="/img/generico/reactangle.png" className="card-img-top"/>)
                    :
                    (
                        <Image src={img[0]}  onError={(e) => e.target.src = "/img/generico/reactangle.png"} className="card-img-top"/>)
                }
                <Card.Body className="card-orverflowy">
                <span className="card-category">{categoria}</span>
                <p className="text-justify">
                    { descricao }
                </p>
                </Card.Body>
            </Card>
        </Col>
    )
}

export {CardWait,CardInfo,CardInfoLink,CardInfo2,CardPreview}