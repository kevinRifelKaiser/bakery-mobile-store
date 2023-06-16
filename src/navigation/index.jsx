import { NavigationContainer } from "@react-navigation/native";

import { useAppSelector } from "../hooks/store";

import ButtomTabNavigator from "./ButtomTabNav";
import AuthNavigator from "./auth";

const AppNavigatior = () => {
  const userId = useAppSelector((state) => state.auth.userId);

  return (
    <NavigationContainer>
      {userId ? <ButtomTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigatior;
