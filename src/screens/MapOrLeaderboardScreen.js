import React from 'react';
import { Button, Image, TouchableOpacity, SafeAreaView, StyleSheet, View} from "react-native";
import { Dimensions } from 'react-native';

const MapOrLeaderboardScreen = ({navigation}) => {
    return (
      <SafeAreaView>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() =>
            navigation.navigate('Home')}>
              <View>
                <Image source={require('../images/close-outline.png')}  style={styles.img}/>
              </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <View style={styles.btn}>
          <Button
              title = "Leaderboard"
          />
          </View>
          <View style={styles.btn}>
          <Button
              title = "Find a Recycling Point"
          />
          </View>
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
    buttons: {
      paddingTop: Dimensions.get('window').height / 4
    },
    btn: {
      padding: 10,
    },
    img: {
      width: Dimensions.get('window').width / 7.5,
      height: Dimensions.get('window').width / 7.5,
      resizeMode: 'contain'
    }
});
  export default MapOrLeaderboardScreen;