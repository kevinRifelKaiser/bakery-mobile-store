import { useAppDispatch } from "./store";
import {
  addUserImage,
  addProfilePicture,
} from "../store/userData/userDataSlice";

const useUserDataActions = () => {
  const dispatch = useAppDispatch();

  const onHandleAddImage = (imgUri) => {
    dispatch(addProfilePicture(imgUri));
  };

  return { onHandleAddImage };
};

export default useUserDataActions;
