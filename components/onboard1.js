
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  backgroundImage:{
	 flex:1,
	 alignSelf:'stretch',
	 width:  null,
	 justifyContent: 'flex-end',
	 alignItems: 'center',
  },

  introContent:{
  	alignItems:'center',
  	padding:30,

  },

  headerText: {
  	color:'#fff',
  	fontSize:26,
  	fontWeight:'700',
  	marginBottom:15,
  },

  subheader: {
  	color:'#fff',
  	fontSize:16,
  	fontWeight:'300',
  	alignItems:'center',
  	marginBottom:30,

  },
  textLink:{
  	padding:30,
  },
  skipintro: {
  	color:'#fff'
  }

})


export default class Onboard extends Component{

onButtonPress(){
  this.props.navigator.push({
      id: 'Login'
  });
}

	render(){
		return(
			 	<View style={styles.container}>

      				<Image source={require('../images/onboard-1.png')} style={styles.backgroundImage}>
      						<View style={styles.introContent}>
  								<Text style={styles.headerText}>All In One Place</Text>
        							<Text style={styles.subheader}>Store important files in a single secure location</Text>
	        								<TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.textLink}>
	          										<Text style={styles.skipintro}>Skip Intro</Text>
	        								</TouchableOpacity>
      						</View>
      				</Image>
    			</View>

			);
	}

}