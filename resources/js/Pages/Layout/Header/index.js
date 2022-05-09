import React from 'react'
import { Nav, Navbar, Button, NavDropdown, Dropdown, DropdownButton  } from 'react-bootstrap'
import './styles.css'
import Verificado  from './verificado'
//import { InertiaLink } from '@inertiajs/inertia-react'

import ReactGA from 'react-ga';

ReactGA.initialize('UA-207744095-1');

ReactGA.pageview(window.location.pathname + window.location.search);

const NavBarComponent = (props) => {
    const user = props.user
    const verified  =   props.verified
    const authenticated = props.authenticated
    const logoNav = window.location.origin+'/img/logo/logo.png'
    const NavParaAuthenticados = () => {
        return(
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Iniciar</Nav.Link>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Amizade">Amizade</NavDropdown.Item>
                                <NavDropdown.Item href="/Namoro">Namoro</NavDropdown.Item>
                                <NavDropdown.Item href="/Figurinhas e Stickers">Figurinhas e Stickers</NavDropdown.Item>
                                <NavDropdown.Item href="/Esportes">Esportes</NavDropdown.Item>
                                <NavDropdown.Item href="/mais">Mais categorias</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="/comparador">Separated link</NavDropdown.Item> */}
                            </NavDropdown>
                            <Nav.Link href="/gerar-link-whatsapp">Gerar Link</Nav.Link>
                            <Nav.Link href="/meus-grupos">Meus grupos</Nav.Link>
                            <Nav.Link href="/adicionar-grupo">Adicionar grupo</Nav.Link>
                            <Nav.Link href="/logout">Sair</Nav.Link>
                        </Nav>
        )
    }

    const NavParaNaoAuthenticados = () =>{
        return(
            <Nav className="mr-auto">
                <Nav.Link href="/">Iniciar</Nav.Link>
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/Amizade">Amizade</NavDropdown.Item>
                    <NavDropdown.Item href="/Namoro">Namoro</NavDropdown.Item>
                    <NavDropdown.Item href="/Figurinhas e Stickers">Figurinhas e Stickers</NavDropdown.Item>
                    <NavDropdown.Item href="/Esportes">Esportes</NavDropdown.Item>
                    <NavDropdown.Item href="/mais">Mais categorias</NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="/comparador">Separated link</NavDropdown.Item> */}
                </NavDropdown>
                <Nav.Link href="/gerar-link-whatsapp">Gerar Link</Nav.Link>
            </Nav>
        )
    }

    return (
        <Navbar variant="dark" expand="lg" className="d-flex justify-content-between nav-header">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logoNav}
                    width="30%"
                />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                {
                    authenticated ? (
                        <NavParaAuthenticados/>
                    ): (
                        <NavParaNaoAuthenticados/>
                    )
                }


{/*                 <Nav>
                    {
                        authenticated ? (
                        <Dropdown>
                            <DropdownButton variant="success" id="dropdown-basic" title={user}>
                                <Dropdown.Item href="/comparador">Conta</Dropdown.Item>
                                <Dropdown.Item href="/comparador">Configurações</Dropdown.Item>
                                <Dropdown.Item href="/logout">Sair</Dropdown.Item>
                            </DropdownButton>
                        </Dropdown>
                        ) : (
                                <>
                                    <Button variant="success" id="dropdown-basic" title='Login' onClick={() => window.location.href = '/login' }>Login</Button>
                                </>
                        )
                    }

                </Nav> */}
            </Navbar.Collapse>

        </Navbar>
    )
}
const Header = (props) => {
    const user      =   props.user
    const verified  =   props.verified
    const authenticated = props.authenticated
    if(verified){
        return(
            <NavBarComponent user={user} verified={verified} authenticated={authenticated}/>
        );
    }
    return(
        <>
            <Verificado/>
            <NavBarComponent user={user} verified={verified} authenticated={authenticated}/>
        </>
    );



}

export default Header;
