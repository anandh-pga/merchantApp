import React, { Component } from 'react'
import { View, ScrollView, TextInput, Text, StyleSheet, Button, AsyncStorage,Dimensions,TouchableOpacity} from 'react-native'

const height = Dimensions.get('window').height

export default class OTP extends Component {
  constructor(){
    super();
    this.state={
      mobile_number:'',
      pin1:"",
      pin2:"",
      pin3:"",
      pin4:"",
      timer:30,
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('mobile_Number').then((number) => {
      this.setState({
        mobile_number: number
      });
    });
    this.interval = setInterval(
      () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
      1000
    );
  }

  componentDidUpdate(){
    if(this.state.timer === 0){ 
      clearInterval(this.interval);
    }
  }

  /*
  componentWillUnmount(){
  clearInterval(this.interval);
  }
  */

  Validate(){
    if(this.state.timer === 0){
      alert('Timeout')
    }
    else{
      this.props.navigation.navigate('Index')
    }

    /*
      try {
        const value = AsyncStorage.setItem(
          'Store',
          'Go to Home page'
        );
      } catch (error) {
        alert('Error sending OTP')
      }
    */
  }
  
  resentOtp = () => {
    this.props.navigation.push('OTP')
  }
   
  render(){

    /*
    const { navigation } = this.props;

    If we don't use this.props in navigation then, we should add the above line
    under the render
    */

    return(
      <ScrollView>

      <View style={styles.container}>

        <View style={styles.otpscreen}>

          <View style={styles.text}>

            <View style={{flex:1,alignItems:'center',justifyContent:'flex-end'}}>
              <Text style={{fontFamily:'Arial',fontSize:20,fontWeight:'bold'}}>
                Enter verification code
              </Text>
            </View>

            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text 
                style={{
                  color:'grey',
                  fontFamily:'Arial',
                  fontSize:12,
                  paddingBottom:3
                }}
              >
                We have sent you a 4 digit verification code on
              </Text>
              <Text style={{fontFamily:'Arial',fontSize:20,paddingTop:3}}>
                {this.state.mobile_number}
              </Text>
            </View>

          </View>

          <View style={styles.otp}>

            <View style={styles.textinput}>

              <TextInput
                ref={"pin1ref"}
                maxLength={1}
                keyboardType={'numeric'}
                onChangeText={(pin1) => {
                  this.setState({pin1})
                  if(pin1 !=""){
                      this.refs.pin2ref.focus()
                  }
                }}

                style={styles.otpnumber}
              />

              <TextInput
                ref={"pin2ref"}
                maxLength={1}
                keyboardType={'numeric'}
                onChangeText={(pin2) => {
                  this.setState({pin2})
                  if(pin2 !=""){
                      this.refs.pin3ref.focus()
                  }
                }}
                style={styles.otpnumber}
              />

              <TextInput
                ref={"pin3ref"}
                maxLength={1}
                keyboardType={'numeric'}
                onChangeText={(pin3) => {
                  this.setState({pin3})
                  if(pin3 !=""){
                      this.refs.pin4ref.focus()
                  }                  
                }}
                style={styles.otpnumber}
              />

              <TextInput
                ref={"pin4ref"}
                maxLength={1}
                keyboardType={'numeric'}
                onChangeText={(pin4) => {
                  this.setState({pin4})
                  if(pin4 != ""){
                    this.Validate()
                  }
                }}
                style={styles.otpnumber}
              />

            </View>

            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontFamily:'Arial',fontSize:20}}>
                {this.state.timer}
              </Text>
            </View>

          </View>

        </View>

        <View style={styles.resentOTP}>
          {this.state.timer === 0 ? 
          <TouchableOpacity onPress={this.resentOtp} >
            <Text style={{color:'grey',fontSize:16}}>Resent OTP</Text>
          </TouchableOpacity>
          : null
          }
        </View>

      </View>

      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height,
    backgroundColor:'#fcfcfc'
  },
  otpscreen:{
    flex:6,
  },
  text:{
    flex:1,
  },
  otp:{
    flex:1,
  },
  textinput:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginHorizontal: 40,
    },
  otpnumber:{
    height:50,
    width:50,
    fontSize:25,
    alignSelf:"center",
    textAlign:'center',
    borderRadius:10,
    borderWidth:0.5,
    borderColor:'grey'
  },
  resentOTP:{
    flex:4,
    alignItems:'center',
  },
});
