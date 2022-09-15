import Head from 'next/head'
import React from 'react'


export const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>                       
    </Head>
  )
}
