import { useAppDispatch } from "./store";
import { signUp, logOut } from "../store/auth/authSlice";

const useAuthActions = () => {
  const dispatch = useAppDispatch();

  const onHandleSignUp = (signUpData) => {
    dispatch(signUp(signUpData));
  };

  const onHandleLogOut = () => {
    dispatch(logOut());
  };

  return { onHandleSignUp, onHandleLogOut };
};

export default useAuthActions;
