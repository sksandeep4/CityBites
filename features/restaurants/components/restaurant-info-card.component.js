import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

export const RestaurantInfoCard = ({ restaurant }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg',
    ],
    address = '101, Jane Street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const Title = styled.Text`
    padding: 16px;
    color: red;
  `;

  return (
    <View>
      <Text>Restaurant Info</Text>
      <Card elevation={5} style={{ backgroundColor: 'white' }}>
        <Card.Cover
          key={name}
          style={{ padding: 20, backgroundColor: 'white' }}
          source={{
            uri: photos[0],
          }}
        />
        <Title>name</Title>
      </Card>
    </View>
  );
};
