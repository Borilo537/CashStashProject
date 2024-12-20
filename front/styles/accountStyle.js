import { Button, LayoutAnimation, StyleSheet } from 'react-native';


const lighterGreen = '#06D001';
const lightGreen = '#009443';
const lightYellow = '#945e00';
const normalGreen = '#2b3b29';
const darkerGreen = '#182117';
const darkGreen = '#0d120c';
const ModalBGcolor = '#161f18';
const ModalInputcolor = '#223026';


export const styles = StyleSheet.create({

  ModalBG: {
    flex: 1,
    position: 'absolute',
    top: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
  },

  ModalBody: {
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },

  outInput: {
    height: '100%',
    width: '100%',
  },

  ModalAlert: {
    backgroundColor: ModalBGcolor,
    width: '100%',
    borderRadius: 20,
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: 20,
  },

  ModalAlertRed: {
    backgroundColor: '#381111',
    width: '100%',
    borderRadius: 20,
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: 20,
  },

  alertText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontFamily: 'Inter_400Regular',
    marginBottom: 10,
  },

  inputModal: {
    textAlign: 'start',
    color: 'white',
    fontSize: 16,
    backgroundColor: ModalInputcolor,
    padding: 15,
    borderRadius: 10,
    fontFamily: 'Inter_400Regular'
  },

  inputModalRed: {
    textAlign: 'start',
    color: 'white',
    fontSize: 16,
    backgroundColor: '#612222',
    padding: 15,
    borderRadius: 10,
    fontFamily: 'Inter_400Regular'
  },
  
  ModalButton: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    backgroundColor: lightGreen,
    padding: 15,
    borderRadius: 10,
    fontFamily: 'Inter_500Medium'
  },

  ModalButtonRed: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    backgroundColor: '#c73232',
    padding: 15,
    borderRadius: 10,
    fontFamily: 'Inter_500Medium'
  },

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
    fontFamily: 'Inter_400Regular'
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
    opacity: 0.7,
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
    fontSize: 12,
    opacity: 0.7,
    fontFamily: 'Inter_400Regular'
  },

  MainText: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Inter_500Medium'
  },

  SaveButton: {
    backgroundColor: lightGreen,
    padding: 15,
    color: 'white',
    borderRadius: 10,
    fontSize: 20,
    fontWeight: '500',
    marginTop: 'auto',
    fontFamily: 'Inter_500Medium'
  },

  DeleteButton: {
    backgroundColor: 'red',
    padding: 15,
    color: 'white',
    borderRadius: 10,
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium'
  },



});