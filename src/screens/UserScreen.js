import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, Dimensions, Alert} from "react-native";
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from "../AuthProvider";

Icon.loadFont();

const UserScreen = ({navigation}) => {
  const { signOut } = useAuth();
  const { user, username, points } = useAuth();
  return (
    <SafeAreaView>
        <View style={styles.menu}>
            <Icon name="close-outline"
              onPress={() => navigation.navigate('Home')}
              size={50}
            />
        </View>
        <View>
          <Image
          source={require('../images/defaultProfile.png')}
          style={styles.profilePic}
          />
        </View>
        <View>
          <Text style={styles.username}> {username} </Text>
        </View>
        <View>
          <Text style={styles.points}> Points: {points} </Text>
        </View>
        <View style={styles.logOut}>
          <Button
            title="Log Out"
            onPress={() => {
              Alert.alert("Log Out", null, [
                {
                  text: "Yes, Log Out",
                  style: "destructive",
                  onPress: () => {
                    navigation.popToTop();
                    signOut();
                  },
                },
                { text: "Cancel", style: "cancel" },
              ]);
            }}
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
    txt: {
      paddingTop: Dimensions.get('window').height / 4,
      alignItems: 'center'
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
    logOut: {
      marginTop: '35%',
    },
    profilePic: {
      width: 150,
      height: 150,
      alignSelf: 'center',
      marginTop: '10%',
    },
    username: {
      alignSelf: 'center',
      fontSize: 20,
      paddingTop: 10,
    },
    points: {
      alignSelf: 'center',
      padding: 5,
      marginTop: 100,
      backgroundColor: 'orange',
      borderRadius: 30,
      borderWidth: 2,
      borderColor: 'black',
      fontSize: 50,
      width: '80%',
      textAlign: 'center',
    },
});
  export default UserScreen;