import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput, Modal } from 'react-native';
import { styles } from '../styles/addStyle';
import { api } from "../services/api";
import { emailLoggado } from './Login';
import { useIsFocused } from '@react-navigation/native';


export default function Add({ navigation }) {
    const [gastado, setGastado] = useState('');
    const [showGasto, setShowGasto] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(true)
    const [gasto, setGasto] = useState('');

    const isFocused = useIsFocused();

    useEffect(() => {
        api.get(`/gastos/select?email=${emailLoggado}`).then((res) => {
            console.log('VAPO', res.data.data[0].gastado)
            setGasto(res.data.data[0].gastado);
        })
    }, [emailLoggado, isFocused])

    const [showLimite, setShowLimite] = useState(0);

    useEffect(() => {
        api.get(`/limit/select?email=${emailLoggado}`).then((res) => {
            setShowLimite(res.data.data[0].valor);
        })
    }, [emailLoggado, isFocused])


    const handleSubmit = async (e) => {

        alert('Gasto Adicionado!')

        e.preventDefault();
        const data = {
            gastado,
            emailLoggado
        };

        await api.post("/gastos/update", data);

        api.get(`/gastos/select?email=${emailLoggado}`).then((res) => {
            console.log('VAPO', res.data.data[0].gastado)
            setGasto(res.data.data[0].gastado);
        })

        setGastado('')



        setIsModalVisible(true)


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
                    <Modal
                        visible={isModalVisible}
                        onRequestClose={() => setIsModalVisible(false)}
                        transparent={true}
                        animationType="fade"
                    >

                        <View style={styles.ModalBody}>
                            <View style={styles.ModalAlert}>
                                <View style={styles.buttonContainer}>
                                    <View style={styles.button}>Continuar</View>
                                    <View style={styles.button2}>Cancelar</View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.ModalBG}>

                        </View>


                    </Modal>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Adicionar gasto</Text>

                        <TextInput
                            style={styles.inputControl}
                            placeholder='Ex: 15,00'
                            placeholderTextColor={'white'}
                            value={gastado}
                            onChangeText={setGastado}

                        />

                        <Text style={styles.inputExtra}>R$ {gasto} gastos de R$ {showLimite}</Text>

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
