import React from 'react';
import { Button, SafeAreaView} from "react-native";

const MapOrLeaderboard = ({navigation}) => {
    return (
      <SafeAreaView> 
        <Button
            title = "Leaderboard"
        />
        <Button
            title = "Find Nearest Location"
        />
        <Button
        title = "Back to Home"
        onPress={() =>
          navigation.navigate('Home')}
      />
      </SafeAreaView> 
    );
  };

  export default MapOrLeaderboard;