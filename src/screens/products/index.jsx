import { View, Text, Button, FlatList } from "react-native";

import { styles } from "./styles";
import { THEME } from "../../constants/theme";
import { PRODUCTS } from "../../constants/data/products";

import { ProductItem } from "../../components";

const Products = ({ navigation }) => {
  renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={() => null} />
  );

  keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={PRODUCTS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Products;
