import React from 'react';
import { Button, Linking, SafeAreaView, StyleSheet, Text, View} from "react-native";
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

const RecylingInfoScreen = ({navigation}) => {
    return (
      <SafeAreaView>
        <View style={styles.menu}>
          <Icon name="close-outline"
              onPress={() => navigation.navigate('Home')}
              size={50}
            />
        </View>
        <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.headerText}>Recyclable Materials</Text>
        </View>
        <View style={{alignItems: 'center'}}>
            <View style={{alignItems: 'flex-start'}}>
                <Text style={styles.listItem}>{'\u2022'} Paper</Text>
                <Text style={styles.listItem}>{'\u2022'} Cardboard</Text>
                <Text style={styles.listItem}>{'\u2022'} Plastic Bottles and Containers</Text>
                <Text style={styles.listItem}>{'\u2022'} Aluminum Cans</Text>
                <Text style={styles.listItem}>{'\u2022'} Steel Cans</Text>
                <Text style={styles.listItem}>{'\u2022'} Glass</Text>
            </View>
        </View>
        <View style={{alignItems: 'center', paddingTop: 40}}>
          <Text style={styles.headerText}>Recycling Tips</Text>
        </View>
        <View style={{alignItems: 'center'}}>
            <View style={{alignItems: 'flex-start'}}>
                <Text style={styles.listItemMain}>1) Empty and rinse out drink and food containers.</Text>
                    <Text style={styles.listItemSub}>Any remnants can leak onto other materials, making them unrecyclable. Also, if the container is Styrofoam, just toss it.</Text>
                <Text style={styles.listItemMain}>2) Leave your labels on.</Text>
                    <Text style={styles.listItemSub}>They will naturally burn or melt off during the recycling process, so there’s no need to waste your time taking them off.</Text>
                <Text style={styles.listItemMain}>3) Know how to handle the lids.</Text>
                    <Text style={styles.listItemSub}>If the lids are the same material as the container, leave them on. If they’re different, but still recyclable, take the lid off and toss them both in the bin, unless they break rule No. 4.</Text>
                <Text style={styles.listItemMain}>4) Remember the sticky note rule.</Text>
                    <Text style={styles.listItemSub}>Small pieces can break the sorting machines at the recycling facility. If it’s smaller than a sticky note, don’t recycle it.</Text>
                <Text style={styles.listItemMain}>5) Keep plastic bags out of the bin.</Text>
                    <Text style={styles.listItemSub}>They will clog the machinery. However, most grocery stores will accept and recycle them for you.</Text>
                <Text style={styles.listItemMain}>6) Take the tape completely off.</Text>
                    <Text style={styles.listItemSub}>Tape on boxes is not recyclable. Take it off before you recycle it.</Text>
                <Text style={styles.listItemMain}>7) Take out the plastic pump.</Text>
                    <Text style={styles.listItemSub}>Many shampoo and soap dispensers have pumps. While they are plastic, they also contain a lot of pieces that are too small to recycle once separated. Toss the pump, but recycle the bottle.</Text>
                <Text style={styles.listItemMain}>8) Recycle (almost) all paper items.</Text>
                    <Text style={styles.listItemSub}>From paper plates to giftwrap, if the paper can be torn, it can be recycled. Just remember to place any shredded paper in a paper bag labelled “shredded paper.”</Text>
                <Text style={styles.listItemMain}>9) Plastic numbers are outdated, but still important.</Text>
                    <Text style={styles.listItemSub}>Plastic containers have a number inside the recycling symbol on them. Nos. 1 and 2 are easiest to recycle and accepted curbside. However, most recycling centers sort out your plastic and remove any that can’t be recycled. So, don’t be afraid to toss Nos. 3-7 in your recycling bin.</Text>
                <Text style={styles.listItemMain}>10) Recycle even what can’t go in the recycling bin.</Text>
                    <Text style={styles.listItemSub}>Electronics, cell phones, batteries, lightbulbs and many other items that can’t go in the recycling bin can be recycled through specialized programs at various retailers.</Text>
                <Text style={styles.source}>Source</Text>
                <Text style={styles.sourceLink} onPress={() => Linking.openURL('https://www.dumpsters.com/blog/recycling-information-guide')}>All the Recycling Rules You Need to Know</Text>
            </View>
            <View style={{alignItems: 'center', paddingTop: 40}}>
          <Text style={styles.headerText}>Additional Information</Text>
        </View>
        <View style={{alignItems: 'center'}}>
            <View style={{alignItems: 'flex-start'}}>
                <Text style={styles.link} onPress={() => Linking.openURL('https://search.earth911.com/')}>Earth911: Local Recycling Information</Text>
                <Text style={styles.link} onPress={() => Linking.openURL('https://berecycled.org/search/')}>Keep America Beautiful: Local Recycling Information</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </View>
        </View>
        </View>
        </ScrollView>
      </SafeAreaView> 
    );
  };

const styles = StyleSheet.create({
    menu:{
      paddingTop: 0,
      paddingRight: 10,
      justifyContent: 'flex-start',
      alignItems: 'flex-end'
    },
    buttons: {
      paddingTop: Dimensions.get('window').height / 4
    },
    btn: {
      padding: 10,
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold"
    },
    listItem: {
        paddingTop: 10,
        fontSize: 18
    },
    listItemMain: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },
    listItemSub: {
        paddingLeft: 40,
        paddingRight: 40,
        fontSize: 16,
    },
    source: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 10,
        fontWeight: 'bold',
        fontSize: 15
    },
    sourceLink: {
        paddingTop: 5,
        paddingLeft: 40,
        paddingRight: 40,
        color: 'blue',
        fontSize: 15
    },
    link: {
        paddingTop: 20,
        paddingLeft: 40,
        paddingRight: 40,
        color: 'blue',
        fontSize: 18
    }
});
  export default RecylingInfoScreen;