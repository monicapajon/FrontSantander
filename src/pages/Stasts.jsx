import React from 'react';
import { Stast } from '../components/Stast';
import { Layout } from '../layouts/Layout';

export const Stasts = ({data}) => {
  return (
    <Layout data={data}>
      <Stast />
    </Layout>
  )
}
