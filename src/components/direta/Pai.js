import React from 'react';
import { Text } from 'react-native';
import Style from '../style';
import Filho from './Filho';

const Pai = () => {
  let x = 10;
  let y = 20;
  return (
    <>
      <Text style={Style.txtLarge}>Pai</Text>
      <Filho a={x} b={y} />
    </>
  );
};

export default Pai;
