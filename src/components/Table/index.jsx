import React, { useEffect, useState } from 'react'

export const Table = ({ dataTable, stast, dataPast,dataPost }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td colSpan="3">
                        {dataTable.titulo}
                    </td>
                </tr>
                <tr>
                    {
                        dataTable.filas?.map((valor, index) => (
                            <th key={index}>{valor}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    stast != undefined ?
                        <tr>
                            {
                                stast.map((estadisticas, index) => (
                                    <td key={index}>
                                        <b>{estadisticas.name}
                                            <em>

                                                {
                                                    estadisticas.assistance
                                                        ? ` - ${Math.round(((estadisticas.assistance * 100) / estadisticas.capacity))} %`
                                                        : ` - ${estadisticas.capacity}`
                                                }
                                            </em>
                                        </b>
                                    </td>
                                ))
                            }
                        </tr>
                        : <></>

                }
                {
                    dataPast
                        ?
                        <>
                            {
                                dataPast.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.categoria}</td>
                                        <td>${item.ingresos}</td>
                                        <td>{item.porcentaje} %</td>
                                    </tr>
                                ))
                            }
                        </>
                        : <></>
                }
                {
                    dataPost
                        ?
                        <>
                            {
                                dataPost.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.categoria}</td>
                                        <td>${item.ingresos}</td>
                                        <td>{item.porcentaje} %</td>
                                    </tr>
                                ))
                            }
                        </>
                        : <></>
                }

            </tbody>
        </table>
    )
}
