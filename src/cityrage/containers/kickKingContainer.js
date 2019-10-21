import { connect } from 'react-redux';
import KickKing from '../components/KickKing';
// import { kickKing } from '../actions/diceBox';
import { setKing, stayOnHill } from '../actions/kickKing';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  game: state.game,
  auth: state.auth,
});

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      // kickKing,
      setKing,
      stayOnHill,
    },
   dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(KickKing);
