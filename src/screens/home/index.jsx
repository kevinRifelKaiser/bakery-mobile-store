import { View, Text, TouchableOpacity } from "react-native";
import { Products } from "../index.js";
import { CategoryItem } from "../../components/index";

import { styles } from "./styles.js";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home page</Text>
      <Text style={styles.subTitle}>Would you like to taste our products?</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Products")}>
        <Text style={styles.buttonText}>Go Shopping!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
