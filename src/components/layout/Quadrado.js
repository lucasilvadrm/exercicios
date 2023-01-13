import React from 'react';
import { View } from 'react-native';

const Quadrado = ({ cor }) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: 50,
        width: 50,
        backgroundColor: cor || '#000',
      }}
    />
  );
};

export default Quadrado;
