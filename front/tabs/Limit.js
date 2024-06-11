import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { styles } from '../styles/limitStyle';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Limit({ navigation }) {
  const homePress = () => {
    navigation.navigate('Home');
  };

  const editPress = () => {
    navigation.navigate('EditLimit');
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
                <TouchableOpacity onPress={homePress}>
                <AntDesign name="left" size={25} color="white" />
                </TouchableOpacity>
                <MaterialIcons name="account-circle" size={35} color="white" />
            </View>

          <TouchableOpacity onPress={editPress}>
            <View style={styles.limitTextContainer}>
              <Text style={styles.limitText}>Seu Limite</Text>
              <FontAwesome5 name="pen" size={15} color="white" />
            </View>
          </TouchableOpacity>

          <View style={styles.limitValueContainer}>
            <Text style={styles.limitValueLabel}>R$</Text>
            <Text style={styles.limitValue}>720</Text>
            <Text style={styles.limitValueLabel}>,00</Text>
          </View>

          <View style={styles.limitTypeContainer}>
            <Text style={styles.limitType}>Semanais</Text>
          </View>

          <View style={styles.main}>
            <View style={styles.gastouContainer}>
              <Text style={styles.gastouLabel}>Gasto atual</Text>
              <Text style={styles.gastou}>R$ 67,05</Text>
            </View>
            <TouchableOpacity onPress={handlePress}>
              <View style={styles.analiseContainer}>
                <Text style={styles.analiseLabel}>Análise</Text>
                
              </View>
            </TouchableOpacity>
          </View>





        </View>






        <StatusBar style="light" />


      </ScrollView>
    </View>

  );
}
