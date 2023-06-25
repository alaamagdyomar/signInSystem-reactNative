import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';



const CustomButton = ({label , onSubmit}) => {
   return (
        <Button   
        style={label == 'Sign In' ? styles.signIn : styles.signUp}
        mode="contained-tonal" 
        onPress={() => {onSubmit()}} 
        labelStyle={label == 'Sign In' ? styles.buttonText : styles.buttonWhiteText}
        >
            {label}
      </Button>
    )
}
 
export default CustomButton;

const styles = StyleSheet.create({
    signIn:{
      height:70,
      justifyContent:'center',
      backgroundColor:'#1433FF',
      width:'60%',
      marginBottom: 20 ,
    },
    buttonText: {
        color: 'white',
        fontWeight: '400',
        fontSize: 20,
      },
      signUp:{
        backgroundColor:'white',
        height:70,
        width:'60%',
        marginBottom: 20 ,
        borderWidth:2,
        borderColor:'#1433FF',
        justifyContent:'center',
      },
      buttonWhiteText:{
        color: 'blue',
        fontWeight: '400',
        fontSize: 20,
      }

})