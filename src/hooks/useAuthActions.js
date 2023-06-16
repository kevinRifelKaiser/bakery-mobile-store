import { useAppDispatch } from "./store";
import { signUp } from "../store/auth/authSlice";

const useAuthActions = () => {
  const dispatch = useAppDispatch();

  const onHandleSignUp = (signUpData) => {
    dispatch(signUp(signUpData));
  };

  return { onHandleSignUp };
};

export default useAuthActions;
