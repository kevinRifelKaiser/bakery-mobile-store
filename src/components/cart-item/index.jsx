import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";

import { styles } from "./styles";
import { THEME } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";

const CartItem = ({ item, onHandleUpdateCart, onDeleteItem }) => {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const itemQuantity = item.quantity;
    setItemCount(itemQuantity);
  }, [item]);

  const substractCartItem = () => {
    const amount = -1;
    const itemId = item.id;
    onHandleUpdateCart({ amount, itemId });
  };

  const addCartItem = () => {
    const amount = 1;
    const itemId = item.id;
    onHandleUpdateCart({ amount, itemId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Image
          style={styles.img}
          source={{
            uri: item.uri,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.description}>{item.title}</Text>
          <Text style={styles.description}>Price: $ {item.price}</Text>
          <Text style={{ ...styles.description, fontSize: 16 }}>
            Total: $ {item.price * item.quantity}
          </Text>
        </View>
      </View>
      <View style={styles.handleItemContainer}>
        <TouchableOpacity onPress={() => onDeleteItem(item.id)}>
          <Ionicons name="trash" size={24} color={THEME.colors.black} />
        </TouchableOpacity>
        <View style={styles.counterContainer}>
          <TouchableOpacity
            style={styles.counterButtons}
            disabled={itemCount === 1}
            onPress={substractCartItem}>
            <Ionicons name="remove" size={35} color={THEME.colors.black} />
          </TouchableOpacity>
          <Text style={styles.counterText}>{itemCount}</Text>
          <TouchableOpacity
            style={styles.counterButtons}
            disabled={itemCount === 30}
            onPress={addCartItem}>
            <Ionicons name="add" size={35} color={THEME.colors.black} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
