import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

import { styles } from "./styles";
import { THEME } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";

import { useAppSelector } from "../../hooks/store";
import useCartActions from "../../hooks/useCartActions";

const ProductDetail = ({ route }) => {
  const { products, selected } = useAppSelector((state) => state.products);

  const { onHandleAddItem } = useCartActions();

  const productData = products.find((item) => item.id === selected);

  const { title } = route.params;
  const [itemCount, setItemCount] = useState(1);

  const sumCartItem = (amount) => {
    setItemCount((currentCount) => {
      return currentCount + amount;
    });
  };

  const addItemToCart = () => {
    onHandleAddItem({ productData, itemCount });
    setItemCount(1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.img} source={{ uri: productData.uri }} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{productData.description}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.addToCartCard}>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              style={styles.counterButtons}
              disabled={itemCount === 1}
              onPress={() => sumCartItem(-1)}>
              <Ionicons
                name="remove"
                size={40}
                color={THEME.colors.secondary}
              />
            </TouchableOpacity>
            <Text style={styles.counterText}>{itemCount}</Text>
            <TouchableOpacity
              style={styles.counterButtons}
              disabled={itemCount === 30}
              onPress={() => sumCartItem(1)}>
              <Ionicons name="add" size={40} color={THEME.colors.secondary} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={addItemToCart}>
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
