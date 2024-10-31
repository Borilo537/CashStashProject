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
  Modal,
} from "react-native";
import { styles } from "../styles/accountStyle";
import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import * as ImagePicker from "expo-image-picker";
import { BlurView } from "expo-blur";
import { useIsFocused } from '@react-navigation/native';
import { CurrentID } from './Login';

export default function MetaAdd({ navigation }) {
  const isFocused = useIsFocused();
  const [image, setImage] = useState("../assets/profile.png");
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    api.get(`/user/accountInfo?id=${CurrentID}`).then((res) => {
      setName(res.data.data[0].name);
      setEmail(res.data.data[0].email);
    })
  }, [CurrentID, isFocused])

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

  return (
    <View style={styles.body}>
      <View style={styles.statusBG}></View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.Main}>
          <Modal
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}
            transparent={true}
            animationType="fade"
          >

            <View style={styles.ModalBody}>
              <View style={styles.ModalAlert}>
                <Text style={styles.alertText}>Digite seu novo nome de usuário</Text>
                <TextInput
                  style={styles.inputModal}
                  placeholder='Novo Nome de Usuário'
                  placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                  value={name}
                  onChangeText={setName}
                />
              </View>
            </View>
            <View style={styles.ModalBG}>

            </View>


          </Modal>

          <TouchableOpacity
            onPress={homePress}
            style={{ alignSelf: "flex-start" }}
          >
            <ImageBackground
              source={require("../assets/arrow.png")}
              style={styles.voltar}
            ></ImageBackground>
          </TouchableOpacity>

          <View style={styles.profileContainer}>
            <Text style={styles.TopText}>Seu Perfil</Text>
            <TouchableOpacity onPress={pickImage}>
              {image && (
                <Image source={{ uri: image }} style={styles.profileImage} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <BlurView
          tint="systemMaterialDark"
          intensity={100}
          style={styles.selfBlur}
        ></BlurView>
        <View style={styles.element}></View>

        <BlurView tint="dark" intensity={80} style={styles.info}>
          <View style={styles.column}>
            <Text style={styles.Label}>Nome de Usuário</Text>
            <View style={styles.row}>
              <Text style={styles.MainText}>{name}</Text>
              <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                <FontAwesome5 name="edit" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.column}>
            <Text style={styles.Label}>Email</Text>
            <View style={styles.row}>
              <Text style={styles.MainText}>{email}</Text>
            </View>
          </View>
          <View style={styles.column}>
            <Text style={styles.Label}>Senha</Text>
            <View style={styles.row}>
              <Text style={styles.MainText}>******</Text>
              <FontAwesome5 name="edit" size={24} color="white" />
            </View>
          </View>

          <Text style={styles.SaveButton}>Salvar Informações</Text>
          <Text style={styles.DeleteButton}>Deletar Conta</Text>
        </BlurView>

        <StatusBar style="light" />
      </ScrollView>
    </View>
  );
}
