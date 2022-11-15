import React from "react";
import { Body } from "./Body";
import { Header } from "./Header";
import { Foot } from "./Foot"
import Ads  from '../Component/Ads'
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

            <Ads 
                path='/22764566987/5ca26276-6452-11ed-81ce-0242ac120002'
                size={[728, 90]}
                id='div-gpt-ad-1668454181285-0'
                style={{
                    minWidth: "728px", 
                    minHeight: "90px", 
                    marginTop: "25px",
                    marginBotton: "25px",
                    textAlign: "center",
                    position: "relative",
                    display: "block"
                }}
            />

            <Foot/>
        </>
    )
}

export default Layout;
export { Body, Header, Foot }