import { createNavigationContainerRef } from '@react-navigation/native';
import { LayoutAnimation, StyleSheet } from 'react-native';


const lightGreen = '#009443';
const lightYellow = '#945e00';
const normalGreen = '#2b3b29';
const darkerGreen = '#182117';
const darkGreen = '#0d120c';
const red = '#ff3838';

export const styles = StyleSheet.create({


  statusBG: {
    zIndex: 1,
    backgroundColor: darkGreen,
    position: 'absolute',
    width: '100%',
    height: 32,
    top: 0, // Define a posição do topo como 0 para fixar o elemento na parte superior da tela
  },

  body: {
    flex: 1,
    backgroundColor: darkGreen,
  },

  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 220,
  },

  voltar: {
    width: 20,
    height: 20,
    marginTop: 40,
    marginLeft: 30,
    transform: 'rotate(180deg)',
  },

  header: {
    width: '100%',
    height: 280,
    paddingTop: 60,
    paddingHorizontal: 30,
  },


  input: {
    gap: 25,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  inputLabel: {
    fontSize: 30,
    color: 'white',
    marginLeft: 5,
  },

  inputControl: {
    backgroundColor: normalGreen,
    color: 'white',
    width: '90%',
    padding: 15,
    paddingLeft: 15,
    borderRadius: 10,
    fontSize: 20,
  },

  inputExtra: {
    opacity: 0.6,
    fontSize: 20,
    color: 'white',
  },

  limitContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  limitLabel: {
    color: 'white',
    fontSize: 30,
  },

  limit: {
    color: 'white',
    fontSize: 50,

  },


  btn: {
    marginTop: 40,
    backgroundColor: lightGreen,
    width: 150,
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  btnText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },

  ModalBG: {
    backgroundColor: 'black',
    flex: 1,
    position: 'absolute',
    top: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },

  ModalBody: {
    zIndex: 1,
    display: 'flex',
    height: 'auto',
    alignItems: 'flex-end',
    marginTop: 'auto',
    
  },

  ModalAlert: {
    backgroundColor: red,
    height: 200,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: 10,
  },

  alertText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    gap: 10,
  },

  button: {
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
    color: red,
    padding: 10,
    borderRadius: 10,
    width: '45%',
    textAlign: 'center',
    fontSize: 20,
  },

  button2: {
    borderWidth: 2,
    borderColor: 'white',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    width: '45%',
    textAlign: 'center',
    fontSize: 20,
  }




});