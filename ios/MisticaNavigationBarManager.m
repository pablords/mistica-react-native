
// MisticaNavigationBarManagerBridge.m

#import "React/RCTBridgeModule.h"
#import "React/RCTLog.h"


@interface RCT_EXTERN_MODULE(MisticaNavigationBarManager, NSObject)

RCT_EXTERN_METHOD(applyMisticaStyle)

+ (BOOL)requiresMainQueueSetup {
  return YES;
}

@end
