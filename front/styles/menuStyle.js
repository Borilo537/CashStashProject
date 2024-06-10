import { StyleSheet } from 'react-native';

const lightGreen = '#009443';
const lightYellow = '#945e00';
const normalGreen = '#2b3b29';
const darkerGreen = '#182117';
const darkGreen = '#11170F';

export const styles = StyleSheet.create({

  body: {
    flex: 1,
    backgroundColor: darkGreen,
  },

  topContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 42,
    paddingHorizontal: 30,
  },

  main: {
    paddingTop: 30,
    gap: 20,
    
  },

  menuText: {
    backgroundColor: darkerGreen,
    padding: 15,
    paddingLeft: 30,
    color: 'white',
    fontSize: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: normalGreen
  },



 
});