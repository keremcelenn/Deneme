import React, { useState } from 'react'
import { SafeAreaView, Text, View, TextInput, FlatList, Button } from 'react-native'
import database from '@react-native-firebase/database'

const VeriOkuma = props => {
    const [list, setList] = useState("")


    //Firebase deki veriyi okumak için 
    const readData = () => {
        database()
            .ref('Mesaj')
            .once('value')
            .then(snapshot => {
                setList(Object.values(snapshot.val()))
            });
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

        </SafeAreaView>

    )
}
export default VeriOkuma