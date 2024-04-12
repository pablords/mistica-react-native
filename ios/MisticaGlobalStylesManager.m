//
//  GlobalStyles.m
//  MisticaReactNativeExample
//
//  Created by pablo santos on 11/04/24.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"



@interface RCT_EXTERN_MODULE(MisticaGlobalStylesManager, NSObject)

RCT_EXTERN_METHOD(configureBrandStyle:(NSString *)brandStyle)

+ (BOOL)requiresMainQueueSetup {
  return YES;
}

@end

