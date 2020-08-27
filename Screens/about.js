import React, { Component } from 'react';
import { StyleSheet,Text,View,Image,TouchableOpacity,ScrollView,TextInput,Linking} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class AbourScreen extends Component{
  render(){
    return(
      <Stack.Navigator>
        <Stack.Screen name="About" component={About}
          options={{
            headerStyle: {
              backgroundColor: 'tomato',  
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
export class About extends Component {
  constructor(){
    super();
    this.state={
      charactors:250,
      data : [
        {
          value: 'Banana',
        },
        {
          value: 'Mango',
        },
        {
          value: 'Pear',
        },
        {
          value: 'Apple',
        },
        {
          value: 'Orange',
        },
        {
          value: 'Fruit',
        },
        {
          value: 'Others',
        }        
      ],
    }
  }

  render() {
    return (
        <ScrollView style={{paddingHorizontal:20}}>

          <View style={styles.postContent}>
            <Text style={styles.postTitle}>
              App Info
            </Text>
            <Text style={styles.postDescription}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
            </Text>
          </View>

          <View style={{flexDirection:'row',height:50}}>
            <View style={{flex:1}}>
            </View>
            <View style={styles.contact}>

              <TouchableOpacity 
                style={styles.contactus}
                onPress={() =>Linking.openURL('tel:8754444875')}
              >
                <Image 
                  style={styles.contactimage} 
                  source={require('../Images/phone.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.contactus,{marginLeft:2}]}
                onPress={() =>Linking.openURL('https://wa.me/917708379891')}
  //another methods for open up whatsapp
  //Linking.openURL('whatsapp://send?phone=${+917708379891}&text=Hii siva')
  //https://wa.me/917708379891?text=I\'m%20interested%20in%20your%20car%20for%20sale
              > 
                <Image
                  style={styles.contactimage}
                  source={require('../Images/whatsapp.png')}
                />                
              </TouchableOpacity>

              <TouchableOpacity 
              style={{height:45,width:45}}
              onPress={() =>Linking.openURL('https://meet.google.com/nby-tegh-tfu')}
              >
                <Image
                  style={styles.contactimage}
                  source={require('../Images/zoom.png')}
                />                
              </TouchableOpacity>

            </View>
          </View>

          <View>
            {/* <View>
              <Text style={styles.text}>
                { this.state.About_us }
              </Text>
            </View> */}
            <View style={{alignItems:'center',paddingVertical:20}}>
              <Text style={styles.txt}>
                Report Issues
              </Text>
            </View>
            
            <Dropdown 
              label='Choose Your Error:'
              data={this.state.data}
              baseColor='#464443'
              itemColor='#464443'
              selectedItemColor='#464443'
              style={styles.dd}
            />

            <View style={{paddingTop:20}}>
              <TextInput 
                style={styles.textinput} 
                underlineColorAndroid="transparent"
                placeholder={"Description:"}
                placeholderTextColor={"#9E9E9E"}
                numberOfLines={10}
                maxLength={250}
                multiline={true}
                onChangeText={text=>
                  this.setState({
                    charactors:250-text.length
                  })
                }
              />
              <View style={{alignItems:'flex-end',paddingTop:2}}>
                <Text style={{color:'#464443'}}>
                  {this.state.charactors}/250
                </Text>
              </View>
            </View>

            <View style={{alignItems:'center',justifyContent:'center',           
            paddingVertical:20}}>
              <TouchableOpacity style={styles.submit}>
                <Text style={{fontSize:20,color:'white'}}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View> 
          </View> 

          <View style={{flexDirection:'row',justifyContent:'flex-end'}}>



                   
          </View>
        </ScrollView>
    );
  }
} 
 
const styles = StyleSheet.create({
  postContent:{
    marginTop:10,
  },
  postTitle:{
    color:'#464443',
    fontSize:26,
    fontWeight:'600',
  },
  postDescription:{
    color:'#464443',
    fontSize:16,
    marginTop:10,
  },
  contact:{
    flex:1.2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  contactus:{
    height:40,
    width:40,
  },
  contactimage:{
    height:'100%',
    width:'100%'
  },
  txt: {
    //fontFamily:'Arial',
    fontWeight:'bold',
    fontSize:20,
    color:'#464443'
  },
  dd:{
  },
  textinput:{
    paddingHorizontal:2,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#464443',
    borderRadius: 20,
    height: 150,
    fontSize:20,
    // fontFamily:'Times'
  },
  submit:{
    height:40,
    width:90,
    //backgroundColor:'#464443',
    backgroundColor:'#239484',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
  }
});
  
