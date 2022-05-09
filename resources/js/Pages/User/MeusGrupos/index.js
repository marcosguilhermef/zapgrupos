import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../Layout'
import { Container, Tabs, Tab, Form, Button } from 'react-bootstrap';

const Index = (props) => {
    const { user, verified, authenticated } = { ...props };
    return (
        <Layout
            user={!user}
            verified={!verified}
            authenticated={!authenticated}
        >
            <Container>

            </Container>
        </Layout>
    )
}

export default Index;