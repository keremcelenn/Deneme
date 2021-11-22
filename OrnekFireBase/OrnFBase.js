import React, { useState } from 'react'
import { SafeAreaView, Text, View, TextInput, FlatList, Button } from 'react-native'
import database from '@react-native-firebase/database'

//En basit anlamda firebase e veri alıp göndermenin tek bir sayfada olduğu sayfa.
const MainPage = props => {
    const [data, setData] = useState("")
    const [list, setList] = useState("")

    
    const readData = () => {
        database()
            .ref('Mesaj')
            .once('value')
            .then(snapshot => {
                setList(Object.values(snapshot.val()))
            });
    }

    const writeData = () => {
        database().ref('Mesaj').push(data)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flex: 1, padding: 10, marginTop: 10 }}>
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    style={{ marginTop: 10, padding: 10 }}
                    data={list}
                    renderItem={({ item }) => <Text>{item}</Text>}
                />
            </View>

            <Button title="Veriyi Oku" onPress={readData} />

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