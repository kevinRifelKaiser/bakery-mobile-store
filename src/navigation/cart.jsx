import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Cart, CheckOut, ThanksForBuy } from "../screens";
import { THEME } from "../constants/theme";

const CartNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTintColor: THEME.colors.tertiary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: THEME.colors.primary,
            height: 20,
          },
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckOut}
        options={{
          headerTintColor: THEME.colors.tertiary,
          title: "Check out",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: THEME.colors.primary,
            height: 20,
          },
        }}
      />
      <Stack.Screen
        name="Finish"
        component={ThanksForBuy}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
