
export let bottomtabnavigator = [
  {
    bottomtab_active_tint_color : 'tomato',
    bottomtab_inactive_tint_color : 'grey',
  }
]

export let home = [
  {
    header_background_color : 'tomato',
    header_tint_color : '#fff',
    logout_button : '#fff',
    curve_background_color : 'tomato',
    curve_txt1_color : '#fff',
    curve_txt2_color : '#fff',
    notification_text_color : 'tomato',
    notification_color: 'white',
  }
]

export let mobilenumberpage = [
  {
    app_details_background_color : '#4444ff',
    app_details_fontcolor : 'white',
    app_details_fontfamily : 'Arial',
    app_details_imageheight : "100%",
    app_details_imagewidth : "40%",
    login_arrowtouchable : '#4444ff',
    login_arrowview : '#bbbbff'
  }
]

import React, {Component} from 'react';
import { View, Text, AsyncStorage } from 'react-native';

export default class GS extends Component{
  constructor(){
    super();
    this.state={
      cardcolor:'red'
    }
  }
  render(){
    this.a = this.state.cardcolor

    return(
      <View>
        <Text>
          {a}
        </Text>
      </View>
      //this.state.screen==='Index' ? <Index /> : <Login />
    )
  }
}

export let a = 'blue'
