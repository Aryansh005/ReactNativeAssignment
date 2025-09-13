import { Image, TouchableOpacity, View } from 'react-native';
import RotatingText from '../RotationText';

  const Search = ({handleClick}) => {
    return (
      <TouchableOpacity
      activeOpacity={1}
      onPress={handleClick}
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          borderRadius: 28,
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
        <RotatingText />
      </TouchableOpacity>
    );
  };
export default Search;