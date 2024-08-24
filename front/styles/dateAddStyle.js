import { LayoutAnimation, StyleSheet } from 'react-native';


const lightGreen = '#009443';
const lightYellow = '#945e00';
const greenny = '#40593d';
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
    top: 0,
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
    backgroundColor: darkGreen,
    paddingTop: 50,
    paddingBottom: 50,

  },

  topContentIcons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 25,
  },

  voltar: {
    transform: 'rotate(180deg)',
    width: 30,
    height: 30
  },

  topText: {
    color: 'white',
  },

  profile: {
    width: 33,
    height: 33
  },

  headerMain: {
    padding: 30,
    gap: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  inputData: {
    color: 'white',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    padding: 8,
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
    paddingVertical: 15,
  },

  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 15,

  },

  dropdown: {
    flex: 1,
    color: 'white',
    padding: 15,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 3,
  },

  inputDataPreco: {
    color: 'white',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    padding: 8,
    fontSize: 20,
    textAlign: 'center',
    width: '60%',
    paddingVertical: 15,
  },

  main: {
    backgroundColor: lightGreen,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: 80,
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  mainText: {
    color: 'white',
    fontSize: 28,
  },

  touch: {
    padding: 10,
    position: 'absolute',
    width: '100%',
    height: 80,
    bottom: 0,
    zIndex: 2,
  }




});