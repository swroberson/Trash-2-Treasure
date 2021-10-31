import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Scanner extends PureComponent {
  state = {
    // your other states
    barcodeType: '',
    barcodeValue: '',
    isBarcodeRead: false // default to false
 }
  onBarcodeRead(event) {
    this.setState({isBarcodeRead: true, barcodeType: event.type, barcodeValue: event.data});
  }
  componentDidUpdate() {
    const {isBarcodeRead, barcodeType, barcodeValue} = this.state;
    if (isBarcodeRead) {
       Alert.alert(barcodeType, barcodeValue, [
         { 
             text: 'OK', 
             onPress: () => {
                 // Reset everything 
                 this.setState({isBarcodeRead: false, barcodeType: '', barcodeValue: ''})
             }
         }
       ]);
    }
  }

  render() {
    const {isBarcodeRead} = this.state;
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.auto}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          barcodeTypes={isBarcodeRead ? [] : this.barcodeType}
        >
          <BarcodeMask 
            width={300} 
            height={300} 
            showAnimatedLine={false}
            outerMaskOpacity={0.3} 
            edgeColor={"#00529b"}
            backgroundColor={"#bc581a"} 
          />
        </RNCamera>
      </View>
    );
  }
  

  barcodeRecognized = ({ barcodes }) => this.setState({ barcodes });

  renderBarcodes = () => (
    <View>
      { this.state.barcodes.map(this.renderBarcode) }
    </View>
  );

  renderBarcodeAndroid = ({ bounds, data }) => (
    <React.Fragment key={data + bounds.origin.x}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 10,
          position: 'absolute',
          borderColor: '#F00',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: 10,
          ...bounds.size,
          left: bounds.origin.x,
          top: bounds.origin.y,
        }}
      >
        <Text style={{
          color: '#F00',
          flex: 1,
          position: 'absolute',
          textAlign: 'center',
          backgroundColor: 'transparent',
        }}>{data}</Text>
      </View>
    </React.Fragment>
  );
  renderBarcodeiOS = ({ bounds, data }) => (
    <React.Fragment key={data + bounds.origin.x}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 10,
          position: 'absolute',
          borderColor: '#F00',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: 10,
          ...bounds.size,
          left: bounds.origin.x,
          top: bounds.origin.y,
        }}
      >
        <Text style={{
          color: '#F00',
          flex: 1,
          position: 'absolute',
          textAlign: 'center',
          backgroundColor: 'transparent',
        }}>{data}</Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});