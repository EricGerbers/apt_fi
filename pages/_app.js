import '../styles/index.scss';
import React from 'react'

import { store } from '../store/store'
import withRedux from 'next-redux-wrapper';
import { getLibrary } from '../utils/web3React'
import { ToastContainer } from 'react-toastify';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import Head from 'next/head';
import { Web3ReactProvider } from '@web3-react/core';

const WrappedApp = ({ Component, pageProps }) => {
  return (
  <Web3ReactProvider getLibrary={getLibrary}>
    <div className='root'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer newestOnTop hideProgressBar pauseOnFocusLoss={false} icon={false} closeButton={false} />
      <div id='modal-root'></div>
    </div>
    </Web3ReactProvider>
  );
};

export default withRedux(store)(WrappedApp)
