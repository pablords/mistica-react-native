import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
  type ViewProps,
  type TextInputProps,
  NativeModules,
  NativeEventEmitter,
  DeviceEventEmitter
} from 'react-native';

const actionEventModule = NativeModules.ActionEventModule;
export const ActionEventEmitter = new NativeEventEmitter(actionEventModule);

// // Chamar a função do módulo Kotlin e passar o nome do evento
// DeviceEventEmitter.emit('handleEvent', 'customEvent');

// // Ouvir o evento de resposta
// DeviceEventEmitter.addListener('customEvent', (responseData) => {
//     console.log('Evento de resposta recebido:', responseData);
// });

const LINKING_ERROR =
  `The package 'mistica-react-native' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

interface MisticaButtonProps extends Omit<ViewProps, 'onPress'> {
  style: ViewStyle; // Propriedade customizada para estilos
  text?: string;
  title?: string
  isLoading?: boolean;
  buttonStyle?: string;
  onPress?: () => void;
  eventName?: string
}

const ButtonName = 'Button';
export const Button =
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
  eventName?: string
}

const TextInputName = 'TextInput';
export const TextInput =
  UIManager.getViewManagerConfig(TextInputName) != null
    ? requireNativeComponent<MisticaTextInputProps>(TextInputName)
    : () => {
      throw new Error(LINKING_ERROR);
    };

