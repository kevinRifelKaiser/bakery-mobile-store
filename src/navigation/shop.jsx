import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Products, ProductDetail } from "../screens";

import { THEME } from "../constants/theme";

const ShopNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "THEME.colors.primary",
          },
          tabBarHeaderStyle: {
            backgroundColor: "red",
          },
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: THEME.colors.primary,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
