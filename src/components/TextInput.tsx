import {
  requireNativeComponent,
  UIManager,
  type ViewStyle,
  type TextInputProps,
} from 'react-native';
import { LINKING_ERROR } from '../utils/errors';
import { useCallback, useEffect } from 'react';
import React from 'react';
import {
  ActionEventEmitter,
  ActionEventModuleManager,
} from 'mistica-react-native';
import { generateEventId } from '../utils/event-id';

interface MisticaTextInputProps extends TextInputProps {
  style?: ViewStyle; // Propriedade customizada para estilos
  inputText?: string;
  inputCounterEnabled?: boolean;
  inputMaxLength?: number;
  inputAutofillEnabled?: boolean;
  eventName: string;
}

interface TextInputPropsComponent
  extends Omit<MisticaTextInputProps, 'eventName'> {}

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

  const eventName = generateEventId(onChangeText?.name || '');

  useEffect(() => {
    // Atualiza lista de eventos suportados
    ActionEventModuleManager.updateSupportedEvents(eventName);
    // Listener para o evento onPress enviado do lado nativo
    const onChangeTextListener = ActionEventEmitter.addListener(
      eventName,
      handleChangeText
    );
    // Remove o ouvinte de eventos quando o componente é desmontado
    return () => {
      onChangeTextListener.remove();
    };
  }, [eventName, handleChangeText]);

  return <MisticaTextInput {...props} eventName={eventName} />;
};

export { TextInput };
