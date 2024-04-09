
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(CustomMethods, NSObject)

// Propriedade title que pode ser definida no JavaScript
//RCT_EXPORT_VIEW_PROPERTY(title, NSString)

// Método onPress que pode ser chamado no JavaScript
RCT_EXTERN_METHOD(handlePress:(NSString *)param)

@end

