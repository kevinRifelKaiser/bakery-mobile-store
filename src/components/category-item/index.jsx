import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./style";

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.contentContainer}
        onPress={() => onSelected(item)}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
