/**
 * @format
 */

import {AppRegistry, ListViewComponent} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Ornek from './Ornekler/Ornek'
import Liste from './Ornekler/List'
import OrnAppBar from './Ornekler/AppBar'
import OrnAvatarImg from './Ornekler/Avatar'
import OrnCard from './Ornekler/Card'
import OrnDialog from './Ornekler/Dialog'
import OrnFab from './Ornekler/Fab'
import OrnHelperTxt from './Ornekler/HelperText'
import OrnIconBtn from './Ornekler/IconButton'
import OrnMenu from './Ornekler/Menu'
import OrnSearchBar from './Ornekler/Search'
import OrnSwitch from './Ornekler/Switch'
import OrnTxtInput from './Ornekler/TextInput'
import OrnFBase from './OrnekFireBase/OrnFBase'
import OrnImage from './OrnekImageUpload/ornImage'
import ap from './OrnekImageUpload/ap'

import MainNavigation from './YeniOrnekler/MainNavigation'
import MainNavigationTabs from './YeniOrnekler/MainNavigationTabs'

AppRegistry.registerComponent(appName, () => MainNavigationTabs);
