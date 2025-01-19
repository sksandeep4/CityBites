import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
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
          <RestaurantInfoCard restaurant={[]} />
        </View>
      </SafeAreaView>
    </>
  );
};
