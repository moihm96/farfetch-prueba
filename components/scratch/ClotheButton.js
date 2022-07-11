import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native'
import {
    useFonts,
    Roboto_700Bold,
} from '@expo-google-fonts/roboto';

export default function ClotheButton({ title, image, navigation, route }) {
    let [fontsLoaded] = useFonts({
        Roboto_700Bold
    });

    if (fontsLoaded) {
        return (
            <ImageBackground
                source={{ uri: image }}
                style={styles.container}
            >
                <TouchableOpacity activeOpacity={0.7} style={styles.buttonStyle} onPress={() => { navigation.navigate('Home', { title: title }) }}>
                    <Text style={styles.textStyle}>{title}</Text>
                </TouchableOpacity>

            </ImageBackground >

        )
    }

    return (
        <View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonStyle: {
        backgroundColor: "#fff",
        width: "55%",
        height: "29%",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15%"
    },
    textStyle: {
        fontSize: 12,
        fontFamily: "Roboto_700Bold"
    }
});