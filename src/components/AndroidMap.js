import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class AndroidMap extends React.Component {
    render() {
        return (
        <View style={styles.androidMap}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={{
                latitude: 29.643599181571453,
                longitude: -82.35476483313968,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
            </MapView>
        </View>)
    }
}

const styles = StyleSheet.create({
    androidMap: {
      ...StyleSheet.absoluteFillObject,
      height: 300,
      width: '100%',
      alignSelf: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
