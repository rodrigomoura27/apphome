import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/home';
import About from './src/pages/about';
import Pag from './src/pages/about';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Tela Home',
            headerStyle: {
              backgroundColor: '#0192E5',
            },
            headerTintColor: '#FFFFFF',
          }}
        />

        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: 'Tela About',
            headerStyle: {
              backgroundColor: '#0192E5',
            },
            headerTintColor: '#FFFFFF',
          }}
        />

        <Stack.Screen
          name="Pag"
          component={Pag}
          options={{
            title: 'Tela Pag',
            headerStyle: {
              backgroundColor: '#0192E5',
            },
            headerTintColor: '#FFFFFF',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
