import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { PageTitle } from '../components/PageTitle';
import { HomeBanner } from '../src/home/banner';
import React from 'react'
import { updateAccount } from '../store/account/action';
import { wrapper } from '../store/store'

const Index = () => {
  return (
    <>
      <PageTitle title='Aldrin | Do it different.' />
      <HomeBanner />
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => (props) => {
  store.dispatch(updateAccount(props.account))
})

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccount: bindActionCreators(updateAccount, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)
