import { LayoutAnimation, StyleSheet } from 'react-native';


const lightGreen = '#009443';
const normalGreen = '#2b3b29';
const darkerGreen = '#182117';
const darkGreen = '#11170F';

export const styles = StyleSheet.create({


  body: {
    backgroundColor: 'red',
    flex: 1,
    backgroundColor: darkGreen,
  },


  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: darkGreen,
    paddingTop: 60,
  },

  logoContainer: {
    textShadowColor: lightGreen,
    textShadowRadius: 20,
    textShadowOffset: 20,
    width: 110,
    height: 110,
    borderRadius: 20,
    marginBottom: 15,
    overflow: 'hidden',
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  loginTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: 'white',
  },

  loginText: {
    opacity: 0.6,
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
  },

  form: {
    paddingHorizontal: 30,
    paddingVertical: 40,
    gap: 25,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',  
    
  },

  input: {
    gap: 10,
    width: '100%',
  },

  inputLabel: {
    fontSize: 20,
    color: 'white',
    marginLeft: 5,
  },

  inputControl: {
    backgroundColor: normalGreen,
    color: 'white',
    padding: 9,
    paddingLeft: 15,
    borderRadius: 10,
    fontSize: 15,
    
  },

  btn: {
    marginTop: 40,
    backgroundColor: lightGreen,
    width: 150,
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  btnText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },

  
  changeLogin: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 18,
    marginTop: 10,
    padding: 10,
  },


  passwordForget: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginLeft: 10,
  }






 

});