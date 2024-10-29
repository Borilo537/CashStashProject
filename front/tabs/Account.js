import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { styles } from "../styles/accountStyle";
import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import * as ImagePicker from 'expo-image-picker';

export default function MetaAdd({ navigation }) {
  const [image, setImage] = useState('../assets/profile.png');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const homePress = () => {
    navigation.navigate("Home");
    tion.navigate("Home");
  };

  const lighterGreen = '#00bf50';
  const lightGreen = '#009443';


  return (
    <View style={styles.body}>
      <View style={styles.statusBG}></View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.Main}>
          <TouchableOpacity onPress={homePress} style={{ alignSelf: 'flex-start' }}>
            <ImageBackground source={require('../assets/arrow.png')} style={styles.voltar}></ImageBackground>
          </TouchableOpacity>

          <View style={styles.profileContainer}>
            <Text style={styles.TopText}>Seu Perfil</Text>
            <TouchableOpacity onPress={pickImage}>
              {image && <Image
                source={{ uri: image }}
                style={styles.profileImage}
              />}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.column}>
            <Text style={styles.Label}>Nome de Usuário</Text>
            <View style={styles.row}>
              <Text style={styles.MainText}>Bob</Text>
              <FontAwesome5 name="edit" size={24} color="white" />
            </View>
          </View>
          <View style={styles.column}>
            <Text style={styles.Label}>Email</Text>
            <View style={styles.row}>
              <Text style={styles.MainText}>a@a.com</Text>
              <FontAwesome5 name="edit" size={24} color="white" />
            </View>
          </View>
          <View style={styles.column}>
            <Text style={styles.Label}>Senha</Text>
            <View style={styles.row}>
              <Text style={styles.MainText}>******</Text>
              <FontAwesome5 name="edit" size={24} color="white" />
            </View>
          </View>


          <Text style={styles.MainButton}>Deletar Conta</Text>
        </View>





        <StatusBar style="light" />
      </ScrollView>
    </View>
  );
}
