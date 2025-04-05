import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Pag({ route }) {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Idade do usuario {route.params?.usuario} é {route.params?.idade}</Text>
      <Button
        title="Voltar para tela Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
