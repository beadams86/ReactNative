
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
  TextInput,
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
   resizeMode:'cover',
  },

  introContent:{
  	flexDirection:'row',
    alignSelf:'stretch',
  },


  textLink:{
  	padding:30,
  },
  inputWrap:{
    flex:1,
    marginVertical:10,
    height:40,
    backgroundColor:'transparent'
  },
  input:{
    flex:1,
    paddingHorizontal:10,
    backgroundColor:"#fff",
  }

})
export default class Login extends Component{
	render(){
		return(
			 	 <View style={styles.container}>

              <Image source={require('../images/login.png')} style={styles.backgroundImage}>

      				
      						<View>
  								<Text style={styles.headerText}>Login</Text>
        					<TextInput
                  placeholder="Username"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  />
	        								<TouchableOpacity onPress={this.pop} style={styles.textLink}>
	          										<Text style={styles.skipintro}>I'm not registered yet</Text>
	        								</TouchableOpacity>
      						</View>
      				</Image>
    			</View>

			);
	}
}