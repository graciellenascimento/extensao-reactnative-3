import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Cadastro({navigation}) {
return (
    <View style={styles.container}>
        <view style={styles.inputView}>
            <Input
                label='Login'
                inputStyle={{ backgroundColor: '#fff', width: 260 }}
                labelStyle={{ color: '#000' }}
                inputContainerStyle={{ borderColor: '#999491', borderWidth: 1 }}
            />

            <Input
                label='Senha'
                inputStyle={{ backgroundColor: '#fff', width: 260 }}
                labelStyle={{ color: '#000' }}
                inputContainerStyle={{ borderColor: '#999491', borderWidth: 1 }}
            />
        </view>

        <view style={styles.buttonsView}>
            <Button
                buttonStyle={{ backgroundColor: '#1670f7', borderColor: '#999491', borderWidth: 1 }}
                titleStyle={{ fontWeight: 600 }}
                title="Salvar"
            />
        </view>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 40,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    buttonsView: {
      display: 'grid',
      gap: 10,
      width: 260, 
    },
  });