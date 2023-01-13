import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

const FlexboxV1 = () => {
  return (
    <View style={style.FlexV1}>
      <Quadrado />
      <Quadrado cor={'#FFF'} />
      <Quadrado cor={'#090'} />
      <Quadrado cor={'#009'} />
      <Quadrado cor={'#069'} />
    </View>
  );
};

export default FlexboxV1;

const style = StyleSheet.create({
  FlexV1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ee2',
  },
});
