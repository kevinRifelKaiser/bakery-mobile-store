import { View, Text } from "react-native";
import { styles } from "./styles";

import { CartItem } from "../../components";

const items = [];

const Cart = () => {
  const Header = () => {
    return (
      items.length <= 0 && (
        <View style={styles.header}>
          <Text style={styles.headerText}>No items added yet</Text>
        </View>
      )
    );
  };

  const Footer = () => {
    return (
      items.length > 0 && (
        <TouchableOpacity onPress={onHandleConfirm} style={styles.subtotal}>
          <Text style={styles.subtotalText}>Total: {total}</Text>
          <Text style={styles.subtotalText}>Confirm</Text>
        </TouchableOpacity>
      )
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <CartItem />
      <Footer />
    </View>
  );
};

export default Cart;
