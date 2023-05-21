import { View, Text } from "react-native";

import { styles } from "./styles";

const ProductDetail = ({ route }) => {
  const title = route.params.title;

  return (
    <View style={styles.container}>
      <Text>Product Detail Page</Text>
      <Text>{title}</Text>
    </View>
  );
};

export default ProductDetail;
