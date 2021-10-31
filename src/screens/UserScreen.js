import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions, Alert} from "react-native";
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth, signOut } from "../AuthProvider";

Icon.loadFont();

const UserScreen = ({navigation}) => {
  const { signOut } = useAuth();
  
  return (
    <SafeAreaView>
        <View style={styles.menu}>
            <Icon name="close-outline"
              onPress={() => navigation.navigate('Home')}
              size={50}
            />
        </View>
        <View style={styles.txt}>
          <Text>User Profile Info</Text>
        </View>
        <Button
          title="Log Out"
          onPress={() => {
            Alert.alert("Log Out", null, [
              {
                text: "Yes, Log Out",
                style: "destructive",
                onPress: () => {
                  signOut();
                  navigation.popToTop();
                },
              },
              { text: "Cancel", style: "cancel" },
            ]);
          }}
        />
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
    }
});
  export default UserScreen;