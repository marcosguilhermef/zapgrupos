import React from "react"
import { Image,Button } from "react-bootstrap"
import { Options } from "./Grupo"
import "./grupo-info.css"
const Index = (props) => {
    const { titulo, descricao, sensivel, _id, categoria, img, created_at, updated_at } = props
    const URL = `/grupo/redirect/${_id}`;

    const grupo = () => {
        let url = categoria.toLowerCase().replaceAll(" ","-")
        return `/${url}`;
    }

    function Issensivel(str){
        return !sensivel ? str: "Grupo removido por quebra nossas políticas de conteúdo.";
    }

    return(
        <div className="py-5 ">
            <div className="grupo-info-root">
                <div className="grupo-container">
                    <div className="grupo-info-img">
                    {
                            img?.[0] && !sensivel? (
                                <Image
                                    src={img?.[0]}
                                    thumbnail="true"
                                    onError={(e) => e.target.src = "/img/generico/reactangle.png"}
                            />
                            ) : (
                                <Image
                                    src={'/img/generico/reactangle.png'}
                                    thumbnail="true"
                                />
                            )
                        }
                    </div>
                    <div className="grupo-info">
                        <h5>
                            {
                                Issensivel(titulo)
                            }
                        </h5>
                        <span className="grupo-category">
                            {
                                categoria
                            }
                            <img src="/img/generico/whatsapp.png" class=""/>
                        </span>
                        <div>
                            <span className="d-block">
                                <b>Postado em {created_at}</b>
                            </span>
                            {
                                updated_at ? (
                                        <span className="d-block">
                                            <b>Atualizado em  {updated_at}</b>
                                        </span>
                                    ) : (
                                        <></>
                                    )
                            }
                            <p>
                                { Issensivel(descricao) }
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
            <div className="my-3">
                <Button as="a" href={grupo()} className="btn-whatsapp">
                    Acessar mais grupos da categoria "{categoria}".
                </Button>
            </div>
        </div>
    );
}

export default Index;