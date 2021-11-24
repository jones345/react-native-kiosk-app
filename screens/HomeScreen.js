import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import COLORS from '../core/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import pets from '../components/pets';
import axios from 'axios';

const {height} = Dimensions.get('window');
const petCategories = [
  {name: 'CATS', icon: 'cat'},
  {name: 'DOGS', icon: 'dog'},
  {name: 'BIRDS', icon: 'ladybug'},
  {name: 'BUNNIES', icon: 'rabbit'},
];

const Card = ({pet}) => {
  return (
   
      <View style={style.cardContainer}>
        {/* Render the card image */}
        <View style={style.cardImageContainer}>
        
          <Image
            source={pet.image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
       
        </View>

        {/* Render all the card details here */}
        <View style={style.cardDetailsContainer}>
          {/* Name and gender icon */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
           
            <Text
              style={{fontWeight: 'bold', color: COLORS.dark, fontSize: 20}}>
              {pet?.name}
            </Text>
           
            <Icon name="phone" size={22} color={COLORS.grey} />
          </View>

          {/* Render the age and type */}
         
          <Text style={{fontSize: 12, marginTop: 5, color: COLORS.dark}}>
            {pet?.type}
          </Text>
          
          <Text style={{fontSize: 10, marginTop: 5, color: COLORS.grey}}>
            {pet?.age}
          </Text>
         

          {/* Render distance and the icon */}
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Icon name="heart" color={COLORS.primary} size={18} />
            <Text style={{fontSize: 12, color: COLORS.grey, marginLeft: 5}}>
              Favorite
            </Text>
          </View>
        </View>
      </View>
    
  );
};

const HomeScreen = ({route,navigation}) => {
  const [selectedCategoryIndex, setSeletedCategoryIndex] = React.useState(0);
  const [filteredPets, setFilteredPets] = React.useState([]);
  const [doctors, setDoctors] = React.useState([]);
  
  const fliterPet = index => {
    const currentPets = pets.filter(
      item => item?.pet?.toUpperCase() == petCategories[index].name,
    )[0]?.pets;
    setFilteredPets(currentPets);
  };
  const getdata = () => {
    const token =`eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MjQzMTI5MjkiLCJhdXRoIjpbeyJhdXRob3JpdHkiOiJST0xFX0NMSUVOVCJ9XSwiaWF0IjoxNjM3NzU3OTMyLCJleHAiOjE2Mzc3OTM5MzJ9.bQSwCk8A2-t0XVKcLUCXhGo6idoXr_QIcHkWsuiv_Qg`
    const AuthStr = 'Data '.concat(token); 
    axios.get('http://mobileappdbapi-env.eba-srvjzqzd.eu-west-1.elasticbeanstalk.com:5000/medicals/doctors/all',{ 'headers': { 'Authorization': AuthStr } })
    .then(res =>{
      doctors.push(res.data)
      setDoctors(doctors)
        console.log(doctors)
    }).catch(err =>{
        console.log(err)
    })
  }

  React.useEffect(() => {
    fliterPet(0);
    getdata();

  }, []);

  return (
    
    <SafeAreaView style={{flex: 1, color: COLORS.white}}>
      <View style={style.header}>
        <Icon name="sort-variant" size={28} onPress={navigation.toggleDrawer} />
        <Text style={{color: COLORS.primary, fontWeight: 'bold', fontSize: 16}}>
          JONES NTONGANA
        </Text>
        <Image
          source={require('../assets/images/onboarding/profile.png')}
          style={{height: 30, width: 30, borderRadius: 25}}
        />
      </View>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <View style={style.mainContainer}>
          {/* Render the search inputs and icons */}
          <View style={style.searchInputContainer}>
            <Icon name="magnify" size={24} color={COLORS.grey} />
            <TextInput
              placeholderTextColor={COLORS.grey}
              placeholder="Search doctor to consult"
              style={{flex: 1}}
            />
            <Icon name="sort-ascending" size={24} color={COLORS.grey} />
          </View>

          {/* Render the cards with flatlist */}
          <View style={{marginTop: 20}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={filteredPets}
              renderItem={({item}) => (
                <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('DocDetails',{item})}
            
            >
                
                 
      <View style={style.cardContainer}>
        {/* Render the card image */}
        <View style={style.cardImageContainer}>
        
          <Image
            source={item.image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
       
        </View>

        {/* Render all the card details here */}
        <View style={style.cardDetailsContainer}>
          {/* Name and gender icon */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
           
            <Text
              style={{fontWeight: 'bold', color: COLORS.dark, fontSize: 20}}>
              {item?.name}
            </Text>
           
            <Icon name="phone" size={22} color={COLORS.grey} />
          </View>

          {/* Render the age and type */}
         
          <Text style={{fontSize: 12, marginTop: 5, color: COLORS.dark}}>
            {item?.type}
          </Text>
          
          <Text style={{fontSize: 10, marginTop: 5, color: COLORS.grey}}>
            {item?.age}
          </Text>
         

          {/* Render distance and the icon */}
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Icon name="star" color={COLORS.primary} size={18} />
            <Text style={{fontSize: 12, color: COLORS.grey, marginLeft: 5}}>
              4.6
            </Text>
          </View>
        </View>
      </View>


                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    minHeight: height,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryBtn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  categoryBtnName: {
    color: COLORS.dark,
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardDetailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  cardImageContainer: {
    height: 150,
    width: 140,
    backgroundColor: COLORS.background,
    borderRadius: 20,
  },
});
export default HomeScreen;

