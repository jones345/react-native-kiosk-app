import React, { Component } from 'react'
import {  View,
    Text,
    StatusBar,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    Alert } from 'react-native'
    import Swiper from 'react-native-swiper/src';
   
 const { width, height } = Dimensions.get('window');
export default function Onboarding({ navigation }) {
  
   
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" hidden={true} />
                 <Swiper autoplay={true}>
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/onboarding/hit.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/onboarding/consult.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/onboarding/video.jpg')}
              style={styles.image}
            />
          </View>
        </Swiper>
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>YOUR GUIDE</Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subtitle}> TO A HEALTHER LIVING</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
           onPress={() => navigation.navigate('ChatBot')}
          >
            <View style={styles.signupContainer}>
              <Text style={styles.signup}>CHAT BOT</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  
          onPress={() => navigation.navigate('LoginScreen')}>
            <View style={styles.loginContainer}>
              <Text style={styles.login}>CALL DOCTOR</Text>
            </View>
          </TouchableOpacity>
        </View>
            </View>
    
             
        )
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: width,
    height: height
  },
  textContainer: {
    position: 'absolute',
    bottom: 200,
    marginLeft: 20,
    height: 120,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  titleContainer: {
    width: 300,
    height: 70,
    backgroundColor: '#3B55E6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    
    fontSize: 40,
    color: '#FFFFFF'
  },
  subTitleContainer: {
    width: 200,
    height: 50,
    backgroundColor: '#3B55E6',
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subtitle: {
    fontSize: 24,
    color: '#FFFFFF'
  },
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 70,
    width: 370,
    height: 60,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  signupContainer: {
    width: 180,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signup: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3B55E6'
  },
  loginContainer: {
    width: 180,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 2
  },
  login: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3B55E6'
  }
});


