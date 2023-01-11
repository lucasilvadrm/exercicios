import React from 'react';
import { Text } from 'react-native';
import style from '../style';

const Membro = ({ nome, sobrenome }) => {
  return <Text style={style.txtLarge}>{`${nome} ${sobrenome}`}</Text>;
};

export default Membro;
