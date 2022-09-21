import React from "react"
import { Image } from "react-bootstrap"
import { Options } from "./Grupo"
import "./grupo-info.css"
const Index = (props) => {
    const { titulo, descricao, _id, categoria, img } = props
    const URL = `/grupo/redirect/${_id}`;

    return(
        <div className="py-5 ">
            <div className="grupo-info-root">
                <div className="grupo-info-img">
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
                <div className="grupo-info">
                    <h5>
                        {
                            titulo
                        }
                    </h5>
                    <span className="grupo-category">
                        {
                            categoria
                        }
                        <img src="/img/generico/whatsapp.png" class=""/>
                    </span>
                    <div>
                        <p>
                            { descricao }
                        </p>
                    </div>
                    <Options categoria={categoria} _id={_id} URL={URL}/>
                </div>
            </div>
        </div>
    );
}

export default Index;