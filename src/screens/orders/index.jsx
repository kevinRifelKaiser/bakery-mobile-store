import { View, Text, FlatList, Button } from "react-native";
import { styles } from "./styles";
import { useEffect } from "react";

import { useAppSelector } from "../../hooks/store";
import useOrdersActions from "../../hooks/useOrdersActions";

import { OrderItem } from "../../components";

const Orders = () => {
  const { onHandleGetOrders } = useOrdersActions();
  const orders = useAppSelector((state) => state.orders.orders);

  useEffect(() => {
    onHandleGetOrders();
  }, []);

  const renderItem = ({ item }) => <OrderItem item={item} />;

  const keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Orders;
