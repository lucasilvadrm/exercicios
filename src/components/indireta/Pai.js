import React, { useState } from 'react';
import { Text } from 'react-native';
import Style from '../style';
import Filho from './Filho';

const Pai = () => {
  const [texto, setTexto] = useState('');
  const [num, setNum] = useState(0);

  // eslint-disable-next-line no-shadow
  const exibirValor = (numero, texto) => {
    setNum(numero);
    setTexto(texto);
  };

  return (
    <>
      <Text style={Style.txtLarge}>
        {texto}
        {num}
      </Text>
      <Filho min={0} max={10} funcao={exibirValor} />
    </>
  );
};

export default Pai;
