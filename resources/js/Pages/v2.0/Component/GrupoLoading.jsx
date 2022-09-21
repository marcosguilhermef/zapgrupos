import React from "react";
import { Image, Placeholder, Card  } from "react-bootstrap";

import "./grupos.css"

const Img = () => {}

const GrupoLoading = (props) => {
    
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

    return(
    <div className="grupo-root">
            <div className="grupo-container">
                <GroupImage/>
                <div className="grupo-informations">
                    <Placeholder as="h5" animation="wave">
                            <Placeholder style={{ width: "50%" }} />           
                    </Placeholder>
                    <span className="grupo-category">
                        <Placeholder animation="wave">
                            <Placeholder style={{ width: "20%" }} />           
                        </Placeholder>
                    </span>
                    
                    <p className="grupo-descricao" style={{ width: "100%" }} >
                        <Placeholder animation="wave">
                            <Placeholder style={{ width: "100%" }} />           
                        </Placeholder>
                        <Placeholder animation="wave">
                            <Placeholder style={{ width: "100%" }} />           
                        </Placeholder>
                        <Placeholder animation="wave">
                            <Placeholder style={{ width: "100%" }} />           
                        </Placeholder>
                        <Placeholder animation="wave">
                            <Placeholder style={{ width: "35%" }} />           
                        </Placeholder> 
                    </p>
                    <hr/>
                </div>
            </div>
        </div>
    );
}

export {GrupoLoading};