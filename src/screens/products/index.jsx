import { View, Text, Button, FlatList } from "react-native";

import { styles } from "./styles";
import { THEME } from "../../constants/theme";
import { PRODUCTS } from "../../constants/data/products";

import { ProductItem } from "../../components";

const Products = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate("ProductDetail", {
      title: item.title,
    });
  };

  renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  );

  keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Products;
