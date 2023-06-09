import { View, FlatList, Image } from "react-native";
import Swiper from "react-native-swiper";

import { styles } from "./styles";
import { useAppSelector } from "../../hooks/store";
import useProductActions from "../../hooks/useProductActions";

import { ProductItem } from "../../components";

const Products = ({ navigation }) => {
  const data = useAppSelector((state) => state.products.products);
  const { onHandleSelect } = useProductActions();

  const renderItem = ({ item }) => (
    <ProductItem
      item={item}
      onSelected={() => onHandleSelect(navigation, item)}
    />
  );

  const keyExtractor = (item) => item.id;

  const renderSwiperHeader = () => (
    <View style={styles.wrapperContainer}>
      <Swiper style={styles.wrapper} scrollEnabled={true} autoplay={false}>
        <View style={styles.slide1}>
          <Image
            style={styles.image}
            source={{
              uri: "https://images.unsplash.com/photo-1609590981063-d495e2914ce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
            }}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            style={styles.image}
            source={{
              uri: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            }}
          />
        </View>
        <View style={styles.slide3}>
          <Image
            style={styles.image}
            source={{
              uri: "https://images.unsplash.com/photo-1620921586333-b7566c34550a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
            }}
          />
        </View>
      </Swiper>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={renderSwiperHeader}
      />
    </View>
  );
};

export default Products;
