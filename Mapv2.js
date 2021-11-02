/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Button
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Circle, Callout} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetLocation from 'react-native-get-location'

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to How to Use"
        onPress={() => navigation.navigate('How To Use')}
      />
      <View style={styles.space}
      />
      <Button
        title="Go to Maps"
        onPress={() => navigation.navigate('Maps')}
      />
    </View>
  );
}

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

function HowToScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        style={{width: 150, height: 150}}
        source={require('./DirtDevil.png')} />
      <Text>Press the "Can I Recycle?" button to see if you are close enough to the station. You must be within 50 meters.
      </Text>
    </View>
  );
}

function MapsScreen() {
        return (
          <React.Fragment>

          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={mapNightStyle}
            region={{
              latitude: 29.64,
              longitude: -82.35,
              latitudeDelta: 0.09,
              longitudeDelta: 0.035
          }}>
            <Marker
              coordinate={{latitude: 29.6499, longitude: -82.3487}}
              //onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
              title={'Your current location...'}
              description={'This is station 1'}
              >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>Your current location...</Text>
                    <Text>Go Gators</Text>
                  </View>
                  <View style={styles.arrowBorder} />
                  <View style={styles.arrow} />
                </View>
              </Callout>
              </Marker>

                <Marker
                  coordinate = {{latitude: 29.6501, longitude: -82.3501}}
                  title={'Recycling Station #1'}></Marker>
            <Circle
              center={{latitude: 29.6501, longitude: -82.3501}}
              radius={50}
              fillColor={'#A38200'}></Circle>
          </MapView>
          <View>
            <Button style={styles.submitButton}
              title="Can I recycle?"
              onPress={_onPressButton}
            />
          </View>
          </React.Fragment>
        );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialROuteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="How To Use" component={HowToScreen} />
        <Stack.Screen name="Maps" component={MapsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  space: {
    width: 20,
    height: 20,
  },
  map: {
    height: '95%'
  },
  container: {
      flexDirection: 'column',
      alignSelf: 'flex-start',
    },
    bubble: {
      flexDirection: 'column',
      alignSelf: 'flex-start',
      backgroundColor: '#fff',
      borderRadius: 6,
      borderColor: '#ccc',
      borderWidth: 0.5,
      padding: 15,
      width: 150,
    },
    arrow: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderTopColor: '#fff',
      borderWidth: 16,
      alignSelf: 'center',
      marginTop: -32,
    },
    arrowBorder: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderTopColor: '#007a87',
      borderWidth: 16,
      alignSelf: 'center',
      marginTop: -0.5,
      // marginBottom: -15
    },
    name: {
      fontSize: 16,
      marginBottom: 5,
    },
    image: {
      width: 120,
      height: 80,
    },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center'
  }
})

const origin = {latitude: 29.6445, longitude: -82.3515};
const destination = {latitude: 29.6463, longitude: -82.3478};

const mapNightStyle = [
                        {
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#242f3e"
                            }
                          ]
                        },
                        {
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#746855"
                            }
                          ]
                        },
                        {
                          "elementType": "labels.text.stroke",
                          "stylers": [
                            {
                              "color": "#242f3e"
                            }
                          ]
                        },
                        {
                          "featureType": "administrative.locality",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#d59563"
                            }
                          ]
                        },
                        {
                          "featureType": "poi",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#d59563"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.park",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#263c3f"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.park",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#6b9a76"
                            }
                          ]
                        },
                        {
                          "featureType": "road",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#38414e"
                            }
                          ]
                        },
                        {
                          "featureType": "road",
                          "elementType": "geometry.stroke",
                          "stylers": [
                            {
                              "color": "#212a37"
                            }
                          ]
                        },
                        {
                          "featureType": "road",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#9ca5b3"
                            }
                          ]
                        },
                        {
                          "featureType": "road.highway",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#746855"
                            }
                          ]
                        },
                        {
                          "featureType": "road.highway",
                          "elementType": "geometry.stroke",
                          "stylers": [
                            {
                              "color": "#1f2835"
                            }
                          ]
                        },
                        {
                          "featureType": "road.highway",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#f3d19c"
                            }
                          ]
                        },
                        {
                          "featureType": "transit",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#2f3948"
                            }
                          ]
                        },
                        {
                          "featureType": "transit.station",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#d59563"
                            }
                          ]
                        },
                        {
                          "featureType": "water",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#17263c"
                            }
                          ]
                        },
                        {
                          "featureType": "water",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#515c6d"
                            }
                          ]
                        },
                        {
                          "featureType": "water",
                          "elementType": "labels.text.stroke",
                          "stylers": [
                            {
                              "color": "#17263c"
                            }
                          ]
                        }
                      ]