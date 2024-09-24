import { Button, LayoutAnimation, StyleSheet } from 'react-native';


const lightGreen = '#009443';
const lightYellow = '#945e00';
const normalGreen = '#2b3b29';
const darkerGreen = '#182117';
const darkGreen = '#0d120c';

export const styles = StyleSheet.create({


  statusBG: {
    zIndex: 1,
    backgroundColor: lightGreen,
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

  Head: {
    width: '100%',
    padding: 30,
    paddingHorizontal: 40,
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    backgroundColor: lightGreen,
    marginTop: 20,
  },

  HeadText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },

  Main: {
    width: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  MainText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
  },

  MainInput: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: '80%',
    borderRadius: 10,
    padding: 15,
    fontSize: 22,
    marginBottom: 40,
    color: 'white',
    textAlign: 'center',
    color: 'white',
    
  },

  Button: {
    backgroundColor: lightGreen,
    padding: 20,
    color: 'white',
    borderRadius: 10,
    fontSize: 30,
    fontWeight: 'Bold',
    marginTop: 100,
  },

  

});