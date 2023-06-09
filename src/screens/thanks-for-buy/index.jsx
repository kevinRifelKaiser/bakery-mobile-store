import { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import useCartActions from "../../hooks/useCartActions";

const ThanksForBuy = ({ navigation }) => {
  const { onHandleClearCart } = useCartActions();

  useEffect(() => {
    onHandleClearCart();
  }, []);

  const onHandleGoBack = () => {
    navigation.popToTop();
    navigation.navigate("Products");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank you very much for choosing us!</Text>
      <Text style={styles.subTitle}>You can keep watching our site!</Text>
      <TouchableOpacity onPress={onHandleGoBack} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThanksForBuy;
