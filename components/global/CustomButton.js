import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function CustomButton({ buttonText }) {
    return (
        <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>{buttonText}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "black",
        width: "30%",
        height: "7%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    buttonTextStyle: {
        color: "#eee",
        fontSize: 15
    }

})