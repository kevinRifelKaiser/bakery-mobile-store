import { useAppDispatch } from "./store";
import { selectProduct } from "../store/products/productsSlice";

const useProductActions = () => {
  const dispatch = useAppDispatch();

  const onHandleSelect = (navigation, item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate("ProductDetail", {
      title: item.title,
    });
  };

  return { onHandleSelect };
};

export default useProductActions;
