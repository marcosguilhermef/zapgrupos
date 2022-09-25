import React from "react";
import { Image, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./grupos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

const Options = (props) => {
    const { categoria, _id, URL } = props
    
    const CATEGORIA_REFORMATADO = categoria?.replaceAll(" ","-")?.toLowerCase() || "outros"

    const URL_ORIGIN = window.location.origin ;
    const URL_BASE = `${URL_ORIGIN}/${CATEGORIA_REFORMATADO}/${_id}`
    const TEXTO_BASE = `Olá, encontrei o link desde grupo no https://zapgrupos.xyz . Creio que vc vai gostar dele: ${URL_BASE}`
    const URL_BASE_WHATSAPP = `https://api.whatsapp.com/send?text=${encodeURI(TEXTO_BASE)}`
    const URL_BASE_TELEGRAM = `https://t.me/share?url=${URL_BASE}&text=${TEXTO_BASE}`
    const URL_BASE_FACEBOOK = `https://www.facebook.com/sharer/sharer.php?u=${URL_BASE}`

    function copy(){
        navigator.clipboard.writeText(TEXTO_BASE);
        alert("Url do grupo copiada com sucesso!")
    }

    return(
        <>
                <div className="grupo-options">
                    <hr/>
                    <Button 
                        as="a"
                        href={URL || URL_BASE}
                        alt="Entrar no grupo"
                        className="btn-entrar">
                            ENTRAR
                    </Button>

                    <Button
                        as="a"
                        href={URL_BASE_FACEBOOK}
                        className="btn-facebook">
                            <Image
                                src="/img/logo/facebook.png"
                                width="20px"
                            />
                    </Button >

                    <Button 
                            className="btn-whatsapp"
                            as="a"
                            href={URL_BASE_WHATSAPP}
                        >
                            <Image
                                    src="/img/logo/whatsapp.png"
                                    width="20px"
                                />
                    </Button>

                    <Button 
                        as="a"
                        href={URL_BASE_TELEGRAM}
                        className="btn-telegram">
                            <Image
                                    src="/img/logo/telegram.png"
                                    width="20px"
                                />
                    </Button>
                    
                    <Button 
                        onClick={ () => copy()}
                        className="btn-share">
                        <FontAwesomeIcon
                            icon={faCopy}
                        />
                    </Button>
                    
                </div>
        </>
    )
}

const Grupo = (props) => {
    
    const { titulo, descricao, _id, categoria, img } = props



    const GroupImage = () => {
        return(
            <div className="grupo-image">
                    {
                        img?.[0] ? (
                            <Image
                                src={img?.[0]}
                                thumbnail="true"
                        />
                        ) : (
                            <Image
                                src={'/img/generico/reactangle.png'}
                                thumbnail="true"
                            />
                        )
                    }

            </div>
        )
    }

    const GroupInformationContainer = () => {
        return(
            <div className="grupo-informations">
            <h6>{ titulo }</h6>
            <span className="grupo-category">
                { categoria } <img src="/img/generico/whatsapp.png" class=""/>
            </span>
            
            <p className="grupo-descricao">
                { descricao.substring(0,150)}
            </p>
            <Options categoria={categoria} _id={_id}/>
        </div>
        )
    }



    return(
        <div className="grupo-root">
            <div className="grupo-container">
                <GroupImage/>
                <GroupInformationContainer/>
            </div>
        </div>
    );
}

export {Grupo,Options};