import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles/loginStyle.js';
import axios from 'axios';

export default function MenuScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const loginPress = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem');
      return;
    }

    axios.post('http://localhost:3000/register', {
      nome,
      email,
      senha,
    })
    .then(response => {
      alert(response.data);
    })
    .catch(error => {
      console.error(error);
      alert('Erro ao registrar');
    });
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
            <Text style={styles.inputLabel}>Nome</Text>
            <TextInput
              style={styles.inputControl}
              placeholder='Seu Nome'
              placeholderTextColor={'white'}
              value={nome}
              onChangeText={setNome}
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
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Confirmar Senha</Text>
            <TextInput
              style={styles.inputControl}
              placeholder='Confirme sua senha'
              placeholderTextColor={'white'}
              secureTextEntry
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleRegister}>
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
