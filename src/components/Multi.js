import React from 'react';
import { Text } from 'react-native';
import Style from './style';

const Comp = () => {
  return <Text style={Style.txtLarge}>Comp #Principal</Text>;
};
const Comp1 = () => {
  return <Text>Comp #01</Text>;
};

const Comp2 = () => {
  return <Text>Comp #02</Text>;
};

export { Comp1, Comp2 };
export default Comp;
