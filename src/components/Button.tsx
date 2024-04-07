import {
  requireNativeComponent,
  UIManager,
  type ViewStyle,
  type ViewProps,
} from 'react-native';
import { LINKING_ERROR } from '../utils/errors';

interface MisticaButtonProps extends Omit<ViewProps, 'onPress'> {
  style?: ViewStyle; // Propriedade customizada para estilos
  text?: string;
  title?: string;
  isLoading?: boolean;
  buttonStyle?: string;
  onPress?: () => void;
  eventName?: string;
  color?: string;
}


const ButtonName = 'MisticaButton';
const Button =
  UIManager.getViewManagerConfig(ButtonName) != null
    ? requireNativeComponent<MisticaButtonProps>(ButtonName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

export { Button };
