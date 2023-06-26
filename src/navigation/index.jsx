import { NavigationContainer } from "@react-navigation/native";

import { useAppSelector } from "../hooks/store";

import ButtomTabNavigator from "./ButtomTabNav";
import AuthNavigator from "./auth";

const AppNavigatior = () => {
  const userId = useAppSelector((state) => state.auth.userId);

  return (
    <NavigationContainer>
      {/* ACA DEJE NEGADO EL USERID PARA NO TENTER QUE LOGUEARME CADA VEZ QUE ACTUALIZO LA STORE */}
      {!userId ? <ButtomTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigatior;
