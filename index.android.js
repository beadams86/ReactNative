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



var SCREEN_WIDTH = require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;

var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
  // Make it snap back really quickly after canceling pop
  snapVelocity: 8,
  // Make it so we can drag anywhere on the screen
  edgeHitWidth: SCREEN_WIDTH,
});

var CustomSceneConfig = Object.assign({}, BaseConfig, {
  // A very tighly wound spring will make this transition fast
  springTension: 100,
  springFriction: 1,
  // Use our custom gesture defined above
  gestures: {
    pop: CustomLeftToRightGesture,
  }
});

var PageOne = React.createClass({
  _handlePress() {
    this.props.navigator.push({id: 2,});
  },

  render() {
    return (
      <Image
        source={require('./images/login-background.png')}
        style={styles.container}>

        <Text style={styles.header}>Get Your Life in Order</Text>
        <Text style={styles.subheader}>Store all your files in a single, secure place, to be released to the person of your choice</Text>
        <TouchableOpacity onPress={this._handlePress}>
          <View style={{paddingVertical: 1, paddingHorizontal: 60, backgroundColor: 'white'}}>
            <Text style={styles.welcome}>Get Started</Text>
          </View>
        </TouchableOpacity>

     </Image>
    )
  },
});

var PageTwo = React.createClass({
  _handlePress() {
    this.props.navigator.pop();
  },

  render() {
    return (
      <Image source={require('./images/login-background2.png')}
        style={styles.container}>
        <Text style={styles.welcome}>This is page two!</Text>
        <TouchableOpacity onPress={this._handlePress}>
          <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
            <Text style={styles.welcome}>Go back</Text>
          </View>
        </TouchableOpacity>
       </Image>
    )
  },
});

class TestProject extends Component {
  _renderScene(route, navigator) {
    if (route.id === 1) {
      return <PageOne navigator={navigator} />
    } else if (route.id === 2) {
      return <PageTwo navigator={navigator} />
    }
  }

  _configureScene(route) {
    return CustomSceneConfig;
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 1, }}
        renderScene={this._renderScene}
        configureScene={this._configureScene} />
    );
  }
}

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
    color:"#e5bdbd",
  }
  ,
  subheader: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: 30,
    color:"#de9c9c",
  }
  ,
  welcome: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '700',
    margin: 15,
    color:"#9d3c3c",
    borderRadius: 15,
  }
});

AppRegistry.registerComponent('TestProject', () => TestProject);

module.exports = TestProject;


