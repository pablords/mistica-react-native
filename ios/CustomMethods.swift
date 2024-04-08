//
//  CustomMethods.swift
//  mistica-react-native
//
//  Created by pablo santos on 08/04/24.
//

import Foundation


@objc(CustomMethods) class CustomMethods: NSObject{
    @objc static func requiresMainQueueSetup() -> Bool {
      return true
    }
    
    @objc public func handlePress(_ param: String){
        print(param)
        ActionEventModuleManager.emmiter.sendEvent(withName: "onPress", body: [param])
    }
}
