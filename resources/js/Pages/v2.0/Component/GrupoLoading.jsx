import React from "react";
import { Image, Placeholder, Card  } from "react-bootstrap";

import "./grupos.css"
const GrupoLoading = (props) => {
    const descricao = "Aqui temos um grupo de empreendedorimos e aprendizadoAqui temos um grupo de empreendedorimos e aprendizadoAqui temos um grupo de empreendedorimos e aprendizadoAqui temos um grupo de empreendedorimos e aprendizado                       Aqui temos um grupo de empreendedorimos e aprendizadoAqui temos um grupo de empreendedorimos e aprendizadoAqui temos um grupo de empreendedorimos e aprendizadoqui temos um grupo de empreendedorimos e aprendizadoAqui temos um grupo de empreendedorimos e aprendizadoAqui temos um grupo de empreendedorimos e aprendizadoAqui temos um grupo de empreendedorimos e aprendizado"
    return(
        <div className="grupo-root">
            <div className="grupo-container">
                <div className="grupo-image">
                    <Image
                        src="/img/generico/reactangle.png"
                        width="250rem"
                        height="250rem"
                    />
                </div>
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