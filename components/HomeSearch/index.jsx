import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, View } from "react-native";
import RotatingText from "../../components/RotationText";
const Search = () => {
    const router = useRouter();
    return (
      <Pressable
      onPress={() => router.push('/search')}
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          borderRadius: 28,
          flex: 1,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 4,
        }}>
        <View
          style={{
            margin: 4,
            width: 40,
            height: 40,
            backgroundColor: '#EEEEEE',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 60,
          }}>
          <Image
            style={{ width: 20, height: 20 }}
            resizeMethod="contain"
             source={require('../../assets/images/search.png')}
          />
        </View>
         <RotatingText/>
      </Pressable>
    );
  };
  export default Search;