
// ReactNativeModule.m

#import "Foundation/Foundation.h"
#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(ActionEventModuleManager, RCTEventEmitter)

RCT_EXTERN_METHOD(supportedEvents)

@end
