import React from 'react'
import { Row, Col  } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import './style.css'

const Index = () =>{
    function likagem(link){
        window.location.href = link;
    }
    return(
        <div className="footery px-5 pt-5 pb-2">
            <Row>
                <Col sm={6}>
                    <h3>Categorias</h3>
                    <ul className="foot-categorias">
                        <li>
                            <a href="/Amizade">Amizade</a>
                        </li>
                        <li>
                            <a href="/Ganhar-dinheiro">Ganhar dinheiro</a>
                        </li>
                        <li>
                            <a href="/Namoro">Namoro</a>
                        </li>
                        <li>
                            <a href="/Compra-e-venda">Compra e venda</a>
                        </li>
                        <li>
                            <a href="/mais">Mais</a>
                        </li>
                    </ul>
                </Col>
                <Col sm={6}>
                    <h3>Sobre</h3>
                    <div>
                        <p>
                            Zapgrupos é um agregador de grupos de WhatsApp e Telegram. O principal objetivo do projeto é permitir que você consiga encontrar novos grupos de pessoas para interigir ou divulgar seus grupos.
                        </p>
                    </div>
                    <Row style={{ borderColor: "black" }}>
                                <Col className="text-center">
                                    <FontAwesomeIcon  
                                        className="redes-sociais" 
                                        id="facebook"   
                                        icon={faFacebookSquare}   
                                        size="2x"  
                                        onClick={() => likagem('https://www.facebook.com/zapgrupos.Xyzt')}/>
                                </Col>
                                <Col className="text-center">
                                    <FontAwesomeIcon  
                                        className="redes-sociais" 
                                        id="email"      
                                        icon={faAt}               
                                        size="2x"  
                                        onClick={() => likagem('mailto://contato@mgjobs.cf')}/>
                                </Col>
                                <Col className="text-center">
                                    <FontAwesomeIcon 
                                        icon={faGooglePlay}
                                        className="redes-sociais" 
                                        id="email"      
                                        size="2x"  
                                        onClick={() => likagem('https://play.google.com/store/apps/details?id=com.origin.zapgrupos')} 
                                    />
                                </Col>
                    </Row>
                </Col>
            </Row>
            <div className="foo text-center">
                <h6>Copyright 2022 © Zapgrupos</h6>
            </div>
        </div>
    )
}

export default Index;