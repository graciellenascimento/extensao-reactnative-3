import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Icon
        raised
        name='user-circle-o'
        type='font-awesome'
        color='#000'
        size={100}
      />
      
      <view style={styles.inputView}>
      <Input
        label='Login'
        inputStyle={{ backgroundColor: '#fff', width: 260 }}
        labelStyle={{ color: '#000' }}
        inputContainerStyle={{ borderColor: '#999491', borderWidth: 1}}
      />

      <Input
        label='Senha'
        inputStyle={{ backgroundColor: '#fff', width: 260 }}
        labelStyle={{ color: '#000' }}
        inputContainerStyle={{ borderColor: '#999491', borderWidth: 1}}
      />
      </view>

      <view style={styles.buttonsView}>
        <Button
          buttonStyle={{ backgroundColor: '#1670f7', borderColor: '#999491', borderWidth: 1  }}
          titleStyle={{ fontWeight: 600 }}
          title="Login"
        />
        <Button
          buttonStyle={{ backgroundColor: '#ff1616', borderColor: '#999491', borderWidth: 1  }}
          titleStyle={{ fontWeight: 600 }}
          title="Cadastre-se"
          onPress={()=>navigation.navigate('Cadastro')}
        />
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#e7ddd7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buttonsView: {
    display: 'grid',
    gap: 10,
    width: 260, 
  },
});
