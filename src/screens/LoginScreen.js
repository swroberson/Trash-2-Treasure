import React, { useState, useEffect } from 'react';

import { Text, SafeAreaView, StyleSheet, View, TextInput } from "react-native";
import { Button, Overlay } from "react-native-elements";
import { useAuth } from "../AuthProvider";

  const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user, signUp, signIn } = useAuth();
    var loginVisible = (user == null);
    
    // if user is logged in then nav to the home screen
     useEffect(() => {
       if (user != null) {
         navigation.navigate("Home");
       }
     }, [user]);
  
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
      </SafeAreaView> 
    );
  };

  const styles = StyleSheet.create({
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
  export default LoginScreen;