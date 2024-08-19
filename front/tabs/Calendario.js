import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { styles } from '../styles/calendarStyle';
import { api } from "../services/api";
import { LinearGradient } from 'expo-linear-gradient';


export default function Calendario({ navigation }) {

    const homePress = () => {
        navigation.navigate('Home');
    };


    const lightGreen = '#009443';
    const darkGreen = '#0d120c';

    return (

        <View style={styles.body}>

            <View style={styles.statusBG}></View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <TouchableOpacity onPress={homePress}>
                    <ImageBackground source={require('../assets/arrow.png')} style={styles.voltar}></ImageBackground>
                </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={styles.headText}>Suas datas</Text>
                    <View style={styles.eventoBox}></View>
                    <View style={styles.eventoBox}></View>
                    <View style={styles.eventoBox}></View>
                    <View style={styles.eventoBox}></View>
                    <View style={styles.eventoBox}></View>
                    <View style={styles.eventoBox}></View>
                    <View style={styles.eventoBox}></View>
                </View>

            </ScrollView>
            <LinearGradient
                colors={['transparent', darkGreen]}
                style={styles.main}>
                    
                <TouchableOpacity onPress={homePress}>
                    <Text style={styles.btnText}>Adicionar data</Text>
                </TouchableOpacity>
            </LinearGradient>


            <StatusBar style="light" />

        </View>

    );
}
