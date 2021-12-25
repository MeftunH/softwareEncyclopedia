import React from 'react';
import { View, Text, Button, StyleSheet, Image, FlatList } from 'react-native';

import Accordion from '@gapur/react-native-accordion'; //https://www.npmjs.com/package/@gapur/react-native-accordion


export default function FaqScreen() {
    const [list] = React.useState([
        {
            id: 1,
            title: 'Uygulama neden yapıldı?',
            body: 'Uygulama yazılım dünyasına yeni girmiş kişilerin yüzlerce kavram arasında kaybolmaması adına yapılmıştır.',
        },
        {
            id: 2,
            title: 'Tüm kavramlar uygulamada bulunuyor mu?',
            body: 'Hayır, tüm kavramlar uygulamada bulunmuyor fakat kullanıcıların yeni kavramlar ekleyebilmesine imkan tanıyarak dinamik bir uygulama olmayı hedefliyoruz!',
        },
        {
            id: 3,
            title: 'Yeni girilen kavramlar kontrol ediliyor mu?',
            body: 'Evet, yeni girilen kavramlar algoritmamız tarafından kontrol ediliyor ardından moderatörlerimiz tarafından manuel olarak kontrol edilmektedir.',
        },
        {
            id: 4,
            title: 'Uygulama nasıl geliştirildi?',
            body: 'Uygulama Facebook frameworku olan React Native ile geliştirildi.',
        },
        {
            id: 5,
            title: 'Uygulama gelişimini sürdürecek mi?',
            body: 'Evet, uygulamamız yazılım ekibmiz tarafından geliştirilmeye devam edecektir.',
        },
        {
            id: 6,
            title: 'Uygulama kar amacı güdüyor mu?',
            body: 'Hayır, uygulamamız hiç bir zaman kar amacı gütmeyecektir.',
        },
    ]);

    const renderList = ({ item }) => {
        return (
            <View key={item.id}>
                <Accordion headerTitle={item.title}>
                    <Text style={styles.textStyle}>{item.body}</Text>

                </Accordion>
            </View>
        );
    };
    return (
        <FlatList
            data={list}
            renderItem={renderList}
            keyExtractor={(item) => item.id.toString()}
        />
    );

}
const styles = StyleSheet.create({
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
    },

});