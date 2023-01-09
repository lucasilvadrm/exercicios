import React from 'react';
import { Text } from 'react-native';
import Style from './style';

const MinMax = props => {
  console.warn(props);
  return (
    <Text style={Style.txtLarge}>
      O número {props.max} é maior que o número {props.min}!
    </Text>
  );
};

export default MinMax;
