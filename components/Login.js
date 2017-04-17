
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
    flexDirection: 'column',
  },

  backgroundImage:{
	 alignSelf:'stretch',
	 width:  null,
   flex:1,
  },
  logoContainer:{
    alignItems:'center',
    flex:1,
    padding:15,
    marginTop:30,
  },

  textLink:{
  	padding:30,
  },
  inputWrapper:{
    flex:2,
    padding:15,
    height:100, 
    backgroundColor:'#fff',
    flexDirection:'column',
    alignSelf:'stretch'
  },
  txtLabel:{
    color:'#666',
    fontSize:16,
    marginBottom:15,
    fontWeight:'bold',
  },
  input:{
    paddingHorizontal:10,
    backgroundColor:"#fff",
    marginBottom:30,
    backgroundColor:'rgba(255,255,255,.7)',
    borderBottomWidth:2,
    borderBottomColor:"#fba2a2"
  },

  btnContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    height:40,
    marginBottom:15,
  },

  submitBtn:{
    backgroundColor: '#ec3535',
    padding:6,
    flex:1,
    marginRight:15,
    borderRadius:50,
  },
  regBtn:{
    borderWidth:1,
    borderColor:'#ec3535',
    flex:1,
    padding:6,
    borderRadius:50,
  },
  fbLogin:{
    backgroundColor: '#2d4486',
    padding:8,
    borderRadius:50,
  },
  btnText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:18,
    alignSelf:'center'
  },

  registerTxt:{
    fontSize:18,
    color:'#ec3535',
    alignSelf:'center',
  },

  txtDivider:{
    marginBottom:15,
    alignSelf:'center',
    color:'#999',
    fontSize:18,
    fontStyle:'italic',
  },
  textLink:{
    alignSelf:'center',
    margin:15,
    flexDirection:'row',
  },
  skipintro:{
    color:'#ec3535'
  }
})
export default class Login extends Component{
	render(){
		return(
			 	 <View style={styles.container}>

              <Image source={require('../images/red-bg.png')} style={styles.backgroundImage}>
                  <View style={styles.logoContainer}>
                  <Image source={require('../images/LP-splashlogo.png')} />
      				    </View>

                  <View style={styles.inputWrapper}>
        					<TextInput
                  placeholder="Enter Email Address"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  />

                  <TextInput
                  placeholder="Enter Password"
                  secureTextEntry={true} 
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  />
                  <View style={styles.btnContainer}>
                  <TouchableOpacity onPress={this.pop} style={styles.submitBtn}>
                        <Text style={styles.btnText}>Log On</Text>
                  </TouchableOpacity>
                    <TouchableOpacity onPress={this.pop} style={styles.regBtn}>
                        <Text style={styles.registerTxt}> Register</Text>
                  </TouchableOpacity>
                  </View>
                  <Text style={styles.txtDivider}>or</Text>
                  <TouchableOpacity onPress={this.pop} style={styles.fbLogin}>
                        <Text style={styles.btnText}>Facebook Login</Text>
                  </TouchableOpacity>
                  
  							
                  </View>
                  
      				</Image>
    			</View>

			);
	}
}