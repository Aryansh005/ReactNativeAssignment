import { Image, StyleSheet, Text, View } from 'react-native';
import GradientLayout from "../Gradientlayout";
import Search from "../HomeSearch";
import UploadFile from "../UploadFile";
const HeroPanel = () => {
    return (
      <GradientLayout>
        <View  style={{paddingHorizontal:24, paddingBottom:24}}>

        <View style={styles.image}>
           <Image
              style={{ width: 38, height: 40 }}
              resizeMethod="contain"
              source={require('../../assets/images/lottie.gif')} 
            />
          <Image
            style={{ width: 40, height: 40 }}
            resizeMethod="contain"
              source={require('../../assets/images/profile.png')}
          />
        </View>
        <View style={styles.greet}>
          <Text style={{ fontSize: 15, fontWeight: 300 }}>Good Morning !</Text>
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Aryansh Sharma</Text>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <Search />
            <UploadFile />
          </View>
        </View>
        </View>

      </GradientLayout>
    );
  };
  const styles = StyleSheet.create({
    image: {
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 12,
      marginBottom: 24,
    },
    greet: {
      gap: 8,
    },
  });
export default HeroPanel;