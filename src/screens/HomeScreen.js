import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, SafeAreaView, StyleSheet, View, TextInput } from "react-native";
import { Button, Overlay } from "react-native-elements";
import { useAuth } from "../AuthProvider";

import { Dimensions } from 'react-native';
import RecycleButton from '../components/RecycleButton';
import AndroidMap from '../components/AndroidMap';

Icon.loadFont();

const HomeScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp, signIn } = useAuth();
  var loginVisible = (user == null);
  
  // if user is logged in then nav to user screen
  // useEffect(() => {
  //   if (user != null) {
  //     navigation.navigate("UserScreen");
  //   }
  // }, [user]);

  // The onPressSignIn method calls AuthProvider.signIn with the
  // email/password in state.
  const onPressSignIn = async () => {
    console.log("Press sign in");
    try {
      await signIn(email, password);
    } catch (error) {
      Alert.alert(`Failed to sign in: ${error.message}`);
    }
  };

  // The onPressSignUp method calls AuthProvider.signUp with the
  // email/password in state and then signs in.
  const onPressSignUp = async () => {
    try {
      await signUp(email, password);
      signIn(email, password);
    } catch (error) {
      Alert.alert(`Failed to sign up: ${error.message}`);
    }
  };

    return (
      <SafeAreaView>
      <Overlay 
          overlayStyle={{ width: "90%" }}
          isVisible={loginVisible}
        >
        <View>
        <Text>Sign Up or Sign In:</Text>
        <View style={styles.inputContainer}>
            <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="email"
            style={styles.inputStyle}
            autoCapitalize="none"
            />
        </View>
        <View style={styles.inputContainer}>
            <TextInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="password"
            style={styles.inputStyle}
            secureTextEntry
            />
        </View>
        <Button onPress={onPressSignIn} title="Sign In" />
        <Button onPress={onPressSignUp} title="Sign Up" />
        </View>
        </Overlay>
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
          <AndroidMap></AndroidMap>
          <RecycleButton></RecycleButton>
        </View>
        <View style={styles.txt}>
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
      paddingTop: '85%',
    },
    container: {
    	flex: 1,
    	alignItems: "center"
    }
});
  export default HomeScreen;
