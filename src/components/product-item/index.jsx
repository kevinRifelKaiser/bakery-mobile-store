import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const ProductItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
