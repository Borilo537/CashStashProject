import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from '../styles/menuStyle';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Menu({ navigation }) {
    const homePress = () => {
        navigation.navigate('Home');
    };

    const limitPress = () => {
        navigation.navigate('Limit');
    };

    return (
        <View style={styles.body}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={homePress}>
                    <AntDesign name="left" size={25} color="white" />
                </TouchableOpacity>
                <MaterialIcons name="account-circle" size={35} color="white" />
            </View>
            <View style={styles.main}>
                <TouchableOpacity onPress={limitPress}>
                    <Text style={styles.menuText}>Limite de gastos</Text>
                </TouchableOpacity>
                <Text style={styles.menuText}>Metas</Text>
                <Text style={styles.menuText}>Calendário</Text>
                <Text style={styles.menuText}>Amigos</Text>
            </View>
        </View>
    );
}
