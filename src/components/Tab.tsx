import {
  requireNativeComponent,
  UIManager,
  type ViewStyle,
  type ViewProps,
} from 'react-native';
import { LINKING_ERROR } from '../utils/errors';
import { useEffect, useMemo } from 'react';
import React from 'react';
import { generateEventHash } from '../utils/event-hash';
import { ActionEventEmitter, ActionEventModule } from 'mistica-react-native';

type TabItemProp = {
  title: string;
  icon: string;
};

interface MisticaTabProps extends ViewProps {
  style?: ViewStyle; // Propriedade customizada para estilos
  name?: string;
  items?: TabItemProp[];
}

const MisticaTabName = 'MisticaTab';
const MisticaTab =
  UIManager.getViewManagerConfig(MisticaTabName) != null
    ? requireNativeComponent<MisticaTabProps>(MisticaTabName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

const Tab = ({ ...props }: MisticaTabProps) => {
  const componentName = useMemo(() => generateEventHash(MisticaTabName), []);
  // Crie uma referência memoizada para o componente Button
  const MemoizedTab = useMemo(
    () => <MisticaTab {...props} name={componentName} />,
    [componentName, props] // Nenhuma dependência, o componente Button só será renderizado uma vez
  );

  useEffect(() => {
    // Atualiza lista de eventos suportados
    ActionEventModule.updateSupportedEvents(componentName);
    // Listener para o evento onPress enviado do lado nativo
    const onPressListener = ActionEventEmitter.addListener(
      componentName,
      () => {}
    );
    // Remove o ouvinte de eventos quando o componente é desmontado
    return () => {
      onPressListener.remove();
    };
  }, [componentName]);

  return MemoizedTab;
};

export { Tab };
