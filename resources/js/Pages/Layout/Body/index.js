import React from 'react'
import Header from '../Header'
import { Container } from 'react-bootstrap'
import './style.css' 
const Body = (props) =>{
     return(
        <>
            <Header user={props?.user}  verified={props?.verified} authenticated={props?.authenticated}/>

            <div className="body my-lg-5 px-lg-5">
                    {props?.children}
            </div>
        </>
     )
 }
 export default Body;