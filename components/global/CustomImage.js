import React from 'react';
import { Image, StyleSheet } from 'react-native'


export default function CustomImage({ image }) {
    return <Image source={{ uri: image }} style={styles.imageStyle} resizeMode='contain' />
};

const styles = StyleSheet.create({
    imageStyle: {
        width: "100%",
        height: "70%"
    }
});