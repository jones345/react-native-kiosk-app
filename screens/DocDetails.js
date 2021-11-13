import React, { Component } from 'react'
import {
    Text,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    View,
    Image,
    ScrollView,
    StyleSheet,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  import COLORS from '../core/color';


export default function DocDetails({navigation, route}) {
    const {item} = route.params;
    let newDate = new Date()
    let date = newDate.getDate();
    let month_raw = newDate.getMonth() + 1;
    //Maverick@199#
    
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.background} />
      <View style={{height: 400, backgroundColor: COLORS.background}}>
        <ImageBackground
          resizeMode="contain"
          source={item?.image}
          style={{
            height: 280,
            top: 20,
          }}>
          {/* Render  Header */}
          <View style={style.header}>
            <Icon
              name="arrow-left"
              size={28}
              color={COLORS.dark}
              onPress={navigation.goBack}
            />
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
            Plot 2435, Block 1 Mmopane Along the, Molepolole Rd, Gaborone - Botswana
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
               source={item?.image}
              style={{height: 40, width: 40, borderRadius: 20}}
            />
            <View style={{flex: 1, paddingLeft: 10}}>
              <Text
                style={{color: COLORS.dark, fontSize: 12, fontWeight: 'bold'}}>
               {item.type} {item.name}
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
            <Text style={{color: COLORS.grey, fontSize: 12}}>{month_raw}</Text>
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
            <Icon name="heart-outline" size={22} color={COLORS.white} />
          </View>
          <View style={style.btn}>
            <Text style={{color: COLORS.white, fontWeight: 'bold'}}>
              Call Doctor
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
        )
    
}


const style = StyleSheet.create({
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
    iconCon: {
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
