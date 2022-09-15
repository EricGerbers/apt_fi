import '../styles/index.scss'

import { ToastContainer } from 'react-toastify'
import { Header } from '../components/header'

const WrappedApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <ToastContainer
        newestOnTop
        hideProgressBar
        pauseOnFocusLoss={false}
        icon={false}
        closeButton={false}
      />
        <div id="modal-root"></div>
    </div>
  )
}

export default WrappedApp
