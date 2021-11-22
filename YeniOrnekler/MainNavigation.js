import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from "./HomeScreen";
import ProfileScreen from "./Profile";

//Navigation için bir Home ve bir Profile sayfası oluşturdum. Burada o sayfaların kontrolü yapılıyor.
const HomeStack = createNativeStackNavigator();

const MainNavigation = props => {

    return (
        <NavigationContainer>
            <HomeStack.Navigator>
                <HomeStack.Screen
                    component={HomeScreen}
                    name={'home-screen'}
                    options={{
                        title: 'ANASAYFA',
                        headerStyle: {
                            backgroundColor: 'lightgrey'
                        },
                        headerTitleStyle: {
                            color: 'white'
                        }
                    }}
                />

                <HomeStack.Screen
                    component={ProfileScreen}
                    name={'profile-screen'}
                    options={{
                        title: 'PROFİL',
                        headerStyle: {
                            backgroundColor: 'lightgrey'
                        },
                        headerTitleStyle: {
                            color: 'white'
                        }
                    }}
                />

            </HomeStack.Navigator>
        </NavigationContainer>

    );

}

export default MainNavigation