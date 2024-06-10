import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { styles } from '../styles/loginStyle.js';
import { AuthContext } from "../../context/AuthContext";


export default function MenuScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signed } = useContext(AuthContext);


  const registerPress = () => {
    navigation.navigate('Register');
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    await signIn(data);
  };
  console.log(signed);
  if (!signed) {
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
  } else {
    alert('voce loggou!!!')
  }
}
