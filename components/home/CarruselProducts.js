import React from 'react';
import { View, FlatList, Image, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { heightPercentageToDP } from '../../utils/ScreenDimension';
import Description from '../global/Description';
import Title from '../global/Title';

const data = [
    {
        image: 'https://cdn-images.farfetch-contents.com/18/55/35/53/18553553_40111691_1000.jpg',
        title: 'Prada',
        description: 'top corto en strass',
        price: '1.590 €'
    },
    {
        image: 'https://cdn-images.farfetch-contents.com/18/36/75/78/18367578_40366256_1000.jpg',
        title: 'Balenciaga',
        description: 'bolso combonera LE Cagole XS',
        price: '1.550 €'
    },
    {
        image: 'https://cdn-images.farfetch-contents.com/18/62/27/17/18622717_40313829_1000.jpg',
        title: 'Alexander McQueen',
        description: 'pantalones de vestir bootcut',
        price: '650 €'
    },
    {
        image: 'https://cdn-images.farfetch-contents.com/17/91/58/62/17915862_40407785_1000.jpg',
        title: 'Amina Muaddi',
        description: 'mules Lily con tacón de 95 mm',
        price: '960 €'
    }
]

export default function CarruselProducts() {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                horizontal
                data={data}
                keyExtractor={item => `key-${item.title}`}
                renderItem={RenderItem}
                ItemSeparatorComponent={RenderSeparator}
            />
        </SafeAreaView>
    )
};

const RenderItem = ({ item, index }) => {
    return (
        <View>

            <Image
                source={{ uri: item.image }}
                style={{ width: "100%", height: heightPercentageToDP("30") }}
                resizeMode='contain'
            />

            <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
                <MaterialCommunityIcons name='heart-outline' size={25} color='#eee' />
            </TouchableOpacity>

            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>

        </View>

    )
};

const RenderSeparator = () => {
    return (
        <View style={{
            height: heightPercentageToDP("30"),
            width: "3%",
            backgroundColor: "red"
        }} />
    )
}