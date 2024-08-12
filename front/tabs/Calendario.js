import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { styles } from '../styles/calendarStyle';
// import { api } from "../services/api";
import { Calendar } from 'react-native-calendars';

import { ptBR } from '../utils/localecalendarConfig'

export default function Calendario({ navigation }) {


    const limitPress = () => {
        navigation.navigate('Limit');
    };

    const handlePress = () => {
        Linking.openURL('https://exemplo.com');
    };

    const lightGreen = '#009443';

    return (

        <View style={styles.body}>

            <View style={styles.statusBG}></View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>

                <Calendar style={styles.calendario}
                theme={{
                    todayTextColor: lightGreen,
                    dayTextColor: 'white',
                    calendarBackground: 'transparent',
                    textDayFontWeight: '500',
                }}>

                </Calendar>
                
                <StatusBar style="light" />


            </ScrollView>
        </View>

    );
}
