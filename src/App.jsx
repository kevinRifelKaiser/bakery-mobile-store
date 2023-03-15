import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Text, View, ActivityIndicator } from "react-native";
import { Home } from "./screens";

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

  return <Home />;
};

export default App;
