import React ,{useEffect, useRef, useState}from 'react'
import { Provider } from 'react-redux';
import { Container, Button, Spinner } from 'react-bootstrap'; 
import './app.css'
const Index = (props) => {
    const {verified, authenticated, titulo, url} = {...props} 

    const [clicked, setClicked] = useState(false)
    const [status, setStatus]   = useState('Liberar')
    const [time, setTime]       = useState(10)
    const [intervaelId, setItervalId]   = useState()
    const redirectLink = "https://glugreez.com/4/4563780"
  
    function firstClick(){
        setClicked(true)
        redirect(redirectLink)
    }

    function allowLink(){
        redirect(url)
    }

    function redirect(link){
        window.open(link,'_blank')
    }

    function Contador(){
        let interval = setInterval( () => {
            setTime(value => value-1)
        },1000)

        setItervalId(interval)

        setTimeout(() => {
            setStatus('Entrar')
        },time*1000)
    }

    useEffect( () => {
        if(clicked){
            setStatus('Aguardar')
            Contador()
        }

    },[clicked])

    useEffect( () => {
        if(!time){
            clearInterval(intervaelId)
        }
    },[time])
    const ButtonLink = () => {
        switch(status){
            case 'Liberar': 
            return (<Button onClick={() => firstClick()}>{ status }</Button>);
            break;
            case 'Aguardar':
            return (
                <Button variant="primary">
                    <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    onClick={()=>firstClick()}
                    />    
                    <span className="visually-hidden">{time} segundos.</span>
                </Button>
            );
            case 'Entrar':
            return (<Button onClick={() => allowLink()}>{ status }</Button>);
            break;
            default:
                return console.log(`Sorry, we are out of ${status}.`);
        }
    }
    return(
        <Container className="text-center">
            <div className="align-self-center">
                    <p>
                        Para poder entrar no grupo, você deve clicar no botão abaixo e aguardar { time } segundos. { clicked }
                    </p>
                    <ButtonLink/>
            </div>
        </Container>
    )
}

export default Index;