import React, { PureComponent, useState, useEffect } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import Icon from 'react-native-vector-icons/Ionicons';

const defaultBarcodeTypes = [ RNCamera.Constants.BarCodeType.ean13, RNCamera.Constants.BarCodeType.ean8, RNCamera.Constants.BarCodeType.upc_e ];

const Scanner = () => {
  const [isBarcodeRead, setIsBarcodeRead] = useState(false);
  const [barcodeType, setBarcodeType] = useState('');
  const [barcodeData, setBarcodeData] = useState('');
  
  useEffect(() => {
    if (isBarcodeRead) {
      Alert.alert(
        "You scanned", 
        barcodeData, 
        [
          {
            text: 'OK',
            onPress: () => {
                // reset everything
                setIsBarcodeRead(false);
                setBarcodeType('');
                setBarcodeData('');
            }
          }
        ]
      );
    }
  }, [isBarcodeRead, barcodeType, barcodeData]);
  
  const onBarcodeRead = e => {
    if (!isBarcodeRead) {
      setIsBarcodeRead(true),
      setBarcodeType(e.type),
      setBarcodeData(e.data)
    }
  };

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
          onBarCodeRead={onBarcodeRead}
          barcodeTypes={isBarcodeRead ? [] : defaultBarcodeTypes}
        >
          <BarcodeMask 
            width={200} 
            height={200} 
            showAnimatedLine={false}
            outerMaskOpacity={0.25} 
          />
        </RNCamera>
      </View>
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

export default Scanner;