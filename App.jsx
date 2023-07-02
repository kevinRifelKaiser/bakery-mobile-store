import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import AppNavigatior from "./src/navigation";
import { store } from "./src/store";
import { Provider } from "react-redux";
import { init } from "./src/database";

import { THEME } from "./src/constants/theme";

init()
  .then(() => console.log("Base de datos iniciada"))
  .catch((err) => {
    console.log("Base de datos no creada");
    console.log(err.message);
  });

const App = () => {
  const [loaded] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Title-Font": require("./assets/fonts/Lobster-Regular.ttf"),
    "Body-Font": require("./assets/fonts/Rubik-VariableFont_wght.ttf"),
  });

  if (!loaded) {
    return (
      <ActivityIndicator size="large" color={THEME.colors.aditionalThree} />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigatior />
    </Provider>
  );
};

export default App;
