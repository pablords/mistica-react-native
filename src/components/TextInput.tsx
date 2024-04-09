import {
  requireNativeComponent,
  UIManager,
  type ViewStyle,
  type TextInputProps,
} from 'react-native';
import { LINKING_ERROR } from '../utils/errors';

interface MisticaTextInputProps extends TextInputProps {
  style?: ViewStyle; // Propriedade customizada para estilos
  inputText?: string;
  inputCounterEnabled?: boolean;
  inputMaxLength?: number;
  inputAutofillEnabled?: boolean;
  eventName?: string;
}

const TextInputName = 'MisticaTextInput';

const TextInput =
  UIManager.getViewManagerConfig(TextInputName) != null
    ? requireNativeComponent<MisticaTextInputProps>(TextInputName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

export { TextInput };
