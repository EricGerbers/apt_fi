import '../styles/index.scss'

import { ToastContainer } from 'react-toastify'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import Head from 'next/head'

const WrappedApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer
        newestOnTop
        hideProgressBar
        pauseOnFocusLoss={false}
        icon={false}
        closeButton={false}
      />
        <div id="modal-root"></div>
    </>
  )
}

export default WrappedApp
