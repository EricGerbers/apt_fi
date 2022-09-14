import '../bootstrap'

import {wrapper} from '../store'
import { ToastContainer } from 'react-toastify'

const WrappedApp = ({ Component, pageProps }) => {
  return <>
    <Component {...pageProps} />
    <ToastContainer
        newestOnTop
        hideProgressBar
        pauseOnFocusLoss={false}
        icon={false}
        closeButton={false}
      />
  </>
}

export default wrapper.withRedux(WrappedApp)
