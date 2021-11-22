import React, { useState } from 'react'
import { SafeAreaView, Text, View, TextInput, FlatList, Button } from 'react-native'
import database from '@react-native-firebase/database'


//Firebase de realtime database ile text bir veriyi gönderme işlemini gerçekleştirdim.
const MainPage = props => {
    const [data, setData] = useState("")

    //Veri buradaki push() ile gönderilmektedir.
    const writeData = () => {
        database().ref('Mesaj').push(data)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TextInput
                    onChangeText={(text) => setData(text)}
                    placeholder="Veri Giriniz.."
                />
                <Button title="Veriyi Gönder" onPress={writeData} />

            </View>

        </SafeAreaView>

    )
}
export default MainPage