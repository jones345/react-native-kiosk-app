import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
// import Background from '../components/Background'
// import Logo from '../components/Logo'
// import Header from '../components/Header'
// import Button from '../components/Button'
// import TextInput from '../components/TextInput'
// import BackButton from '../components/BackButton'
// import { theme } from '../core/theme'
// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'

import InputTextField from '../components/InputTextField'


export default function LoginScreen({ navigation }) {

  return ( 
    <ScrollView style={styles.container}>
    <View>
        <View style={{ marginTop: 60, alignItems: "center", justifyContent: "center" }}>
            <Image source={require('../assets/images/onlinechat.jpg')}  style={{height: 250, width: 330, borderRadius: 25}} />
            <Text style={[styles.text, { marginTop: 10, fontSize: 22, fontWeight: "500" }]}>LOGO NAME</Text>
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

        <Text style={[styles.text, { color: "#ABB4BD", fontSize: 15, textAlign: "center", marginVertical: 20 }]}>or</Text>

        <InputTextField style={styles.inputTitle} title="Email" />
        <InputTextField
            style={{
                marginTop: 32,
                marginBottom: 8
            }}
            title="Password"
            isSecure={true}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
       >
        <Text style={[styles.text, styles.link, { textAlign: "right" }]}>Forgot Password?</Text>

        </TouchableOpacity>

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
                Login
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

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState({ value: '', error: '' })
//   const [password, setPassword] = useState({ value: '', error: '' })

//   const onLoginPressed = () => {
//     const emailError = passwordValidator(email.value)
//     const passwordError = passwordValidator(password.value)
//     if (emailError || passwordError) {
//       setEmail({ ...email, error: emailError })
//       setPassword({ ...password, error: passwordError })
//       return
//     }
//     navigation.reset({
//       index: 0,
//       routes: [{ name: 'DrawerNavigator' }],
//     })
//   }

//   return (
//     <Background>
//       <BackButton goBack={navigation.goBack} />
//       <Logo />
//       <Header>Welcome back.</Header>
//       <TextInput
//         label="ID NUMBER"
//         returnKeyType="next"
//         value={email.value}
//         onChangeText={(text) => setEmail({ value: text, error: '' })}
//         error={!!email.error}
//         errorText={email.error}
//         autoCapitalize="none"
        
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
//       <View style={styles.forgotPassword}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('ResetPasswordScreen')}
//         >
//           <Text style={styles.forgot}>Forgot your password?</Text>
//         </TouchableOpacity>
//       </View>
//       <Button mode="contained" onPress={onLoginPressed}>
//         Login
//       </Button>
//       <View style={styles.row}>
//         <Text>Don’t have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
//           <Text style={styles.link}>Sign up</Text>
//         </TouchableOpacity>
//       </View>
//     </Background>
//   )
// }

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