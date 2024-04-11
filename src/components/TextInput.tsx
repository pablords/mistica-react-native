import {
  requireNativeComponent,
  UIManager,
  type ViewStyle,
  type TextInputProps,
} from 'react-native';
import { LINKING_ERROR } from '../utils/errors';
import { useCallback, useEffect, useMemo } from 'react';
import React from 'react';
import { ActionEventEmitter, ActionEventModule } from 'mistica-react-native';
import { generateEventHash } from '../utils/event-hash';

interface MisticaTextInputProps extends TextInputProps {
  style?: ViewStyle; // Propriedade customizada para estilos
  inputText?: string;
  inputCounterEnabled?: boolean;
  inputMaxLength?: number;
  inputAutofillEnabled?: boolean;
  type?: 'default' | 'password' | 'email' | 'phoneNumber' | 'dropdown';
  name: string;
}

interface TextInputPropsComponent extends Omit<MisticaTextInputProps, 'name'> {}

const MisticaTextInputName = 'MisticaTextInput';

const MisticaTextInput =
  UIManager.getViewManagerConfig(MisticaTextInputName) != null
    ? requireNativeComponent<MisticaTextInputProps>(MisticaTextInputName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

const TextInput = (props: TextInputPropsComponent) => {
  const { onChangeText } = props;

  const handleChangeText = useCallback(
    ({ text }: any) => {
      onChangeText && onChangeText(text);
    },
    [onChangeText]
  );

  const componentName = useMemo(
    () => generateEventHash(MisticaTextInputName),
    []
  );

  // Crie uma referência memoizada para o componente Button
  const MemoizedTextInput = useMemo(
    () => <MisticaTextInput {...props} name={componentName} />,
    [componentName, props] // Nenhuma dependência, o componente Button só será renderizado uma vez
  );

  useEffect(() => {
    // Atualiza lista de eventos suportados
    ActionEventModule.updateSupportedEvents(componentName);
    // Listener para o evento onPress enviado do lado nativo
    const onChangeTextListener = ActionEventEmitter.addListener(
      componentName,
      handleChangeText
    );
    // Remove o ouvinte de eventos quando o componente é desmontado
    return () => {
      onChangeTextListener.remove();
    };
  }, [componentName, handleChangeText]);

  return MemoizedTextInput;
};

export { TextInput };
