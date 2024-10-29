import { StyleSheet } from 'react-native';
import { lighterGreen, lightGreen, normalGreen, darkGreen, darkerGreen } from './colors';



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
    backgroundColor: darkerGreen,
  },

  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 220,
  },

  header: {
    width: '100%',
    height: 180,
    backgroundColor: lightGreen,
    paddingTop: 30,
  },

  topContentIcons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingTop: 12,
  },

  gastoText: {
    color: 'white',
    fontSize: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    marginTop: 10,
  },

  gastoContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingLeft: 30,
    paddingRight: 30,
  },

  gastoNum: {
    color: 'white',
    fontWeight: '500',
    fontSize: 40,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },

  gastoAdd: {
    width: 33,
    height: 33,
    resizeMode: 'cover',
  },

  main: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 20,
  },

  economiaText: {
    color: 'white',
    fontSize: 20,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'start',
    marginTop: 35,
    paddingLeft: 10,
  },

  analiseContainer: {
    backgroundColor: normalGreen,
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 15,
    marginTop: 20,
    borderRadius: 10,
  },

  analiseText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },

  analiseImage: {
    width: 22,
    height: 22,
    resizeMode: 'cover',
  },

  line: {
    backgroundColor: normalGreen,
    width: '100%',
    height: 2,
    marginVertical: 30,
  },

  metasContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 5,
  },

  metasText: {
    color: 'white',
    height: '100%',
    fontSize: 22,
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  arrow: {
    width: 18,
    height: 18,
    resizeMode: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  metasBox: {
    backgroundColor: normalGreen,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    gap: 15,
    marginTop: 20,
    borderRadius: 10,
  },

  metasStats: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },

  metasName: {
    color: 'white',
    fontSize: 18,
    maxWidth: 160,
  },

  metasPrice: {
    color: 'white',
    fontSize: 14,
  },

  metasBar: {
    backgroundColor: darkGreen,
    width: '100%',
    height: 5,
  },

  barProgress: {
    backgroundColor: lightGreen,
    width: '83%',
    height: '100%',
  },

  metasBox2: {
    backgroundColor: normalGreen,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    gap: 15,
    marginTop: 20,
    borderRadius: 10,
  },

  metasName2: {
    color: 'white',
    fontSize: 18,
    maxWidth: 160,
  },

  metasPrice2: {
    color: 'white',
    fontSize: 14,
  },

  barProgress2: {
    backgroundColor: lightGreen,
    width: '43%',
    height: '100%',
  },

  calendarioContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  calendarioText: {
    color: 'white',
    height: '100%',
    fontSize: 22,
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  dateContainer: {
    borderWidth: 2,
    borderColor: '#80827f',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 20,
  },

  dateName: {
    color: 'white',
    height: '100%',
    fontSize: 18,
    opacity: 0.5,
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  dateDay: {
    color: 'white',
    height: '100%',
    fontSize: 16,
    opacity: 0.5,
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
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

  mainModal: {
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