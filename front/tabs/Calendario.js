import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { styles } from '../styles/calendarStyle';
import { api } from "../services/api";
import { LinearGradient } from 'expo-linear-gradient';

import { emailLoggado } from './Login';

export default function Calendario({ navigation }) {
    const [datas, setDatas] = useState([]);  // Estado para armazenar as datas
    const [loading, setLoading] = useState(true);

    const fetchDatas = async () => {
        try {
            const res = await api.get(`/date/select?email=${emailLoggado}`);
            // Certifique-se de acessar a chave correta no retorno
            if (res.data && res.data.data) {
                setDatas(res.data.data);  // Definindo o array de datas
            }
            setLoading(false);  // Desliga o indicador de carregamento
        } catch (error) {
            console.error('Erro ao buscar as datas:', error);
            setLoading(false);  // Desliga o indicador de carregamento mesmo em erro
        }
    };

    useEffect(() => {
        fetchDatas();  // Chama a função ao carregar a tela
    }, []);

    const homePress = () => {
        navigation.navigate('Home');
    };

    const DatePress = () => {
        navigation.navigate('DateAdd');
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
                    {loading ? (
                        <Text>Carregando...</Text>
                    ) : (
                        datas.map((data, index) => (
                            <View key={index} style={styles.eventoBox}>
                                <Text style={styles.eventText}>
                                    {data.name} - {data.day}/{data.month} - R$ {data.price.toFixed(2)}
                                </Text>
                            </View>
                        ))
                    )}
                </View>

            </ScrollView>
            <LinearGradient
                colors={['transparent', darkGreen]}
                style={styles.main}>

                <TouchableOpacity onPress={DatePress}>
                    <Text style={styles.btnText}>Adicionar data</Text>
                </TouchableOpacity>
            </LinearGradient>


            <StatusBar style="light" />

        </View>

    );
}
