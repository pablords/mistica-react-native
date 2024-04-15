#import <React/RCTViewManager.h>


@interface RCT_EXTERN_MODULE(MisticaTabManager, RCTViewManager)


RCT_EXPORT_VIEW_PROPERTY(name, NSString)
RCT_EXPORT_VIEW_PROPERTY(items, NSArray)


@end

