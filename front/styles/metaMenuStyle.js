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

  Head: {
    width: '100%',
    height: 500,
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
  },

  MainButton: {
    backgroundColor: normalGreen,
    width: '100%',
    padding: 20,
    color: 'white',
    borderRadius: 10,
    fontSize: 25,
    fontWeight: '500',
    marginTop: 20,
  },

  MainButtonFocus: {
    backgroundColor: lightGreen,
    width: '100%',
    padding: 20,
    color: 'white',
    borderRadius: 10,
    fontSize: 25,
    fontWeight: '500',
    marginTop: 20,
  },

  MainText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
    marginTop: 50,
  }

  

});