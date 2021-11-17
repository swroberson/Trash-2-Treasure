import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, SafeAreaView, StyleSheet, View, TextInput, Image, ImageBackground } from "react-native";

import { Dimensions } from 'react-native';
import RecycleButton from '../components/RecycleButton';
import AndroidMap from '../components/AndroidMap';

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
          <RecycleButton />
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
});
  export default HomeScreen;
