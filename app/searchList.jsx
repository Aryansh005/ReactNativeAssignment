import { useRouter } from 'expo-router';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import GradientLayout from '../components/Gradientlayout';
import Search from '../components/Search';
import { ListItem } from './constants/mapperConstants';
export default function SearchList() {
  const router = useRouter();
 

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image source={item.icon} style={styles.icon} resizeMode="contain" />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>
            {item.unit} • {item.type}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <GradientLayout>
        <View style={{ paddingRight: 20, paddingLeft: 20 }}>
            <Pressable 
            // activeOpacity={1}
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
              Search Drugs
            </Text>
          </View>
              </Pressable>

          <View style={{ marginBottom: 16 }}>
            <Search handleClick={()=>{}}/>
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              padding: 8,
              alignSelf: 'flex-start',
            }}>
            <Text>All</Text>
          </View>
        </View>
      </GradientLayout>
      <View style={styles.listContainer}>
        <FlatList
          data={ListItem}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 16 }}
           showsVerticalScrollIndicator={false}
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  name: {
    fontSize: 14.22,
    fontWeight: '500',
    marginBottom: 2,
    color: '#111315',
  },
  details: {
    fontSize: 14.22,
    color: '#111315',
    fontWeight: 300,
  },
  listContainer: {
    padding: 20,
  },
});