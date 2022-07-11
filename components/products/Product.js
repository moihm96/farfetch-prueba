import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { heightPercentageToDP } from '../../utils/ScreenDimension';
import Description from '../global/Description';
import Title from '../global/Title';

export default function Product({ title, description, price, image }) {
    return (
        <View style={{ padding: "4%", width: "60%" }}>
            <ProductImage image={image} />
            <ProductInfo title={title} description={description} price={price} />
        </View>
    )
};


const ProductImage = ({ image }) => (
    <>
        <Image
            source={{ uri: image }}
            style={{ width: "100%", height: heightPercentageToDP("40") }}
        />

        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#eee' />
        </TouchableOpacity>
    </>
);

const ProductInfo = ({ title, description, price }) => (
    <>
        <Title title={title} />
        <Description description={description} />
        <Description description={price} />
    </>
)