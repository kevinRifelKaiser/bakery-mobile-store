import { View, Text, FlatList } from "react-native";
import Swiper from "react-native-swiper";

import { styles } from "./styles";
import { PRODUCTS } from "../../constants/data/products";

import { ProductItem } from "../../components";

const Products = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate("ProductDetail", {
      title: item.title,
    });
  };

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  );

  const keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <View style={styles.wrapperContainer}>
        <Swiper style={styles.wrapper} showsButtons={true} scrollEnabled={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
      <FlatList
        data={PRODUCTS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listOfItems}
      />
    </View>
  );
};

export default Products;
