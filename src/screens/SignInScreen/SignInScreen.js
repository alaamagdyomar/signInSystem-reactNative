import React ,{useState}from 'react';
import { View ,Text, Image,StyleSheet ,Pressable, TextInput, TouchableOpacity} from 'react-native';
import Shape from '../../../assets/images/signInShapes.png'
import whiteLogo from '../../../assets/images/whiteLogo.png'
import {styles} from '../../components/styles'
import CustomButton from '../../components/reusbleComponent/CustomButton'
import CustomForm from '../../components/Form/CustomForm'



const SignInScreen = () => {

  const onSignIn = ()=>{
    console.log('sign in component')
    // do more actions 
    }

  const onSignUp = ()=>{
      // setPassword(text);
      console.log('sign Up component')
      // do more actions 
      }

  return (
    <View style={styles.containerDev}>
        <View style={inStyles.fixedDev}>
        <Image source={Shape} style={inStyles.signLogo}/>
        </View>
        <View style={styles.overlay}>
          <Image source={whiteLogo} style={styles.whiteLogo}/>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>
            <CustomForm />
    </View>
  )
};
export default SignInScreen;

const inStyles = StyleSheet.create({
  fixedDev:{
    flex:0.7
  },
  signLogo:{
    display:'flex',
    height:'90%',
    width:'95%'
  }
})
