import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

import { styles } from "./styles";
import { THEME } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";

const CartItem = () => {
  const [itemCount, setItemCount] = useState(1);

  const addCartItem = (amount) => {
    setItemCount((currentCount) => {
      return currentCount + amount;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Image
          style={styles.img}
          source={{
            uri: "https://images.unsplash.com/photo-1620921586333-b7566c34550a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.description}>title</Text>
          <Text style={styles.description}>$ xx.xx</Text>
          <Text style={styles.description}>x 24</Text>
        </View>
      </View>
      <View style={styles.handleItemContainer}>
        <TouchableOpacity onPress={() => null}>
          <Ionicons name="trash" size={24} color={THEME.colors.black} />
        </TouchableOpacity>
        <View style={styles.counterContainer}>
          <TouchableOpacity
            style={styles.counterButtons}
            disabled={itemCount === 1}
            onPress={() => addCartItem(-1)}>
            <Ionicons name="remove" size={35} color={THEME.colors.black} />
          </TouchableOpacity>
          <Text style={styles.counterText}>{itemCount}</Text>
          <TouchableOpacity
            style={styles.counterButtons}
            disabled={itemCount === 30}
            onPress={() => addCartItem(1)}>
            <Ionicons name="add" size={35} color={THEME.colors.black} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
