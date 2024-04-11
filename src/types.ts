export interface GlobalStyleProps {
  configureBrandStyle: (brand: BRAND) => void;
}

export interface ActionEventModuleProps {
  updateSupportedEvents: (eventName: string) => void;
}

export enum BRAND {
  VIVO = 'vivo',
  O2 = 'o2',
  TELEFONICA = 'telefonica',
  MOVISTAR = 'movistar',
  BLAU = 'blau',
  TU = 'tu',
  VIVO_NEW = 'vivoNew',
}
