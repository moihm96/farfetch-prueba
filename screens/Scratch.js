import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { HOME_IMAGE, WOMEN_IMAGE, MEN_IMAGE } from '../assets/image/';
import ClotheButton from '../components/scratch/ClotheButton';

const Scratch = ({ navigation, route }) => {
    return (
        <ImageBackground
            source={{ uri: HOME_IMAGE }}
            style={styles.container}
            resizeMode="stretch"
        >
            <View style={styles.clotheButtonContainer}>
                <ClotheButton
                    image={WOMEN_IMAGE}
                    title="Ropa de mujer"
                    navigation={navigation}
                />
                <ClotheButton
                    image={MEN_IMAGE}
                    title="Ropa de hombre"
                    navigation={navigation}
                />
            </View>

        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "flex-end",
    },
    clotheButtonContainer: {
        flexDirection: "row",
        width: "100%",
        height: "20%",
        backgroundColor: "transparent",
        padding: "1.5%"
    }
});

export default Scratch;