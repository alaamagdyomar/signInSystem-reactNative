import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { PASSWORD_MIN_LENGTH ,REGEX, ERROR_MESSAGES } from './validations'

const Form = () => {

  const [ passwordVisible , setPaswwwordVisible ] = useState(true);
  const { control, errors, formState, handleSubmit } = useForm({
    mode: "onChange",
  });
  const submit = (data) => {
    console.log(data); // Handle form submission logic here
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Controller
            control={control}
            name="email"
            defaultValue=""
            rules={{
              required: { message: ERROR_MESSAGES.REQUIRED, value: true },
              pattern: {
                value: REGEX.email,
                message: ERROR_MESSAGES.EMAIL_INVALID,
              },
            }}
            render={({ field: { onBlur, onChange, value } }) => (
              <>
                <TextInput
                  placeholder="Enter a valid mail to submit"
                  value={value}
                  label="Email"
                  style={styles.input}
                  onBlur={onBlur}
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  onChangeText={(value) => onChange(value)}
                  error={!!errors?.email} // Add null check using optional chaining (?.)
                />
                {errors?.email && (
                  <HelperText style={styles.helperText} type="error">
                    {errors.email.message}
                  </HelperText>
                )}
              </>
            )}
          />
        <Controller
              control={control}
              name="password"
              defaultValue=""
              rules={{
                required: { message: ERROR_MESSAGES.REQUIRED, value: true },
                minLength: {
                  value: PASSWORD_MIN_LENGTH,
                  message: "Password must have at least 6 characters",
                },
              }}
              render={({ field: { onBlur, onChange, value } }) => (
                <>
                  <TextInput
                    value={value}
                    label="Password"
                    placeholder="Password"
                    style={styles.input}
                    onBlur={onBlur}
                    textContentType="password"
                    onChangeText={(value) => onChange(value)}
                    error={!!errors?.password} // Add null check using optional chaining (?.)
                    secureTextEntry={passwordVisible}
                    right={
                      <TextInput.Icon
                        icon={passwordVisible ? 'eye' : 'eye-off'}
                        onPress={() => setPaswwwordVisible(!passwordVisible)}
                        placeHolder='Password'
                      />
                    }
                  />
                  {errors?.password && (
                    <HelperText style={styles.helperText} type="error">
                      {errors.password.message}
                    </HelperText>
                  )}
                </>
              )}
            />
          <Button
                style={styles.sybmitBtn}
                  mode="contained"
                  onPress={handleSubmit(submit)}
                  disabled={!formState.isValid}
                  labelStyle={styles.submitBtnText}
                >
            Submit
          </Button>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:0.78
  },
  title:{
    marginLeft:'10%',
    marginBottom:35,
    fontSize:28,
    fontWeight:'bold',
    color:'black',
  },
  input:{
    width:'80%',
    marginLeft:'10%',
    marginBottom:25,
    backgroundColor:'white'
  },
  sybmitBtn:{
    width:'80%',
    marginLeft:'10%',
    marginBottom:'5%',
    backgroundColor:'#C72FF8',
    color:'white',
    height:'15%',
    justifyContent:'center'
  }
  ,submitBtnText:{
    color:'white'
  },
  helperText:{
   
  }
})
