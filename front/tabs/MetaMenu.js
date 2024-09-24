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
import { styles } from "../styles/metaMenuStyle";
import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import { AntDesign } from "@expo/vector-icons";
import MaskInput, { Masks } from "react-native-mask-input";

export default function MetaAdd({ navigation }) {
  const [money, setMoney] = React.useState("");

  const handlePress = () => {
    console.log("wvwqv");
  };

  const homePress = () => {
    navigation.navigate("Home");
    tion.navigate("Home");
  };

  const metaAddPress = () => {
    navigation.navigate("MetaAdd");
  };

  return (
    <View style={styles.body}>
      <View style={styles.statusBG}></View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.Head}>
          <TouchableOpacity onPress={homePress}>
            <AntDesign name="left" size={25} color="white" />
          </TouchableOpacity>
          <Text style={styles.HeadText}></Text>
        </View>
        <View style={styles.Main}>
          <Text style={styles.MainButton}>Ver suas metas</Text>
          <TouchableOpacity onPress={metaAddPress} style={{width: '100%'}}>
            <Text style={styles.MainButtonFocus}>Criar novas metas</Text>
          </TouchableOpacity>
          <Text style={styles.MainText}>Como funcionam as metas?</Text>
        </View>

        <StatusBar style="light" />
      </ScrollView>
    </View>
  );
}
