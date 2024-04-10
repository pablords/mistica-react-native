import {
  requireNativeComponent,
  UIManager,
  type ViewStyle,
  type ButtonProps,
} from 'react-native';
import { LINKING_ERROR } from '../utils/errors';
import { useCallback, useEffect, useMemo } from 'react';
import React from 'react';
import {
  ActionEventEmitter,
  ActionEventModuleManager,
} from 'mistica-react-native';
import { generateEventHash } from '../utils/event-hash';

interface MisticaButtonProps extends Omit<ButtonProps, 'onPress'> {
  style?: ViewStyle; // Propriedade customizada para estilos
  text?: string;
  isLoading?: boolean;
  buttonStyle?: string;
  onPress?: () => void;
  name: string;
  color?: string;
  title: string;
  ref?: any;
}

interface ButtonPropsComponent extends Omit<MisticaButtonProps, 'name'> {
  onPress: () => void;
}

const MisticaButtonName = 'MisticaButton';
const MisticaButton =
  UIManager.getViewManagerConfig(MisticaButtonName) != null
    ? requireNativeComponent<MisticaButtonProps>(MisticaButtonName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

const Button = ({ onPress, ...props }: ButtonPropsComponent) => {
  // Função de callback interna que chama o onPress no contexto javascript
  const handlePress = useCallback(() => {
    onPress && onPress();
  }, [onPress]);

  const componentName = useMemo(() => generateEventHash(MisticaButtonName), []);

  // Crie uma referência memoizada para o componente Button
  const MemoizedButton = useMemo(
    () => <MisticaButton {...props} name={componentName} />,
    [componentName, props] // Nenhuma dependência, o componente Button só será renderizado uma vez
  );

  useEffect(() => {
    // Atualiza lista de eventos suportados
    ActionEventModuleManager.updateSupportedEvents(componentName);
    // Listener para o evento onPress enviado do lado nativo
    const onPressListener = ActionEventEmitter.addListener(
      componentName,
      handlePress
    );
    // Remove o ouvinte de eventos quando o componente é desmontado
    return () => {
      onPressListener.remove();
    };
  }, [componentName, handlePress]);

  return MemoizedButton;
};

export { Button };
