import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../utils/ScreenDimension';
import CustomButton from '../global/CustomButton';
import CustomImage from '../global/CustomImage';
import Description from '../global/Description';
import Title from '../global/Title';


export default function Seccion({ navigation, image, title, description, buttonText }) {
    return (
        <View></View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP("100"),
        height: heightPercentageToDP("90"),
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "3%",
    }
});