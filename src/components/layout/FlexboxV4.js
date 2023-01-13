import React from 'react';
import { View, StyleSheet } from 'react-native';

const FlexboxV4 = () => {
  return (
    <View style={style.FlexV4}>
      <View style={style.V0} />
      <View style={style.V1} />
      <View style={style.V2} />
    </View>
  );
};

export default FlexboxV4;

const style = StyleSheet.create({
  FlexV4: {
    flex: 1,
    width: 100,
    backgroundColor: '#ee2',
  },
  V0: {
    height: 300,
    backgroundColor: '#ffa',
  },
  V1: {
    flex: 1,
    backgroundColor: '#eaa',
  },
  V2: {
    flex: 1,
    backgroundColor: '#e2a',
  },
});
