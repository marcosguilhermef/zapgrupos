
import React from 'react'
import { Nav, Navbar, NavDropdown  } from 'react-bootstrap'


const NavBarComponent = (props) => {

    console.log(props)

    const { user, verified, authenticated, role } =  { ...props }
    const logoNav = window.location.origin+'/img/logo/logo.png'

    const NavParaAuthenticados = () => {
        if(role == "admin"){
            return(<Admin/>)
        }
        else if(role == "user"){
            return(<User/>)
        }
        
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

            </Navbar.Collapse>

        </Navbar>
    )
}

const Admin = () => {
    return(
        <Nav className="mr-auto">
            <Nav.Link href="/">Iniciar</Nav.Link>
            <Nav.Link href="/lista-de-grupos">Lista de grupos</Nav.Link>
            <Nav.Link href="/lista-de-usuarios">Lista de usuários</Nav.Link>
            <Nav.Link href="/logout">Sair</Nav.Link>
        </Nav>
)
}
const User = () => {
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
export default NavBarComponent;