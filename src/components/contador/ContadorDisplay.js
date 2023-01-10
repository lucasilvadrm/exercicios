import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Style from '../style';

const ContadorDisplay = ({ num }) => {
  return (
    <View style={style.display}>
      <Text style={[Style.txtLarge, style.displayText]}>{num}</Text>
    </View>
  );
};

export default ContadorDisplay;

const style = StyleSheet.create({
  display: {
    backgroundColor: 'black',
    padding: 20,
    width: '70%',
  },
  displayText: {
    color: '#FFF',
  },
});
