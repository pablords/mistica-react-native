import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
  type ViewProps,
  type TextInputProps,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';

let actionEventModule;
let ActionEventEmitter: NativeEventEmitter;

if (Platform.OS === 'android') {
  actionEventModule = NativeModules.ActionEventModule;
  ActionEventEmitter = new NativeEventEmitter(actionEventModule);
}

const LINKING_ERROR =
  `The package 'mistica-react-native' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

interface MisticaButtonProps extends Omit<ViewProps, 'onPress'> {
  style: ViewStyle; // Propriedade customizada para estilos
  text?: string;
  title?: string;
  isLoading?: boolean;
  buttonStyle?: string;
  onPress?: () => void;
  eventName?: string;
  color?: string;
}

let Button: any;
const ButtonName = 'Button';
Button =
  UIManager.getViewManagerConfig(ButtonName) != null
    ? requireNativeComponent<MisticaButtonProps>(ButtonName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

interface MisticaTextInputProps extends TextInputProps {
  style: ViewStyle; // Propriedade customizada para estilos
  inputText?: string;
  inputCounterEnabled?: boolean;
  inputMaxLength?: number;
  inputAutofillEnabled?: boolean;
  eventName?: string;
}

const TextInputName = 'TextInput';
let TextInput: any;
TextInput =
  UIManager.getViewManagerConfig(TextInputName) != null
    ? requireNativeComponent<MisticaTextInputProps>(TextInputName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

export { ActionEventEmitter, actionEventModule, TextInput, Button };
