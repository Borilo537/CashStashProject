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
import { styles } from "../styles/accountStyle";
import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import { AntDesign } from "@expo/vector-icons";
import MaskInput, { Masks } from "react-native-mask-input";

export default function MetaAdd({ navigation }) {
  const [money, setMoney] = React.useState("");



  const homePress = () => {
    navigation.navigate("Home");
    tion.navigate("Home");
  };



  return (
    <View style={styles.body}>
      <View style={styles.statusBG}></View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.Main}>
          <TouchableOpacity onPress={homePress} style={{alignSelf: 'flex-start'}}>
            <ImageBackground source={require('../assets/arrow.png')} style={styles.voltar}></ImageBackground>
          </TouchableOpacity>
          <View style={styles.profileContainer}>
            <ImageBackground
              source={require("../assets/profile.png")}
              style={styles.profileImage}
            ></ImageBackground>
            <Text style={styles.MainText}>userName</Text>
          </View>
          <Text style={styles.MainText}>AccountName</Text>
          <Text style={styles.MainText}>Email@.com</Text>
          <Text style={styles.MainText}>*********</Text>
          <Text style={styles.MainButton}>Deletar Conta</Text>

        </View>

        <StatusBar style="light" />
      </ScrollView>
    </View>
  );
}
