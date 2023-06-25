import React ,{useState}from 'react';
import { View ,Text, Image,Pressable, TextInput, TouchableOpacity} from 'react-native';
import Shape from '../../../assets/images/Shapes.png'
import whiteLogo from '../../../assets/images/whiteLogo.png'
import {styles} from '../../components/styles'
import CustomButton from '../../components/reusbleComponent/CustomButton'



const WelcomeScreen = () => {

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
        <View style={styles.fixedDev}>
        <Image source={Shape} style={styles.welcomeLogo}/>
        </View>
        <View style={styles.overlay}>
          <Image source={whiteLogo} style={styles.whiteLogo}/>
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>
        <View style={styles.btns}>
          <CustomButton label={'Sign In'} onSubmit={()=>{onSignIn()}} />
          <CustomButton label={'Sign Up'} onSubmit={()=>{onSignUp()}} />
        </View>
    </View>
  )
};
export default WelcomeScreen;
