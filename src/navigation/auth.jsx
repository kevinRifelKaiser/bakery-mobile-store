import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens";

import { THEME } from "../constants/theme";

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: THEME.colors.primary,
            height: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
