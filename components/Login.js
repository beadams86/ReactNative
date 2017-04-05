
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
  	color:'#333',
  	fontSize:26,
  	fontWeight:'700',
  	marginBottom:15,
  },

  subheader: {
  	color:'#666',
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
export default class Login extends Component{
	render(){
		return(
			 	<View style={styles.container}>

      				
      						<View style={styles.introContent}>
  								<Text style={styles.headerText}>Login</Text>
        							<Text style={styles.subheader}>Store important files in a single secure location</Text>
	        								<TouchableOpacity onPress={this.pop} style={styles.textLink}>
	          										<Text style={styles.skipintro}>Skip Intro</Text>
	        								</TouchableOpacity>
      						</View>
      				
    			</View>

			);
	}
}