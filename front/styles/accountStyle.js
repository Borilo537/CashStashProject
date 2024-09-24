import { Button, LayoutAnimation, StyleSheet } from 'react-native';


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

  Main: {
    width: '100%',
    height: 600,
    paddingTop: 40,
    padding: 20,
    marginTop: 90,
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  profileContainer: {
    gap: 20,
    marginBottom: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  profileImage: {
    width: 170,
    height: 170,
  },

  MainText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

  MainButton: {
    backgroundColor: 'red',
    padding: 20,
    color: 'white',
    borderRadius: 10,
    fontSize: 25,
    fontWeight: '500',
    marginTop: 80,
  },




  

});