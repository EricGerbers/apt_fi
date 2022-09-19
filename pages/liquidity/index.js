import { PageTitle } from '../../components/PageTitle';
import { LiquidityContainer } from '../../src/liquidity';
import { updateAccount } from '../../store/account/action';
import { wrapper } from '../../store/store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Liquidity = (props) => {
  return (
    <>
      <PageTitle title='Aldrin | Liquidity' />
      <LiquidityContainer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Liquidity)
