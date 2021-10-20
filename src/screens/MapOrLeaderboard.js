import React from 'react';
import { Button, Image, TouchableOpacity, SafeAreaView, StyleSheet, View} from "react-native";

const MapOrLeaderboard = ({navigation}) => {
    return (
      <SafeAreaView> 
          <View style={styles.btn}>
        <Button
            title = "Leaderboard"
        />
        <Button
            title = "Find Nearest Location"
        />
        </View>
        <TouchableOpacity style={styles.img} onPress={() =>
          navigation.navigate('Home')}>
            <Image source={require('../../images/close-outline.png')}  style={styles.img}/>
        </TouchableOpacity>
      </SafeAreaView> 
    );
  };

  const styles = StyleSheet.create({
    btn: {
        top: '200%',
        right: '1%'
    },
    img: {
        width: '40%',
        height: 40,
        position: 'absolute',
        top: 20,
        right: 5
    }  
});
  export default MapOrLeaderboard;