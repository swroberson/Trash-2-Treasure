import React, { Component } from 'react';
import { Button, View, SafeAreaView, Text, StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const TestScreen = ({navigation}) => {
    const [message1, setMessage1] = React.useState();
    const [message2, setMessage2] = React.useState();
    const [message3, setMessage3] = React.useState();
  
    return (
      <SafeAreaView> 
      <View style ={[styles.container, {
        flexDirection: "row",
        justifyContent: "center"
        }]}>
        
          <Button
            title="Run Test 1"
            onPress={() => {
              setTimeout(() => {
                setMessage1("1");
              }, Math.floor(Math.random() * 200));
            }}
          />
  
          <Button
            title="Run Test 2"
            onPress={() => {
              setTimeout(() => {
                setMessage2("2");
              }, Math.floor(Math.random() * 200));
            }}
          />
  
          <Button
            title="Run Test 3"
            onPress={() => {
              setTimeout(() => {
                setMessage3("3");
              }, Math.floor(Math.random() * 200));
            }}
          />
        </View>

        <View>
        {message1 && (
            <Text style={styles.messageText1} testID="printed-message1">
              {message1}
            </Text>
          )}
          
        {message2 && (
          <Text style={styles.messageText2} testID="printed-message2">
            {message2}
          </Text>
        )}
  
        {message3 && (
            <Text style={styles.messageText3} testID="printed-message3">
              {message3}
            </Text>
        )}
        </View>

        <View style={styles.btn}>
          <Button
            title = "Home"
            onPress={() =>
              navigation.navigate('Home')}
          />
        </View>
        </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    messageText1: {
      fontFamily: "Arial",
      fontSize: 38,
      textAlign: "center",
      marginTop: 20
    },
  
    messageText2: {
      fontFamily: "Arial",
      fontSize: 38,
      textAlign: "center",
      marginTop: 20
    },
    
    messageText3: {
      fontFamily: "Arial",
      fontSize: 38,
      textAlign: "center",
      marginTop: 20
    },
    btn: {
      paddingTop: Dimensions.get('window').height / 6,
      alignItems: 'center'
    }
  });
  
  export default TestScreen;