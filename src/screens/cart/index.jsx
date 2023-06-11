import { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { CartItem } from "../../components";

import { useAppSelector } from "../../hooks/store";
import useCartActions from "../../hooks/useCartActions";

const Cart = () => {
  const { onHandleUpdateCart, onDeleteItem } = useCartActions();

  const { items } = useAppSelector((state) => state.cart);

  const renderItem = ({ item }) => (
    <CartItem
      item={item}
      onHandleUpdateCart={onHandleUpdateCart}
      onDeleteItem={onDeleteItem}
    />
  );

  const keyExtractor = (item) => item.id;

  const onHandleConfirm = () => {
    console.log(itemsListLength);
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
        <TouchableOpacity onPress={onHandleConfirm} style={styles.subtotal}>
          <Text style={styles.subtotalText}>Total: {"amount"}</Text>
          <Text style={styles.subtotalText}>Confirm</Text>
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
