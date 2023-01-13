import React from 'react';
import { Text, FlatList } from 'react-native';
import style from '../style';
import produtos from './produtos';

const ListaProdutosV2 = () => {
  return (
    <>
      <Text>Lista de Produtos</Text>
      <FlatList
        data={produtos}
        renderItem={({ item }) => {
          return <Text style={style.txtLarge}>{item.nome}</Text>;
        }}
      />
    </>
  );
};

export default ListaProdutosV2;
