import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./shop";

const AppNavigatior = () => {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  );
};

export default AppNavigatior;
