import React from 'react';
import {View,Text,Image,TextInput} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../core/color'

export default function DocHomeScreen ({navigation}) {

    
        return(
            <ScrollView style={{
                backgroundColor:"#F8F8F8",
                paddingHorizontal:20,
            }}>
                {/* <Text style={{
                    color:"#B0B0B0",
                    marginTop:40,
                    fontFamily:"Bold"
                }}>Hello Brad</Text> */}

          <Icon name="sort-variant" size={28} onPress={navigation.toggleDrawer} />
                
                <Text style={{
                   
                    fontSize:18,
                    marginTop:13
                }}></Text>

                {/* <View style={{
                    backgroundColor:"#FFF",
                    borderRadius:5,
                    padding:5,
                    flexDirection:"row",
                    alignItems:"center",
                    marginTop:20
                }}>
                    <TextInput
                        placeholder="What are you looking for?"
                        placeholderTextColor="#B0B0B0"
                        style={{
                            
                            paddingHorizontal:20
                        }}
                    />
                    <View style={{
                        backgroundColor:"#000000",
                        width:30,
                        height:30,
                        borderRadius:8,
                        marginLeft:80,
                        alignItems:"center",
                        justifyContent:"center"
                    }}>
                       

                    </View>
                   
                </View> */}
                <View style={{
                     height: 50,
                     backgroundColor: COLORS.white,
                     borderRadius: 7,
                     paddingHorizontal: 20,
                     marginTop:13,
                     flexDirection: 'row',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                }}>
            <Icon name="magnify" size={24} color={COLORS.grey} />
            <TextInput
              placeholderTextColor={COLORS.grey}
              placeholder="Search doctor to consult"
              style={{flex: 1}}
            />
            <Icon name="sort-ascending" size={24} color={COLORS.grey} />
          </View>
                <Text style={{
                        
                        marginTop:20,
                        fontSize:15
                    }}>Recent Consultations</Text>
                
                <TouchableOpacity>
                <Text style={{
                        marginTop:20,  
                    }}>See more</Text>
                     </TouchableOpacity>
                
             <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                        <View style={{
                            backgroundColor:"#FFF",
                            height:200,
                            width:150,
                            borderRadius:20,
                            marginTop:12
                        }}>
                            <Image source={require('../assets/images/onboarding/profile.png')} style={{width:150,height:150}}/>
                            <TouchableOpacity 
                            
                            // onPress={()=>this.props.navigation.navigate('Detail')}
                            
                            style={{
                                backgroundColor:"#FFF",
                                height:60,
                                borderRadius:20,
                                marginTop:-10,
                                paddingHorizontal:8,
                                paddingVertical:8
                            }}>
                                <Text style={{
                                    color:"#FFF",
                                    
                                    fontSize:13,
                                }}>Jones Mike</Text>

                                <View style={{flexDirection:"row",marginTop:4}}>
                                  <View style={{
                                      backgroundColor:"#3B55E6",
                                      paddingHorizontal:5,
                                      alignItems:"center",
                                      justifyContent:"center",
                                      borderRadius:5
                                      }}>
                                    <Text style={{
                                        color: '#FFFFFF',
                                        fontFamily:"Bold",
                                        fontSize:13
                                        }}>Call Time</Text>
                                    </View>

                                    <Text style={{
                                        color:"#3B55E6",
                                        fontFamily:"Bold",
                                        fontSize:13,
                                        marginLeft:25
                                        }}>10M</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            backgroundColor:"#FFF",
                            height:200,
                            width:150,
                            borderRadius:20,
                            marginTop:12,
                            marginHorizontal:30
                        }}>
                            <Image source={require('../assets/images/onboarding/profile.png')} style={{width:150,height:150}}/>
                            <View style={{
                                backgroundColor:"#FFF",
                                height:60,
                                borderRadius:20,
                                marginTop:-10,
                                paddingHorizontal:8,
                                paddingVertical:8
                            }}>
                                 
                                <Text style={{
                                    color:"#000",
                                   
                                    fontSize:13,
                                }}>Brown James</Text>
                                

                                <View style={{flexDirection:"row",marginTop:4}}>
                                <View style={{
                                     backgroundColor:"#3B55E6",
                                      paddingHorizontal:5,
                                      alignItems:"center",
                                      justifyContent:"center",
                                      borderRadius:5
                                      }}>
                                    <Text style={{
                                        color: '#FFFFFF',
                                        fontFamily:"Bold",
                                        fontSize:13
                                        }}>Call time</Text>
                                </View>
                                    <Text style={{
                                        color:"#B0B0B0",
                                        fontFamily:"Bold",
                                        fontSize:13,
                                        marginLeft:25
                                        }}>1h</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            backgroundColor:"#FFF",
                            height:200,
                            width:150,
                            borderRadius:20,
                            marginTop:12
                           
                        }}>
                            <Image source={require('../assets/images/onboarding/profile.png')} style={{width:150,height:150}}/>
                            <View style={{
                                backgroundColor:"#FFF",
                                height:60,
                                borderRadius:20,
                                marginTop:-10,
                                paddingHorizontal:8,
                                paddingVertical:8
                            }}>
                                 
                                <Text style={{
                                    color:"#000",
                                    
                                    fontSize:13,
                                }}>kelly James</Text>
                                

                                <View style={{flexDirection:"row",marginTop:4}}>
                                <View style={{
                                      backgroundColor:"#3B55E6",
                                      paddingHorizontal:5,
                                      alignItems:"center",
                                      justifyContent:"center",
                                      borderRadius:5
                                      }}>
                                    <Text style={{
                                        color: '#FFFFFF',
                                        fontFamily:"Bold",
                                        fontSize:13
                                        }}>call time</Text>
                                </View>
                                    <Text style={{
                                        color:"#B0B0B0",
                                        fontFamily:"Bold",
                                        fontSize:13,
                                        marginLeft:25
                                        }}>45M</Text>
                                </View>
                            </View>
                        </View>
                </ScrollView>
                <Text style={{
                    
                    marginVertical:20,
                    fontSize:15
                }}>Online Patients</Text>
                     <TouchableOpacity>
                     <Text>see more</Text>
                     </TouchableOpacity>
                        <View style={{
                            backgroundColor:"#FFF",
                            marginTop:10,
                            flexDirection:"row",
                            borderRadius:10,
                            height:60,
                            alignItems:"center",
                            paddingHorizontal:20
                        }}>
                                <View style={{
                                    backgroundColor:"#DFDFDF",
                                    borderRadius:5,
                                    height:40,
                                    width:40,
                                    alignItems:"center",
                                    justifyContent:"center"
                                }}>
                                    <Image source={require('../assets/images/onboarding/profile.png')} style={{width:40,height:40}}/>
                                </View>

                                <View style={{
                                    paddingHorizontal:20
                                }}>
                                    <Text style={{
                                        
                                        fontSize:13
                                    }}>jones tebogo</Text>
                               
                                   
                                        <Text style={{color:"#000",  marginTop:15,  opacity:0.5}}>Female of 45 of age</Text>
                                  

                                  
                                </View>
                                
                        </View>



                        <View style={{
                            backgroundColor:"#FFF",
                            marginTop:10,
                            flexDirection:"row",
                            borderRadius:10,
                            height:60,
                            alignItems:"center",
                            paddingHorizontal:20
                        }}>
                                <View style={{
                                    backgroundColor:"#DFDFDF",
                                    borderRadius:5,
                                    height:40,
                                    width:40,
                                    alignItems:"center",
                                    justifyContent:"center"
                                }}>
                                    <Image source={require('../assets/images/onboarding/profile.png')} style={{width:25,height:25}}/>
                                </View>

                                <View style={{
                                    paddingHorizontal:20
                                }}>
                                    <Text style={{
                                       
                                        fontSize:13
                                    }}>tebogo tebogo</Text>
                                   
                                        <Text style={{color:"#000", marginTop:10,opacity:0.5}}>Female of 45 of age</Text>
                                    

                                  
                                </View>
                              
                        </View>

                        <View style={{
                            backgroundColor:"#FFF",
                            marginTop:10,
                            flexDirection:"row",
                            borderRadius:10,
                            height:60,
                            alignItems:"center",
                            paddingHorizontal:20
                        }}>
                                <View style={{
                                    backgroundColor:"#DFDFDF",
                                    borderRadius:5,
                                    height:40,
                                    width:40,
                                    alignItems:"center",
                                    justifyContent:"center"
                                }}>
                                    <Image source={require('../assets/images/onboarding/profile.png')} style={{width:20,height:20}}/>
                                </View>

                                <View style={{
                                    paddingHorizontal:20
                                }}>
                                    <Text style={{
                                        
                                        fontSize:13
                                    }}>kelly mike Brown</Text>
                                    
                                    <Text style={{ marginTop:10, color:"#000",opacity:0.5}}>Female of 45 of age</Text>
                                   

                                  
                                </View>
                                
                        </View>


                        <View style={{
                            backgroundColor:"#FFF",
                            marginTop:10,
                            flexDirection:"row",
                            borderRadius:10,
                            height:60,
                            alignItems:"center",
                            paddingHorizontal:20
                        }}>
                                <View style={{
                                    backgroundColor:"#DFDFDF",
                                    borderRadius:5,
                                    height:40,
                                    width:40,
                                    alignItems:"center",
                                    justifyContent:"center"
                                }}>
                                    <Image source={require('../assets/images/onboarding/profile.png')} style={{width:30,height:30}}/>
                                </View>

                                <View style={{
                                    paddingHorizontal:20
                                }}>
                                    <Text style={{
                                        
                                        fontSize:13
                                    }}>james brown </Text>
                                   
                                        <Text style={{marginTop:10, color:"#000",opacity:0.5}}>Male 45 of age</Text>
                                   

                                  
                                </View>
                               
                        </View>
            </ScrollView> 
        );
    
}