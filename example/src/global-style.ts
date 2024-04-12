import { Platform } from 'react-native';
import { Brand } from '../../src/types';
import {
  MisticaGlobalStyles,
  MisticaNavigationBar,
} from 'mistica-react-native';

if (Platform.OS == 'ios') {
  MisticaGlobalStyles.configureBrandStyle(Brand.VIVO_NEW);
  MisticaNavigationBar.applyMisticaStyle();
}
