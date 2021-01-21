import React, {useEffect, useState} from 'react';
import {Alert, Modal, FlatList} from 'react-native';
import api from '../../services/api';

import {
  Container,
  Title,

  DescriptionPokemon,
  Name,
  Like

} from './styles';



export default function ListPokemon({ navigation }) {

  const [pokemons, setPokemons] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  useEffect(() => {
    async function consultPokemon() {
      const listPokemons = await api.get(`pokemon/1`);
      setPokemons(listPokemons.data);
     
    }
    consultPokemon();
    
  }, []);


  return (
      <Container>
        <Title>List Pokemon - Teste</Title>
        <FlatList
          data={DATA}
          keyExtractor={item =>  (item.id)}
          renderItem={({ item }) => (
            <>
              <DescriptionPokemon>
                <Name>{item.title}</Name>
              </DescriptionPokemon>
              <Like></Like>
            </>
          )}
          
      />
      </Container>
  );
}