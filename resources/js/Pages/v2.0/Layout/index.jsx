import React from "react";
import { Body } from "./Body";
import { Header } from "./Header";
import { Foot } from "./Foot"
import { Ads } from '../Component/Grupo'
import "./layout.css"

const Layout = (props) => {
    const { user, verified, authenticated, role, children } =  { ...props }
    return(
        <>
            <Header 
                    user={user}
                    verified={verified}
                    authenticated={authenticated}
                    role={role}
                />
            <Body>
                { children }
            </Body>
            <Ads />
            <Foot/>
        </>
    )
}

export default Layout;
export { Body, Header, Foot }