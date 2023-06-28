import { useAppDispatch } from "./store";
import {
  addProfilePicture,
  addShippingAddress,
} from "../store/userData/userDataSlice";

const useUserDataActions = () => {
  const dispatch = useAppDispatch();

  const onHandleAddImage = (imgUri) => {
    dispatch(addProfilePicture(imgUri));
  };

  const onHandleAddAddress = (location) => {
    dispatch(addShippingAddress(location));
  };

  return { onHandleAddImage, onHandleAddAddress };
};

export default useUserDataActions;
