import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView} from "react-native";
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../AuthProvider';
import LeaderBlock from '../LeaderBlock.js';

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
        <ScrollView>
          <LeaderBlock style={{borderColor:'#daa520'}} place='First Place' user='placeholder name' points='69' crown={require('../images/gold.png')}></LeaderBlock>
          <LeaderBlock style={{borderColor:'#c0c0c0'}} place='Second Place' crown={require('../images/silver.png')}></LeaderBlock>
          <LeaderBlock style={{borderColor:'#d2691e'}} place='Third Place' crown={require('../images/bronze.png')}></LeaderBlock>
          <LeaderBlock style={{borderColor:'#adff2f'}} place='Fourth'></LeaderBlock>
          <LeaderBlock style={{borderColor:'#adff2f'}} place='Fifth'></LeaderBlock>
          <LeaderBlock style={{borderColor:'#adff2f'}} place='Sixth'></LeaderBlock>
        </ScrollView>
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