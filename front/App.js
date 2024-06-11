import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { styles } from './styles/appStyle';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



import Login from './tabs/Login';
import Register from './tabs/Register';
import Menu from './tabs/Menu';
import Limit from './tabs/Limit';
import EditLimit from './tabs/EditLimit';


const Stack = createStackNavigator();


export default function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EditLimit">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="Limit" component={Limit} options={{ headerShown: false }} />
        <Stack.Screen name="EditLimit" component={EditLimit} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



function HomeScreen({ navigation }) {

  const registerPress = () => {
    navigation.navigate('Register');
  };

  const loginPress = () => {
    navigation.navigate('Login');
  };

  const menuPress = () => {
    navigation.navigate('Menu');
  };

  const limitPress = () => {
    navigation.navigate('Limit');
  };

  const handlePress = () => {
    Linking.openURL('https://exemplo.com');
  };

  return (


    <View style={styles.body}>

      <View style={styles.statusBG}></View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        <View style={styles.header}>
          <View style={styles.topContentIcons}>
            <TouchableOpacity onPress={menuPress}>
              <Entypo name="menu" size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={loginPress}>
              <MaterialCommunityIcons name="account-circle" size={35} color="white" />
            </TouchableOpacity>
          </View>

          <Text style={styles.gastoText}>gasto na semana</Text>

          <View style={styles.gastoContainer}>
            <TouchableOpacity onPress={limitPress}>
              <Text style={styles.gastoNum}>R$ 0,00</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
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

          <TouchableOpacity onPress={handlePress}>
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
    </View>


  );
}