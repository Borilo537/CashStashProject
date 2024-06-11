import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { styles } from '../styles/editLimitStyle';

export default function EditLimit({ navigation }) {

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
                        />

                    </View>

                    <View style={styles.limitContainer}>
                        <Text style={styles.limitLabel}>valor atual</Text>
                        <Text style={styles.limit}>720</Text>

                        <TouchableOpacity onPress={handlePress}>
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
