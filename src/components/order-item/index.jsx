import { View, Text, Button } from "react-native";
import { styles } from "./styles";

import { formatDate, countItems } from "../../utils";

const OrderItem = (item) => {
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.dateText}>Date: {formatDate(item.item.date)}</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>
            Cuantity of items: {countItems(item.item.items)}
          </Text>
          <Text style={styles.amountText}>Total: Є{item.item.total}</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;
