import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { styles } from '../styles/loginStyle.js';

export default function MenuScreen({ navigation }) {

  const registerPress = () => {
    navigation.navigate('Register');
  };

  const handlePress = () => {
    Linking.openURL('https://exemplo.com');
  };

  return (

    <View style={styles.body}>

      <View style={{
        zIndex: 1,
        backgroundColor: '#11170F',
        position: 'absolute',
        width: '100%',
        height: 32,
        top: 0,
      }}></View>

      <ScrollView contentContainerStyle={{
        flexGrow: 1,
      }}>

        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <ImageBackground source={require('../assets/logo3.png')} style={styles.logo}></ImageBackground>
          </View>
          <Text style={styles.loginTitle}>Entre no CashStash</Text>
          <Text style={styles.loginText}>Tenha controle sobre seu dinheiro</Text>
        </View>

        <View style={styles.form}>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email</Text>

            <TextInput style={styles.inputControl} placeholder='Digite seu e-mail' placeholderTextColor={'white'}>
            </TextInput>

          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Senha</Text>

            <TextInput style={styles.inputControl} placeholder='Digite sua senha' placeholderTextColor={'white'}>
            </TextInput>
            <Text style={styles.passwordForget}>Esqueci minha senha</Text>

          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={handlePress}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Entrar</Text>
              </View>
            </TouchableOpacity>
          </View>

          
          <TouchableOpacity onPress={registerPress}>
            <Text style={styles.changeLogin}>Criar uma conta</Text>
          </TouchableOpacity>

        </View>





        <StatusBar style="light" />


      </ScrollView>
    </View>

  );
}
