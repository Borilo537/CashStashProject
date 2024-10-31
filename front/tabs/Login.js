import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { styles } from '../styles/loginStyle.js';
import { useIsFocused } from '@react-navigation/native';

import { api } from "../services/api";

let emailLoggado
let CurrentID

export default function Login({ navigation }) {
  const isFocused = useIsFocused

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState(0);


  const registerPress = () => {
    navigation.navigate('Register');
  };


  const handleSubmit = async function () {
    console.log('email:', email, 'senha:', password);

    const data = {
      email,
      password,
    };

    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data),
    });

    let content = await response.json();

    try {
      if (content.success) {
        const idResponse = await api.get(`/auth/idCheck?email=${email}`);
        const fetchedId = idResponse.data.data[0].id;
        console.log('puxando ID', fetchedId);
        setId(fetchedId);

        emailLoggado = email;
        CurrentID = fetchedId;

        alert(content.message);
        navigation.navigate('Home');
      } else {
        console.log('ERROOO');
        alert(content.message);
      }
    } catch (error) {
      console.error('Erro ao obter ID:', error);
      alert('Ocorreu um erro ao processar sua solicitação. Tente novamente.');
    }
  }

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

            <TextInput
              style={styles.inputControl}
              placeholder='Digite seu e-mail'
              placeholderTextColor={'white'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Senha</Text>

            <TextInput
              style={styles.inputControl}
              placeholder='Digite sua senha'
              placeholderTextColor={'white'}
              value={password}
              secureTextEntry
              onChange={(e) => setPassword(e.target.value)}
            />
            <Text style={styles.passwordForget}>Esqueci minha senha</Text>

          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleSubmit}>
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

  )



}


export const useEmail = () => {
  return email;
};

export { emailLoggado }
export { CurrentID }

