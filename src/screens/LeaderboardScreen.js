import React from 'react';
import { SafeAreaView, StyleSheet, Text, View} from "react-native";
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

const LeaderboardScreen = ({navigation}) => {
    return (
      <SafeAreaView>
        <View style={styles.menu}>
          <Icon name="close-outline"
              onPress={() => navigation.navigate('Home')}
              size={50}
            />
        </View>
        <View style={styles.txt}>
          <Text>Leaderboard</Text>
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
    img: {
      width: Dimensions.get('window').width / 7.5,
      height: Dimensions.get('window').width / 7.5,
      resizeMode: 'contain'
    }
});
  export default LeaderboardScreen;