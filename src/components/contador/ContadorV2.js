import React, { useState } from 'react';
import { Text } from 'react-native';
import Style from '../style';
import ContadorBotoes from './ContadorBotoes';
import ContadorDisplay from './ContadorDisplay';

//contador Pai
const ContadorV2 = () => {
  const [num, setNum] = useState(0);

  const increment = () => setNum(num + 1);
  const decrement = () => setNum(num - 1);

  return (
    <>
      <Text style={Style.txtLarge}>ContadorV2</Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes increment={increment} decrement={decrement} />
    </>
  );
};

export default ContadorV2;
