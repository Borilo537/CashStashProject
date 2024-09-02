import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput, Modal } from 'react-native';
import { styles } from '../styles/addStyle';
import { api } from "../services/api";
import { emailLoggado } from './Login';
import { useIsFocused } from '@react-navigation/native';
import MaskInput, { Masks } from 'react-native-mask-input';


export default function Add({ navigation }) {
    const [gastado, setGastado] = useState('');
    const [showGasto, setShowGasto] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [gasto, setGasto] = useState('');

    const isFocused = useIsFocused();

    const [money, setMoney] = React.useState('');

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

    useEffect(() => {
        setGastado(parseFloat(money.replace('R$ ', '').replace('.', '').replace(',', '.')))
    })


    const handleSubmit = async (e) => {
        let valorComparar = parseFloat(gasto) + parseFloat(gastado)

        if (valorComparar > showLimite) {
            setIsModalVisible(true)
        }
        else if (valorComparar < showLimite) {
            setIsModalVisible(false)
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


        }





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
                                <Text style={styles.alertText}>Este gasto excede seu limite, deseja continuar?</Text>
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.button}
                                        onPress={async (e) => {
                                            setIsModalVisible(false)
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

                                        }}>Continuar</Text>
                                    <Text style={styles.button2}
                                        onPress={() => setIsModalVisible(false)}
                                    >Cancelar</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.ModalBG}>

                        </View>


                    </Modal>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Adicionar gasto</Text>

                        <MaskInput
                            style={styles.inputControl}
                            value={money}
                            onChangeText={(masked, unmasked) => {
                                setMoney(masked);
                                console.log('parsefloat', parseFloat(money.replace('R$ ', '').replace('.', '').replace(',', '.')))
                                setGastado(parseFloat(money.replace('R$ ', '').replace('.', '').replace(',', '.')))
                                console.log('gastado', gastado)
                            }}

                            mask={Masks.BRL_CURRENCY}
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
