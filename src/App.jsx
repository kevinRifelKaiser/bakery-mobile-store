import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Text, View, ActivityIndicator } from "react-native";

import { styles } from "./styles";
import { THEME } from "./constants/theme";

const App = () => {
  const [loaded] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  });

  if (!loaded) {
    return (
      <ActivityIndicator size="large" color={THEME.colors.aditionalThree} />
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
