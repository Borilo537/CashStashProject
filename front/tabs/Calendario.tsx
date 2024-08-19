import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { styles } from '../styles/calendarStyle';
// import { api } from "../services/api";

import { ptBR } from '../utils/localecalendarConfig'
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

export default function Calendario({ navigation }) {
    const [day, setDay] = useState<DateData>()

    const homePress = () => {
        navigation.navigate('Home');
      };


    const lightGreen = '#009443';

    return (

        <View style={styles.body}>

            <View style={styles.statusBG}></View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.main}>
                    <Calendar style={styles.calendario}
                        theme={{
                            arrowColor: lightGreen,
                            todayTextColor: lightGreen,
                            dayTextColor: 'white',
                            calendarBackground: 'transparent',
                            textDayFontWeight: '500',
                            monthTextColor: 'white',
                            textDisabledColor: 'gray',
                            selectedDayBackgroundColor: lightGreen,
                            selectedDayTextColor: 'white',
                        }}
                        onDayPress={setDay}
                        
                        markedDates={day &&  {
                            [day.dateString]: { selected: true },
                        }}

                        minDate={new Date().toDateString()}>

                    </Calendar>

                    <StatusBar style="light" />

                </View>
            </ScrollView>
        </View>

    );
}
