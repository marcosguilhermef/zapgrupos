import React, { useRef } from "react";
import {Col, Row, Card, Button, Image} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faChevronCircleRight,faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

const CardInfo = (props) => {
    const {link, titulo, categoria, descricao, img} = {...props}
    return(
        <Col xs={12} sm={12} md={3} lg={2}>
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

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };
    
    const handleRightClick = (e) => {
        e.preventDefault();
    
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };
    return(
        <div>
            <div className="carousel" ref={carousel}>

                    {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(
                        (e,i,a) => (<CardInfo titulo="titulo" categoria="categoria" descricao="asdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasfasdfgasdfasfasf" img="" link="link" />)
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