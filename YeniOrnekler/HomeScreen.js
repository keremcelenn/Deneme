import React from "react";
import {Text,View,TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const HomeScreen =prpos=>{


    const nav=useNavigation();

    const onPress_Profile=()=>{
        nav.navigate('profile-screen');


    }

    return (
        <View style={{flex:1,backgroundColor:'green',justifyContent:'center',alignContent:'center'}}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={onPress_Profile}>
                <Text>Profile Git</Text>
            </TouchableOpacity>


        </View>



    );




}

export default HomeScreen