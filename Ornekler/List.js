import * as React from 'react';
import { List, Colors } from 'react-native-paper';


//React native paper ile list kullanımı örneği
const MyComponent = () => (
  <>
    <List.Icon color={Colors.blue500} icon="folder" />
    <List.Icon color={Colors.blue500} icon="equal" />
    <List.Icon color={Colors.blue500} icon="calendar" />
  </>
);

export default MyComponent;