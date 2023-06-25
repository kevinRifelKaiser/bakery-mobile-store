import { useAppDispatch } from "./store";
import { signUp, logIn, logOut } from "../store/auth/authSlice";

const useAuthActions = () => {
  const dispatch = useAppDispatch();

  const onHandleSignUp = (signUpData) => {
    dispatch(signUp(signUpData));
  };

  const onHandleLogIn = (logInData) => {
    dispatch(logIn(logInData));
  };

  const onHandleLogOut = () => {
    dispatch(logOut());
  };

  return { onHandleSignUp, onHandleLogIn, onHandleLogOut };
};

export default useAuthActions;
