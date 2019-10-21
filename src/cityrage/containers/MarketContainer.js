import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Market from '../components/Market';
import { buyCard, resetMarket, userResetMarket, dealCard, marketListener } from '../actions/market';


function mapStateToProps(state) {
  return {
    market: state.market,
    user: state.auth.uid,
    chosenOne_uid: state.game.chosenOne.uid,
    submitted: state.game.submitted,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      buyCard,
      userResetMarket,
      resetMarket,
      dealCard,
      marketListener,
    },
   dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Market);

