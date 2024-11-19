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
  SafeAreaView,
} from "react-native";
import { styles } from "../styles/accountStyle";
import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import * as ImagePicker from "expo-image-picker";
import { BlurView } from "expo-blur";
import { useIsFocused } from '@react-navigation/native';
import { CurrentID } from './Login';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';


export default function MetaAdd({ navigation }) {
  const isFocused = useIsFocused();
  const [image, setImage] = useState("../assets/profile.png");
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [modalName, setModalName] = useState(null);
  const [modalNewPass, setModalNewPass] = useState(null);
  const [modalPass, setModalPass] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModalVisible2, setIsModalVisible2] = useState(false)
  const [isModalVisible3, setIsModalVisible3] = useState(false)
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  useEffect(() => {
    api.get(`/user/accountInfo?id=${CurrentID}`).then((res) => {
      setName(res.data.data[0].name);
      setEmail(res.data.data[0].email);
    })
  }, [CurrentID, isFocused])


  const passwordcheck = async () => {
    api.get(`/user/accountInfo?id=${CurrentID}`).then((res) => {
      if (!modalName || !modalPass) {
        return
      } else {
        if (res.data.data[0].password === modalPass) {
          const data = {
            modalName,
            CurrentID,
          };
          api.post("/user/alterName", data);
          api.get(`/user/accountInfo?id=${CurrentID}`).then((res) => {
            setName((res.data.data[0].name))
          });
          setIsModalVisible(false)
        }
      }
    });
  };

  const passwordcheck2 = async () => {
    console.log('comando')
    api.get(`/user/accountInfo?id=${CurrentID}`).then((res) => {
      if (!modalNewPass || !modalPass) {
        return
      } else {
        if (res.data.data[0].password === modalPass) {
          const data = {
            modalNewPass,
            CurrentID,
          };
          api.post("/user/alterPass", data);
          setIsModalVisible2(false)
        }
      }
    });
  };




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
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.body}>
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
              <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.outInput}></TouchableOpacity>
              <View style={styles.ModalAlert}>
                <Text style={styles.alertText}>Alterar seu nome de usuário</Text>
                <TextInput
                  style={styles.inputModal}
                  placeholder='Sua senha atual'
                  placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                  onChangeText={setModalPass}
                />
                <TextInput
                  style={styles.inputModal}
                  placeholder='Novo Nome de Usuário'
                  placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                  onChangeText={setModalName}
                />
                <TouchableOpacity onPress={passwordcheck} style={styles.outInput}>
                  <Text style={styles.ModalButton}>Alterar nome</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.outInput}></TouchableOpacity>
            </View>
            <BlurView experimentalBlurMethod='dimezisBlurView' tint="dark" intensity={30} style={{ position: 'absolute', height: '100%', width: '100%', }} />

          </Modal>

          <Modal
            visible={isModalVisible2}
            onRequestClose={() => setIsModalVisible2(false)}
            transparent={true}
            animationType="fade"
          >

            <View style={styles.ModalBody}>
              <TouchableOpacity onPress={() => setIsModalVisible2(false)} style={styles.outInput}></TouchableOpacity>
              <View style={styles.ModalAlert}>
                <Text style={styles.alertText}>Alterar sua senha</Text>
                <TextInput
                  style={styles.inputModal}
                  placeholder='Sua senha atual'
                  placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                  onChangeText={setModalPass}
                />
                <TextInput
                  style={styles.inputModal}
                  placeholder='Sua nova senha'
                  placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                  onChangeText={setModalNewPass}
                />
                <TouchableOpacity onPress={passwordcheck2} style={styles.outInput}>
                  <Text style={styles.ModalButton}>Alterar senha</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => setIsModalVisible2(false)} style={styles.outInput}></TouchableOpacity>
            </View>
            <BlurView experimentalBlurMethod='dimezisBlurView' tint="dark" intensity={30} style={{ position: 'absolute', height: '100%', width: '100%', }} />

          </Modal>

          <Modal
            visible={isModalVisible3}
            onRequestClose={() => setIsModalVisible3(false)}
            transparent={true}
            animationType="fade"
          >

            <View style={styles.ModalBody}>
              <TouchableOpacity onPress={() => setIsModalVisible3(false)} style={styles.outInput}></TouchableOpacity>
              <View style={styles.ModalAlertRed}>
                <Text style={styles.alertText}>Deletar sua conta</Text>
                <TextInput
                  style={styles.inputModalRed}
                  placeholder='Sua senha atual'
                  placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                  onChangeText={setModalPass}
                />
                <TouchableOpacity onPress={passwordcheck2} style={styles.outInput}>
                  <Text style={styles.ModalButtonRed}>Apagar conta</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => setIsModalVisible3(false)} style={styles.outInput}></TouchableOpacity>
            </View>
            <BlurView experimentalBlurMethod='dimezisBlurView' tint="dark" intensity={30} style={{ position: 'absolute', height: '100%', width: '100%', }} />

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
          tint="dark"
          intensity={100}
          style={styles.selfBlur}
          experimentalBlurMethod='dimezisBlurView'
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
              <TouchableOpacity onPress={() => setIsModalVisible2(true)}>
                <FontAwesome5 name="edit" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.SaveButton}>Salvar Informações</Text>
          <TouchableOpacity onPress={() => setIsModalVisible3(true)}>
            <Text style={styles.DeleteButton}>Deletar Conta</Text>
          </TouchableOpacity>
        </BlurView>

        <StatusBar style="light" />
      </ScrollView>
    </SafeAreaView>
  );
}
