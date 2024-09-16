import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { styles } from '../styles/dateAddStyle';
import { Dropdown } from 'react-native-element-dropdown';
import { useIsFocused } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import MaskInput, { Masks } from 'react-native-mask-input';

import { api } from "../services/api";
// import { emailLoggado } from './Login';

import { emailLoggado } from './Login';

export default function DateAdd({ navigation }) {
  const isFocused = useIsFocused();

  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState(null);
  const [dias, setDays] = useState([]);
  const [name, setName] = useState('');

  const [money, setMoney] = React.useState('');

  const homePress = () => {
    navigation.navigate('Home');
    console.log('money', money)
  };

  const addButton = async (e) => {

    e.preventDefault();

    let preco = parseFloat(money.replace('R$ ', '').replace('.', '').replace(',', '.'))

    let month = meses.find(m => m.value === selectedMonth)?.abb; // Converte o valor numérico em abreviação
    let day = selectedDay


    const data = {
      name,
      month,
      day,
      preco,
      emailLoggado,
    };

    const response = await api.post("/date/add", data);

    alert(`Success: ${response.data.message || 'Data added successfully!'}`);

  };

  const handlePress = () => {
    console.log('wvwqv');
    setShowLimite(showLimite);
  };

  const meses = [
    { label: 'Janeiro', value: '1', abb: 'Jan' },
    { label: 'Fevereiro', value: '2', abb: 'Fev' },
    { label: 'Março', value: '3', abb: 'Mar' },
    { label: 'Abril', value: '4', abb: 'Abr' },
    { label: 'Maio', value: '5', abb: 'Mai' },
    { label: 'Junho', value: '6', abb: 'Jun' },
    { label: 'Julho', value: '7', abb: 'Jul' },
    { label: 'Agosto', value: '8', abb: 'Ago' },
    { label: 'Setembro', value: '9', abb: 'Set' },
    { label: 'Outubro', value: '10', abb: 'Out' },
    { label: 'Novembro', value: '11', abb: 'Nov' },
    { label: 'Dezembro', value: '12', abb: 'Dez' },
  ];
  

  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const updateDays = (month) => {
    const numDays = getDaysInMonth(month, selectedYear);
    const newDays = Array.from({ length: numDays }, (_, i) => ({
      label: `${i + 1}`,
      value: `${i + 1}`,
    }));
    setDays(newDays);
  };

  useEffect(() => {
    if (selectedMonth !== null) {
      updateDays(selectedMonth);
    }
  }, [selectedMonth, selectedYear]);

  return (
    <View style={styles.body}>
      <View style={styles.statusBG}></View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <View style={styles.topContentIcons}>
            <TouchableOpacity onPress={homePress}>
              <AntDesign name="left" size={25} color="white" />
            </TouchableOpacity>
            <Text style={styles.topText}>Adicionar data</Text>
            <MaterialIcons name="account-circle" size={35} color="white" />
          </View>

          <View style={styles.headerMain}>
            <TextInput
              style={styles.inputData}
              placeholder='NovaData1'
              placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
              value={name}
              onChangeText={setName}
            />

            <View style={styles.row}>
              <Dropdown
                style={styles.dropdown}
                data={meses}
                labelField="label"
                valueField="value"
                placeholder="Mês da data"
                placeholderStyle={{
                  color: 'white',
                  fontSize: 16,
                }}
                selectedTextStyle={{
                  color: 'white',
                  fontSize: 16,
                }}
                value={selectedMonth}
                onChange={item => {
                  setSelectedMonth(item.value);
                }}
              />

              <Dropdown
                style={styles.dropdown}
                data={dias}
                labelField="label"
                valueField="value"
                placeholder="Dia da data"
                placeholderStyle={{
                  color: 'white',
                  fontSize: 16,
                }}
                selectedTextStyle={{
                  color: 'white',
                  fontSize: 16,
                }}
                value={selectedDay}
                onChange={item => {
                  setSelectedDay(item.value);
                }}
              />
            </View>
            <MaskInput
              style={styles.inputDataPreco}
              value={money}
              onChangeText={(masked, unmasked) => {
                setMoney(masked);
                console.log('parsefloat', parseFloat(money.replace('R$ ', '').replace('.', '').replace(',', '.')))
              }}

              mask={Masks.BRL_CURRENCY}
            />
          </View>
        </View>

        <TouchableOpacity onPress={addButton} style={styles.touch}>
        </TouchableOpacity>
        <View style={styles.main}>
          <Text style={styles.mainText}>Adicionar</Text>
        </View>

        <StatusBar style="light" />
      </ScrollView>
    </View>
  );
}
