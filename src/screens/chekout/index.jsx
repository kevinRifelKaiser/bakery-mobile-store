import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { useAppSelector } from "../../hooks/store";
import useCartActions from "../../hooks/useCartActions";
import { sumTotal, countItems } from "../../utils";

const CheckOut = ({ navigation }) => {
  const { items } = useAppSelector((state) => state.cart);
  const { onHandleConfirm } = useCartActions();

  const totalPurchase = sumTotal(items);

  const itemsQuantity = countItems(items);

  const confirmOrder = () => {
    // onHandleConfirm(items);
    navigation.navigate("Finish");
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Order detail:</Text>
        <Text style={styles.detailsDescription}>
          Total items: {itemsQuantity}
        </Text>
        <Text style={styles.detailsDescription}>Amount: $ {totalPurchase}</Text>
      </View>
      <View style={styles.space}></View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Billing details:</Text>
        <Text style={styles.detailsDescription}>detail 1</Text>
        <Text style={styles.detailsDescription}>detail 2</Text>
        <Text style={styles.detailsDescription}>detail 3</Text>
      </View>
      <View style={styles.space}></View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Payment method:</Text>
        <Text style={styles.detailsDescription}>
          Card number: xxxx xxxx xxxx 7896
        </Text>
        <Text style={styles.detailsDescription}>Name: Julio Manuel</Text>
      </View>
      <View style={styles.space}></View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Delivery address:</Text>
        <Text style={styles.detailsDescription}>Calle: D. F. Sarmiento 50</Text>
        <Text style={styles.detailsDescription}>Localidad: Colegiales</Text>
      </View>
      <TouchableOpacity onPress={confirmOrder} style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirm order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckOut;
