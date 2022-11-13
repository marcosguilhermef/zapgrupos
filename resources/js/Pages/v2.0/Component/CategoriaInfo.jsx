import React from "react"
import { Image,Button  } from "react-bootstrap"
import "./grupo-info.css"

const Options = (props) => {
    const { categoria, _id, URL } = props
    
    const CATEGORIA_REFORMATADO = categoria?.replaceAll(" ","-")?.toLowerCase() || "outros"

    const URL_ORIGIN = window.location.origin ;
    const URL_BASE = `${URL_ORIGIN}/${CATEGORIA_REFORMATADO}/${_id}`
    const TEXTO_BASE = `Olá, encontrei o link desde grupo no https://zapgrupos.xyz . Creio que vc vai gostar dele: ${URL_BASE}`
    const URL_BASE_WHATSAPP = `https://api.whatsapp.com/send?text=${encodeURI(TEXTO_BASE)}`
    const URL_BASE_TELEGRAM = `https://t.me/share?url=${URL_BASE}&text=${TEXTO_BASE}`
    const URL_BASE_FACEBOOK = `https://www.facebook.com/sharer/sharer.php?u=${URL_BASE})`

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
                        className="btn-entrar w-100">
                            ENTRAR
                    </Button>

                </div>
        </>
    )
}

const Imagem = (props) =>{ 

}

const Index = (props) => {
    const { descricao, _id, categoria, img } = props
    const URL = `/${categoria}`;
    const style = {
        height: "157px",
        width: "300px",
        objectFit: "cover",
    }

    return(
        <div className="py-5 ">
            <div className="grupo-info-root">
                <div className="grupo-info-img">
                {
                        img?.[0] ? (
                            <Image
                                src={img?.[0]}
                                thumbnail="true"
                                onError={(e) => e.target.src = "/img/generico/reactangle.png"}
                                style={style}
                        />
                        ) : (
                            <Image
                            src={'/img/generico/reactangle.png'}
                            width="300px"
                            height="157px"
                            thumbnail="true"
                            style={style}
                        />
                        )
                    }
                </div>
                <div className="grupo-info w-100">
                    <h5>{ categoria }
                    </h5>
                    <div>
                        <p>
                            { descricao }
                        </p>
                    </div>
                    <Options 
                        categoria={categoria} 
                        _id={_id} 
                        URL={URL}
                    />
                </div>
            </div>
        </div>
    );
}

export default Index;