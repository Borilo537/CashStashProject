import { createNavigationContainerRef } from '@react-navigation/native';
import { LayoutAnimation, StyleSheet } from 'react-native';


const lightGreen = '#009443';
const lightYellow = '#945e00';
const normalGreen = '#2b3b29';
const darkerGreen = '#182117';
const darkGreen = '#0d120c';

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
    gap: 10,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  inputLabel: {
    fontSize: 20,
    color: 'white',
    marginLeft: 5,
  },

  inputControl: {
    backgroundColor: normalGreen,
    color: 'white',
    padding: 9,
    paddingLeft: 15,
    borderRadius: 10,
    fontSize: 15,

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






});