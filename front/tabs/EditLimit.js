import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { styles } from '../styles/editLimitStyle';
import { api } from "../services/api";

export default function EditLimit({ navigation }) {
    const [limite, setLimite] = useState('');

    const handleSubmit = async (e) => {
    
        e.preventDefault();
        const data = {
          limite
        };
        await api.post("/limit/update", data);
        alert("Limite atualizado!");
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


                <TouchableOpacity onPress={limitPress}>
                    <ImageBackground source={require('../assets/arrow.png')} style={styles.voltar}></ImageBackground>
                </TouchableOpacity>


                <View style={styles.header}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Mudar limite de gastos</Text>

                        <TextInput
                            style={styles.inputControl}
                            placeholder='Ex: 500'
                            placeholderTextColor={'white'}
                            value={limite}
                            onChangeText={setLimite}
                        />

                    </View>

                    <View style={styles.limitContainer}>
                        <Text style={styles.limitLabel}>valor atual</Text>
                        <Text style={styles.limit}>720</Text>

                        <TouchableOpacity  onPress={handleSubmit}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>Salvar</Text>
                            </View>
                        </TouchableOpacity>
        
                    </View>

                </View>






                <StatusBar style="light" />


            </ScrollView>
        </View>

    );
}
