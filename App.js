import React, {Component} from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Login from './Login';

export default class App extends Component{
  
  render(){
    return(
      <Login />      
      //this.state.screen==='Index' ? <Index /> : <Login />
    )
  }
}

  /*
  componentDidMount() {
    try {
      const value = AsyncStorage.getItem('Store');
      if (value === 'Go to Home page') {
        this.setState({screen:'Index'})
        alert('value')
      } 
    }
    catch (error) {
      alert('Error retrieving data')
    }
  }
  */
  /*
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Store'); 
      if (value !== null) { 
        this.setState({screen:'Index'})
        alert('data retrieved')
      }
    } catch (error) {
      alert('Error retrieving data')
    }
  };
  */