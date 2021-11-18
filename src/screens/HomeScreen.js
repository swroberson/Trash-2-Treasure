import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Image, ImageBackground } from "react-native";

import { Dimensions } from 'react-native';
//import RecycleButton from '../components/RecycleButton';
import AndroidMap from '../components/AndroidMap';


import GetLocation from 'react-native-get-location'

/*function _onPressButton() {    
  console.warn(null, "_onPressButton called");
  GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
  })
  .then(location => {
      if(Math.abs(location.latitude - 29.6504) > 0.00045 || Math.abs(location.longitude - -82.3494) > 0.00045) {
      alert("Your current location\n" + "latitude: " + location.latitude
      + "\n" + "longitude: "+ location.longitude
      + "\nYou are not within 50 meters of a recycling station!")
      console.warn(null, "In IF");
        testVariable = false;
      }
      else {
        console.warn(null, "In Else");
        testVariable = true;
      }
  })
  .catch(error => {
    console.warn(null, "In Catch");
  })

  console.warn(null, "out of if-else/catch");

  //testVariable = true;

}*/

Icon.loadFont();

const HomeScreen = ({navigation}) => {

  var testVariable = _onPressButton()
  console.log("testVariable: " + testVariable)

  /*useEffect(() => {
    _onPressButton()
  }, [testVariable]);*/

  function _onPressButton() {    
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 150,
    })
    .then(location => {
      console.log("Your current location\n" + "latitude: " + location.latitude
      + "\n" + "longitude: "+ location.longitude)
        if(Math.abs(location.latitude - 29.6504) > 0.00045 || Math.abs(location.longitude - -82.3494) > 0.00045) {
        alert("Your current location\n" + "latitude: " + location.latitude
        + "\n" + "longitude: "+ location.longitude
        + "\nYou are not within 50 meters of a recycling station!")
          //testVariable = true
          return true
          console.log("in if: " + testVariable)
        }
        else {
          //testVariable = false
          return false
          console.log("in else: " + testVariable)
        }
    })
    .catch(error => {
      //testVariable = true
      console.log("in catch")
      return true
    })
  
    console.log("testVariable: " + testVariable)
    //testVariable = true;

    //return testVariable
  }

  /*useEffect(() => {
    if (testVariable == true) {
      console.warn(null, "testVariable = true");
      testVariable = false
      navigation.navigate("Scan");
    }

    <TouchableOpacity style={styles.buttonTouch} disabled={testVariable} onPress={navigation.navigate('Scan')}>
                <View style={styles.button}>
                  <Image
                    source={require('../images/recycleButton.png')}
                    style={styles.button} />
                </View>
             </TouchableOpacity>

  });*/

    return (
      <SafeAreaView>
        <View style={{flexDirection:"row", justifyContent: 'space-between'}}>
          <View style={styles.user}>
            <Icon name="person-circle-outline"
              onPress={() => navigation.navigate('UserScreen')}
              size={50}
            />
          </View>
          <View style={styles.menu}>
            <Icon name="menu-outline"
              onPress={() => navigation.navigate('MapOrLeaderboardScreen')}
              size={50}
            />
          </View>
        </View>
        <View>
          <Image
          source={require('../images/title.png')}
          style={styles.title}
          />
        </View>
        <View>
          <Image
          source={require('../images/campus.jpg')}
          style={styles.campus}
          />
        </View>
        <View style={styles.recycler}>
              <TouchableOpacity
              style={styles.buttonTouch}
              disabled={testVariable === false}
              onPress={() => navigation.navigate('Scan')}>
                <View style={styles.button}>
                  <Image
                    source={require('../images/recycleButton.png')}
                    style={styles.button} />
                </View>
             </TouchableOpacity>
        </View>
        <View style={styles.txt}>
        </View>
        <View>
          <Text style={styles.recycleInfo}> Tap to Recycle! </Text>
        </View>
      </SafeAreaView> 
    );
  };

  const styles = StyleSheet.create({
    menu:{
      paddingTop: 0,
      paddingRight: 10,
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    user: {
      paddingTop: 0,
      paddingLeft: 10,
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    txt: {
      alignItems: 'center',
      bottom: '80%'
    },
    btn: {
      paddingTop: Dimensions.get('window').height / 4
    },
    inputContainer: {
      padding: 5,
    },
    inputStyle: {
      borderColor: "black",
      borderWidth: 1,
      padding: 10,
      borderRadius: 2,
    },
    recycler: {
      paddingTop: '10%',
    },
    container: {
    	flex: 1,
    	alignItems: "center",
    },
    title: {
      marginTop: 50,
      height: 60,
      width: 500,
      alignSelf: "center",
    },
    campus: {
      marginTop: 15,
      height: 200,
      width: '100%',
    },
    recycleInfo: {
      marginTop: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    buttonTouch: {
      width: 100,
      height: 100,
      alignSelf: 'center',
    },
    button: {
      width: 100,
      height: 100,
      alignSelf: 'center',
  },
});
  export default HomeScreen;
