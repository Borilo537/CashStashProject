import { Button, LayoutAnimation, StyleSheet } from 'react-native';

const lighterGreen = '#06D001';
const lightGreen = '#009443';
const lightYellow = '#945e00';
const normalGreen = '#2b3b29';
const darkerGreen = '#182117';
const darkGreen = '#0d120c';


export const styles = StyleSheet.create({

  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderColor: 'white' 
    },

  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    alignItems: 'start',
    width: '100%',
  },

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
    paddingBottom: 20,
  },

  voltar: {
    width: 20,
    height: 20,
    marginLeft: 10,
    transform: 'rotate(180deg)',
  },

  Main: {
    width: '100%',
    paddingTop: 20,
    padding: 20,
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  TopText: {
    color: lighterGreen,
    fontSize: 25,
    fontWeight: 'bold',
  },

  profileContainer: {
    gap: 25,
    marginBottom: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 100,
    backgroundColor: darkGreen,
    borderWidth: 3,
    borderColor: darkerGreen,
  },

  selfBlur: {
    width: '100%',
    height: 400,
    position: 'absolute',
    zIndex: -1,
  },

  element: {
    width: 190,
    height: 190,
    backgroundColor: lightGreen,
    zIndex: -2,
    borderRadius: 100,
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
  },

  info: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 550,
    gap: 25,
    padding: 25,
    paddingTop: 30,
    borderTopColor: 'white',
    borderTopWidth: 1,
    backgroundColor: 'none',
  },

  Label: {
    color: 'white',
    fontSize: 15,
    opacity: 0.7,
  },

  MainText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
  },

  SaveButton: {
    padding: 15,
    color: 'white',
    borderRadius: 10,
    fontSize: 20,
    fontWeight: '500',
    marginTop: 'auto',
  },

  DeleteButton: {
    backgroundColor: 'red',
    padding: 15,
    color: 'white',
    borderRadius: 10,
    fontSize: 20,
    fontWeight: '500',
  },



});