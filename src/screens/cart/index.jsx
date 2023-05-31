import { View, Text } from "react-native";
import { styles } from "./styles";

import { CartItem } from "../../components";

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text>Cart Page</Text>
      <Text>this page is still in construction</Text>
      <CartItem />
    </View>
  );
};

export default Cart;
