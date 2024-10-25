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

  voltar: {
    width: 20,
    height: 20,
    marginTop: 40,
    marginLeft: 30,
    transform: 'rotate(180deg)',
  },

  header: {
    width: '100%',
    paddingTop: 50,
    padding: 30,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 25,
  },

  headText: {
    color: 'white',
    fontSize: 30
  },

  eventoBox: {
    width: '100%',
    height: 120,
    backgroundColor: normalGreen,
    borderRadius: 10,
  },

  inputControl: {
    backgroundColor: normalGreen,
    color: 'white',
    padding: 9,
    paddingLeft: 15,
    borderRadius: 10,
    fontSize: 15,
  },


  main: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: 240,
    bottom: 0
  },

  btnText: {
    backgroundColor: lightGreen,
    padding: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  eventosContainer: {
    backgroundColor: normalGreen,
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    width: '100%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 10,
    flexWrap: 'nowrap',
  },

  eventosText: {
    fontSize: 20,
    width: 'auto',
    color: 'white',
    fontWeight: '600',
  },

  eventosDados: {
    fontSize: 18,
    color: 'white',
    fontWeight: '400',
    display: 'flex',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: 15,
    rowGap: 2,
    textAlign: 'right',
    minWidth: 85,
  },

  confirm: {
    backgroundColor: lightGreen,
    width: 42,
    height: 42,
    position: 'absolute',
    right: 0,
    marginRight: -22,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }



});