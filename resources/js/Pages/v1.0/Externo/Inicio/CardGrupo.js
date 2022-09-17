import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight,faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import {  makeOneRequest, setStatus, setGrupos } from '../../../Api/requets/request'
import { CardWait, CardInfo, CardAds } from '../Componentes/Cards'

const CardGrupo = (props) => {
    const carousel = useRef(null)

    const dados = useSelector( dados => dados.grupos )
    const grupos = useSelector( dados => dados.grupos.grupos?.data || [] )
    const status = useSelector( dados => dados.grupos.status  )
    const current_page = useSelector( dados => dados.grupos.grupos?.current_page  )
    const last_page = useSelector( dados => dados.grupos.grupos?.last_page  )

    const {api} = {...props}

    const dispatch = useDispatch()

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;

    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
        dispararNovaPagina();
    };
    const dispararNovaPagina = () => {
        let avaliacao = carousel.current.offsetWidth + carousel.current.scrollLeft >= carousel.current.scrollWidth
        if(avaliacao){
            if(status !== 'await' &&  (current_page < last_page)){
                dispatch(setStatus('await'))
                makeRequest(current_page)
            }

        }
    }
    const makeRequest = (page) => {
        page = (page+1)
        dispatch(makeOneRequest({
            'link': api,
            'action': setGrupos,
            'status': setStatus,
            'parameter': '?page='+page
        }));
    }
    const NextPrevious = () => {
        return(
            <>
                <FontAwesomeIcon icon={faChevronCircleLeft} className="mr-2" onClick={handleLeftClick}/>
                {
                    status == 'ok'
                    ?
                    <FontAwesomeIcon icon={faChevronCircleRight} className="ml-2" onClick={handleRightClick}/>
                    :
                    <FontAwesomeIcon icon={faChevronCircleRight} className="ml-2"/>
                }
            </>
        )
    }

    useEffect( () => {
        makeRequest(0)
    } ,[])
   

    return(
        <div>
            <div className="carousel" ref={carousel} onScroll={dispararNovaPagina}>

                {
                    grupos.map(
                        (e,i,a) => (
                            <>
                                <CardInfo {...e} />
                                {/* { i%3 === 0 ? <CardAds /> : ''} */}
                            </>

                    )
                    )

                }
                {
                    status != 'ok' ? <CardWait ativo={false}/> : <CardWait ativo={true}/>
                }


            </div>
            <div className="text-center chevrons">
                <NextPrevious/>
            </div>
        </div>
    )
}

export default CardGrupo
