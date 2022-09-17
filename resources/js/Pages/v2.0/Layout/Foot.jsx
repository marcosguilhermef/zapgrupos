import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import "./foot.css"

const Foot = (props) => {

    return (
            <div>
                <div className="foot-root">
                    <hr className="hr-1"/>

                    <div className="footery px-5 py-3">  
                        <Row>
                            <Col sm={4}>
                                <h3>Categorias</h3>
                                <ul className="foot-categorias">
                                    <li><a href="/Amizade">Amizade</a></li>
                                    <li><a href="/TV">TV</a></li>
                                    <li><a href="/Ganhar Dinheiro">Ganhar Dinheiro</a></li>
                                    <li><a href="/Negócios & Empreendedorismo">Negócios & Empreendedorismo</a></li>
                                    <li><a href="/Redes Sociais">Redes Sociais</a></li>
                                    <li><a href="/Namoro">Namoro</a></li>
                                    <li><a href="/Games e Jogos">Games e Jogos</a></li>
                                    <li><a href="/Outros">Outros</a></li>
                                    <li><a href="/Desenhos e Animes">Desenhos e Animes</a></li>
                                    <li><a href="/Amor e Romance">Amor e Romance</a></li>
                                    <li><a href="/Filmes e Séries">Filmes e Séries</a></li>
                                    <li><a href="/Memes, Engraçados e Zoeira">"Memes, Engraçados e Zoeira"</a></li>
                                    <li><a href="/Notícias">Notícias</a></li>
                                    <li><a href="/Figurinhas e Stickers">Figurinhas e Stickers</a></li>
                                    <li><a href="/Futebol">Futebol</a></li>
                                    <li><a href="/Emagrecimento e Perda de Peso">Emagrecimento e Perda de Peso</a></li>
                                    <li><a href="/Frases e Mensagens">Frases e Mensagens</a></li>
                                    <li><a href="/Música">Música</a></li>
                                    <li><a href="/Política">Política</a></li>
                                    <li><a href="/Eventos">Eventos</a></li>
                                    <li><a href="/Vagas de Empregos">Vagas de Empregos</a></li>
                                    <li><a href="/Links">Links</a></li>
                                </ul>
                            </Col>
                            <Col sm={4}>
                                <ul className="foot-categorias">
                                    <li><a href="/Vídeos">Vídeos</a></li>
                                    <li><a href="/Esportes">Esportes</a></li>
                                    <li><a href="/Compra e Venda">Compra e Venda</a></li>
                                    <li><a href="/Religião">Religião</a></li>
                                    <li><a href="/Moda e Beleza">Moda e Beleza</a></li>
                                    <li><a href="/Educação">Educação</a></li>
                                    <li><a href="/Fãs">Fãs</a></li>
                                    <li><a href="/Tecnologia">Tecnologia</a></li>
                                    <li><a href="/Viagem e Turismo">Viagem e Turismo</a></li>
                                    <li><a href="/Investimentos e Finanças">Investimentos e Finanças</a></li>
                                    <li><a href="/Concursos">Concursos</a></li>
                                    <li><a href="/Profissões">Profissões</a></li>
                                    <li><a href="/Cidades">Cidades</a></li>
                                    <li><a href="/Carros e Motos">Carros e Motos</a></li>
                                    <li><a href="/Imobiliária">Imobiliária</a></li>
                                    <li><a href="/Receitas">Receitas</a></li>
                                    <li><a href="/Trabalho">Trabalho</a></li>
                                    <li><a href="/Voo Livre">Voo Livre</a></li>
                                    <li><a href="/LGBTQIA+">LGBTQIA+</a></li>
                                    <li><a href="/Free Fire">Free Fire</a></li>
                                    <li><a href="/mais">Mais</a></li>
                                </ul>
                            </Col>
                            <Col sm={4}>
                                <h3>Sobre</h3>
                                <div>
                                    <p>
                                        Zapgrupos é um agregador de grupos de WhatsApp e Telegram. O principal objetivo do projeto é permitir que você consiga encontrar novos grupos de pessoas para interigir ou divulgar seus grupos.
                                    </p>
                                </div>
                                <hr/>
                                <div className="redes-sociais-grupo">
                                <h5>Entre em contato através:</h5>
                                        <FontAwesomeIcon
                                            className="redes-sociais"
                                            id="facebook"
                                            icon={faFacebookSquare}
                                            onClick={() => likagem('https://www.facebook.com/zapgrupos.Xyzt')} />
                                        <FontAwesomeIcon
                                            className="redes-sociais"
                                            id="email"
                                            icon={faAt}
                                            onClick={() => likagem('mailto://contato@mgjobs.cf')} />
                                </div>
                                <hr/>
                                <div className="faca-download-grupo">
                                    <h5>Faça Download do app:</h5>
                                        <FontAwesomeIcon
                                            icon={faGooglePlay}
                                            className="redes-sociais"
                                            id="email"
                                            onClick={() => likagem('https://play.google.com/store/apps/details?id=com.origin.zapgrupos')}
                                        />
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <hr/>

                    <div className="foo text-center">
                        <h6 className="py-2">Copyright 2022 © Zapgrupos</h6>
                    </div>
                </div>
            </div>
    )
}

export { Foot }