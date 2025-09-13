import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import GradientLayout from "../components/Gradientlayout";

export default function ImagePreview() {
  const router = useRouter();
  const { uri, name } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, backgroundColor:"white" ,position:"relative"}}>
             <GradientLayout>
        <View style={{ paddingRight: 20, paddingLeft: 20,paddingTop:10 }}>
            <Pressable 
              onPress={()=>router.back()}
              >
          <View
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              marginBottom: 12,
              position: 'relative',
            }}>
            
              <Image
                style={{
                   width: 15,
                  height: 15,
                  resizeMode: "contain",
                  position: "absolute",
                  top: 12,
                }}
              source={require('../assets/images/left-arrow.png')}
              />
            <Text
              style={{
                color: '#131F38',
                fontSize: 16,
                fontWeight: 500,
                textAlign: 'center',
              }}>
              Image preview
            </Text>
          </View>
              </Pressable>
        </View>
      </GradientLayout>
<View style={{paddingHorizontal:20,paddingTop:32}}>

      <Image
        source={{ uri }}
        style={{ width: "100%", height: 410, resizeMode: "cover",borderRadius:16 }}
        />
        </View>
        <TouchableOpacity 
        
        onPress={()=>{
           router.push({
        pathname: "/imageInfo",
        params: {
          name: name||"UNKNOWN",
          uri:uri
        },
      });
        }}
        style={{backgroundColor:"#112C5D",alignItems:"center",padding:12,borderRadius:25,position:"absolute",bottom:0,width:"90%",marginBottom:10,marginHorizontal:20}} activeOpacity={1}>
         <Text style={{fontSize:15,fontWeight:600,color:"#fff"}}> Continue</Text>
        </TouchableOpacity>
    </View>
  );
}
