import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, Button, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Circle, Callout } from 'react-native-maps';
import GetLocation from 'react-native-get-location'

function _onPressButton() {
    _requestLocation();
}

export default class AndroidMap extends React.Component {
    state = {
            latitude: 29.6447,
            longitude: -82.3434,
            error: null,
    }

    _requestLocation = () => {
        this.setState({ loading: true });

        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 150000,
        })
            .then(location => {
                this.setState({
                    latitude: location.latitude,
                    longitude: location.longitude,
                    loading: false,
                });
            })
            .catch(ex => {
                const { code, message } = ex;
                console.warn(code, message);
                if (code === 'CANCELLED') {
                    Alert.alert('Location cancelled by user or by another request');
                }
                if (code === 'UNAVAILABLE') {
                    Alert.alert('Location service is disabled or unavailable');
                }
                if (code === 'TIMEOUT') {
                    Alert.alert('Location request timed out');
                }
                if (code === 'UNAUTHORIZED') {
                    Alert.alert('Authorization denied');
                }
                this.setState({
                    latitude: null,
                    longitude: null,
                    loading: false,
                });
            });
    }

    render() {
        const { latitude, longitude, loading } = this.state;
        return (
          <SafeAreaView style={styles.container}>
          <TouchableOpacity disabled={this.state.loading} style={styles.button} onPress={this._requestLocation}>
            <Image
              source={require('../images/location.png')}
              style={styles.image} />
          </TouchableOpacity>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={mapNightStyle}
            region={{
              latitude: 29.647,
              longitude: -82.348,
              latitudeDelta: 0.01,
              longitudeDelta: 0.02}}>

              <Marker
                coordinate = {{latitude: this.state.latitude, longitude: this.state.longitude}}
                image={require('../images/dot.png')}
                title={'Current location'}></Marker>

              <Marker
                coordinate = {{latitude: 29.6501, longitude: -82.3501}}
                title={'Recycling Station #1'}>
                <Callout tooltip>
                    <View>
                      <View style={styles.bubble}>
                        <Text style={styles.name}>{coordinates[0].name}</Text>
                        <Text>{coordinates[0].address}</Text>
                        <Text> <Image style={styles.image} source={require('../images/stadium.jpeg')} resizeMode="cover" /> </Text>
                      </View>
                      <View style={styles.arrowBorder} />
                      <View style={styles.arrow} />
                    </View>
                </Callout>
              </Marker>

              <Marker
                coordinate = {{latitude: 29.6445, longitude: -82.352}}
                title={'Recycling Station #2'}>
                <Callout tooltip>
                    <View>
                      <View style={styles.bubble}>
                        <Text style={styles.name}>{coordinates[1].name}</Text>
                        <Text>{coordinates[1].address}</Text>
                        <Text> <Image style={styles.image} source={require('../images/hume.jpg')} resizeMode="cover" /> </Text>
                      </View>
                      <View style={styles.arrowBorder} />
                      <View style={styles.arrow} />
                    </View>
                </Callout>
              </Marker>

              <Marker
                coordinate = {{latitude: 29.6467, longitude: -82.3478}}
                title={'Recycling Station #3'}>
                <Callout tooltip>
                    <View>
                      <View style={styles.bubble}>
                        <Text style={styles.name}>{coordinates[2].name}</Text>
                        <Text>{coordinates[2].address}</Text>
                        <Text> <Image style={styles.image} source={require('../images/reitz.png')} resizeMode="cover" /> </Text>
                      </View>
                      <View style={styles.arrowBorder} />
                      <View style={styles.arrow} />
                    </View>
                </Callout>
              </Marker>

              <Marker
                coordinate = {{latitude: 29.6485, longitude: -82.3439}}
                title={'Recycling Station #4'}>
                <Callout tooltip>
                    <View>
                      <View style={styles.bubble}>
                        <Text style={styles.name}>{coordinates[3].name}</Text>
                        <Text>{coordinates[3].address}</Text>
                        <Text> <Image style={styles.image} source={require('../images/marston.jpg')} resizeMode="cover" /> </Text>
                      </View>
                      <View style={styles.arrowBorder} />
                      <View style={styles.arrow} />
                    </View>
                </Callout>
              </Marker>

              <Marker
                coordinate = {{latitude: 29.642, longitude: -82.3445}}
                title={'Recycling Station #5'}>
                <Callout tooltip>
                    <View>
                      <View style={styles.bubble}>
                        <Text style={styles.name}>{coordinates[4].name}</Text>
                        <Text>{coordinates[4].address}</Text>
                        <Text> <Image style={styles.image} source={require('../images/harrell.png')} resizeMode="cover" /> </Text>
                      </View>
                      <View style={styles.arrowBorder} />
                      <View style={styles.arrow} />
                    </View>
                </Callout>
              </Marker>

              <Marker
                coordinate = {{latitude: 29.6510, longitude: -82.3402}}
                title={'Recycling Station #6'}>
                <Callout tooltip>
                    <View>
                      <View style={styles.bubble}>
                        <Text style={styles.name}>{coordinates[5].name}</Text>
                        <Text>{coordinates[5].address}</Text>
                        <Text> <Image style={styles.image} source={require('../images/warr.jpg')} resizeMode="cover" /> </Text>
                      </View>
                      <View style={styles.arrowBorder} />
                      <View style={styles.arrow} />
                    </View>
                </Callout>
              </Marker>

              <Circle
                center={{latitude: 29.6501, longitude: -82.3501}}
                radius={50}
                fillColor={'#A38200'}></Circle>
          </MapView>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  space: {
    width: 20,
    height: 20,
  },
  map: {
     ...StyleSheet.absoluteFillObject,
  },
  container: {
       ...StyleSheet.absoluteFillObject,
            height: 675,
            width: '100%',
            alignSelf: 'center',
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 20,
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
    //marginBottom: -15,
   },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
      width: 130,
      height: 130,
      alignSelf: 'center',
  },
  button: {
      width: 105,
      height: 105,
      zIndex: 1,
      top: 540,
      alignSelf: 'flex-end',
      position: 'absolute'
  },
})

const coordinates =  [
          { name: 'Ben Hill Griffin Stadium', address: '157 Gale Lemerand Dr', latitude: 29.6501, longitude: -82.3501 },
          { name: 'Hume Hall', address: 'Museum Rd', latitude: 29.6445, longitude: -82.3515 },
          { name: 'Reitz Student Union', address: '118 Reitz Union Drive', latitude: 29.6463, longitude: -82.3478 },
          { name: 'Marston Science Library', address: '444 Newell Dr', latitude: 29.6481, longitude: -82.3437 },
          { name: 'Harrell Medical Education Building', address: '1104 Newell Dr', latitude: 29.6513, longitude: -82.3402 },
          { name: 'Warrington College of Business', address: '1384 Union Road', latitude: 29.642, longitude: -82.3445 }
];

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