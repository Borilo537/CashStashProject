import { createNavigationContainerRef } from '@react-navigation/native';
import { LayoutAnimation, StyleSheet } from 'react-native';


const lightGreen = '#009443';
const lightYellow = '#945e00';
const normalGreen = '#2b3b29';
const darkerGreen = '#182117';
const darkGreen = '#11170F';

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
    paddingTop: 50,
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
    flex: 1,
    display: 'flex',
    height: '100%',
    alignItems: 'flex-end',
  },

  ModalAlert: {
    backgroundColor: 'red',
    height: 50,
    width: '100%',
  }




});