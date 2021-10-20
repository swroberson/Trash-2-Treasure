import React from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
      <SafeAreaView> 
      <TouchableOpacity style={styles.img} onPress={() =>
          navigation.navigate('MapOrLeaderboard')}>
        <Image source={require('../../images/hamburger_menu.png')}  style={styles.img}/>
    </TouchableOpacity>
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
    btn: {
        top: '300%',
        right: '1%'
    },
    img: {
        width: '40%',
        height: 40,
        position: 'absolute',
        top: 20,
        right: 5
    }  
});
  export default HomeScreen;