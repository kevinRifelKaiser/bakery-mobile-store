import { View, Text, TouchableOpacity, ImageBackground } from "react-native";

import { styles } from "./styles.js";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to our bakery</Text>
      <Text style={styles.subTitle}>Would you like to taste our products?</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Products")}>
        <Text style={styles.buttonText}>Go shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
