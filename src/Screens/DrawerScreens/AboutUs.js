import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function AboutUs() {
    return (
        <View style={[styles.card, { flexDirection: 'column' },]}>
            <Text style={styles.textContent}>About Us</Text>
            <Text style={styles.textTitle}>2020 yılında kurulmuş olan ProkaryoTech şirketi Freelance olarak alınan işlerin vergisini ödemek amacıyla kurulmuştur. Şirket ismi tüm dillerde ortak bir kelime olan ve kökü latinceye dayanan "Prokaryot" kelimesini baz almaktadır. Bu kelime ile technology kelimesi birleşip ProkaryoTech doğmuştur. Bireyler hayallerinde olan projelerini tecrübeli ellere bırakarak projelerinden maksimum verim elde etmektedirler. Bunun yanı sıra kendi kar amacı güden veya gütmeyen projelerini de yaparak referans projelerini çoğaltmaktadır. Detaylı bilgi ve iletişim için www.prokaryo.tech adresini ziyaret edebilirsiniz </Text>
        </View>
    );

}
const styles = StyleSheet.create({
    card: {
        paddingTop: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#d7d7d7'
    },

    container: {
        paddingTop: 10,
    },
    textTitle: {
        paddingBottom: 5,
        paddingLeft: 10,
        paddingBottom: 5,
        fontSize: 18,
        fontWeight: 'bold'
    },
    textContent: {
        flex: 1,
        padding: 0,
        fontSize: 1,
        color: 'red',
    },

});