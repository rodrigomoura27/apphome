import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  function navegarAbout() {
    navigation.navigate('About', {
      nome: 'Rodrigo Martines Moura',
      usuario: 'randonwz',
    });
  }
  function navegarPag() {
    navigation.navigate('Pag', {
        idade: '17',
        usuario: 'randonwz',
    });
}

  return (
    <View>
      <Text>Home</Text>
      <Text> Essa é a Tela de Home! </Text>
      <Button title="Ir para tela About" onPress={navegarAbout} />

      <Button title="Ir para tela pag" onPress={navegarPag} />
    </View>
  );
}
