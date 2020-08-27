import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,TouchableWithoutFeedback,Image,Alert,ScrollView,FlatList,Dimensions,Button,TextInput,AsyncStorage,findNodeHandle} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const width = Dimensions.get('window').width;
const heightFull = Dimensions.get('window').height
const height1 = width * 0.80
const height2 = width * 0.40

const  data = [
  {id:1, name: "John Doe",   time:"11:50 PM", date:'20-07-2020'},
  {id:2, name: "Clark Man",  time:"11:50 PM", date:'20-07-2020'},
  {id:3, name: "Jaden Boor", time:"01:50 PM", date:'20-07-2020'},
  {id:4, name: "Srick Tree", time:"02:50 PM", date:'20-07-2020'},
  {id:5, name: "David",   time:"03:23 PM", date:'20-07-2020'},
  {id:6, name: "John Doe",   time:"04:40 PM", date:'20-07-2020'},
  {id:7, name: "John Doe",   time:"05:40 PM",  date:'20-07-2020'},
  {id:8, name: "John Doe",   time:"02:20 AM",  date:'20-07-2020'},
  {id:9, name: "John Doe",   time:"14:00 PM",  date:'20-07-2020'},
  {id:10, name: "Mark Doe",   time:"11:23 PM", date:'20-07-2020'},
]

function clickEventListener(item) {
  Alert.alert('az')
}
 
export class AllocatedDetails extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      userid:1,
    };
    this._nodes = new Map();
    this.allocate = this.allocate.bind(this);
    this.cancel = this.cancel.bind(this);
  }
    
  allocate(item) {
    this.setState({
      isHidden: !this.state.isHidden,
      name: item.name,
      time: item.time,
      date: item.date
      })
  }
  cancel() {
    this.setState({isHidden: !this.state.isHidden})
  } 
  
  
  componentDidMount() {
    AsyncStorage.getItem('userid').then((userid) => {
      this.setState({
        userid : userid
      });
    });
  } 
  
  
  render(){
    //let { userid } = this.props.route.params;
    return ( 
      <View style={{flex:1}}>
        <FlatList style={styles.list}
          initialScrollIndex={this.state.userid-1}
          scrollEnabled={true}
          contentContainerStyle={styles.listContainer}
          data={data}
          horizontal={false}
          numColumns={1}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <View style={styles.card} ref={ref => this._nodes.set(item.id, ref)} >
                {/* <View style={styles.cardHeader}> */}
                  {/* <Image style={styles.icon} source={{uri:"https://img.icons8.com/flat_round/64/000000/hearts.png"}}/> */}
                {/* </View> */}
                {/* <Image style={styles.userImage} source={{uri:item.image}}/> */}

                  <View style={styles.details}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.time}>Time:{item.time}</Text>
                    <Text style={styles.time}>Date:{item.date}</Text>
                  </View>

                  <View style={styles.buttons}>
                  <View 
                    style={{flex:1,justifyContent: 'flex-start',alignItems: 'center',}}
                  >
                    <TouchableOpacity style={styles.acceptButton} onPress={() => this.allocate(item)}>
                      <Text style={styles.followButtonText}>Accept</Text>  
                    </TouchableOpacity>
                    </View>
                  <View 
                    style={{flex:1,justifyContent: 'flex-start',alignItems: 'center',}}
                  >
                    <TouchableOpacity style={styles.rejectButton} onPress={()=> clickEventListener(item)}>
                      <Text style={styles.followButtonText}>Reject</Text>  
                    </TouchableOpacity>
                    </View>
                  </View>

              </View>
            )
          }}
        />



      {this.state.isHidden ? 
        <TouchableOpacity style={styles.fullscreen} onPress={this.cancel}>
          <TouchableWithoutFeedback>
            <View style={styles.cardview}>
              <View style={styles.dateandtime}>
                <View style={{flex:1,flexDirection:'row'}}>
                  <View style={styles.txt1}>
                    <Text style={{fontSize:18,color:'#343333'}}>Name :</Text>
                  </View>
                  <View style={styles.txt2}>
                    <Text style={{fontSize:18,color:'#343333'}}>
                      {this.state.name}
                    </Text>
                  </View>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                  <View style={styles.txt1}>
                    <Text style={{fontSize:18,color:'#343333'}}>Time :</Text>
                  </View>
                  <View style={styles.txt2}> 
                  <TextInput 
                  style={{fontSize:18,color:'#343333'}}
                  defaultValue={this.state.time}
                />
                  </View>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                  <View style={styles.txt1}>
                    <Text style={{fontSize:18,color:'#343333'}}>Date :</Text>
                  </View>
                  <View style={styles.txt2}>
                  <TextInput 
                  style={{fontSize:18,color:'#343333'}}
                  defaultValue={this.state.date} 
                />
                  </View>
                </View> 
                <View style={{flex:1.8,flexDirection:'row'}}>
                  <View style={{flex:3}}>
                    <View style={styles.txt3}>
                      <Text style={{fontSize:18,color:'#343333'}}>
                        Description :
                      </Text>
                    </View>
                    <View style={styles.txt3}></View>
                  </View>
                  <View style={styles.txt4}>
                    <Text style={{fontSize:18,color:'#343333'}}>
                      Descriptions are here ! skldak asdf ghjkl zxcv bnm
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.button}>
                <TouchableOpacity 
                  style={[styles.touchable,{borderRightWidth:0.25}]}
                  onPress={this.cancel}
                >
                  <Text style={styles.txt}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.touchable,{borderLeftWidth:0.25}]}>
                  <Text style={styles.txt}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>

        : null
      }

      </View>
    );
  }
}

