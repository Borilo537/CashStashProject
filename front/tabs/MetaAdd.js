import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { styles } from "../styles/metaAddStyle";
import React, { useEffect, useState } from 'react';
import { api } from "../services/api";
import { AntDesign } from "@expo/vector-icons";
import MaskInput, { Masks } from 'react-native-mask-input';

export default function MetaAdd({ navigation }) {
  const [money, setMoney] = React.useState('');

  const handlePress = () => {
    console.log("wvwqv");
  };

  const metaMenuPress = () => {
    navigation.navigate("MetaMenu");
  };

  return (
    <View style={styles.body}>
      <View style={styles.statusBG}></View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.Head}>
          <TouchableOpacity onPress={metaMenuPress}>
            <AntDesign name="left" size={25} color="white" />
          </TouchableOpacity>
          <Text style={styles.HeadText}>CRIE UMA NOVA META</Text>
        </View>
        <View style={styles.Main}>
          <Text style={styles.MainText}>Oque você quer comprar?</Text>
          <TextInput
            style={styles.MainInput}
            placeholder="Digite aqui"
            placeholderTextColor={"white"}
          ></TextInput>
          <Text style={styles.MainText}>E qual o valor?</Text>
          <MaskInput
            style={styles.MainInput}
            value={money}
            placeholderTextColor={"white"}
            onChangeText={(masked, unmasked) => {
              setMoney(masked);
              console.log('parsefloat', parseFloat(money.replace('R$ ', '').replace('.', '').replace(',', '.')))
            }}
            mask={Masks.BRL_CURRENCY}
          />
          <Text style={styles.Button}>CRIAR META</Text>
        </View>

        <StatusBar style="light" />
      </ScrollView>
    </View>
  );
}
