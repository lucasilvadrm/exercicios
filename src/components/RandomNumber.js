import React from 'react';
import { Text, View, Button } from 'react-native';

const RandomNumber = props => {
  const random = Math.floor(Math.random() * +props.max + +props.min);
  return (
    <View>
      <Text>{random}</Text>
      <Button
        title="Gerar novo número aleatório"
        disabled
        onPress={() => console.warn(random)}
      />
    </View>
  );
};

export default RandomNumber;
