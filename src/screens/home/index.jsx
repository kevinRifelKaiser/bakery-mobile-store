import { View, Text, TouchableOpacity, ImageBackground } from "react-native";

import { styles } from "./styles.js";

const Home = ({ navigation }) => {
  const bgImageUrl = {
    uri: "https://firebasestorage.googleapis.com/v0/b/bakery-curso-react.appspot.com/o/homeBackground4.PNG?alt=media&token=e484be7c-315e-4a8b-9e77-5cdfe19a8f46",
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImageUrl} style={styles.bgImage}>
        <Text style={styles.title}>Welcome to our bakery</Text>
        <Text style={styles.subTitle}>
          Would you like to taste our products?
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Products")}>
          <Text style={styles.buttonText}>Go shopping</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Home;
