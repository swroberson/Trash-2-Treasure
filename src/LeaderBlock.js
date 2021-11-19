import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class LeaderBlock extends Component {
    render() {
        return (
          <View style={[styles.container, this.props.style]}>
              <Text style={styles.text}>{this.props.place} {"\n\n"}
              User:  {this.props.user} {'\n\n'}
              Points:  {this.props.points}</Text>
              <View style={styles.space}></View>
              <Image style={styles.image} source={this.props.crown} />
          </View>
        );
    }
};

const styles = StyleSheet.create({
space: {
    width: 20,
    height: 20,
  },
  image: {
    width: 100,
    height: 110,
    alignSelf: 'flex-end',
  },
  container: {
    flexDirection: 'row',
      marginVertical: 10,
      marginHorizontal: 10,
      paddingTop: 15,
      height: 140,
      width: 370,
      backgroundColor: '#333',
      borderBottomWidth:5,
      borderTopWidth:5,
      borderLeftWidth: 5,
      borderRightWidth: 5,
  },
  text: {
      paddingLeft: 10,
      alignItems: 'flex-start',
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 16,
  },
})