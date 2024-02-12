// Footer.js
import React from 'react';
import { Text, Image, View, StyleSheet, TextComponent } from 'react-native';
import logo from '../../../assets/logo.png'

function Footer() {
    return (
        <View style={style.header}>
            <Image source={logo} style={style.imagem} />
            <Text style={style.text}>Bem vindo, José!
                Encontre os melhores produtores
            </Text>
        </View>
    )
}
export default Footer;

const style = StyleSheet.create({
    header: {
        padding: 16,
        backgroundColor: '#2E8B57',
    },
    imagem: {
        height: 30,
        width: 80,
    },
    text: {
        marginTop: 10,
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 30
    }
});
