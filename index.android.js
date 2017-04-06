/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';

import Onboard from './components/onboard1';
import Login from './components/Login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal:30,
    paddingVertical:30,
    resizeMode: 'cover'
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    margin: 0,
    color:"#fff",
  }
  ,
  subheader: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: 30,
    color:"#ffb8b8",
  }
  ,
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '300',
    margin: 15,
    color:"#fe8d8d",
  }

})

var TestProject = React.createClass({
  render: function() {
    return (
     

      
          <Navigator initialRoute={{
            id: 'Onboard'
          }}
          renderScene={
            this.navigatorRenderScene
          }
          />

     )},

    navigatorRenderScene(route,navigator){
      _navigator = navigator;
      switch (route.id){
        case 'Onboard':
            return(<Onboard navigator={navigator} title="Onboard" />);
        case 'Login':
            return(<Login navigator={navigator} title="Login" type="reset"/>);
      }
    }
 

})


AppRegistry.registerComponent('TestProject', () => TestProject);


