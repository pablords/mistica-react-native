import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'mistica-react-native' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type MisticaReactNativeProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'MisticaReactNativeView';

export const MisticaReactNativeView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<MisticaReactNativeProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
