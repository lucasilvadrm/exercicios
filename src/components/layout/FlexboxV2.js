import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

const FlexboxV2 = () => {
  return (
    <View style={style.FlexV2}>
      <Quadrado />
      <Quadrado cor={'#FFF'} />
      <Quadrado cor={'#090'} />
      <Quadrado cor={'#009'} />
      <Quadrado cor={'#069'} />
    </View>
  );
};

export default FlexboxV2;

const style = StyleSheet.create({
  FlexV2: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#ee2',
  },
});
