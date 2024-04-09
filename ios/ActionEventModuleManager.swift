import Foundation
import React // Certifique-se de importar o módulo React


@objc(ActionEventModuleManager)
open class ActionEventModuleManager: RCTEventEmitter {
  
    static var shared:ActionEventModuleManager?
        
        private var supportedEventNames: Set<String> = ["onPress"]
        private var hasAttachedListener = false
        
        // Allows a shared EventEmitter instance to avoid initializing without the RNBridge
        // Without this step, you'll run into errors talking aobut a missing bridge
        override init() {
            super.init()
            ActionEventModuleManager.shared = self
        }
        
        open override class func requiresMainQueueSetup() -> Bool {
            return false
        }
    
        // Método para atualizar os eventos suportados com base na propriedade passada pelo componente
           @objc func updateSupportedEvents(_ event: String) {
               supportedEventNames.insert(event)
           }
        
        // These functions make sure that there is an attached listener so that events are
        // only sent when a listener is attached
        open override func startObserving() {
            hasAttachedListener = true
        }
    
        open override func stopObserving() {
            hasAttachedListener = false
        }
        
        // Must return an array of the supported events. Any unsupported events will throw errors
        // if they are passed in to `sendEvent`
        open override func supportedEvents() -> [String] {
            return Array(supportedEventNames)
        }
        
        // Allows sending of supported events and adds protections for when either no listeners
        // ar attached or the specified event isn't a supported event
        func emitEvent(withName name: String, body: Any!) {
            if hasAttachedListener && supportedEventNames.contains(name) {
                sendEvent(withName: name, body: body)
            }
        }
}





