import { useAppDispatch } from "./store";
import {
  addToCart,
  updateCart,
  deleteItem,
  confirmCart,
  clearCart,
} from "../store/cart/cartSlice";

const useCartActions = () => {
  const dispatch = useAppDispatch();

  const onHandleAddItem = (item) => {
    dispatch(addToCart(item));
  };

  const onHandleUpdateCart = (updateData) => {
    dispatch(updateCart(updateData));
  };

  const onDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  const onHandleConfirm = (items) => {
    dispatch(confirmCart(items));
  };

  const onHandleClearCart = () => {
    dispatch(clearCart());
  };

  return {
    onHandleAddItem,
    onHandleUpdateCart,
    onDeleteItem,
    onHandleConfirm,
    onHandleClearCart,
  };
};

export default useCartActions;
