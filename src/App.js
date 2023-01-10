import React from 'react';
import { View, StyleSheet } from 'react-native';
import Botao from './components/Botao';
// import MinMax from './components/MinMax';
// import RandomNumber from './components/RandomNumber';
// import Comp, { Comp1, Comp2 } from './components/Multi';
// import Primeiro from './components/Primeiro';

const App = () => {
  return (
    <View style={style.App}>
      <Botao />
      {/* <Comp />
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
