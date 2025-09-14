import { Image, StyleSheet, Text, View } from 'react-native';

  const Card = ({ title, description, bgColor }) => {
    return (
      <View
        style={{
          width: "100%",
          height: 196,
          backgroundColor: bgColor,
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: 20,
        }}
      >
        <View style={{ flex: 1, gap: 12, padding: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#111315" }}>
            {title}
          </Text>
          <Text
            style={{ fontSize: 14.22, fontWeight: "300", color: "#111315" }}
          >
            {description}
          </Text>
        </View>
        <View>
          <Image
            style={{ width: 120, height: 120, resizeMode: "contain" }}
            source={require("../../assets/images/card-img.png")}
          />
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({})
export default Card;