import React from 'react'
import {  Button, Nav, Navbar, Container } from 'react-bootstrap'
import "./header.css"

function verifyAuth(){

}

const Header = (props) => {
    const { user, verified, authenticated, role } =  { ...props }

    if(verifyAuth(authenticated)){
        return(
            <LogedUser 
                user={user}
                verified={verified}
                role={role}
            />
        )
    }

    return(
        <NoAuth                 
            user={user}
            verified={verified}
            role={role}
        />
    )
}

const LogedUser = (props) => {
    const {user, verified, role} = props

    if(role == "admin"){
        return(
            <Admin role={role} user={user}/>
        )
    }

    if(role == "user"){
        return(
            <User role={role} user={user}/>
        )
    }
}

const Admin = (props) => {
    const {user, role} = props
    return(
        <Sckelleton>
            <Nav.Link href="/">Página inicial</Nav.Link>
            <Nav.Link href="/lista-de-grupos">Lista de grupos</Nav.Link>
            <Nav.Link href="/lista-de-usuarios">Lista de usuários</Nav.Link>
            <Nav.Link href="/denuncias">Denúncias</Nav.Link>
            <Nav.Link href="/categorias">Categorias</Nav.Link>
            <Nav.Link href="/artigos">Artigos</Nav.Link>
            <Nav.Link href="/logout">Sair</Nav.Link>
        </Sckelleton>
    );
}

const User = (props) => {
    const {user, role} = props
    return(
        <Sckelleton>
            <Nav.Link href="/">Página inicial</Nav.Link>
            <Nav.Link href="/categorias">Categorias</Nav.Link>
            <Nav.Link href="/gerar-link-whatsapp">Gerar Link</Nav.Link>
            <Nav.Link href="/meus-grupos">Meus grupos</Nav.Link>
            <Nav.Link href="/adicionar-grupo">Adicionar Grupo</Nav.Link>
            <Nav.Link href="/artigos">Artigos</Nav.Link>
            <Nav.Link href="/logout">Sair</Nav.Link>
        </Sckelleton>
    );
} 


const NoAuth = (props) => {
    const {user, role} = props
    return(
        <Sckelleton>
            <Nav.Link href="/">Página inicial</Nav.Link>
            <Nav.Link href="/mais">Categorias</Nav.Link>
            <Nav.Link href="/gerar-link-whatsapp">Gerar link de compartilhamento</Nav.Link>
            <Nav.Link href="/artigos">Artigos</Nav.Link>
        </Sckelleton>
    );
}


const Sckelleton = (props) => {
    const { children } = props
    return(
        <Navbar className="bg-color" expand="lg">
                <Container>
                    <Navbar.Brand className="navbar-font" href="#">
                    <img
                        src="/img/logo/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />{' '}
                        Zapgrupos
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            { children }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>   
    )
}



export {Header}