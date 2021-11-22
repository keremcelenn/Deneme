import * as React from 'react';
import { IconButton, Colors } from 'react-native-paper';


//React native paper ile iconbutton kullanımı örneği
const MyComponent = () => (
  <IconButton
    icon="camera"
    color={Colors.red500}
    size={20}
    onPress={() => console.log('Pressed')}
  />
);

export default MyComponent;