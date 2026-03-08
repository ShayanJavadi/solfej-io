import { connect } from "react-redux";
import { setAppIsLoading } from "../../store/app/actions";
import { setupNewAccount } from "../../store/firebase/accountSetup";
import { signInWithGoogle, signInWithApple } from "../../store/firebase/auth";
import SignUpScreen from "./SignUpScreen";

const mapDispatchToProps = {
  signInWithGoogle,
  setAppIsLoading,
  setupNewAccount,
  signInWithApple
};

export default connect(undefined, mapDispatchToProps)(SignUpScreen);