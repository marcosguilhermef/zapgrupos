import React from 'react'
import { Nav, Navbar, Button, NavDropdown, Dropdown, DropdownButton  } from 'react-bootstrap'
import './styles.css'
import Verificado  from './verificado'
//import { InertiaLink } from '@inertiajs/inertia-react'

//import ReactGA from 'react-ga';

//ReactGA.initialize('UA-185476496-1');

//ReactGA.pageview(window.location.pathname + window.location.search);

const NavBarComponent = (props) => {
    const user = props.user 
    const verified  =   props.verified
    const authenticated = props.authenticated
    const logoNav = window.location.origin+'/images/logo2.svg'
    const NavParaAuthenticados = () => {
        return(
                        <Nav className="mr-auto">
                            <Nav.Link href="/comparador">Comparador</Nav.Link>
                            <NavDropdown title="Informações" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/banca">Bancas</NavDropdown.Item>
                                <NavDropdown.Item href="/adicionar-banca">Reinvindicar Banca</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="/comparador">Separated link</NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
        )
    }

    const NavParaNaoAuthenticados = () =>{
        return(
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Comparador</Nav.Link>
                            <Nav.Link href="/banca">Bancas</Nav.Link>
                            <Nav.Link href="/">Sobre</Nav.Link>
                        </Nav>
        )
    }

    return (
        <Navbar bg="light" expand="lg" className="d-flex justify-content-between">
            <Navbar.Brand href="/comparador" 
>
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
                

                <Nav>
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
                    
                </Nav>
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