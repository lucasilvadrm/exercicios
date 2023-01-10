import React from 'react';
import { Button } from 'react-native';

const Filho = ({ min, max, funcao }) => {
  const gerarNumero = () => Math.floor(Math.random() * +max + +min);

  return (
    <>
      <Button
        title="Executar"
        onPress={() => {
          const numeroGerado = gerarNumero();
          funcao(numeroGerado, 'Valor: ');
        }}
      />
    </>
  );
};

export default Filho;
