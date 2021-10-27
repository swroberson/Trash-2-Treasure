import React from 'react';
import { Button, SafeAreaView, StyleSheet, View} from "react-native";
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

const MapOrLeaderboardScreen = ({navigation}) => {
    return (
      <SafeAreaView>
        <View style={styles.menu}>
          <Icon name="close-outline"
              onPress={() => navigation.navigate('HomeStack')}
              size={50}
            />
        </View>
        <View style={styles.buttons}>
          <View style={styles.btn}>
          <Button
              title = "Leaderboard"
              onPress={() =>
                navigation.navigate('LeaderboardScreen')}
          />
          </View>
          <View style={styles.btn}>
          <Button
              title = "Find a Recycling Point"
              onPress={() =>
                navigation.navigate('MapScreen')}
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
    }
});
  export default MapOrLeaderboardScreen;