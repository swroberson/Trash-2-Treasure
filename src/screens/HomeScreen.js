import React from 'react';
import { Dimensions } from 'react-native';
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
      <SafeAreaView> 
        <View style={styles.menu}>
          <TouchableOpacity onPress={() =>
              navigation.navigate('MapOrLeaderboardScreen')}>
            <View>
              <Image style={styles.img} source={require('../images/hamburger_menu.png')}/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <Button
            title = "Go To Tests"
            onPress={() =>
              navigation.navigate('Test')}
          />
        </View>
      </SafeAreaView> 
    );
  };

const styles = StyleSheet.create({
    menu:{
      paddingTop: 0,
      paddingRight: 10,
      justifyContent: 'flex-start',
      alignItems: 'flex-end'
    },
    btn: {
      paddingTop: Dimensions.get('window').height / 4
    },
    img: {
      width: Dimensions.get('window').width / 7.5,
      height: Dimensions.get('window').width / 7.5,
      resizeMode: 'contain'
    }
});
  export default HomeScreen;