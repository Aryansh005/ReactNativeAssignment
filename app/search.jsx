import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GradientLayout from "../components/Gradientlayout";
import Search from "../components/Search";
import { SUGGESTIONS_PILLS } from "./constants/mapperConstants";

export default function SearchScreen() {
  const router = useRouter();

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access gallery is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const image = result.assets[0];
      console.log("Selected image:", image);
      router.push({
        pathname: "/imagePreview",
        params: {
          uri: image.uri,
          name: image.fileName ?? "unknown.jpg",
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      <GradientLayout>
        <View style={{ paddingRight: 20, paddingLeft: 20, paddingBottom: 20 }}>
          <Pressable onPress={() => router.back()}>
          <View
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              marginBottom: 12,
              position: "relative",
            }}
          >
              <Image
                style={{
                  width: 15,
                  height: 15,
                  resizeMode: "contain",
                  position: "absolute",
                  top: 12,
                }}
                source={require("../assets/images/left-arrow.png")}
              />
            <Text
              style={{
                color: "#131F38",
                fontSize: 16,
                fontWeight: "500",
                textAlign: "center",
              }}
              >
              Search Drugs
            </Text>
          </View>
              </Pressable>

          <View style={{ marginBottom: 16 }}>
       <Search handleClick={()=>router.push("/searchList")}/>
          </View>

          <TouchableOpacity
            onPress={pickImage}
            activeOpacity={0.7}
            style={{
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingVertical: 8,
              paddingHorizontal: 12,
              alignSelf: "flex-start",
              backgroundColor: "white",
              borderColor: "#EBEBED",
              borderRadius: 32,
              gap: 4,
            }}
          >
            <Image
              style={{
                width: 24,
                height: 24,
                resizeMode: "contain",
              }}
              source={require("../assets/images/imageIcon.png")}
            />
            <Text style={{ color: "#111315" }}>Upload</Text>
          </TouchableOpacity>
        </View>
      </GradientLayout>

      <View style={{ marginTop: 15, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 12 }}>
          Suggestions
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          {SUGGESTIONS_PILLS.map((item) => (
            <TouchableOpacity
            onPress={()=>router.push("/searchList")}
            activeOpacity={1}
              key={item.id}
              style={{
                borderWidth: 1,
                borderColor: "#E0E0E0",
                borderRadius: 20,
                paddingVertical: 8,
                paddingHorizontal: 16,
              }}
            >
              <Text
                style={{ fontSize: 15, fontWeight: "300", color: "#111315" }}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
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
