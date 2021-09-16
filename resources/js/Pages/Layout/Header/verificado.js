import React from 'react'
import { Alert } from 'react-bootstrap' 
const Verificado = () => {
    return(
        <Alert variant='warning' className='mb-0'>
            Seu email ainda não foi verificado. Clique Aqui para que possamos reenviar o <a href="email/verification-notification">link</a> de verficação.
        </Alert> 
    );
}

export default Verificado;