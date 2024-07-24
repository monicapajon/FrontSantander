import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dataTable, estadiaticasEventos, estadisticasEventosFuturos, estadisticasEventosPasados } from '../../utils/dataTables';
import { Table } from '../Table';
import './style.css';

export const Stast = () => {
    const eventos = useSelector((state) => state.eventos) 
    const [stast, setStast] = useState([])
    const [dataPast, setdataPast] = useState([]);
    const [dataPost, setdataPost] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setStast(estadiaticasEventos(eventos));
        setdataPast(estadisticasEventosPasados(eventos));
        setdataPost(estadisticasEventosFuturos(eventos));
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [])

    return (
        <section className="tabla">
            {
                loading ?
                    <div className='loading'>
                        <h1>Cargando </h1>
                        <div>
                            <span className="loader"></span>
                        </div>
                    </div>
                    :
                    <>
                        <Table dataTable={dataTable[0]} stast={stast} />
                        <Table dataTable={dataTable[1]} dataPast={dataPast} />
                        <Table dataTable={dataTable[2]} dataPost={dataPost} />
                    </>

            }
        </section>
    )
}
