import { PageTitle } from '../../components/PageTitle';
import { StakeContainer } from '../../src/stake';
import { updateAccount } from '../../store/account/action';
import { wrapper } from '../../store/store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const Stake = () => {
  return (
    <>
      <PageTitle title='Aldrin | Stake' />
      <StakeContainer />
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
export default connect(mapStateToProps, mapDispatchToProps)(Stake)
