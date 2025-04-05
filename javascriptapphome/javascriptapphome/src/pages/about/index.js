import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function About({ route }) {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Sobre o Usuario</Text>
      <Text>Nome: {route.params?.nome}</Text>
      <Text>Username: {route.params?.usuario}</Text>
      <Button
        title="Voltar para tela Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
