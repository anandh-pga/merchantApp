import React,{Component} from 'react';
import { Button, View, Text,SafeAreaView , ScrollView, StyleSheet,TouchableOpacity,FlatList,Alert,TouchableWithoutFeedback,AsyncStorage,Dimensions, ImageComponent} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Mobile_Number from './Mobile_Number';
import { home } from '../variables.js'

import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const {width} = Dimensions.get("window");

export default class HomeScreen extends Component {

  /*

  //remove particular item
  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('random_time')
    } catch(e) {
        alert('Error removing data')
    }
  }

  //remove all item
  _clearData = async () => { 
    try {
      await AsyncStorage.clear();
      alert('data cleared') 
    } catch (error) {
      alert('Error clearing data')
    }
  };
  */

  render(){
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabDetailsScreen}
          options={{
            headerStyle: {
              backgroundColor: home[0].header_background_color,
              elevation:0
            },

            headerRight: () => (
              <View style={{marginRight:20}}>
                <Icon name="ios-power" size={24} color={home[0].logout_button}
                  onPress={() => this.props.navigation.navigate('Mobile_Number')}
                />
              </View>
            ),

            headerLeft:null,
            headerTintColor: home[0].header_tint_color,
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
            
          }}
        />
      </Stack.Navigator>
    );
  }
}

class TabDetailsScreen extends Component{
  constructor(){
    super();
    this.state={
      active:1,
      userid:0,
      preferable_time:[
  {id:1, name: "John Doe",   time:"11:50 PM", date:'20-07-2020'},
  {id:2, name: "Clark Man",  time:"11:50 PM", date:'20-07-2020'},
  {id:3, name: "Jaden Boor", time:"01:50 PM", date:'20-07-2020'},
  {id:4, name: "Srick Tree", time:"02:50 PM", date:'20-07-2020'},
  {id:5, name: "John Doe",   time:"03:23 PM", date:'20-07-2020'},
  {id:6, name: "John Doe",   time:"04:40 PM", date:'20-07-2020'},
  {id:7, name: "John Doe",   time:"05:40 PM",  date:'20-07-2020'},
  {id:8, name: "John Doe",   time:"02:20 AM",  date:'20-07-2020'},
  {id:9, name: "John Doe",   time:"14:00 PM",  date:'20-07-2020'},
  {id:10, name: "Mark Doe",   time:"11:23 PM", date:'20-07-2020'},
      ]
    }
    //this.gotoBookings = this.gotoBookings.bind(this);
    this.gotoBooking = this.gotoBooking.bind(this)
  }

