import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles/loginStyle.js';
import { api } from "../services/api";




export default function Register({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const loginPress = () => {
    navigation.navigate('Login');
  };


  const handleSubmit = async (e) => {
    if (password !== password2) {
      alert('As senhas não coincidem');
      return;
    }



    emailLoggado = email

    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    const limitData = { email };

    await api.post("/user/create", data);
    await api.post("/user/createLimit", limitData);
    await api.post("/user/createGasto", limitData);


    navigation.navigate('Login');
    alert("Usuário criado com sucesso!");
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
            <ImageBackground ImageBackgroundsource={require('../assets/logo3.png')} style={styles.logo}></ImageBackground>
          </View>
          <Text style={styles.loginTitle}>Entre no CashStash</Text>
          <Text style={styles.loginText}>Tenha controle sobre seu dinheiro</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Nome</Text>
            <TextInput
              style={styles.inputControl}
              placeholder='Seu Nome'
              placeholderTextColor={'white'}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.inputControl}
              placeholder='Digite seu e-mail'
              placeholderTextColor={'white'}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              style={styles.inputControl}
              placeholder='Crie sua senha'
              placeholderTextColor={'white'}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Confirmar Senha</Text>
            <TextInput
              style={styles.inputControl}
              placeholder='Confirme sua senha'
              placeholderTextColor={'white'}
              secureTextEntry
              value={password2}
              onChangeText={setPassword2}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleSubmit}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Criar Conta</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={loginPress}>
            <Text style={styles.changeLogin}>Já possuo uma conta</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="light" />
      </ScrollView>
    </View>
  );
}
