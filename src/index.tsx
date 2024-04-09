import { NativeModules, NativeEventEmitter } from 'react-native';

const { CustomMethods, ActionEventModuleManager } = NativeModules;
const ActionEventEmitter = new NativeEventEmitter(ActionEventModuleManager);

import { Button } from './components/Button';
import { TextInput } from './components/TextInput';

export {
  ActionEventEmitter,
  CustomMethods,
  ActionEventModuleManager,
  TextInput,
  Button,
};
