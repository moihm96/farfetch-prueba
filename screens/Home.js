import React from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';
import BottomTabs from '../components/global/BottomTabs';
import Seccion from '../components/home/Seccion';
import SeccionProducts from '../components/home/SeccionProducts';


export default function Home({ navigation, route }) {
    const { title } = route.params;

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <ScrollView vertical showsVerticalScrollIndicator={false}>
                <SeccionProducts
                    title="Novedades"
                    description="Selección de las mejores marcas y boutiques del mundo"
                    buttonText="Comprar ahora"
                />
                <SeccionProducts
                    title="Novedades"
                    description="Selección de las mejores marcas y boutiques del mundo"
                    buttonText="Comprar ahora"
                />
            </ScrollView>
            <BottomTabs />
        </SafeAreaView>

    )
};

