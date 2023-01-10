import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import Style from './style';

const Contador = ({ initialValue }) => {
  const [count, setCount] = useState(Number(initialValue));

  const Increment = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);
  const handleClear = () => setCount(0);

  return (
    <>
      <Text style={Style.txtLarge}>{count}</Text>
      <Button title="Increment" onPress={Increment} />
      <Button title="Decrement" onPress={Decrement} />
      <Button title="Clear" onPress={handleClear} />
    </>
  );
};

export default Contador;
