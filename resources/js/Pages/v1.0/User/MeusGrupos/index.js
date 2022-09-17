import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../Layout'
import { Container, Table, Image } from 'react-bootstrap';
import "./style.css"
import dateFormat, { masks } from "dateformat";


const Index = (props) => {
    const { data, next_page_url, prev_page_url } = { ...props };
    return (
        <Layout
            {...props}
        >
            <Container>
                <h1 className="text-center">Lista de grupos</h1>
                <Table>
                    <thead>
                        <tr>
                            <th colSpan="2">
                                Grupo
                            </th>
                            <th>
                                Status do grupo
                            </th>
                            <th>
                                Sensível
                            </th>
                            <th>
                                Criação
                            </th>
                            <th>
                                Atualização
                            </th>
                            <th>

                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                {
                    data?.map( (e,i) => (
                        <tr>
                            <td>
                                {
                                    e["titulo"] ? e["titulo"] : "Sem título"
                                }
                            </td>

                            <td>
                                {
                                    
                                    e.img?.[0] ? (
                                            <Image className="gruoup-img"  style={{ width: "100px" }} src={e?.img?.[0]} onError={(e) => e.target.src = "/img/generico/reactangle.png"} />
                                            )
                                            :
                                            (
                                                <Image className="gruoup-img" style={{ width: "100px" }} src='/img/generico/reactangle.png' />
                                            )
                                    
                                }
                            </td>

                        
                            <td>
                                {
                                    e?.ativo?.toString()
                                }
                            </td>


                            <td>
                                {
                                    e?.sensivel?.toString()
                                }
                            </td>

                            <td>
                                {
                                    dateFormat(e?.updated_at, "d/m/yyyy H:MM:s")
                                }
                            </td>

                            <td>
                                {
                                    dateFormat(e?.created_at, "d/m/yyyy H:MM:s")

                                }
                            </td>

                            <td>
                                <a href={window.location.origin + `/${e?.categoria}/${e?._id}` }>Ver grupo</a>
                            </td>

                            <td>
                                <a href={window.location.origin + `/editar/${e?._id}` }>Editar</a>
                            </td>
                        </tr>
                    ))
                } 
                </Table>
                <div className='text-center'>
                    <a href={prev_page_url}>Anterior</a> | <a href={next_page_url}>Proxímo</a>
                </div>
            </Container>
        </Layout>
    )
}

export default Index;