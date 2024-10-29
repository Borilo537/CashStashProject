import { Button, LayoutAnimation, StyleSheet } from 'react-native';

const lighterGreen = '#00bf50';
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
    fontSize: 22,
    fontWeight: 'bold',
  },

  profileContainer: {
    gap: 25,
    marginBottom: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 100,
    backgroundColor: normalGreen
  },

  info: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: 25,
    padding: 20,
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

  MainButton: {
    backgroundColor: 'red',
    padding: 10,
    color: 'white',
    borderRadius: 10,
    fontSize: 15,
    fontWeight: '500',
    marginTop: 'auto',
  },



});