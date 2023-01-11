import React from 'react';
import { Text, Platform } from 'react-native';
import style from './style';

const Diferenciar = props => {
  const platform =
    Platform.OS === 'android' ? (
      <Text style={style.txtLarge}>Android</Text>
    ) : (
      <Text style={style.txtLarge}>IOS</Text>
    );
  return platform;
};

export default Diferenciar;
