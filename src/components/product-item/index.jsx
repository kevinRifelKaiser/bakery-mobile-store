import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const ProductItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity
        style={styles.inputButton}
        onPress={() => onDelete(item.id)}>
        <Ionicons name="trash-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
