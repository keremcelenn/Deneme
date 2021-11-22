import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native"



const Ornek = () => {

    //sayıcı için değişken oluşturdum.
    const [count, setCount] = useState(0);

    //3 adet metod oluşturdum bunları çağırdığımda setCount'a değişiklik yaparak değeri anlık olarak değiştirecektir.
    const Arttir = () => setCount(c => c + 1);
    const Azalt = () => setCount(c => c - 1);
    const Sifirla = () => setCount(0);


    //İki sayıyı toplamak için 2 adet değişken ve toplam,çıkarım değişkenleri tanımladım
    const[sayiBir,setsayiBir]=useState(0);
    const [sayiIki,setsayiIki]=useState(0);
    let [toplam,setToplam]=useState(0);
    let [cikarim,setCikarim]=useState(0);

    //birinci sayi değişkeninin ataması
    const onChangeTextTutar_Item=(text)=>{
        setsayiBir(text) ;
    }


    //ikinci sayi değişkeninin ataması
    const onChangeTextTutar_ItemIki=(text)=>{
        setsayiIki(text);
    }


    //toplama işlemi metodu burada copy değişkenlerinin sebebi normal değişkeni direkt olarak işleme sokamadığım için araya değişken almak için
    const topla=()=>{
        let copySayiBir=[...sayiBir];
        let copySayiIki=[...sayiIki];
        let copyToplam=[];
        let copyCikar=[];
    
        copyCikar=0;
        copyToplam = parseInt(copySayiBir) + parseInt(copySayiIki);
        setToplam(copyToplam);
        setCikarim(copyCikar);
    
    }

     //cikarma işlemi metodu burada copy değişkenlerinin sebebi normal değişkeni direkt olarak işleme sokamadığım için araya değişken almak için

    const cikar=()=>{
        let copySayiBir=[...sayiBir];
        let copySayiIki=[...sayiIki];
        let copyCikar=[];
        let copyToplam=[];
        copyToplam=0;
    
        copyCikar = parseInt(copySayiBir) - parseInt(copySayiIki);
        setCikarim(copyCikar);
        setToplam(copyToplam);
    
    }

//Alt kısımda ise sayaç ve toplama,çıkarma işlemlerinin görünümleri mevcuttur. Gerekli yerlerdeki onpress lere verilen metotlarla çalışma sağlanmıştır.
    return (

        <View style={{ flex: 1, backgroundColor: 'yellow' }}>



            <View style={{ flex: 1, backgroundColor: 'green', margin: 10, borderRadius: 10, justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity>
                    <Text style={{ textAlign: 'center', fontSize: 34, borderWidth: 2 }}>
                        <View style={{ backgroundColor: 'lightblue', flex: 1, margin: 5, borderRadius: 10 }}>
                            <TextInput placeholder='Sayı Giriniz' keyboardType='numeric' style={{ borderWidth: 1, margin: 5, borderRadius: 10 }} onChangeText={onChangeTextTutar_Item}></TextInput>
                            <TextInput placeholder='Sayı Giriniz' keyboardType='numeric' style={{ borderWidth: 1, margin: 5, borderRadius: 10 }} onChangeText={onChangeTextTutar_ItemIki}></TextInput>

                            <View style={{ flexDirection: 'row', flex: 0.3 }}>
                                <TouchableOpacity onPress={topla} style={{ borderWidth: 1, margin: 10, backgroundColor: 'lightgreen', borderRadius: 10, borderColor: 'lightgreen', flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>+</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={cikar} style={{ borderWidth: 1, margin: 10, backgroundColor: 'lightgreen', borderRadius: 10, borderColor: 'lightgreen', flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>-</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{ flex: 0.3, borderWidth: 1, margin: 10, borderRadius: 10, alignContent: 'center', justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center', fontSize: 20, color: 'black', fontWeight: 'bold' }}>{toplam == 0 ? cikarim : toplam}</Text>
                            </View>
                        </View>
                    </Text>
                </TouchableOpacity>
            </View>



            <View style={{ flex: 1, backgroundColor: 'pink' }}>

                <View style={{ flex: 3, backgroundColor: 'lightgreen', borderRadius: 10 }}>
                    <TouchableOpacity onPress={Arttir}>
                        <Text style={{ padding: 10, backgroundColor: 'pink', borderRadius: 10, borderWidth: 2, margin: 5, textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: 'darkgreen' }}>
                            Artır
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={Azalt}>
                        <Text style={{ padding: 10, backgroundColor: 'pink', borderRadius: 10, borderWidth: 2, margin: 5, textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: 'darkgreen' }}>
                            Azalt
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={Sifirla}>
                        <Text style={{ padding: 10, backgroundColor: 'pink', borderRadius: 10, borderWidth: 2, margin: 5, textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: 'darkgreen' }}>
                            Sıfırla
                        </Text>
                    </TouchableOpacity>

                    <Text style={{ textAlign: 'center', fontSize: 32, fontWeight: 'bold', color: 'black' }}>{count}</Text>

                </View>



            </View>


        </View>


    );


};

export default Ornek