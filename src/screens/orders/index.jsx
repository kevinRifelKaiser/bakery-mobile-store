import { View, Text } from "react-native";
import { styles } from "./styles";

import { OrderItem } from "../../components";

const Orders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders page</Text>
      <OrderItem />
    </View>
  );
};

export default Orders;
