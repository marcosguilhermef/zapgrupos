import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight,faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import {  CardInfo,CardInfo2  } from '../Componentes/Cards'

const Carousel = (props) => {
    const carousel = useRef(null)
    const grupos   = props.grupos


    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;

    };
    
    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };
    
    
    const NextPrevious = () => {
        return(
            <>
                <FontAwesomeIcon icon={faChevronCircleLeft} className="mr-2" onClick={handleLeftClick}/>
                {status}
                <FontAwesomeIcon icon={faChevronCircleRight} className="ml-2" onClick={handleRightClick}/>
            </>
        )
    }
    

    return(
        <div>
            <div className="carousel" ref={carousel}>
                {
                    grupos.map(
                        (e,i,a) => (
                            <CardInfo2 {...e}/>
                         )
                    )
                    
                }

            </div>
            <div className="text-center chevrons">
                <NextPrevious/>
            </div>
        </div>
    )
}

export default Carousel;