import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import GradientLayout from "../components/Gradientlayout";

export default function ImageInfo() {
  const { uri, name } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <GradientLayout>
        <View style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 10 }}>
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
                Search Result
              </Text>
            </View>
          </Pressable>
        </View>
      </GradientLayout>

      <View style={{ paddingHorizontal: 20, paddingTop: 32, gap: 32 }}>
        <View style={{ position:"relative"}}>

        <Image
          source={{ uri }}
          style={{
              width: "100%",
              height: 155,
              resizeMode: "cover",
              borderRadius: 16,
             
            }}
            />
         <Image
            source={require("../assets/images/re-upload.png")}
            style={{ width: 120, height: 32, resizeMode: "contain",position:"absolute",bottom:-2,left:"33%" }}
          />
            </View>
        <View
          style={{
            backgroundColor: "#EEEEEE",
            padding: 12,
            flexDirection: "row",
            borderRadius:12,
            gap:4
          }}
        >
          <Image
            source={{ uri }}
            style={{ width: 40, height: 40, resizeMode: "cover",borderRadius:25 }}
          />
          <View>
            <Text style={{ fontWeight: "500", fontSize: 15 }}>{name}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
