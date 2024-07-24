import React from 'react'
import { Contact } from '../components/Contact'
import { Layout } from '../layouts/Layout'

export const Contacts = ({data}) => {
  return (
    <Layout data={data}>
        <Contact />
    </Layout>
  )
}
