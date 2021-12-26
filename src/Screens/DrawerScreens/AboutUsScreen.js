import { StyleSheet, Text, FlatList, View, SafeAreaView } from 'react-native';
import AppBar from './appbar';
import React, { useLayoutEffect, useState, useEffect } from "react";
import { onSnapshot, collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'
export default function AboutUsScreen({ navigation }) {

    const [data, setData] = useState([]);
    const [list] = React.useState([
        {
            id: 1,
            title: 'Uygulama neden yapıldı?',
            body: '2020 yılında kurulmuş olan ProkaryoTech şirketi Freelance olarak alınan işlerin vergisini ödemek amacıyla kurulmuştur. Şirket ismi tüm dillerde ortak bir kelime olan ve kökü latinceye dayanan Prokaryot kelimesini baz almaktadır. Bu kelime ile technology kelimesi birleşip ProkaryoTech doğmuştur. Bireyler hayallerinde olan projelerini tecrübeli ellere bırakarak projelerinden maksimum verim elde etmektedirler. Bunun yanı sıra kendi kar amacı güden veya gütmeyen projelerini de yaparak referans projelerini çoğaltmaktadır. Detaylı bilgi ve iletişim için www.prokaryo.tech adresini ziyaret edebilirsiniz',
        },
    ]);

    return (
        <View>
            <FlatList
                data={list}
                style={styles.container}
                renderItem={({ item }) =>
                    <View style={[styles.card, { flexDirection: 'column' },]}>
                        <Text style={styles.textTitle}>{item.title}</Text>
                        <Text style={styles.textContent}>{item.description}</Text>
                    </View>}
            />

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
        padding: 13,
        fontSize: 14,
    },
});