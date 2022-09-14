import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { wrapper } from '../store'
import { userLogin } from '../store/reducer/user'


const Other = (props) => {
  const state = useSelector(state => state.user)
  console.log('s', state)
  return (
    <div>{state.address}</div>
  )
}

export const getServerSideProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      // await store.dispatch(setAuthState(false)); 
      
      store.dispatch(userLogin({isConnected: true}))
    }
);

export default Other
