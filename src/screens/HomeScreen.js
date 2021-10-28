import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Text, SafeAreaView, StyleSheet, View, Image } from "react-native";
import { Dimensions } from 'react-native';
import RecycleButton from '../components/RecycleButton';

Icon.loadFont();

const HomeScreen = ({navigation}) => {
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
        <View style={styles.recycleButton}>
          <RecycleButton itemImage={require('../images/recycleButton.png')} />
        </View>
        <View style={styles.txt}>
          <Text>Home Screen</Text>
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
    }
});
  export default HomeScreen;