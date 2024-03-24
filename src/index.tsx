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

const LINKING_ERROR =
  `The package 'mistica-react-native' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

interface MisticaButtonProps extends Omit<ViewProps, 'onPress'> {
  style: ViewStyle; // Propriedade customizada para estilos
  text?: string;
  isLoading?: boolean;
  buttonStyle?: string;
  onPress?: () => void;
}

const MisticaButtonName = 'MisticaButton';
export const MisticaButton =
  UIManager.getViewManagerConfig(MisticaButtonName) != null
    ? requireNativeComponent<MisticaButtonProps>(MisticaButtonName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

interface MisticaTextInputProps extends TextInputProps {
  style: ViewStyle; // Propriedade customizada para estilos
  inputText?: string;
  inputCounterEnabled?: boolean;
  inputMaxLength?: number;
  inputAutofillEnabled?: boolean;
}

const MisticaTextInputName = 'MisticaTextInput';
export const MisticaTextInput =
  UIManager.getViewManagerConfig(MisticaTextInputName) != null
    ? requireNativeComponent<MisticaTextInputProps>(MisticaTextInputName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

const ButtonEventModule = NativeModules.ButtonEventModule;
export const buttonEventEmitter = new NativeEventEmitter(ButtonEventModule);
