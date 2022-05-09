import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Row, Col } from 'react-bootstrap'
import './style.css' 
const Body = (props) =>{
    const [height, setHeight] = useState(screen.height)
    const [width, setWidth] = useState(screen.width)

    useEffect( () =>{
        setHeight(screen.height)
        setWidth(screen.width)
    })
    return(
        <>
            <Header user={props?.user}  verified={props?.verified} authenticated={props?.authenticated}/>
            <div className="body my-lg-5 px-lg-5 h-100">
                    {props?.children}
            </div>
            <Footer/>
        </>
     )
 }
 export default Body;