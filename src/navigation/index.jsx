import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../constants/theme";

import { useState, useEffect } from "react";

import ShopNavigator from "./shop";
import CartNavigator from "./cart";
import FavoritesNavigator from "./favorites";

import { useAppSelector } from "../hooks/store";
import { countItems } from "../utils";

const AppNavigatior = () => {
  const ButtomTab = createBottomTabNavigator();

  const { items } = useAppSelector((state) => state.cart);

  const [amountOfItems, setAmountOfItems] = useState(0);

  useEffect(() => {
    setAmountOfItems(countItems(items));
  }, [items]);

  return (
    <NavigationContainer>
      <ButtomTab.Navigator
        initialRouteName="ShopStack"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: THEME.colors.primary,
          },
        }}>
        <ButtomTab.Screen
          name="ShopStack"
          component={ShopNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Ionicons
                  name={focused ? "home-sharp" : "home-outline"}
                  size={24}
                  color={THEME.colors.tertiary}
                />
              </View>
            ),
          }}
        />
        <ButtomTab.Screen
          name="CartStack"
          component={CartNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Ionicons
                  name={focused ? "cart-sharp" : "cart-outline"}
                  size={24}
                  color={THEME.colors.tertiary}
                />
              </View>
            ),
            tabBarBadge: items.length > 0 ? amountOfItems : null,
            tabBarBadgeStyle: {
              backgroundColor: THEME.colors.tertiary,
              color: THEME.colors.secondary,
            },
          }}
        />
        <ButtomTab.Screen
          name="FavoritesStack"
          component={FavoritesNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Ionicons
                  name={focused ? "md-heart-sharp" : "md-heart-outline"}
                  size={24}
                  color={THEME.colors.tertiary}
                />
              </View>
            ),
          }}
        />
      </ButtomTab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigatior;
