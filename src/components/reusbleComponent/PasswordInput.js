import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {TextInput,DefaultTheme } from 'react-native-paper';

const PasswordInput = () => {
    const [Text ,setText ] = useState('')
    const [ passwordVisible , setPaswwwordVisible ] = useState(true);

    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          placeholder: 'gray', // Customize the placeholder color
          primary: 'blue', // Customize the icon color
        },
      };

    const handleSubmit = () => {
        // Handle submit logic here
        console.log('handle Submit');
      };  
   
    return (
        <View style={styles.inputField}>
            <TextInput
                style={styles.icon} 
                label="Password"
                secureTextEntry={passwordVisible}
                onChangeText={() => {console.log('clicked')}}
                onSubmitEditing={handleSubmit}
                returnKeyType="done" // This sets the keyboard return key to "Done"
                blurOnSubmit={false} // This prevents the keyboard from dismissing after submit
                right={
                    <TextInput.Icon
                        icon={passwordVisible ? 'eye':'eye-off'}
                        onPress={()=>setPaswwwordVisible(!passwordVisible)} 
                        placeHolder='Passwrd'         
                    />
                }
            />
        </View>
    )
}
export default PasswordInput;

const styles = StyleSheet.create({
    inputField:{
        width:'75%',
        marginBottom:25
    },
    icon:{
        height:80
    }
})