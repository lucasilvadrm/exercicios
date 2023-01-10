import React from 'react';
import { Text } from 'react-native';
import Style from '../style';

const Filho = ({ a, b }) => {
  return (
    <>
      <Text style={Style.txtLarge}>{a}</Text>
      <Text style={Style.txtLarge}>{b}</Text>
    </>
  );
};

export default Filho;
