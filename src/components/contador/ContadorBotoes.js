import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ContadorBotoes = ({ increment, decrement }) => {
  return (
    <View style={style.display}>
      <Button title="+" onPress={increment} />
      <Button title="-" onPress={decrement} />
    </View>
  );
};

export default ContadorBotoes;

const style = StyleSheet.create({
  display: {
    flexDirection: 'row-reverse',
    width: '30%',
    justifyContent: 'space-around',
  },
});
