import React, { Component,useState } from 'react'
import {
    Text,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    View,
    Animated,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  import COLORS from '../core/color';
  import {AntDesign} from '@expo/vector-icons';

export default function Profile({navigation}) {

    return (
      <ScrollView style={{flex: 1, backgroundColor: COLORS.white,paddingHorizontal:20}}>
      <StatusBar backgroundColor={COLORS.background} />
      <View style={{height: 400, backgroundColor: COLORS.background}}>
        <ImageBackground
          resizeMode="contain"
          source={require('../assets/images/onboarding/profile.png')}
          style={{
            height: 280,
            top: 20,
          }}>
          {/* Render  Header */}
          <View style={style.header}>
          <Icon name="sort-variant" size={28} onPress={navigation.toggleDrawer} />
            <Icon name="dots-vertical" size={28} color={COLORS.dark} />
          </View>
        </ImageBackground>

        <View style={style.detailsContainer}>
          {/* Pet name and gender icon */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontSize: 20, color: COLORS.dark, fontWeight: 'bold'}}>
              Lenmed Bokamoso Private Hospital
            </Text>
            
          </View>

          {/* Render Pet type and age */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            
            <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Icon name="layers" color={COLORS.primary} size={20} />
            <Text style={{fontSize: 14, color: COLORS.grey, marginLeft: 5}}>
            Plot 2435,Molepolole Rd, Gaborone - Botswana
            </Text>
          </View>
            
          </View>

          {/* Render location and icon */}
          <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
        }}
          >
            {/* <View style={style.heart}>
            <AntDesign name="heart" size={30} color="blue"/>
            </View> */}
            
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Icon name="phone" color={COLORS.primary} size={20} />
            <Text style={{fontSize: 14, color: COLORS.grey, marginLeft: 5}}>
            369 4000
            </Text>
          </View>

          </View>
        </View>
      </View>

      {/* Comment container */}
      
      <View style={{marginTop: 80, justifyContent: 'space-between', flex: 1}}>
        <View>
          {/* Render user image , name and date */}
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
            <Image
              //  source={require('../assets/images/onboarding/profile.png')}
              source={require('../assets/images/onboarding/profile.png')}
              style={{height: 40, width: 40, borderRadius: 20}}
            />
            <View style={{flex: 1, paddingLeft: 10}}>
              <Text
                style={{color: COLORS.dark, fontSize: 12, fontWeight: 'bold'}}>
               jones mike
              </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 11,
                  fontWeight: 'bold',
                  marginTop: 2,
                }}>
                Doctor
              </Text>
            </View>
            <Text style={{color: COLORS.grey, fontSize: 12}}></Text>
          </View>
          <Text style={style.comment}>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </Text>
          <Text style={style.comment}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
        {/* Render footer */}
        <View style={style.footer}>
          <View style={style.iconCon}>
          <TouchableOpacity >
            <Icon name="heart-outline" size={22} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <View style={style.btn}>
          <TouchableOpacity >
            <Text style={{color: COLORS.white, fontWeight: 'bold'}}>
              Call Doctor
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
        );
}



const style = StyleSheet.create({
  heart: {},
    detailsContainer: {
      height: 120,
      backgroundColor: COLORS.white,
      marginHorizontal: 20,
      flex: 1,
      bottom: -60,
      borderRadius: 18,
      elevation: 10,
      padding: 20,
      justifyContent: 'center',
    },
    comment: {
      marginTop: 10,
      fontSize: 12.5,
      color: COLORS.dark,
      lineHeight: 20,
      marginHorizontal: 20,
    },
    footer: {
      height: 100,
      backgroundColor: COLORS.light,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 30,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    heartContainer:{
      position: 'absolute',
      bottom: 30,
      backgroundColor:'transparent'
    },
    heart:{
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'transparent'
    },
    iconCon: 
    {
      backgroundColor: COLORS.primary,
      width: 50,
      height: 50,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 15,
    },
    btn: {
      backgroundColor: COLORS.primary,
      flex: 1,
      height: 50,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      flexDirection: 'row',
      padding: 20,
      justifyContent: 'space-between',
    },
  });
