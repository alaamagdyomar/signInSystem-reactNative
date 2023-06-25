/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  containerDev:{
    flex: 1,
  },
  fixedDev:{
    flex: 1,
    position: 'relative',
  },
  overlay:{
    display:'flex',
    ...StyleSheet.absoluteFillObject,
    marginLeft:'15%',
    marginTop:'10%'
  },
  welcomeLogo:{
    display:'flex',
    height:'100%',
    width:'100%'
  },
  signLogo:{
    display:'flex',
    height:'70%',
    width:'95%'
  },
  welcomeText:{
    fontSize: 26,
    color:'white',
  },
  whiteLogo:{
    marginBottom:10
  },
  btns:{
    display:'flex',
    flexDirection:'column',
    width:'100%', 
    alignItems:'center'
  },
  SignInBtn:{
    height:20,
    marginBottom:10
  },
  inputField: {
    width:'100%'
},
SignInBtns:{
  height:20,
  marginBottom:10
}
 });
