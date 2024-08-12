import { LayoutAnimation, StyleSheet } from 'react-native';


const lightGreen = '#009443';
const lightYellow = '#945e00';
const normalGreen = '#2b3b29';
const darkerGreen = '#182117';
const darkGreen = '#11170F';

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

  header: {
    width: '100%',
    height: 280,
    backgroundColor: lightGreen,
    paddingTop: 50,

  },

  calendario: {
    fontWeight: '700',
  }

  
});