
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
    alignSelf: 'stretch',

  },

  headerText: {
  	color:'#fff',
  	fontSize:26,
  	fontWeight:'700',
  	marginBottom:0,
    textAlign:'center'
  },

  subheader: {
  	color:'#f4a5a5',
  	fontSize:16,
  	fontWeight:'300',
  	marginBottom:30,
    paddingHorizontal:30,
    textAlign:'center'

  },
 
  buttonText:{
    color:'#fff',
    fontSize:50,
    position:'relative',
    marginBottom:60,

  },
  getStartedSection:{
      alignSelf: 'stretch',
      height:75,
      alignItems:'baseline',
      alignItems:'center',
       marginBottom:15,
       paddingHorizontal:30,
  },
  getStartedBtn:{
    alignSelf: 'stretch',
      backgroundColor:'transparent',
      borderWidth:2,
      borderColor:'#fff',
      paddingHorizontal:30,
      paddingVertical:8,
      alignItems:'center',
      borderRadius:50,

  },
  btnText:{
    color:"#fff",
    fontSize:18,
  }
})


export default class Onboard extends Component{



	render(){
		return(
      <Swiper style={styles.wrapper} 
      showsButtons={true} 
      loop={false}
      dot={<View style={{backgroundColor:'rgba(255,255,255,.4)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 245,}} />} 
      activeDot={<View style={{backgroundColor: '#fff', width: 10, height: 10, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 245}} />}
      nextButton={<Text style={styles.buttonText}>›</Text>}
      prevButton={<Text style={styles.buttonText}>‹</Text>}
    >

			 	<View style={styles.container}>

      				<Image source={require('../images/onboard-1.png')} style={styles.backgroundImage}>
      						<View style={styles.introContent}>
  								<Text style={styles.headerText}>All In One Place</Text>
        							<Text style={styles.subheader}>Upload and store all of your important documents and account information in a single, secure location</Text>
                       <View style={styles.getStartedSection}>
                          <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.getStartedBtn}>
                                <Text style={styles.btnText}>Get Started!</Text>
                          </TouchableOpacity>
                      </View>
      						</View>
      				</Image>

    			</View>

			   <View style={styles.container}>

              <Image source={require('../images/onboard-2.png')} style={styles.backgroundImage}>
                  <View style={styles.introContent}>
                  <Text style={styles.headerText}>Check It Off The List</Text>
                      <Text style={styles.subheader}>Use our comprehensive affairs checklist to make sure your affairs are in order and that you haven't forgotten anything</Text>
                       <View style={styles.getStartedSection}>
                          <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.getStartedBtn}>
                                <Text style={styles.btnText}>Get Started!</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
              </Image>

          </View>

          <View style={styles.container}>

              <Image source={require('../images/onboard-3.png')} style={styles.backgroundImage}>
                  <View style={styles.introContent}>
                  <Text style={styles.headerText}>Notify A Trusted Person</Text>
                      <Text style={styles.subheader}>Upon completion of the checklist, we'll securely notify a person of your choosing and give them access to your affairs</Text>
                      <View style={styles.getStartedSection}>
                          <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.getStartedBtn}>
                                <Text style={styles.btnText}>Get Started!</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
              </Image>

          </View>

      </Swiper>

  );
	}
onButtonPress(){
  this.props.navigator.push({
      id: 'Login'
  });
}
}