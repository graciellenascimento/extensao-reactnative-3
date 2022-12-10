import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component = {Login} options={{ title: 'Home', 
      headerStyle: {
        backgroundColor: '#e7ddd7',
        display: 'none',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        display: 'none',
      },
      }} />
        <Stack.Screen name="Cadastro" component={Cadastro} 
        options = {{ title: 'Usuários', 
          headerStyle: {
            backgroundColor: '#1670f7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            
            fontWeight: 'bold',
          }, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;