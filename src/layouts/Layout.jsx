import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar/Navbar'

export const Layout = ({children,data,cantidad}) => {
  return (
    <>
        <Navbar/>
        <Header data={data} cantidad={cantidad} />
        {children}
        <Footer />
    </>
  )
}
