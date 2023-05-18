import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { Home } from "./screens";
import AppNavigatior from "./navigation";

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

  return <AppNavigatior />;
};

export default App;
