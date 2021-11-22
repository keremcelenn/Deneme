import React from "react";
import { View } from 'react-native'
import { Button, Paragraph, Dialog, Portal, Provider, FAB, Avatar, Searchbar, TextInput, HelperText } from 'react-native-paper'

const Orn = () => {
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    //FAB
    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;

    //Search için
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);


    //TextInput
    const [text, setText] = React.useState('');

    //HelperText
    const [helpertext, sethelpertext] = React.useState('');
    const onChangeText = text => sethelpertext(text);
    const hasErrors = () => {
        return !helpertext.includes('@');
    };


    return (
        <Provider>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row', borderWidth: 2, borderRadius: 5 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', marginLeft: 5 }}>
                        <Avatar.Image size={100} source={{ uri: 'https://picsum.photos/700' }} />

                    </View>
                    <View style={{ flex: 3, justifyContent: 'center', alignContent: 'center' }}>
                        <Button onPress={showDialog}> Show Dialog</Button>

                    </View>

                </View>

                <View style={{ flex: 3 }}>
                    <View style={{ flex: 1, margin: 5 }}>

                        <Searchbar
                            placeholder="Search"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                        />

                        <TextInput
                            label="Email"
                            value={text}
                            onChangeText={text => setText(text)}
                        />

                        <View style={{ marginTop: 5 }}>
                            <TextInput label="Email" value={helpertext} onChangeText={onChangeText} />
                            <HelperText type="error" visible={hasErrors()}>
                                Email address is invalid!
                            </HelperText>
                        </View>



                    </View>



                </View>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Alert</Dialog.Title>

                        <Dialog.Content>
                            <Paragraph>This is simple dialog</Paragraph>
                        </Dialog.Content>

                        <Dialog.Actions>
                            <Button onPress={hideDialog}>Done</Button>
                        </Dialog.Actions>
                    </Dialog>


                </Portal>


            </View>

            <Portal>
                <FAB.Group
                    open={open}
                    icon={open ? 'calendar-today' : 'plus'}
                    actions={[
                        { icon: 'plus', onPress: () => console.log('Pressed add') },
                        {
                            icon: 'star',
                            label: 'Star',
                            onPress: () => console.log('Pressed star'),
                        },
                        {
                            icon: 'email',
                            label: 'Email',
                            onPress: () => console.log('Pressed email'),
                        },
                        {
                            icon: 'bell',
                            label: 'Remind',
                            onPress: () => console.log('Pressed notifications'),
                            small: false,
                        },
                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {
                            // do something if the speed dial is open
                        }
                    }}
                />
            </Portal>


        </Provider>

    )





}
export default Orn