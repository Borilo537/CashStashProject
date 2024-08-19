import { LayoutAnimation, StyleSheet } from 'react-native';


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

  header: {
    width: '100%',
    height: 280,
    backgroundColor: lightGreen,
    paddingTop: 50,

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

  profile: {
    width: 33,
    height: 33
  },

  main: {
    paddingTop: 30,
    gap: 20,
    
  },

  menuText: {
    backgroundColor: darkerGreen,
    padding: 20,
    paddingLeft: 30,
    color: 'white',
    fontSize: 25,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: normalGreen
  },

  line: {
    backgroundColor: normalGreen,
    width: '100%',
    height: 2,
  },

  limitTextContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    paddingLeft: 15,
    gap: 10,
  },

  limitText: {
    color: 'white',
    fontSize: 20,
  },

  edit: {
    width: 18,
    height: 18
  },

  limitValueContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    paddingLeft: 5,
    gap: 5,
  },

  limitValueLabel: {
    color: 'white',
    fontSize: 25,
  },
  
  limitValue: {
    color: 'white',
    fontSize: 70,
  },

  limitTypeContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: -5,
    gap: 5,
  },

  limitType: {
    color: 'white',
    fontSize: 20,
  },

  gastouContainer: {
    backgroundColor: darkerGreen,
    width: '100%',
    height: 180,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    justifyContent: 'center',
  },

  gastouLabel: {
    color: 'white',
    fontSize: 25,
  },

  gastou: {
    color: 'white',
    fontSize: 40,
  }

  

});