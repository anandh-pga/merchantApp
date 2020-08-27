import React,{Component} from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TextInput, Button, AsyncStorage,TouchableOpacity, Dimensions } from 'react-native';

import { mobilenumberpage } from '../variables'
import Icon from 'react-native-vector-icons/Ionicons'

const height = Dimensions.get('window').height

export default class Mobile_Number extends Component {
  constructor(){
    super();
    this.state={
      error:'',
      mobile_Number:'',
      valid:false
    }
  }
  valid(text){
    //alert(text)
  }
  storeData = async () => {
    try {
      if(this.state.mobile_Number.length === 10 ){
        await AsyncStorage.setItem('mobile_Number', this.state.mobile_Number);
        this.props.navigation.navigate('OTP');
      }
      else{
        alert('Enter valid Mobile Number');
      }

    } catch (e) {
      alert(e)
    }
  }

  /*
  getData(){
      try {
        const value = AsyncStorage.getItem(
          'heightFull',
          height
        );
        this.props.navigation.navigate('Index')
      } catch (error) {
        alert('Error sending OTP')
      }
  }
  */

  render(){
    /*
    const { navigation } = this.props;

    If we don't use this.props in navigation then, we should add the above line
    under the render
    */

    return (
      <ScrollView>

      <View style={styles.container}>

        <View style={styles.app_details}>

          <View style={styles.app_name_image_quote}>
            <Text style={styles.text}>
              Booking
            </Text>
          </View>

          <View style={styles.app_name_image_quote}>
            <Image source={require('../Images/tiger.png')} style={styles.image} />
          </View>

          <View style={styles.app_name_image_quote}>
            <Text style={styles.text}>
              Keep Social Distance
            </Text>

          </View>

        </View>

        <View style={styles.login}>

          <View style={[ styles.login_inputs, {justifyContent:'center'} ]} >
            <Text style={{fontFamily:'Arial',fontSize:18}}>
              Enter your Mobile Number:
            </Text>
          </View>

          <View style={styles.login_inputs}>
            <View style={{flex:1,flexDirection:'column',}}>

              <View style={{flexDirection:'row'}}>

                <View style={styles.txtinput}>
                  <Text style={{fontSize:18,color:'grey'}}>
                    +91
                  </Text>
                </View>
                
                <TextInput 
                  style={styles.textinput}
                  keyboardType={'numeric'}
                  maxLength={10}
                  onChangeText={text => {
                    if(text.length === 10){
                      this.setState({
                        mobile_Number:text,
                        valid:true
                      });
                    this.valid(text)
                    }
                  }}
                  //autoFocus={true}
                  //underlineColorAndroid={'transparent'}
                />

              </View>
              <View style={{height:1,backgroundColor:'darkgrey'}}></View>

            </View>
          </View>

          <View style={styles.submit}>
            { this.state.valid === true ?

              <TouchableOpacity 
                style={[styles.send,
                  {backgroundColor:mobilenumberpage[0].login_arrowtouchable}
                ]} 
                onPress={ this.storeData }
              >
                <Icon name={"md-arrow-forward"} size={30} color="white"/>
              </TouchableOpacity>

              :

              <View 
                style={[styles.send,
                  {backgroundColor:mobilenumberpage[0].login_arrowview}
                ]}
              >
                <Icon name={"md-arrow-forward"} size={30} color="white"/>

              </View>
              
            }
          </View>

        </View>

      </View>

      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height
  },
  app_details:{
    flex:7,
    backgroundColor: mobilenumberpage[0].app_details_background_color
  },
  app_name_image_quote:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:mobilenumberpage[0].app_details_fontcolor,
    fontSize:25,
    fontFamily:mobilenumberpage[0].app_details_fontfamily
  },
  image:{
    height:mobilenumberpage[0].app_details_imageheight,
    width:mobilenumberpage[0].app_details_imagewidth,
  },
  login:{
    flex:3,
    backgroundColor:'#f1f1f1'
  },
  login_inputs:{
    flex:1,
    paddingHorizontal:20
  },
  txtinput:{
    flex:1,
    height:35,
    justifyContent:'center',
    alignItems:'center'
  },
  textinput:{
    flex:6,
    height:35,
    width:180,
    fontSize:18,
  },
  submit:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  send:{
    height:50,
    width:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:35,
  }
});
