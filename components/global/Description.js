import React from 'react';
import { Text, StyleSheet } from 'react-native'


export default function Description({ description }) {
    return <Text style={styles.descriptionStyle} >{description}</Text>
};

const styles = StyleSheet.create({
    descriptionStyle: {
        fontSize: 17,
        marginTop: "3%"
    },
});