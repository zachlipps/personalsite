import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from '../components/Home';
import { signOut } from '../actions/auth';


function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      signOut,
    },
    dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
