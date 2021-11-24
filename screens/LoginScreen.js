import React, { useState ,useEffect} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,Alert } from "react-native";
import InputTextField from '../components/InputTextField'
import passwordValidator from '../helpers/passwordValidator';
import idNumberValidator from '../helpers/IdNumberValidators';
import axios from 'axios';
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import { ActivityIndicator } from 'react-native-paper';

export default function LoginScreen({ navigation }) {

    const baseUrl = 'http://mobileappdbapi-env.eba-srvjzqzd.eu-west-1.elasticbeanstalk.com:5000/';
    const [password, setPassword] = useState({ value: '', error: '' })
    const [idNumber, setIdNumber] = useState({ value: '', error: '' })
   const [isLoading, setIsLoading] = useState(true);
   const [userToken, setUserToken] = useState('');

   const authContext = React.useMemo(() => ({
    signIn:()=>{
      setUserToken('userToken');
      setIsLoading(false);
    },
    signOut:()=>{
        setUserToken('userToken');
        setIsLoading(false);
    },
    signUp:()=>{
        setUserToken('userToken');
        setIsLoading(false);
    },

   }), []);

   useEffect(() => {
       setTimeout(() => {
        setIsLoading(false);
       }, 1000);
   },[]);

   if(isLoading){
    return(
        <View style={{flex:1,justifyContent:'center',alignItem:'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}

    const onLoginPressed = () => {
        const IdError = idNumberValidator(idNumber.value)
        const passwordError = passwordValidator(password.value)
       
       
        if (IdError || passwordError) {
          setIdNumber({ ...idNumber, error: IdError })
          setPassword({ ...password, error: passwordError })
          Alert.alert('========================>', 'Please enter valid Id Number and Password')
          Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody:'Please enter valid Id Number and Password',
          })
          return
        }
        else{
        
        
        // navigation.navigate('DrawerNavigator')
        axios.post(`http://mobileappdbapi-env.eba-srvjzqzd.eu-west-1.elasticbeanstalk.com:5000/users/signin/auth`,{},{
            params: {
                idNumber: idNumber.value,
                password: password.value
            },
            headers: {
                'Content-Type': 'application/json',
            }
            
        }   
        )
            .then(res => {
                
                
                if(res.status === 200){
                    Toast.show({
                        type: ALERT_TYPE.SUCCESS,
                        title: 'Success',
                        textBody:'Congrats! this is toast notification success',
                      })
                      Alert.alert('========================>',res.data)
                    navigation.navigate('DrawerNavigator')
                }
                else if(res.status === 422){
                    Toast.show({
                        type: ALERT_TYPE.WARNING,
                        title: 'Success',
                        textBody:'Invalid credentials',
                      })
                    Alert.alert('Invalid credentials')
                }
                else if(res.status === 404){
                    Alert.alert('User not found')
                }
                else{
                    Alert.alert('Something went wrong')
                }
                
            })
            .catch(err => {
                console.log(err);
            })
    
        }
    
       
      }
  return ( 
    <ScrollView style={[styles.container,{paddingHorizontal:20}]}>
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

      
         <InputTextField style={[styles.inputTitle,{paddingTop:8}]}  value={idNumber.value}title="ID Number" onChangeText={(text) => setIdNumber({ value: text, error: '' })}  errorText={idNumber.error} />
        <InputTextField style={[styles.inputTitle,{paddingTop:8}]}  value={password.value}title="Password"  onChangeText={(text) => setPassword({ value: text, error: '' })}  errorText={password.error}/>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
       >
        <Text style={[styles.text, styles.link, { textAlign: "right" }]}>Forgot Password?</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.submitContainer}
         onPress={onLoginPressed}
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