import React from 'react';
import { SafeAreaView, StyleSheet, Text, View} from "react-native";
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../AuthProvider';

Icon.loadFont();

const LeaderboardScreen = ({navigation}) => {
  const { getLeaderboard } = useAuth();
  let leaderboard = getLeaderboard();
  console.log(leaderboard);
    return (
      <SafeAreaView>
        <View style={styles.menu}>
          <Icon name="close-outline"
              onPress={() => navigation.navigate('Home')}
              size={50}
            />
        </View>
        <View>
          <Text>  </Text>
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
    }
});
  export default LeaderboardScreen;