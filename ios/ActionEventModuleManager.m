
// ReactNativeModule.m


#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(ActionEventModuleManager, RCTEventEmitter)

RCT_EXTERN_METHOD(updateSupportedEvents:(NSString *)event)

@end
