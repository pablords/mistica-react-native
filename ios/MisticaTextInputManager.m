
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(MisticaTextInputManager, RCTViewManager)

// Propriedade title que pode ser definida no JavaScript
RCT_EXPORT_VIEW_PROPERTY(eventName, NSString)

// Método onPress que pode ser chamado no JavaScript
//RCT_EXTERN_METHOD(onPress:(NSString *)eventName)

@end
