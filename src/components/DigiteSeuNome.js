import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

const DigiteSeuNome = () => {
  const [nome, setNome] = useState('teste');
  return (
    <View>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={texto => setNome(texto)}
      />
    </View>
  );
};

export default DigiteSeuNome;
