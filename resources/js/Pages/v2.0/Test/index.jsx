import React from 'react'
import Layout ,{ Header, Body, Foot } from '../Layout'
const Index = (props) => {
    const { user, verified, authenticated, role } =  { ...props }
    return(
        <Layout {...props}>
           <h1>TESTE V2.0</h1>
        </Layout>
    )
}

export default Index;