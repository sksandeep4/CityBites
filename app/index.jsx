import { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexGrow: 0,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
          height: 100,
        }}
      >
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingLeft: 2,
          backgroundColor: 'skyblue',
        }}
      >
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {},
//   stepContainer: {},
//   reactLogo: {},
// });
