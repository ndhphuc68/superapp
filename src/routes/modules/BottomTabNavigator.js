import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenName } from "./ScreenName";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import HomeView from "../../views/Home";
import Profile from "../../views/Profile";
import { Colors } from "../../theme/colors";

const Tab = createBottomTabNavigator();

export default function Tabbar() {
  return (
    <Tab.Navigator
      initialRouteName={ScreenName.home}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { height: 60, paddingBottom: 10 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case ScreenName.home: {
              iconName = (
                <Ionicons name="ios-home-outline" size={30} color={color} />
              );
              break;
            }
            case ScreenName.profile: {
              iconName = (
                <FontAwesome name="user-circle-o" size={24} color={color} />
              );
              break;
            }
          }
          return iconName;
        },
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name={ScreenName.home}
        options={{ title: "Home" }}
        component={HomeView}
      />
      <Tab.Screen
        name={ScreenName.profile}
        options={{ title: "Profile" }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
