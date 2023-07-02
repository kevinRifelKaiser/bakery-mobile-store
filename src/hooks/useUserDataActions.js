import { useAppDispatch } from "./store";
import {
  addProfileData,
  getProfileData,
} from "../store/userData/userDataSlice";

const useUserDataActions = () => {
  const dispatch = useAppDispatch();

  const onHandleAddUserData = (userData) => {
    dispatch(addProfileData(userData));
  };

  const onHandleGetUserData = () => {
    dispatch(getProfileData());
  };

  return { onHandleAddUserData, onHandleGetUserData };
};

export default useUserDataActions;
