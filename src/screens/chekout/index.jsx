import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { useAppSelector } from "../../hooks/store";
import useCartActions from "../../hooks/useCartActions";
import { sumTotal, countItems } from "../../utils";

const CheckOut = ({ navigation }) => {
  const { items } = useAppSelector((state) => state.cart);
  const userData = useAppSelector((state) => state.userData);
  const { onHandleConfirm } = useCartActions();

  const totalPurchase = sumTotal(items);

  const itemsQuantity = countItems(items);

  const confirmOrder = () => {
    onHandleConfirm(items);
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
        <Text style={styles.detailsTitle}>Payment method:</Text>
        <Text style={styles.detailsDescription}>
          Card number: {userData.cardNumber}
        </Text>
        <Text style={styles.detailsDescription}>Name: {userData.name}</Text>
      </View>
      <View style={styles.space}></View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Delivery address:</Text>
        <Text style={styles.detailsDescription}>Latitude: {userData.lat}</Text>
        <Text style={styles.detailsDescription}>Longitude: {userData.lng}</Text>
      </View>
      <TouchableOpacity onPress={confirmOrder} style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirm order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckOut;
