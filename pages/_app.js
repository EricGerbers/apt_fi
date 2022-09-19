import '../styles/index.scss';
import React from 'react'
import {Provider} from 'redux'
import { store, wrapper } from '../store/store'
import withRedux from 'next-redux-wrapper';

import { ToastContainer } from 'react-toastify';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import Head from 'next/head';

const WrappedApp = ({ Component, pageProps }) => {
  return (
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
  );
};

export default withRedux(store)(WrappedApp)
