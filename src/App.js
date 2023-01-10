import React from 'react';
import { View, StyleSheet } from 'react-native';
import ContadorV2 from './components/contador/ContadorV2';

// import Pai from './components/indireta/Pai';
// import Pai from './components/direta/Pai';
// import Contador from './components/Contador';
// import Botao from './components/Botao';
// import MinMax from './components/MinMax';
// import RandomNumber from './components/RandomNumber';
// import Comp, { Comp1, Comp2 } from './components/Multi';
// import Primeiro from './components/Primeiro';

const App = () => {
  return (
    <View style={style.App}>
      <ContadorV2 />
      {/* <Comp />
      <Pai />
      <Pai />
      <Contador initialValue={0} />
      <Botao />
      <MinMax min={3} max={20} />
      <RandomNumber min={1} max={10} />
      <Comp1 />
      <Comp2 />
      <Primeiro /> */}
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  App: {
    backgroundColor: 'violet',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});
