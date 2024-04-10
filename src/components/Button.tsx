import {
  requireNativeComponent,
  UIManager,
  type ViewStyle,
  type ButtonProps,
} from 'react-native';
import { LINKING_ERROR } from '../utils/errors';
import { useCallback, useEffect } from 'react';
import React from 'react';
import {
  ActionEventEmitter,
  ActionEventModuleManager,
} from 'mistica-react-native';
import { generateEventId } from '../utils/event-id';

interface MisticaButtonProps extends ButtonProps {
  style?: ViewStyle; // Propriedade customizada para estilos
  text?: string;
  isLoading?: boolean;
  buttonStyle?: string;
  onPress?: () => void;
  eventName: string;
  color?: string;
}

interface ButtonPropsComponent extends Omit<MisticaButtonProps, 'eventName'> {}

const MisticaButtonName = 'MisticaButton';
const MisticaButton =
  UIManager.getViewManagerConfig(MisticaButtonName) != null
    ? requireNativeComponent<MisticaButtonProps>(MisticaButtonName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

// Componente de botão personalizado que estende o MisticaButton
const Button = (props: ButtonPropsComponent) => {
  const { onPress } = props;

  // Função de callback interna que chama o onPress e também dispara o evento para o ActionModuleEventEmitter
  const handlePress = useCallback(() => {
    onPress && onPress();
  }, [onPress]);

  const eventName = generateEventId(onPress?.name || '');

  useEffect(() => {
    // Atualiza lista de eventos suportados
    ActionEventModuleManager.updateSupportedEvents(eventName);
    // Listener para o evento onPress enviado do lado nativo
    const onPressListener = ActionEventEmitter.addListener(
      eventName,
      handlePress
    );
    // Remove o ouvinte de eventos quando o componente é desmontado
    return () => {
      onPressListener.remove();
    };
  }, [eventName, handlePress]);

  return <MisticaButton {...props} eventName={eventName} />;
};

export { Button };
