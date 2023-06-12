import { useAppDispatch } from "./store";
import {
  addToCart,
  updateCart,
  deleteItem,
  confirmCart,
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

  const onHandleConfirm = (items, totalAmount) => {
    dispatch(confirmCart(items, totalAmount));
  };

  return { onHandleAddItem, onHandleUpdateCart, onDeleteItem, onHandleConfirm };
};

export default useCartActions;
