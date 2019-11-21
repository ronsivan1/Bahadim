
import 'react-native-gesture-handler' // navigation between pages won't work without this line

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
