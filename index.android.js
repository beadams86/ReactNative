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
     

      <Swiper style={styles.wrapper} showsButtons={true}>
          <Navigator initialRoute={{
            id: 'Onboard'
          }}
          renderScene={
            this.navigatorRenderScene
          }
          />

         <Image
        source={require('./images/onboard-2.png')}
        style={styles.container}>

          <Text style={styles.header}>Store all important Documents, Account Information and Passwords</Text>
        <Text style={styles.subheader}>In our guaranteed secure, encrypted LifePreserver Vault</Text>
        <TouchableOpacity onPress={this._handlePress}>
          <View style={{paddingVertical: 1}}>
            <Text style={styles.welcome}>Skip Intro</Text>
          </View>
        </TouchableOpacity>
        </Image>

        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )
  },

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


