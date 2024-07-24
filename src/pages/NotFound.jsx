import React from 'react'
import { Layout } from '../layouts/Layout'
import { NotFound as NotPage } from '../components/NotFound';

export const NotFound = ({title}) => {
    return (
        <Layout>
            <NotPage title={title} />
        </Layout>
    )
}
