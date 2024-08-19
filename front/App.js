import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, AsyncStorage } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, Modal } from 'react-native';
import { styles } from './styles/appStyle';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/native';



import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Login from './tabs/Login';
import Register from './tabs/Register';
import Add from './tabs/Add';
import Limit from './tabs/Limit';
import EditLimit from './tabs/EditLimit';
import Calendario from './tabs/Calendario.js';

import { api } from "./services/api";
import { emailLoggado } from './tabs/Login';


const Stack = createStackNavigator();


export default function Home() {
  const [initialRoute, setInitialRoute] = useState('Calendario');


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Add" component={Add} options={{ headerShown: false }} />
        <Stack.Screen name="Limit" component={Limit} options={{ headerShown: false }} />
        <Stack.Screen name="EditLimit" component={EditLimit} options={{ headerShown: false }} />
        <Stack.Screen name="Calendario" component={Calendario} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



function HomeScreen({ navigation }) {
  console.log('BABABOI', emailLoggado)
  const isFocused = useIsFocused();

  const registerPress = () => {
    navigation.navigate('Register');
  };

  const loginPress = () => {
    navigation.navigate('Login');
  };

  const limitPress = () => {
    navigation.navigate('Limit');
  };

  const addPress = () => {
    navigation.navigate('Add');
  };

  const calendarioPress = () => {
    navigation.navigate('Calendario');
  };

  const handlePress = () => {
    Linking.openURL('https://exemplo.com');
  };

  const [isModalVisible, setIsModalVisible] = useState(false)

  const lightGreen = '#009443';
  const normalGreen = '#2b3b29';
  const darkerGreen = '#182117';
  const darkGreen = '#0d120c';

  const [gasto, setGasto] = useState('0');

  useEffect(() => {
    api.get(`/gastos/select?email=${emailLoggado}`).then((res) => {
      console.log('VAPO', res.data.data[0].gastado)
      setGasto(res.data.data[0].gastado);
    })
  }, [emailLoggado, isFocused])


  return (

    <View style={styles.body}>

      <View style={{
        zIndex: 1,
        backgroundColor: lightGreen,
        position: 'absolute',
        width: '100%',
        height: 32,
        top: 0,
      }}></View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        <View style={styles.header}>
          <View style={styles.topContentIcons}>

            <Entypo name="menu" size={35} color="white" onPress={() => setIsModalVisible(true)} />


            <Modal
              visible={isModalVisible}
              onRequestClose={() => setIsModalVisible(false)}
              animationType="slide"
              presentationStyle="pageSheet"
            >

              <View style={styles.body}>
                <View style={styles.topContainer}>

                  <AntDesign name="left" size={25} color="white" onPress={() => setIsModalVisible(false)} />
                  <MaterialIcons name="account-circle" size={35} color="white" />

                </View>
                <View style={styles.mainModal}>
                  <TouchableOpacity onPress={() => { limitPress(); setIsModalVisible(false); }}>
                    <Text style={styles.menuText}>Limite de gastos</Text>
                  </TouchableOpacity>
                  <Text style={styles.menuText}>Metas</Text>
                  <TouchableOpacity onPress={() => { calendarioPress(); setIsModalVisible(false); }}>
                    <Text style={styles.menuText}>Calendário</Text>
                  </TouchableOpacity>
                  <Text style={styles.menuText}>Amigos</Text>
                </View>
              </View>
            </Modal>

            <TouchableOpacity onPress={loginPress}>
              <MaterialCommunityIcons name="account-circle" size={35} color="white" />
            </TouchableOpacity>
          </View>

          <Text style={styles.gastoText}>gasto na semana</Text>

          <View style={styles.gastoContainer}>
            <TouchableOpacity onPress={limitPress}>
              <Text style={styles.gastoNum}
              >R$ {gasto}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={addPress}>
              <Ionicons name="add-circle-outline" size={45} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.main}>
          <Text style={styles.economiaText}>Sua economia está ótima!</Text>

          <TouchableOpacity onPress={handlePress}>
            <View style={styles.analiseContainer}>
              <Text style={styles.analiseText}>Ver Análise</Text>
              <ImageBackground source={require('./assets/analise.png')} style={styles.analiseImage}></ImageBackground>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.line}></View>

        <View style={styles.main}>
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.metasContainer}>
              <Text style={styles.metasText}>Suas Metas</Text>
              <Entypo name="chevron-right" size={30} color="white" />
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={handlePress}>
            <View style={styles.metasBox}>
              <View style={styles.metasStats}>
                <Text style={styles.metasName}>Computador Novo</Text>
                <Text style={styles.metasPrice}>R$ 5000,00</Text>
              </View>
              <View style={styles.metasBar}>
                <View style={styles.barProgress}></View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePress}>
            <View style={styles.metasBox2}>
              <View style={styles.metasStats}>
                <Text style={styles.metasName2}>Cafeteira</Text>
                <Text style={styles.metasPrice2}>R$ 419,90</Text>
              </View>
              <View style={styles.metasBar}>
                <View style={styles.barProgress2}></View>
              </View>
            </View>
          </TouchableOpacity>



        </View>

        <View style={styles.line}></View>

        <View style={styles.main}>

          <TouchableOpacity onPress={calendarioPress}>
            <View style={styles.calendarioContainer}>
              <Text style={styles.calendarioText}>Calendário</Text>
              <Entypo name="chevron-right" size={30} color="white" />
            </View>
          </TouchableOpacity>

          <View style={styles.dateContainer}>
            <Text style={styles.dateName}>Presente pro Caio</Text>
            <Text style={styles.dateDay}>14 Mai.</Text>
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.dateName2}>Mensalidade academia</Text>
            <Text style={styles.dateDay2}>21 Jun.</Text>
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.dateName3}>Mercado</Text>
            <Text style={styles.dateDay3}>24 Jun.</Text>
          </View>



          <StatusBar style="light" />

        </View>
      </ScrollView>
    </View >


  );
}