import React from 'react';
import { Alert, View, Image, StyleSheet, Text, TouchableOpacity, Animated, TouchableWithoutFeedback } from 'react-native';
import GetLocation from 'react-native-get-location'

function _onPressButton() {
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(location => {
        if(Math.abs(location.latitude - 29.6501) > 0.00045 || Math.abs(location.longitude - -82.3501) > 0.00045) {
        alert("Your current location\n" + "latitude: " + location.latitude
        + "\n" + "longitude: "+ location.longitude
        + "\nYou are not within 50 meters of a recycling station!")
        }
    })
}

export default class RecycleButton extends React.Component {
    render() {
        return (
             <TouchableOpacity style={styles.buttonTouch} onPress={_onPressButton}>
                <View style={styles.button}>
                  <Image
                    source={require('../images/recycleButton.png')}
                    style={styles.button} />
                </View>
             </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonTouch: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    button: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
});