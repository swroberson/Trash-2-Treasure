import { Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import {Button, ListItem, FAB, Overlay, Text} from 'react-native-elements'
import BarcodeMask from 'react-native-barcode-mask';
import { useAuth } from "../AuthProvider";
import Icon from "react-native-vector-icons/Ionicons";
import ConfettiCannon from 'react-native-confetti-cannon';

const defaultBarcodeTypes = [
  RNCamera.Constants.BarCodeType.ean13,
  RNCamera.Constants.BarCodeType.ean8,
  RNCamera.Constants.BarCodeType.upc_e
];


Icon.loadFont();

const ScanScreen = ({navigation}) => {
  const [isBarcodeRead, setIsBarcodeRead] = useState(false);
  const [barcodeType, setBarcodeType] = useState('');
  const [barcodeData, setBarcodeData] = useState('');
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [items, setItems] = useState([]);
  const [onRecycle, setOnRecycle] = useState(false);
  const { awardPoints } = useAuth();

  useEffect(() => {
    if (isBarcodeRead) {
      Alert.alert(
          "Product Code:\n" + barcodeData,
           "Add to list?",
          [
            {
              text: "OK",
              onPress: () => {
                updateItems(barcodeData);
                // reset everything
                setIsBarcodeRead(false);
                setBarcodeType('');
                setBarcodeData('');
              }
            },
            {
              text: "Cancel",
              onPress: () => {
                setIsBarcodeRead(false);
                setBarcodeType('');
                setBarcodeData('');
              }
            }
              ]
      );
    }
  }, [isBarcodeRead, barcodeType, barcodeData]);

  function onBarcodeRead (e) {
    if (!isBarcodeRead) {
      setIsBarcodeRead(true);
      setBarcodeType(e.type);
      setBarcodeData(e.data);
    }
  }

  function toggleOverlay () {
    setOverlayVisible(!overlayVisible);
  }

  function updateItems (newBarcode) {
    console.log("Update called");
    items.push(new Object({
      id: items.length + 1,
      value: newBarcode,
    }))
  }

  function onRecycleTrigger() {
    toggleOverlay();
    let numItems = items.length;
    explosion.start();
    setItems([]);
    awardPoints(numItems);
  }
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
            width={300}
            height={300}
            showAnimatedLine={false}
            outerMaskOpacity={0.25} 
          />
          <View>
            <Overlay
                overlayStyle={styles.overlay}
                isVisible={overlayVisible}
                onBackdropPress={toggleOverlay}
            >
              <View>
                <Text style={styles.listTitle}>Scanned Items</Text>
                <Text style={styles.listTip}>
                  Any items you scan will appear in the list below.{"\n\n"}
                  When you're done, press the "Submit" button to claim your reward!
                </Text>
                {
                  items.map((item, i) => (
                          <ListItem key={i} bottomDivider={true}>
                            <ListItem.Content>
                              <Text style={styles.listBody}>{i + 1}. {"\t"}{item.value}</Text>
                            </ListItem.Content>
                          </ListItem>
                      ))
                }
              </View>
            <Button
                type="clear"
                icon={
                  <Icon
                      name="arrow-forward"
                      size={20}
                      color="green"
                  />
                }
                iconRight={true}
                title={"Submit"}
                onPress={onRecycleTrigger}
            />
            </Overlay>
            <FAB
                style={styles.openButton}
                size={"large"}
                color={"orange"}
                icon={
                  <Icon
                      name="barcode-outline"
                      size={25}
                      color="blue"
                  />
                }
                onPress={toggleOverlay}
                disabled={items.length === 0}
            >
            </FAB>

            <FAB
                style={styles.menu}
                size={"large"}
                color={"white"}
                icon={
                  <Icon
                      name="close-outline"
                      size={25}
                      color="blue"
                  />
                }
                onPress={() => navigation.navigate('Home')}
            >
            </FAB>
          </View>
          <ConfettiCannon
              ref={ref => {
                this.explosion = ref;
              }}
              count={300}
              origin={{x: -15, y: 0}}
              fallSpeed={2500}
              fadeOut={true}
              colors={["#fff", "#f37c56", "#2467ff", "#24a100"]}
              autoStart={false}
          />
        </RNCamera>
      </View>
    );
  };

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
  overlay: {
    width: "75%",
    minHeight: "20%",
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold"
  },
  listTip: {
    fontSize: 12,
    fontStyle: "italic",
    fontWeight: "300",
  },
  listBody: {
    fontSize: 18,
    fontWeight: "500",
  },
  openButton: {
    position: "absolute",
    bottom: 50,
    left: 75,
  },  
  menu:{
      position: 'absolute',
      alignSelf: 'center',
      bottom:     50,
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