export class PastDetails extends Component {
  render(){
  return (
    <ScrollView>
      <FlatList style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={data}
        horizontal={false}
        numColumns={1}
        keyExtractor= {(item) => {
          return item.id; 
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.card} onPress={() => {clickEventListener(item)}}>
              {/* <View style={styles.cardHeader}> */}
                {/* <Image style={styles.icon} source={{uri:"https://img.icons8.com/flat_round/64/000000/hearts.png"}}/> */}
              {/* </View> */}
              {/* <Image style={styles.userImage} source={{uri:item.image}}/> */}
              
                <View style={styles.details}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.time}>Time:{item.time}</Text>
                  <Text style={styles.time}>Date:{item.date}</Text>
                </View>

                <View style={styles.buttons}>
                  <View 
                    style={{flex:1,justifyContent: 'center',alignItems: 'center',}}
                  >
                  <TouchableOpacity style={styles.acceptButton} onPress={()=> clickEventListener(item)}>
                    <Text style={styles.followButtonText}>Reallocate</Text>  
                  </TouchableOpacity>
                  </View>
                  <View 
                    style={{flex:1,justifyContent: 'center',alignItems: 'center',}}
                  >
                  <TouchableOpacity style={styles.rejectButton} onPress={()=> clickEventListener(item)}>
                    <Text style={styles.followButtonText}>Cancel</Text>  
                  </TouchableOpacity>
                  </View>
                </View>

            </View>
          )
        }}
      /> 

    </ScrollView>
  );
  }
}


export default function AllocatedScreen() {
  //let {userid} = route.params;
  return (
    <Tab.Navigator  tabBarOptions={{
      labelStyle: { fontSize: 14,fontWeight:'bold',color:'white' },
      style: { backgroundColor: 'tomato',paddingTop:30 },
    }}> 
      <Tab.Screen 
        name="Active" component={AllocatedDetails} initialParams={{userid:2}} 
      />
      <Tab.Screen name="Past" component={PastDetails} />
    </Tab.Navigator>
  );
}

  // All Styles
  const styles = StyleSheet.create({

    list: {
      paddingTop:8,
      paddingHorizontal: 0,
      backgroundColor:"#E6E6E6",
    },
    listContainer:{
      alignItems:'center'
    },

    /******** card **************/
    
    card:{
      height:height2,
      width:width-40,
      shadowColor: '#00000021',

      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 22,
  
      marginVertical: 5,
      backgroundColor:"white",
      flexBasis: '46%',
      //marginHorizontal: 5,
      borderRadius:20
    },
    details:{
      flex:2,
      alignItems:'center',
      justifyContent:'center'
    },
    name:{
      fontSize:18,
      flex:1,
      alignSelf:'center',
      color:"#008080",
      fontWeight:'bold'
    },
    time:{
      fontSize:14,
      flex:1,
      alignSelf:'center',
      color:"#696969"
    },
    buttons: {
      flex:1,
      height:50,
      flexDirection:'row',
    },
    acceptButton: {
      height:35,
      width:100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    rejectButton: {
      height:35,
      width:100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "tomato",
    },
    followButtonText:{
      color: "#FFFFFF",
      fontSize:16,
    },

    //Accept
  fullscreen:{
    position:'absolute',
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#000000cc'
  },
  cardview:{
    flexDirection:'column',
    height:height1, 
    width:width-20,
    borderRadius:16,
    shadowOpacity:37,
    shadowRadius:30,
    shadowOffset: {
      width: 3,
      height: 6,
    },
    shadowColor:'#c0c0c0',
    elevation:20,
    backgroundColor:'#f9f9f9',
  },
  dateandtime:{
    flex:4.2,
    flexDirection:'column',
  },
  txt1:{
    flex:3,
    justifyContent:'center',
    alignItems:'flex-end',
  },
  txt2:{
    flex:6,
    justifyContent:'center',
    paddingLeft:5,
  },
  txt3:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
  },
  txt4:{
    flex:6,
    paddingLeft:5,
    paddingTop:'3%'
  },
  button:{
    flex:1,
    flexDirection:'row',
    borderTopWidth:0.5,
    borderTopColor:'grey',
  },
  touchable:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  txt:{
    fontSize:20,
    color:'darkviolet'
  },
});


/*
          onScroll = {e => {
            this.scrollOffset = e.nativeEvent.contentOffset.y;
          }}
          onLayout={e => {
            this.flatlistTopOffset = e.nativeEvent.layout.y;
          }}
          scrollEventThrottle = {16}
*/

/*
  componentDidMount(){
    const position = findNodeHandle(this._nodes.get(4));
    this.scroller.scrollTo({x: 0, y: 500});
  }
*/        