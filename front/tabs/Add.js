import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { styles } from '../styles/addStyle';
import { api } from "../services/api";
import { emailLoggado } from './Login';


export default function Add({ navigation }) {
    const [gasto, setGasto] = useState(0);
    const [showGasto, setShowGasto] = useState(0);
    let dados = 0

    api.get('/gastos/select').then((res) => {
        console.log('resposta',res.data.data)
        dados = res.data.data + gasto



    })



    const handleSubmit = async () => {


        

        alert('Gasto Adicionado!')


        // let newGasto = showGasto+gasto
        const data = {
            gasto
        };

        await api.post("/gastos/update", data);
    };

    const homePress = () => {
        navigation.navigate('Home');
    };

    const handlePress = () => {
        Linking.openURL('https://exemplo.com');
    };

    return (

        <View style={styles.body}>

            <View style={styles.statusBG}></View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>


                <TouchableOpacity onPress={homePress}>
                    <ImageBackground source={require('../assets/arrow.png')} style={styles.voltar}></ImageBackground>
                </TouchableOpacity>


                <View style={styles.header}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Adicionar gasto</Text>

                        <TextInput
                            style={styles.inputControl}
                            placeholder='Ex: 15,00'
                            placeholderTextColor={'white'}
                            value={gasto}
                            onChangeText={setGasto}
                        />

                        <Text style={styles.inputExtra}>R$ 0,00 gastos de R$ 200</Text>

                    </View>

                    <View style={styles.limitContainer}>

                        <TouchableOpacity onPress={handleSubmit}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>Adicionar</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>


                <StatusBar style="light" />


            </ScrollView>
        </View>

    );
}
