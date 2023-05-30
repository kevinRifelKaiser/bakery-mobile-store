import { View, TouchableOpacity, Text, Image } from "react-native";

import { styles } from "./styles";

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => onSelected(item)}>
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
    </View>
  );
};

export default ProductItem;
