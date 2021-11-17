import React, {useEffect, useRef, useState} from 'react'
import Layout from '../../Layout'
import { Container, Form, Button, Row, Col} from 'react-bootstrap';

const Index = (props) => {
    const {user,verified,authenticated, categorias, _token} = {...props}
    const url = "https://api.whatsapp.com/send?";

    const refTelefone = useRef(null)
    const link        = useRef(url);
    const [ dados , setDados ] = useState({})

    const formatTelefone = (event) => {
        let string = event.target.value
        refTelefone.current.value = string
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d{1})/, "$1-$2")
            .replace(/(\d{5})(\d{2})/, "$1-$2")
            .replace(/(\d{5})(\d{3})/, "$1-$2")
            .replace(/(\d{5})(\d{4})+?$/, "$1-$2")
    }

    const handleChange = (event) => {
        let { name, value } = event.target
        if(name === 'phone'){
            value = telefoneParametrizar(value);
        }
        setDados({
            ...dados,
            [name]: value
        });
    }
    const telefoneParametrizar = (number) => {
        return number
            .replaceAll(/\(|\)|\s|\-/gi,"")
            .replace(/(\d+)/,"55$1")
    }

    const copiar = () => {
        let linkGerado = link.current;
        if(!navigator.clipboard){
            linkGerado.focus();
            linkGerado.select();
            document.execCommand('copy');
        }
        navigator.clipboard.writeText(linkGerado.value)
    }
    const gerarLink =() => {
        link.current.value = url+new URLSearchParams(dados).toString()

    }

    useEffect(() => {
        gerarLink()
    })

    return(
        <Layout user={user} verified={verified} authenticated={authenticated}>
            <Container>
                <h1 className="text-center my-4">Gerador de link para Whatsapp</h1>
                <h3>Como gerar o seu link?</h3>
                    <ul className="mt-5">
                        <li>
                            Insira o seu número de whtatspp;
                        </li>
                        <li>
                            Escreva a mensagem padrão que será enviada pelo whatsapp;
                        </li>
                        <li>
                            Clique em gerar link;
                        </li>
                        <li>
                            Teste para ver se tudo está funcionando corretamente.
                        </li>
                    </ul>
                <div className="mt-5">
                    <Form.Group>
                        <Form.Label>Número do celular:</Form.Label>
                        <Form.Control
                            name="phone"
                            maxLength="15"
                            onChange={(event) => {
                            formatTelefone(event);
                            handleChange(event)
                        }} placeholder="(DDD) 0 0000 0000" ref={refTelefone}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mensagem:</Form.Label>
                        <Form.Control
                            name="text"
                            onChange={handleChange}
                            maxLength="300"
                            as="textarea"
                            rows={3}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Link:</Form.Label>
                        <Form.Control name="link" disabled={true} ref={link}/>
                    </Form.Group>
                </div>
                <div className="text-center">
                    <Button className="w-100" onClick={copiar} variant="success">
                        Copiar link
                    </Button>
                </div>
            </Container>
        </Layout>
    )
}

export default Index;
