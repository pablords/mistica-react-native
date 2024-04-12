export interface MisticaGlobalStylesProps {
  configureBrandStyle: (brand: Brand) => void;
}
export interface ActionEventModuleProps {
  updateSupportedEvents: (eventName: string) => void;
}
export interface MisticaNavigationBarProps {
  applyMisticaStyle: () => void;
}

export enum Brand {
  VIVO = 'vivo',
  O2 = 'o2',
  TELEFONICA = 'telefonica',
  MOVISTAR = 'movistar',
  BLAU = 'blau',
  TU = 'tu',
  VIVO_NEW = 'vivoNew',
}
