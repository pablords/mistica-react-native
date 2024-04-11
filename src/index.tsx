import { NativeModules, NativeEventEmitter, Platform } from 'react-native';
import { Button } from './components/Button';
import { TextInput } from './components/TextInput';
import type { GlobalStyleProps, ActionEventModuleProps } from './types';

const { CustomMethods, ActionEventModuleManager, GlobalStyles } = NativeModules;
const ActionEventEmitter = new NativeEventEmitter(ActionEventModuleManager);

let GlobalStyle: GlobalStyleProps;
const ActionEventModule: ActionEventModuleProps = ActionEventModuleManager;

if (Platform.OS == 'ios') {
  GlobalStyle = GlobalStyles;
}

export {
  ActionEventEmitter,
  CustomMethods,
  ActionEventModule,
  GlobalStyle,
  TextInput,
  Button,
};
