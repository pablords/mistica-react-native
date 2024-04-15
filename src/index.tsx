import { NativeModules, NativeEventEmitter, Platform } from 'react-native';
import { Button } from './components/Button';
import { TextInput } from './components/TextInput';
import { Tab } from './components/Tab';
import type {
  MisticaGlobalStylesProps,
  ActionEventModuleProps,
  MisticaNavigationBarProps,
} from './types';

const {
  CustomMethods,
  ActionEventModuleManager,
  MisticaGlobalStylesManager,
  MisticaNavigationBarManager,
} = NativeModules;

const ActionEventEmitter = new NativeEventEmitter(ActionEventModuleManager);
const ActionEventModule: ActionEventModuleProps = ActionEventModuleManager;

let MisticaGlobalStyles: MisticaGlobalStylesProps;
let MisticaNavigationBar: MisticaNavigationBarProps;

if (Platform.OS == 'ios') {
  MisticaGlobalStyles = MisticaGlobalStylesManager;
  MisticaNavigationBar = MisticaNavigationBarManager;
}

export {
  ActionEventEmitter,
  CustomMethods,
  ActionEventModule,
  MisticaNavigationBar,
  MisticaGlobalStyles,
  TextInput,
  Button,
  Tab,
};
