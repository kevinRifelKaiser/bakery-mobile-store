import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const ProductItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default ProductItem;
