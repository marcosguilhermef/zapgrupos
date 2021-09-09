import React, { useEffect, useRef } from "react";
import {Col, Row, Card, Button, Image} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faChevronCircleRight,faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import {  makeOneRequest, setStatus, setGrupos } from '../../../Api/requets/request'

const CardInfo = (props) => {
    const {link, titulo, categoria, descricao, img} = {...props}
    return(
        <Col xs={12} sm={12} md={4} lg={2}>
            <Card>
                <Card.Header>
                    { titulo }
                </Card.Header>
                <Image src="assets/generico/reactangle.png" className="card-img-top"/>
                <Card.Body className="card-orverflowy">
                <span className="card-category">{categoria}</span>
                <p className="text-justify">
                    { descricao }
                </p>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Button variant="success">Entrar</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}

const CardGrupo = (props) => {
    const carousel = useRef(null)
    
    const dados = useSelector( dados => dados.grupos )
    const grupos = useSelector( dados => dados.grupos.grupos?.data || [] )


    const dispatch = useDispatch()

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;

    };
    
    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    useEffect( () => {
        dispatch(makeOneRequest({
            'link': 'api/maisAcessados',
            'action': setGrupos,
            'status': setStatus
          })); 
    } ,[])


    return(
        <div>
            <div className="carousel" ref={carousel}>

                    {
                    grupos.map(
                        (e,i,a) => (
                            <CardInfo titulo={e?.titulo} categoria={e?.categoria} descricao={e?.descricao} img={e?.img} link={e?.url} />
                        )
                    )
                    }
                
            </div>
            <div className="text-center chevrons">
                <FontAwesomeIcon icon={faChevronCircleLeft} className="mr-2" onClick={handleLeftClick}/>
                <FontAwesomeIcon icon={faChevronCircleRight} className="ml-2" onClick={handleRightClick}/>
            </div>
        </div>
    )
}

export default CardGrupo