import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Platform, StatusBar, StyleSheet } from "react-native";

function GradientLayout({ children }) {
  return (
    <LinearGradient
      colors={["#D6EDFF", "#F5F5F5"]}
      locations={[0.25, 0.50]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "yellow",
    gap: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
});

export default GradientLayout;
