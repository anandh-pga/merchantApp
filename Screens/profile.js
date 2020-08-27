import React, { Component } from 'react';
import {StyleSheet,Text,View,ScrollView,Image,TouchableOpacity} from 'react-native';

import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class ProfileScreen extends Component{
  render(){
    return(
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile}
          options={{
            headerStyle: {
              backgroundColor: 'tomato',
              elevation:0,
            },
            headerLeft:null,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

          }}
        />
      </Stack.Navigator>
    )
  }
}
class Profile extends Component {
  render(){
    return (
        <ScrollView style={styles.container}>

          <View style={styles.header}>
          </View>

          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

          <View style={styles.body}>
            <Text style={styles.name}>Store Name</Text>
            {/* <Text style={styles.info}>ID :3434343434</Text> */}
            
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.txt}>Proprietor : John Mickel</Text>  
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.txt}>Phone Number : +913434343434</Text>  
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.txt}>Email : ABC@gmail.com</Text>  
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.txt}>Address : Chennai</Text>  
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.txt}>GST Number : 345454545</Text>  
            </TouchableOpacity>                    
          </View>

        </ScrollView>
    );
  }
}



// export default function ProfileScreen() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="Profile" component={ProfileDetails}  options={{
//         headerStyle: {
//           backgroundColor: 'tomato',
          
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold'
//         }}}/>
//       </Stack.Navigator>
//     );
//   }

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#e6e6e6'
  },
  header:{
    backgroundColor: "tomato",
    height:160,
    borderBottomStartRadius:40,
    borderBottomEndRadius:40
  },
  avatar: {
    width: 130,
    height: 130,
    position: 'absolute',
    marginTop:90,  
    marginBottom:10,
    alignSelf:'center',
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
  },
  body:{
    marginTop:70,
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  name:{
    fontSize:22,
    color:"tomato",
    fontWeight:'600',
  },
  buttonContainer: {
    marginVertical:10,
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    width:275,
    borderRadius:30,
    backgroundColor: "#FFF",
    elevation:5
  },
  txt:{
    fontSize:16,
    color:'#464443'
  }
});
  