  change = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x /       nativeEvent.layoutMeasurement.width)
    if(slide === 0)
    {
      this.setState({active:1});
    }
    else if(slide == this.state.preferable_time.length-1)
    {
      this.setState({active:3});
    } 
    else
    {
      this.setState({active:2});
    }
  }
  /*
  gotoBookings(a){
    //alert(a);
    //alert(this.state.userid);
    //this.setState({userid:a});
    this.gotoBooking(a)
  }
  */
  gotoBooking(user){
    try{
      //alert(user)
      AsyncStorage.setItem('userid', user.toString());
      this.props.navigation.jumpTo('Bookings');
    } catch(error){
      alert(error)
    }
  }
  /*
  gotoBooking = async () =>{
    //alert('hi')
    //alert(this.state.userid)
    await AsyncStorage.setItem('userid', this.state.userid);
    this.props.navigation.navigate('Bookings');
  }*/
  render(){
    return(
      <View style={{flex:1,flexDirection:'column',backgroundColor:'#e6e6e6'}}>

        <View style={styles.welcome}>
          <View style={styles.curve}> 
          </View>
          <View style={styles.cardwelcome}>
            <Text style={{color:'#464443',fontSize:24}}>
              Good Morning,
            </Text>
            <Text style={{color:'#464443',fontSize:24}}>
              Siva!
            </Text>
            <Text style={{color:'#464443',fontSize:19}}>
              Welcome to Booking Application
            </Text>          
          </View>
        </View>

        <View style={styles.notification}>
          <View>
            <View>
              <Text style={styles.notificationtxt}>
                Notifications
              </Text>
            </View>
            
            <ScrollView 
              pagingEnabled
              onScroll={this.change}
              style={styles.scroll}
              horizontal
              showsHorizontalScrollIndicator={false}
              >
              {
                this.state.preferable_time.map((user,key) => {
                  return(
                      <TouchableOpacity style={styles.cardnotification}
                        onPress={ ()=> this.gotoBooking(user.id) }
                      >

                        <View style={styles.userdetails}>
                            <Text style={styles.text}>
                              Name: {user.name}
                            </Text>
                            <Text style={styles.text}>
                              Time: {user.time}
                            </Text>
                            <Text style={styles.text}>
                              Date:{user.date}
                            </Text>
                        </View>

                        <View style={styles.closenotification}>
                          <TouchableWithoutFeedback>
                            <TouchableOpacity> 
                              <Icon name="delete" size={20} color="#464443" />
                            </TouchableOpacity>
                          </TouchableWithoutFeedback>
                        </View>

                      </TouchableOpacity>
                  )
                })
              }
            </ScrollView>

            <View style={styles.pagination}>
              <Text style={this.state.active === 1 ? styles.pagingActiveDot : styles.pagingDot}>⬤</Text>
              <Text style={this.state.active === 2 ? styles.pagingActiveDot : styles.pagingDot}>⬤</Text>
              <Text style={this.state.active === 3 ? styles.pagingActiveDot : styles.pagingDot}>⬤</Text>
            </View>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome:{
    flex:5.3,
    //backgroundColor:home[0].welcome_background_color,
    //borderBottomStartRadius:25,
    //borderBottomEndRadius:25,
  },
  curve:{
    height:100,
    borderBottomStartRadius:20,
    borderBottomEndRadius:20,
    backgroundColor:home[0].curve_background_color,
  },
  cardwelcome:{
    position:'absolute',
    width:width-40,
    height:width * 0.46,
    borderRadius:20,
    marginHorizontal:20,
    marginTop:100 - width * 0.23,
    backgroundColor:home[0].notification_color,
    alignItems:'center',
    justifyContent:'center',
    elevation:10
  },
  txt1:{
    color:'#464443',
    fontSize:30
  }, 
  txt2:{
    color:'#464443',
    fontSize:20,
    paddingTop:20
  },
  
  //notification
  notification:{
    flex:5.5,
    justifyContent:'flex-end',
    marginBottom:10,
  },
  notificationtxt:{
    fontSize:20,
    color:home[0].notification_text_color,
    paddingLeft:20,
    paddingBottom:10
  },
  scroll:{
    width:width-40,
    height:width * 0.38,
    borderRadius:20,
    marginHorizontal:20,
    backgroundColor:home[0].notification_color,
    elevation:10
  },
  cardnotification:{
    flex:1,
    flexDirection:'row',
    height:width * 0.38,
    width:width-40,
    borderRadius:20,
    //backgroundColor:'lightgreen'
  },
  userdetails:{
    flex:9,
    justifyContent:'center',
    paddingLeft:30,
  },
  closenotification:{
    flex:1,
    paddingTop:5,
    paddingRight:5,
  },
  text:{
    fontSize:22,
    color:'#464443',
    paddingVertical:4,
  },

  // For Dot

  pagination:{
    flexDirection:'row',
    //position:'absolute',
    bottom:0,
    alignSelf:'center',
    //marginTop:7
  }, 
  pagingDot:{
    fontSize: ( width / 30),
    color:'#888', 
    margin:3
  },
  pagingActiveDot:{
    fontSize: ( width / 30),
    color:'#4c6',
    margin:3
  },
})




/*
  <View style={{paddingTop:50,paddingLeft:20}}>
    <Text style={styles.txt1}>
      Good Morning,
    </Text>
    <Text style={styles.txt1}>
      Siva!
    </Text>
    <Text style={styles.txt2}>
      Welcome to Booking Application
    </Text>
  </View>
*/