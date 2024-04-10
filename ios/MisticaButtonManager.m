
#import <React/RCTViewManager.h>
#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(MisticaButtonManager, RCTViewManager)

// Propriedade title que pode ser definida no JavaScript
RCT_EXPORT_VIEW_PROPERTY(name, NSString)
RCT_EXPORT_VIEW_PROPERTY(title, NSString)

//// Método onPress que pode ser chamado no JavaScript
//RCT_EXTERN_METHOD(buttonPressed)

@end
