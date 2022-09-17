import React from "react";
import { Image, Button } from "react-bootstrap";
import "./grupos.css"



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
                            width="250rem"
                            height="250rem"
                        />
                        )
                    }

            </div>
        )
    }

    const GroupInformationContainer = () => {
        return(
            <div className="grupo-informations">
            <h5>{ titulo }</h5>
            <span className="grupo-category">
                { categoria } <img src="/img/generico/whatsapp.png" class=""/>
            </span>
            
            <p className="grupo-descricao">
                { descricao.substring(0,150)}
            </p>
            <Options/>
        </div>
        )
    }

    const Options = () => {
        return(
            <>
                    <div className="grupo-options">
                        <hr/>
                        <Button className="btn-entrar">
                            ENTRAR
                        </Button>
                        <Button className="btn-facebook">
                            <Image
                                src="/img/logo/facebook.png"
                                width="20px"
                            />
                        </Button >
                        <Button className="btn-whatsapp">
                            <Image
                                    src="/img/logo/whatsapp.png"
                                    width="20px"
                                />
                        </Button>
                        <Button className="btn-telegram">
                            <Image
                                    src="/img/logo/telegram.png"
                                    width="20px"
                                />
                        </Button>
                    </div>
            </>
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

export {Grupo};