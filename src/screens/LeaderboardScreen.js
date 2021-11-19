import React, {useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView} from "react-native";
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../AuthProvider';
import LeaderBlock from '../LeaderBlock.js';

Icon.loadFont();

const LeaderboardScreen = ({navigation}) => {
  const { getLeaderboard } = useAuth();
  const [leaderboard] = useState(getLeaderboard());
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
          <LeaderBlock style={{borderColor:'#daa520'}} place='First Place' user='user 1' points='75' crown={require('../images/gold.png')}></LeaderBlock>
          <LeaderBlock style={{borderColor:'#c0c0c0'}} place='Second Place' user='user 2' points='50' crown={require('../images/silver.png')}></LeaderBlock>
          <LeaderBlock style={{borderColor:'#d2691e'}} place='Third Place' user='user 3' points='40' crown={require('../images/bronze.png')}></LeaderBlock>
          <LeaderBlock style={{borderColor:'#adff2f'}} place='Fourth Place' user='user 4' points='30'></LeaderBlock>
          <LeaderBlock style={{borderColor:'#adff2f'}} place='Fifth Place' user='user 5' points='20'></LeaderBlock>
          <LeaderBlock style={{borderColor:'#adff2f'}} place='Sixth Place' user='user 6' points='10'></LeaderBlock>
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