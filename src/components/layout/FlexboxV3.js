import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

const FlexboxV3 = () => {
  return (
    <View style={style.FlexV3}>
      <Quadrado />
      <Quadrado cor={'#FFF'} />
      <Quadrado cor={'#090'} />
      <Quadrado cor={'#029'} />
      <Quadrado cor={'#069'} />
    </View>
  );
};

export default FlexboxV3;

const style = StyleSheet.create({
  FlexV3: {
    height: 350,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#ee2',
  },
});
