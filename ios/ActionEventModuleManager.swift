import Foundation
import React // Certifique-se de importar o módulo React


@objc(ActionEventModuleManager)
open class ActionEventModuleManager: RCTEventEmitter {
  
        static var shared:ActionEventModuleManager?
        
        private var supportedEventNames: Set<String> = ["onPress"]
        private var hasAttachedListener = false
        
        // Permite que uma instância compartilhada do EventEmitter evite a inicialização sem o RNBridge
        // Sem esta etapa, você encontrará erros ao falar sobre uma ponte perdida
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
        
         // Estas funções garantem que haja um ouvinte anexado para que os eventos sejam
        //enviado somente quando um listener está anexado
        open override func startObserving() {
            hasAttachedListener = true
        }
    
        open override func stopObserving() {
            hasAttachedListener = false
        }
        
         // Deve retornar um array dos eventos suportados. Quaisquer eventos não suportados gerarão erros
        // se eles forem passados para `sendEvent`
        open override func supportedEvents() -> [String] {
            return Array(supportedEventNames)
        }
        
         // Permite o envio de eventos suportados e adiciona proteções para quando não há ouvintes
        // está anexado ou o evento especificado não é um evento suportado
        func emitEvent(withName name: String, body: Any!) {
            if hasAttachedListener && supportedEventNames.contains(name) {
                sendEvent(withName: name, body: body)
            }
        }
}





