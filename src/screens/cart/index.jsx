import { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { CartItem } from "../../components";

import { useAppSelector } from "../../hooks/store";
import useCartActions from "../../hooks/useCartActions";

import { sumTotal } from "../../utils";

const Cart = () => {
  const { onHandleUpdateCart, onDeleteItem, onHandleConfirm } =
    useCartActions();

  const { items } = useAppSelector((state) => state.cart);

  const totalAmount = sumTotal(items);

  const renderItem = ({ item }) => (
    <CartItem
      item={item}
      onHandleUpdateCart={onHandleUpdateCart}
      onDeleteItem={onDeleteItem}
    />
  );

  const keyExtractor = (item) => item.id;

  const confirmOrder = () => {
    onHandleConfirm(items, totalAmount);
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
        <TouchableOpacity onPress={confirmOrder} style={styles.subtotal}>
          <Text style={styles.subtotalText}>Total: $ {totalAmount}</Text>
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
