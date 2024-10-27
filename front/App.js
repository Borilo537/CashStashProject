import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, Modal, Linking } from 'react-native';
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
import Calendario from './tabs/Calendario';
import DateAdd from './tabs/DateAdd'
import MetaAdd from './tabs/MetaAdd'
import MetaMenu from './tabs/MetaMenu'
import Account from './tabs/Account'

import { api } from "./services/api";
import { CurrentID } from './tabs/Login';

const Stack = createStackNavigator();



export default function Home() {
  const [initialRoute, setInitialRoute] = useState('Login');
  const isFocused = useIsFocused



  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          cardStyleInterpolator: ({ current, layouts }) => {
            const translateX = current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0], // Tela atual desliza para a esquerda
            });

            return {
              cardStyle: {
                transform: [{ translateX }],
              },
            };
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Limit" component={Limit} />
        <Stack.Screen name="EditLimit" component={EditLimit} />
        <Stack.Screen name="Calendario" component={Calendario} />
        <Stack.Screen name="DateAdd" component={DateAdd} />
        <Stack.Screen name="MetaAdd" component={MetaAdd} />
        <Stack.Screen name="MetaMenu" component={MetaMenu} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function HomeScreen({ navigation }) {
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

  const metaPress = () => {
    navigation.navigate('MetaMenu');
  }

  const handlePress = () => {
    Linking.content()
  }

  const [isModalVisible, setIsModalVisible] = useState(false)
  const lightGreen = '#009443';
  const [gasto, setGasto] = useState(5);

  useEffect(() => {
    api.get(`/gastos/select?id=${CurrentID}`).then((res) => {
      setGasto(res.data.data[0].gastado);
    })
  }, [CurrentID, isFocused])


  const [datas, setDatas] = useState([]);

  const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

  const fetchDatas = async () => {
    try {
      const res = await api.get(`/date/select?id=${CurrentID}`);
      if (res.data && res.data.data) {
        let resposta = res.data.data;

        resposta.sort((a, b) => {
          if (a.month === b.month) {
            return a.day - b.day;
          }
          return a.month - b.month;
        });

        setDatas(resposta);

        console.log('res', res.data.data);
      }
    } catch (error) {
      console.error('Erro ao buscar as datas:', error);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, [isFocused]);

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
                  <TouchableOpacity onPress={() => { metaPress(); setIsModalVisible(false); }}>
                    <Text style={styles.menuText}>Metas</Text>
                  </TouchableOpacity>
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
          <TouchableOpacity onPress={metaPress}>
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

          {(datas.map((data, index) => (
            <View
              key={index}
              style={[
                styles.dateContainer
              ]}
            >
              <Text style={[
                styles.dateName,
                index === 0 && { color: lightGreen, opacity: 1 }
              ]}>{data.name}</Text>
              <Text style={[
                styles.dateDay,
                index === 0 && { color: lightGreen, opacity: 1 }
              ]}>{data.day} de {monthNames[data.month - 1]}</Text>
            </View>
          ))
          )}

          <StatusBar style="light" />

        </View>
      </ScrollView>
    </View >


  );
}
