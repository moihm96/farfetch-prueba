import React from 'react';
import { Text } from 'react-native'


export default function Title({ title, size }) {
    return <Text style={{
        fontWeight: '700',
        fontSize: size == "M" ? 19 : size == "L" ? 23 : 30,
        marginTop: "3%"
    }} >{title}</Text>
};