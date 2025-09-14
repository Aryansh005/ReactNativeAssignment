import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../../components/Card";
import HeroPanel from "../../components/HeroPanel";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HeroPanel />
      <View style={{ marginTop: 32, margin: 24, gap: 16 }}>
        <Card
          title="List of UPP Drugs"
          description="A list of trusted medicines used in hospitals and clinics"
          bgColor="#F5F5F5"
        />
        <Card
          title="List of OTC Drugs"
          description="A list of trusted medicines used in hospitals and clinics"
          bgColor="#FFF4DF"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
