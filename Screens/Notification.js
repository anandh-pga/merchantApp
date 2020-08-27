import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, TouchableHighlight, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const {width} = Dimensions.get("window");
const height = width * 0.45;


export default class Notifications extends Component{
  constructor(){
    super();
    this.state={
      active:1,
      preferable_time:[
        {
          name:'a',
          Time:'10.40 AM',
          Date:'04-02-2000'
        },
        {
          name:'b',
          Time:'09.40 AM',
          Date:'05-08-2000'
        },
        {
          name:'c',
          Time:'11.20 AM',
          Date:'05-08-2000'
        },
        {
          name:'d',
          Time:'04.40 PM',
          Date:'05-08-2000'
        },
        {
          name:'e',
          Time:'01.40 PM',
          Date:'05-08-2000'
        },
      ]
    }
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

  render(){
    return(
      <View>

        <View>
          <Text style={styles.notificationtxt}>
            Notifications :
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
                  <TouchableOpacity style={styles.card}
                  onPress={() => this.props.navigation.navigate('Bookings')}
                  >

                    <View style={styles.userdetails}>
                        <Text style={styles.text}>
                          Name: {user.name}
                        </Text>
                        <Text style={styles.text}>
                          Time: {user.Time}
                        </Text>
                        <Text style={styles.text}>
                          Date:{user.Date}
                        </Text>
                    </View>

                    <View style={styles.closenotification}>
                    <TouchableHighlight>
                    <AntDesign name="delete" size={24} color="white" />
                    </TouchableHighlight>
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
    )
  }
}

const styles = StyleSheet.create({

  notificationtxt:{
    fontSize:28,
    color:'tomato',
    paddingLeft:10,
    paddingBottom:10
  },
  
  //ScrollView
  scroll:{
    width:width-20,
    height,
    borderRadius:20,
    marginHorizontal:10,
    backgroundColor:'lightgrey',
  },
  card:{
    flex:1,
    flexDirection:'row',
    height,
    width:width-20,
    borderRadius:20,
  },
  userdetails:{
    flex:9,
    justifyContent:'center',
    paddingLeft:30,
  },
  closenotification:{
    flex:1,
    paddingTop:5,
    paddingRight:7,
  },
  text:{
    fontSize:25,
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