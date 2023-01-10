import React from 'react';
import { Text, View } from 'react-native';
import Style from './style';

const RandomNumber = ({ min, max }) => {
  const random = Math.floor(Math.random() * +max + +min);
  return (
    <View>
      <Text style={Style.txtLarge}>O número aleatório é: {random}</Text>
    </View>
  );
};

export default RandomNumber;
