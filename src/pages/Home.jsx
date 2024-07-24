import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Cards } from '../components/Cards'
import { Form } from '../components/Form'
import { Layout } from '../layouts/Layout'
import eventosActions from '../store/actions/eventosActions'
import filtroActions from '../store/actions/filtrosActions'

export const Home = ({ data }) => {
  const [categorias, setCategorias] = useState([])
  const [filtrar, setFiltrar] = useState([]);
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const filtro = useSelector((state) => state.filtro)

  useEffect(() => {
    setLoading(true)
    dispatch(eventosActions.get_eventos())
      if (pathname == "/upcoming") {
        dispatch(filtroActions.filtro_Futuros())
      } else if (pathname == "/past") {
        dispatch(filtroActions.filtro_Pasados())
      } else {
        dispatch(filtroActions.get_filtro())
      }

      setTimeout(() => {
        setLoading(false)
      }, 1000);
  
  }, [pathname])

  useEffect(() => {
    setCategorias(filtro.map(evento => evento.category).filter((elemento, indice, arreglo) => arreglo.indexOf(elemento) === indice));
  }, [filtro])


  return (
    <Layout data={data}>
      {
        loading
          ?
          <div className='loading'>
            <h1>Cargando </h1>
            <div>
              <span className="loader"></span>
            </div>
          </div>
          :
          <>
            <Form categorias={categorias} filtro={filtro} setFiltrar={setFiltrar} />
            <Cards filtrar={filtrar} />
          </>
      }
    </Layout>
  )
}
