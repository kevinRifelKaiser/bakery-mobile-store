import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { THEME } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";

const CartItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.title}>item.title</Text>
        <View>
          <Text style={styles.description}>$ item.price</Text>
          <Text style={styles.description}>x item.quantity</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => onDelete(item)}
        style={styles.iconContainer}>
        <Ionicons name="trash" size={24} color={THEME.colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
