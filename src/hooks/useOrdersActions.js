import { useAppDispatch } from "./store";
import { getOrders } from "../store/orders/ordersSlice";

const useOrdersActions = () => {
  const dispatch = useAppDispatch();

  const onHandleGetOrders = () => {
    dispatch(getOrders());
  };

  return { onHandleGetOrders };
};

export default useOrdersActions;
