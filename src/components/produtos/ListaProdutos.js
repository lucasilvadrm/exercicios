import React from 'react';
import { Text } from 'react-native';
import style from '../style';
import produtos from './produtos';

const ListaProdutos = () => {
  const renderizarLista = () => {
    return produtos?.map(produto => {
      return (
        <Text style={style.txtLarge} key={produto?.id}>
          {produto.nome}
        </Text>
      );
    });
  };

  return (
    <>
      <Text>Lista de Produtos</Text>
      {renderizarLista()}
    </>
  );
};

export default ListaProdutos;
