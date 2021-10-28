import React from 'react';
import { Dimensions } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

const ScanScreen = ({navigation}) => {
    return (
      <SafeAreaView> 
        <View style={{flexDirection:"row", justifyContent: 'space-between'}}>
          <View style={styles.user}>
            <Icon name="person-circle-outline"
              onPress={() => navigation.navigate('UserScreen')}
              size={50}
            />
          </View>
        </View>
        <View style={styles.btn}>
          <Text>Scan Barcodes</Text>
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
    btn: {
      paddingTop: Dimensions.get('window').height / 4,
      alignItems: 'center'
    }
});
  export default ScanScreen;