import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Cart } from "../screens";
import { THEME } from "../constants/theme";

const CartNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Cart"
        component={Cart}
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

export default CartNavigator;
