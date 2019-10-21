import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import { signIn, signUp } from '../actions/auth';

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
  signIn(...args) { dispatch(signIn(...args)); },
  signUp(...args) { dispatch(signUp(...args)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
