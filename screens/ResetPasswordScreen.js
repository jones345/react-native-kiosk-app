// import React, { useState } from 'react'
// import { View, StyleSheet, TouchableOpacity } from 'react-native'
// import { Text } from 'react-native-paper'
// import Background from '../components/Background'
// import Logo from '../components/Logo'
// import Header from '../components/Header'
// import Button from '../components/Button'
// import TextInput from '../components/TextInput'
// import BackButton from '../components/BackButton'
// import { theme } from '../core/theme'
// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'
// import { nameValidator } from '../helpers/nameValidator'

// export default function RegisterScreen({ navigation }) {
//   const [name, setName] = useState({ value: '', error: '' })
//   const [email, setEmail] = useState({ value: '', error: '' })
//   const [password, setPassword] = useState({ value: '', error: '' })

//   const onSignUpPressed = () => {
//     const nameError = nameValidator(name.value)
//     const emailError = emailValidator(email.value)
//     const passwordError = passwordValidator(password.value)
//     if (emailError || passwordError || nameError) {
//       setName({ ...name, error: nameError })
//       setEmail({ ...email, error: emailError })
//       setPassword({ ...password, error: passwordError })
//       return
//     }
//     navigation.reset({
//       index: 0,
//       routes: [{ name: 'Dashboard' }],
//     })
//   }

//   return (
//     <Background>
//       <BackButton goBack={navigation.goBack} />
//       <Logo />
//       <Header>Create Account</Header>
//       <TextInput
//         label="Names"
//         returnKeyType="next"
//         value={name.value}
//         onChangeText={(text) => setName({ value: text, error: '' })}
//         error={!!name.error}
//         errorText={name.error}
//       />
//       <TextInput
//         label="Email"
//         returnKeyType="next"
//         value={email.value}
//         onChangeText={(text) => setEmail({ value: text, error: '' })}
//         error={!!email.error}
//         errorText={email.error}
//         autoCapitalize="none"
//         autoCompleteType="email"
//         textContentType="emailAddress"
//         keyboardType="email-address"
//       />
//       <TextInput
//         label="Password"
//         returnKeyType="done"
//         value={password.value}
//         onChangeText={(text) => setPassword({ value: text, error: '' })}
//         error={!!password.error}
//         errorText={password.error}
//         secureTextEntry
//       />
//       <TextInput
//         label="Comfirm Password"
//         returnKeyType="done"
//         value={password.value}
//         onChangeText={(text) => setPassword({ value: text, error: '' })}
//         error={!!password.error}
//         errorText={password.error}
//         secureTextEntry
//       />
//       <TextInput
//         label="ID NUMBER"
//         returnKeyType="done"
//         value={password.value}
//         onChangeText={(text) => setPassword({ value: text, error: '' })}
//         error={!!password.error}
//         errorText={password.error}
//         secureTextEntry
//       />
//       <Button
//         mode="contained"
//         onPress={onSignUpPressed}
//         style={{ marginTop: 24 }}
//       >
//         Sign Up
//       </Button>
//       <View style={styles.row}>
//         <Text>Already have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
//           <Text style={styles.link}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </Background>
//   )
// }

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     marginTop: 4,
//   },
//   link: {
//     fontWeight: 'bold',
//     color: theme.colors.primary,
//   },
// })

import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import InputTextField from '../components/InputTextField'

export default function RegisterScreen({ navigation }) {
  return (

    <ScrollView style={styles.container}>
    <View>
        <View style={{ marginTop: 60, alignItems: "center", justifyContent: "center" }}>
            <Image source={require('../assets/images/onboarding/Forgot_password.png')}  style={{height: 250, width: 330, borderRadius: 25}} />
            <Text style={[styles.text, { marginTop: 10, fontSize: 22, fontWeight: "500" }]}>Forgort Password</Text>
        </View>
        <Text style={[styles.text, { color: "#ABB4BD", fontSize: 15, textAlign: "center", marginVertical: 20 }]}>Please enter your email to reset Password </Text>

        <InputTextField style={styles.inputTitle} title="Email" />
       
        <TouchableOpacity style={styles.submitContainer}
         onPress={() => navigation.navigate('DrawerNavigator')}
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
                Reset Password
            </Text>
        </TouchableOpacity>

        <TouchableOpacity 
         onPress={() => navigation.navigate('RegisterScreen')}
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
            Don't have an account? <Text style={[styles.text, styles.link]}>Register Now</Text>
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
