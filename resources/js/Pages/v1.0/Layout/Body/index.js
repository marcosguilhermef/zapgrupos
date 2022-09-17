import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Row, Col } from 'react-bootstrap'
import './style.css' 
const Body = (props) =>{
    const [height, setHeight] = useState(screen.height)
    const [width, setWidth] = useState(screen.width)
    const { user, verified, authenticated, role, children } = { ...props }


    useEffect( () =>{
        setHeight(screen.height)
        setWidth(screen.width)
    })

    return(
        <>
            <Header {...props} />
                <div className="body my-5 px-lg-5 h-100">
                    {children}
                </div>
            <Footer/>
        </>
     )
 }
 export default Body;