import React from 'react'
import { Nav, Navbar, Button, NavDropdown, Dropdown, DropdownButton  } from 'react-bootstrap'
import './styles.css'
import Verificado  from './verificado'
import { default as ReactGA } from 'react-ga';
import { default as ReactGA4 } from 'react-ga';
import NavBarComponent from './NavBarComponent'

ReactGA.initialize('UA-207744095-1');
ReactGA4.initialize('G-FHYP3WSQ38')

ReactGA.pageview(window.location.pathname + window.location.search);

ReactGA4.send(
    { 
        hitType: "pageview", 
        page: window.location.pathname + window.location.search 
    }
);

const Header = (props) => {

    const { verified } = { ...props }
    if(verified){
        return(
            <>
                <NavBarComponent { ...props }/>
            </>
        );
    }
    return(
        <>
            <Verificado/>
            <NavBarComponent { ...props }/>
        </>
    );
}

export default Header;
