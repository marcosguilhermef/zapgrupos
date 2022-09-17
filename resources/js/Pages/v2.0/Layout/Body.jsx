import React from "react";
import { Container } from "react-bootstrap";

const Body = (props) => {
    const { children } = props
    return(
        <Container className="my-5" style={{ background: "#fff" }}>
            { children }
        </Container>
    )
}

export {Body}