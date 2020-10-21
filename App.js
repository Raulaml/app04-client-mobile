import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';
import Routes from './components/Routes';
import HomeView from './components/HomeView';


export default class App extends Component {

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  
 
  render() {
    return (
      <View style={this.styles.container}>
        <HomeView/>
        <StatusBar style="auto"/>
      </View>    
    );
  }
}
