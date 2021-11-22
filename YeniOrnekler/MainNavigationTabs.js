import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from "./HomeScreen";
import ProfileScreen from "./Profile";
import Orn from './Orn'
import Firebase from './Firebase'
import FirebaseVeriAl from './FireBaseVeriAl'
import Icon from 'react-native-vector-icons/FontAwesome';
const Tabs = createBottomTabNavigator();


//Tab Navigation için kontrol sayfası oluşturdum. Burada alt menüde görülecek sayfalar yer almaktadır.
const MainNavigationTabs = props => {

    return (
        <NavigationContainer>
            <Tabs.Navigator
                screenOptions={{
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                }}
            >
                <Tabs.Screen
                    name="home-screen"
                    component={HomeScreen}
                    options={{ title: 'ANASAYFA',
                    tabBarIcon:({color,size}) => (<Icon name='home' color={color} size={size}/>) }}


                />

                <Tabs.Screen
                    name="profile-screen"
                    component={ProfileScreen}
                    options={{ title: 'PROFİL',
                    tabBarIcon:({color,size}) => (<Icon name='user' color={color} size={size}/>) }}


                />

                <Tabs.Screen
                    name="orn-screen"
                    component={Orn}
                    options={{ title: 'ORNEK',
                    tabBarIcon:({color,size}) => (<Icon name='inbox' color={color} size={size}/>)
                
                }}


                />

                <Tabs.Screen
                    name="fire-screen"
                    component={Firebase}
                    options={{ title: 'VERİ GÖNDER',
                    tabBarIcon:({color,size}) => (<Icon name='plus' color={color} size={size}/>) }}


                />

                <Tabs.Screen
                    name="fireal-screen"
                    component={FirebaseVeriAl}
                    options={{ title: 'VERİ AL',
                    tabBarIcon:({color,size}) => (<Icon name='minus' color={color} size={size}/>) }}


                />


            </Tabs.Navigator>


        </NavigationContainer>

    )


}

export default MainNavigationTabs