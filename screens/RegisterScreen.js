import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import InputTextField from '../components/InputTextField'
import  emailValidator from '../helpers/emailValidator'
import nameValidator from '../helpers/nameValidator'
import passwordValidator from '../helpers/passwordValidator'
import {signup} from '../helpers/ApiCalls';
import axios from 'axios';

export default function RegisterScreen({ navigation }) {

     const baseUrl = 'http://mobileappdbapi-env.eba-srvjzqzd.eu-west-1.elasticbeanstalk.com:5000/';
     const [name, setName] = useState({ value: '', error: '' })
     const [lastName, setLastName] = useState({ value: '', error: '' })
     const [email, setEmail] = useState({ value: '', error: '' })
     const [gender, setGender] = useState({ value: '', error: '' })
     const [password, setPassword] = useState({ value: '', error: '' })
     const [idNumber, setIdNumber] = useState({ value: '', error: '' })

     const onSignUpPressed = (event) => {
        
        const  lastNameError = nameValidator(lastName.value)
        const genderError = nameValidator(gender.value)
        const IdError = nameValidator(idNumber.value)
        const emailError = emailValidator(email.value)
        const nameError = nameValidator(name.value)
        const passwordError = passwordValidator(password.value)

        if (emailError || passwordError || nameError || lastNameError || genderError || IdError) {
          setName({ ...name, error: nameError })
          setEmail({ ...email, error: emailError })
          setPassword({ ...password, error: passwordError })
          setLastName({ ...lastName, error: lastNameError })
          setGender({ ...gender, error:genderError})
          setIdNumber({...idNumber,error:IdError})
          return
        }
       
        const userData = {
            
            email: email.value,
            firstName: name.value,
            gender: gender.value,
             idNumber: idNumber.value,
             lastName: lastName.value,
             password: password.value
        }
        console.log(userData)

        axios.post(`http://mobileappdbapi-env.eba-srvjzqzd.eu-west-1.elasticbeanstalk.com:5000/users/signup`,{
            
            email: email.value,
            firstName: name.value,
            gender: gender.value,
             idNumber: idNumber.value,
             lastName: lastName.value,
             password: password.value 
        })
        .then(res =>{
            navigation.reset({
                index: 0,
                routes: [{ name: 'DrawerNavigator' }],
              })
              console.log(res)
              console.log(res.data)
        }).catch(err =>{
            console.log(err)
        })
       
      }


  return (

    <ScrollView style={[styles.container,{paddingHorizontal:20}]}>
    <View>
        <View style={{ marginTop: 60, alignItems: "center", justifyContent: "center" }}>
            <Image source={require('../assets/images/onlinechat.jpg')}  style={{height: 250, width: 330, borderRadius: 25}} />
            <Text style={[styles.text, { marginTop: 10, fontSize: 22, fontWeight: "500" }]}></Text>
        </View>
        <View style={{ marginTop: 48, flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity>
                <View style={styles.socialButton}>
                    <Image source={require('../assets/images/onboarding/facebook.png')} style={styles.socialLogo} />
                    <Text style={styles.text}>Facebook</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../assets/images/onboarding/google.png')} style={styles.socialLogo} />
                <Text style={styles.text}>Google</Text>
            </TouchableOpacity>
        </View>
        <Text style={[styles.text, { color: "#ABB4BD", fontSize: 15, textAlign: "center", marginVertical: 20 }]}></Text>

        <InputTextField style={[styles.inputTitle,{paddingTop:8}]} value={name.value} title="First Name" onChangeText={(text) => setName({ value: text, error: '' })}   errorText={name.error}/>
        <InputTextField style={[styles.inputTitle,{paddingTop:8}]}  value={lastName.value}title="Last Name" onChangeText={(text) => setLastName({ value: text, error: '' })}  errorText={lastName.error} />
        <InputTextField style={[styles.inputTitle,{paddingTop:8}]}  value={email.value}title="Email" onChangeText={(text) => setEmail({ value: text, error: '' })}  errorText={email.error} />
        <InputTextField style={[styles.inputTitle,{paddingTop:8}]} value={gender.value} title="Gender" onChangeText={(text) => setGender({ value: text, error: '' })}  errorText={gender.error} />
        <InputTextField style={[styles.inputTitle,{paddingTop:8}]}  value={idNumber.value}title="ID Number" onChangeText={(text) => setIdNumber({ value: text, error: '' })}  errorText={idNumber.error} />
        <InputTextField style={[styles.inputTitle,{paddingTop:8}]}  value={password.value}title="Password"  onChangeText={(text) => setPassword({ value: text, error: '' })}  errorText={password.error}/>

       
        <TouchableOpacity style={styles.submitContainer}
        //  onPress={() => navigation.navigate('DrawerNavigator')}
        onPress={onSignUpPressed}
        >
            <Text
                style={[
                    styles.text,
                    {
                        color: "#FFF",
                        fontWeight: "600",
                        fontSize: 16
                    }
                ]}
            >
                Create Account
            </Text>
        </TouchableOpacity>

        <TouchableOpacity 
         onPress={() => navigation.navigate('LoginScreen')}
        >
        <Text
            style={[
                styles.text,
                {
                    fontSize: 14,
                    color: "#ABB4BD",
                    textAlign: "center",
                    marginTop: 24
                }
            ]}
        >
             have an account? <Text style={[styles.text, styles.link]}>Login</Text>
        </Text>
        </TouchableOpacity>
    </View>
</ScrollView>

  );
}



const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 30
  },
  text: {
     
      color: "#1D2029"
  },
  socialButton: {
      flexDirection: "row",
      marginHorizontal: 12,
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "rgba(171, 180, 189, 0.65)",
      borderRadius: 4,
      backgroundColor: "#fff",
      shadowColor: "rgba(171, 180, 189, 0.35)",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 1,
      shadowRadius: 20,
      elevation: 5
  },
  socialLogo: {
      width: 16,
      height: 16,
      marginRight: 8
  },
  link: {
      color: "#FF1654",
      fontSize: 14,
      fontWeight: "500"
  },
  submitContainer: {
    backgroundColor: '#3B55E6',
      fontSize: 16,
      borderRadius: 4,
      paddingVertical: 12,
      marginTop: 32,
      alignItems: "center",
      justifyContent: "center",
      color: "#FFF",
      shadowColor: "rgba(255, 22, 84, 0.24)",
      shadowOffset: { width: 0, height: 9 },
      shadowOpacity: 1,
      shadowRadius: 20,
      elevation: 5
  }
});
