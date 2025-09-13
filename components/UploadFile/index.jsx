import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';


const UploadFile = () => {
    const router = useRouter();

    const pickImage = async () => {
    // Request permission
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access gallery is required!");
      return;
    }

    // Open gallery and pick one image
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
        name: image.fileName ?? "unknown.jpg", // fallback
      },
    });
    }
  };

  return (
    <TouchableOpacity
    onPress={pickImage}
      style={{
        width: 48,
        height: 48,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
      }}
    >
      <Image
        style={{ width: 24, height: 24 }}
        resizeMode="contain"
        source={require('../../assets/images/imageIcon.png')}
      />
    </TouchableOpacity>
  );
};

export default UploadFile;
