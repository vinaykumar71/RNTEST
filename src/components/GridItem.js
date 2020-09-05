import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import PropTypes from 'prop-types';

export class GridItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemDetail', { selectedItem: this.props.item })}>
                    <Image style={styles.imageThumbnail} source={{ uri: this.props.item.artworkUrl100 }} />
                </TouchableOpacity>
            </View>
        )
    }
}

GridItem.propTypes = { item: PropTypes.object, navigation: PropTypes.object }

export default GridItem

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 1
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});