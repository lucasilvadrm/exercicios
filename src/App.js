import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import FlexboxV4 from './components/layout/FlexboxV4';

// import FlexboxV3 from './components/layout/FlexboxV3';
// import FlexboxV2 from './components/layout/FlexboxV2';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import Diferenciar from './components/Diferenciar';
// import ContadorV2 from './components/contador/ContadorV2';
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
    <SafeAreaView style={style.App}>
      <FlexboxV4 />
      {/*
      <FlexboxV2 />
      <DigiteSeuNome />
      <ListaProdutosV2 />
      <ListaProdutos />
      <Familia>
        <Membro nome={'Lucas'} sobrenome={'Silva'} />
        <Membro nome={'Vítor'} sobrenome={'Silva'} />
      </Familia>
      <Familia>
        <Membro nome={'Patrícia'} sobrenome={'Silva'} />
        <Membro nome={'Jair'} sobrenome={'Silva'} />
      </Familia>
      <Diferenciar />
      <ContadorV2 />
      <Pai />
      <Pai />
      <Contador initialValue={0} />
      <Botao />
      <MinMax min={3} max={20} />
      <RandomNumber min={1} max={10} />
      <Comp />
      <Comp1 />
      <Comp2 />
      <Primeiro /> */}
    </SafeAreaView>
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
