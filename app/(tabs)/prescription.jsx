import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import HeroPanel from "../../components/HeroPanel";

export default function Prescription() {
  const Card = ({ title, description, bgColor }) => {
    return (
      <View
        style={{
          width: '100%',
          height: 196,
          backgroundColor: bgColor,
          flexDirection: 'row',
          justifyContent: 'space-between',
          // paddingLeft: 20,
          borderRadius: 20,
        }}
      >
        <View style={{ flex: 1, gap: 12, padding: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#111315' }}>
            {title}
          </Text>
          <Text style={{ fontSize: 14.22, fontWeight: '300', color: '#111315' }}>
            {description}
          </Text>
        </View>

        <Image
          style={{ width: 120, height: 150, resizeMode: 'contain', }}
          source={require('../../assets/images/cardshadow.png')}
        />
      </View>
    );
  };

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
    backgroundColor: 'white',
  },
});
