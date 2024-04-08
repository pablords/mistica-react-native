import Foundation
import React // Certifique-se de importar o módulo React


@objc(ActionEventModuleManager)
open class ActionEventModuleManager: RCTEventEmitter {
  
    public static var emmiter: RCTEventEmitter!
    
    override init() {
        super.init()
        ActionEventModuleManager.emmiter = self
    }
    
    // Método para retornar uma matriz com os nomes dos eventos suportados
    open override func supportedEvents() -> [String]! {
      return ["onPress", "onChange"] // Defina os nomes dos eventos suportados aqui
    }
}





