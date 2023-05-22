import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Cart } from "../screens";

const CartNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
