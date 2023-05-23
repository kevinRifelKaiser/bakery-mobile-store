import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles.js";
import { THEME } from "../../constants/theme/index.js";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home page</Text>
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
