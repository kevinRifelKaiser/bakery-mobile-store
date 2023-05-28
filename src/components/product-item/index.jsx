import { View, TouchableOpacity, Text, Image } from "react-native";

import { styles } from "./styles";

const ProductItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.uri,
          }}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
