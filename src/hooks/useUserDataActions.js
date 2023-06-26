import { useAppDispatch } from "./store";
import { addUserImage } from "../store/userData/userDataSlice";

const useUserDataActions = () => {
  const dispatch = useAppDispatch();

  const onHandleAddImage = (imgUri) => {
    dispatch(addUserImage(imgUri));
  };

  return { onHandleAddImage };
};

export default useUserDataActions;
