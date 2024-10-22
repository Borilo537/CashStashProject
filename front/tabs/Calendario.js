import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { styles } from '../styles/calendarStyle';
import { api } from "../services/api";
import { LinearGradient } from 'expo-linear-gradient';
import { useIsFocused } from '@react-navigation/native';

import { CurrentID } from './Login';

export default function Calendario({ navigation }) {
    const isFocused = useIsFocused();
    const [datas, setDatas] = useState([]);

    const fetchDatas = async () => {
        try {
            const res = await api.get(`/date/select?id=${CurrentID}`);
            if (res.data && res.data.data) {
                console.log('aqui', res.data.data)
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

    const homePress = () => {
        navigation.navigate('Home');
    };

    const DatePress = () => {
        navigation.navigate('DateAdd');
    };


    const lightGreen = '#009443';
    const darkGreen = '#0d120c';
    const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

    return (

        <View style={styles.body}>

            <View style={styles.statusBG}></View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <TouchableOpacity onPress={homePress}>
                    <ImageBackground source={require('../assets/arrow.png')} style={styles.voltar}></ImageBackground>
                </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={styles.headText}>Suas datas</Text>
                    {

                        (datas.map((data, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.eventosContainer,
                                    index === 0 && { backgroundColor: lightGreen }
                                ]}
                            >
                                <Text style={styles.eventosText}>
                                    {data.name}
                                </Text>
                                <Text style={styles.eventosDados}>
                                    <Text>{data.day} de {monthNames[data.month - 1]}</Text>
                                    <Text>{data.price % 1 === 0
                                        ? `R$ ${data.price.toFixed(0)}`
                                        : `R$ ${data.price.toFixed(2).replace('.', ',')}`}
                                    </Text>
                                </Text>
                            </View>
                        ))
                        )
                    }
                </View >

            </ScrollView >
            <LinearGradient
                colors={['transparent', darkGreen]}
                style={styles.main}>

                <TouchableOpacity onPress={DatePress}>
                    <Text style={styles.btnText}>Adicionar data</Text>
                </TouchableOpacity>
            </LinearGradient>


            <StatusBar style="light" />

        </View >

    );
}
