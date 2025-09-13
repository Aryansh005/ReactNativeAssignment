import { useEffect, useRef, useState } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";

const words = ["Code", "Symptom", "Brand", "Drug Name"];

const RotatingText = () => {
  const [index, setIndex] = useState(0);
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        setIndex((prev) => (prev + 1) % words.length);
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start();
      });
    }, 1000); 

    return () => clearInterval(interval);
  }, [opacity]);

  return (
    <View style={styles.row}>
      <Text style={styles.static}>Search By </Text>
      <Animated.Text style={[styles.dynamic, { opacity }]}>
        {words[index]}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  static: {
    fontSize: 14.22,
    fontWeight: 300,
  },
  dynamic: {
    fontSize: 14.22,
    fontWeight: 300,
    color: "#BDBDBD",
  },
});

export default RotatingText;