import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";

import { CartItem } from "../../components";

import { useAppSelector } from "../../hooks/store";
import useCartActions from "../../hooks/useCartActions";

import { sumTotal } from "../../utils";

const Cart = ({ navigation }) => {
  const { onHandleUpdateCart, onDeleteItem } = useCartActions();

  const { items } = useAppSelector((state) => state.cart);
  const userData = useAppSelector((state) => state.userData);

  const totalAmount = sumTotal(items);

  const renderItem = ({ item }) => (
    <CartItem
      item={item}
      onHandleUpdateCart={onHandleUpdateCart}
      onDeleteItem={onDeleteItem}
    />
  );

  const keyExtractor = (item) => item.id;

  const checkOutOrder = () => {
    userData.cardNumber
      ? navigation.navigate("Checkout")
      : Alert.alert(
          "You are just one step far from geting your food",
          "Before buying you have to charge your personal information in the profile section",
          [{ text: "Got it", style: "cancel" }]
        );
  };

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
        <TouchableOpacity onPress={checkOutOrder} style={styles.subtotal}>
          <Text style={styles.subtotalText}>Total: $ {totalAmount}</Text>
          <Text style={styles.subtotalText}>Check out</Text>
        </TouchableOpacity>
      )
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={items}
      />
      <Footer />
    </View>
  );
};

export default Cart;
