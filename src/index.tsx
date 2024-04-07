import { Platform, NativeModules, NativeEventEmitter } from 'react-native';

import { Button } from './components/Button';
import { TextInput } from './components/TextInput';

let actionEventModule;
let ActionEventEmitter: NativeEventEmitter;

if (Platform.OS === 'android') {
  actionEventModule = NativeModules.ActionEventModule;
  ActionEventEmitter = new NativeEventEmitter(actionEventModule);
}


export { ActionEventEmitter, actionEventModule, TextInput, Button };
