import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card } from '../components/Card';
import { Layout } from '../layouts/Layout';

export const Details = ({ data }) => {
  const [event, setEvent] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true)
  const eventos = useSelector((state) => state.eventos);


  useEffect(() => {
    setTimeout(() => {
      setEvent(eventos.filter(event => event._id == id))
      setLoading(false)
    }, 1000);
  }, [])
  return (
    <Layout data={data}>
      <Card loading={loading} event={event} />
    </Layout>
  )
}
