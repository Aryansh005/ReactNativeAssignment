import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

import Home from "../../assets/images/home.png";
import PRE from "../../assets/images/pre.png";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      {/* Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={Home}
              style={{
                width: 24,
                height: 24,
                tintColor: focused
                  ? Colors[colorScheme ?? "light"].tint
                  : "gray",
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      {/* Prescription */}
      <Tabs.Screen
        name="prescription"
        options={{
          title: "Prescription",
          tabBarIcon: ({ focused }) => (
            <Image
              source={PRE}
              style={{
                width: 24,
                height: 24,
                tintColor: focused
                  ? Colors[colorScheme ?? "light"].tint
                  : "gray",
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
