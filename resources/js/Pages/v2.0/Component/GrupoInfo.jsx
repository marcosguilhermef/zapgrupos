import React from "react"
import { Image,Button } from "react-bootstrap"
import { Grupo } from "./Grupo"
import "./grupo-info.css"
const Index = (props) => {
    const { titulo, descricao,type,sensivel, _id, categoria, img, created_at, updated_at } = props
    const URL = `/grupo/redirect/${_id}`;

    const grupo = () => {
        let url = categoria.toLowerCase().replaceAll(" ","-")
        return `/${url}`;
    }

    function Issensivel(str){
        return !sensivel ? str: "Grupo removido por quebra nossas políticas de conteúdo.";
    }
    

    return(
        <Grupo 
            titulo={ titulo }
            descricao={ descricao }
            categoria={ categoria }
            img={ img }
            _id={ _id }
            key={ _id}
            sensivel={sensivel}
            created_at={created_at}
            updated_at={updated_at}
            isInfo={true}
            type={type}
        />
    );
}

export default Index;