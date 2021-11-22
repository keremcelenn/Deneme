import * as React from 'react';
import { Avatar } from 'react-native-paper';
import {View } from 'react-native'

//React native paper ile avatar kullanımı örneği
const MyComponent = () => {

    return ( 

        < Avatar.Image size={100} source={{ uri: 'https://picsum.photos/700' }} />

    );
    
  

  
};
export default MyComponent