import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth, AuthScreen } from "../screens";

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
