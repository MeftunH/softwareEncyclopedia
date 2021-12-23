import { StyleSheet, Text, FlatList, View, SafeAreaView } from 'react-native';
import AppBar from './appbar';
import React, { useLayoutEffect, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'
import { LogBox } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default function HomeScreen({ navigation }) {
    LogBox.ignoreLogs(['Setting a timer']);
    LogBox.ignoreLogs(['Setting a timer for a long period of time'])
    const [data, setData] = useState([]);
    const [title, seTitle] = useState('');
    const [description, setDescription] = useState([]);

    var dataList = [
        { value: 'Algoritma yazılımın temelini oluşturur. Bir probleme yaklaşımınız, çözüme gidişiniz, kullandığınız yöntemler tasarladığınız algoritmaya göre yapılmaktadır. Algoritmayı hayatımızda farkında olmadan sürekli kullanmaktayız. Yaptığımız her hareket, her eylem aslında kendi içerisinde kendi algoritmasını barındırmaktadır. Demlediğimiz çayın, yaptığımız pilavın, hava karardığında odamızda yaktığımız ışığın… Her durumun aslında kendine has algoritması ve koşulları vardır. Tasarladığımız algoritmaları daha anlaşılır bir şekilde göstermek için akış diyagramları kullanırız', key: 'Algoritma', },
        { value: 'Yazdığımız kodlar da aslında günlük hayatta kullandığımız diller gibidir. Türkçede nasıl nokta, virgül, yüklem varsa programlama dillerinde de neye ne yapılacağını, hangi işaretler ile belirtileceğini tanımlamamız gerekmektedir. Her programlama dilinin de kendine göre bir sözdizimi vardır. Seçtiğimiz dilde kodlarımızı yazarken o dilin kurallarına uymamız gerekmektedir. Eğer kurallara uymazsanız zaten derleyici de yazdığınız kodun kullara uymadığını belirtir ve kodunuzu derlemez.', key: 'Söz dizimi (Syntax)', },
        { value: 'Liseyi meslek lisesinde okuyanlar iyi bilir (üniversitede denk gelmedim, belki orada da denk gelen olmuştur) programlamaya ilk girişi not defteri açıp bir <p> etiketi içerisine “Hello World” yazıp uzantısnı .html olarak kayıt edip başlamıştır. Fakat günümüzde projelere ait kodları (özellikle derleme gerektirmeyen tasarım (css) , html veya script dosyalarını hızlıca değiştirmek, pratif bir şekilde yazmak için bir takım kod düzenlemeyi kolaylaştıran metin yazma editörlerine benzer uygulamalar çıkmıyor. Bu uygulamalar yazacağınız dile göre yazım kurallarını (syntax) ayarlar, etiketlerin kapsama alanlarını görselleştirir, kodlarda renklendirmeler yaparak yazılan kodları daha anlaşılır ve düzenli hale getirirler.', key: 'Kod Editörleri ( Code Editors)', },
        { value: 'Kod editörlerinin birkaç tık üstü diyebiliriz. Kod editörleri sadece düzenlemeler değişiklikler yapmamızı sağlıyordu, bir IDE’de bunları yapabileceğiniz gibi bir takım farklılıkları da vardır. Bir IDE birden fazla dili destekleyebilir. Yazdığınız kodları IDE’ler ile derleyebilir, onları test edebilirsiniz. Birden fazla dil ile uyumlu IDE’ler olduğu gibi diller ile özdeşleşmiş IDE’lerde vardır', key: ' IDE (Integrated Development Environment)', },
        { value: 'Seçtiğiniz dilde, yazdığınız programı seçtiğiniz platforma göre ( Windows, Linux ) çalışabilecek şekilde işlemlemcilerin anladığı dil olan makine diline 1 ve 0’lara (binary formatına) dönüştürür. Yazılımın günümüzde bu kadar hızlı ilerlemesi ve konuşma dillerine yakın programlama dillerinin çıkması (Python) derleyicilerin gelişmesi sayesinde olmuştur. Derleyiciler olmasaydı tüm işlemleri makine dilinde kendimizin programlaması gerekecekti.', key: 'Derleyici (Compiler)', },
        { value: 'Derleyicilere yazdığımız kodu gönderip sonucunda çalıştırılabilir bir formata dönüştürmemize denir. Örneğin, C# dilinde konsol uygulaması ( console application) geliştirdiğimizi düşünelim. Kodu yazıp derlediğimizde sonuç olarak bize uygulamamızın çalıştırılabilir dosyasını ( .exe dosyası) oluşturur.', key: 'Derlemek  (Compile)', },
        { value: 'Eğer hedefinizde iyi bir yazılımcı olmak varsa yorum satırlarını ihmal etmeyin. İster saatlerini, ister günlerinizi verin bir projeye. Aradan 3-4 ay geçtiğinde, sizden bir değişiklik istendiğinde burada ne yapmıştım diye düşünürsünüz. Sizden sonra dahil olan birisi projede değişiklik yapmak istediğinde veya kodları incelediğinde sizin kurduğunuz algoritmayı çözene kadar saatlerini harcayabilir. Bu yüzden ilk başta kendi işinizi kolaylaştırmak, ardından da sizden gelenler kulaklarınızı çınlatmasın diye yorum satırlarını ihmal etmeyin.', key: 'Yorum Satırı (Commenting)', },
        { value: 'Büyük bir projenin içerisinde yer alıyorsanız, başka sistemlerle, servislerle iletişim halinde olma ihtiyacı duymuşsunuzdur. Yada kendiniz bir proje geliştiriyorsanız yapmak istediğiniz modül aslında başka biri tarafından yapılmış ve API olarak kullanıma açılmıştır.', key: 'API (Application Programming Interface)', },
        { value: 'Yazdığımız kodları derleyiciler neye göre derleyeceğini o dile ait framework’e bakarak anlarlar. C# uygulaması geliştiriyorsak bilgisayarımızda .net Framework kurulu olması gerekmektedir. Aynı şekilde bir Java uygulaması geliştiriyorsak bilgisayarımızda JDK olması gerekmektedir. Herhangi bir dilde yazılmış uygulamayı bilgisayarımızda çalıştırabilmek için de o uygulamanın framework’ü bilgisayarımızda kurulu olmalıdır', key: 'Framework', },
    ];
   

    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "concepts"));
            const newConcepts = [];
            querySnapshot.forEach((doc) => {
                var title = doc.data().title;
                var description = doc.data().description;
                newConcepts.push({ title: title, description: description });
            });
            setData(newConcepts);
        }
        getData();
    });
    return (
        <View>
            {/* <AppBar></AppBar> */}
            <FlatList
                data={data}
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


