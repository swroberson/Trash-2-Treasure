import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class RecycleButton extends React.Component {
    render() {
        return (
            <View style={styles.recycleButton}>
                <TouchableOpacity style={styles.recycleButton} onPress={() => {console.log('Recycle button tapped')}}>
                    <Image 
                        source={this.props.itemImage}
                        style={styles.recycleButton} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    recycleButton: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        paddingTop: '60%',
    }
});