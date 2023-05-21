import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import AppNavigatior from "./src/navigation";

import { THEME } from "./src/constants/theme";

const App = () => {
  const [loaded] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
  });

  if (!loaded) {
    return (
      <ActivityIndicator size="large" color={THEME.colors.aditionalThree} />
    );
  }

  return <AppNavigatior />;
};

export default App;
