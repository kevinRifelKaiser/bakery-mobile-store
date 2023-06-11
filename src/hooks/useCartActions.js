import { useAppDispatch } from "./store";
import { addToCart, updateCart, deleteItem } from "../store/cart/cartSlice";

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

  return { onHandleAddItem, onHandleUpdateCart, onDeleteItem };
};

export default useCartActions;
