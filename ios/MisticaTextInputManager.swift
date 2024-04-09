import Foundation
import UIKit
import Mistica
import os.log
import React


private let log = OSLog(subsystem: Bundle.main.bundleIdentifier!, category: "MisticaTextInputManager")


@objc(MisticaTextInputManager)
class MisticaTextInputManager: RCTViewManager {

  override func view() -> (MisticaTextInput) {
    return MisticaTextInput()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}




class MisticaTextInput: UIView {
    
    var textField: InputField!
    var actionEventModuleManager = ActionEventModuleManager()
    
    @objc var placeholder: String = "" {
        didSet {
            os_log("Adicionado propiedade placeholder %@", log: log, type: .info, placeholder)
            // Verifica se o botão já foi inicializado antes de configurar o título
            guard let textField = textField else {
                return
            }
            textField.placeholderText = placeholder
        }
    }
    
    @objc var eventName: String = "" {
       didSet {
           os_log("Adicionado propiedade eventName %@", log: log, type: .info, eventName)
           // Verifica se o botão já foi inicializado antes de configurar o título
           guard let textField = textField else {
               return
           }
           if(eventName != ""){
               ActionEventModuleManager.shared?.updateSupportedEvents(eventName)
           }
       }
     }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        os_log("Criando MisticaTextInput", log: log, type: .info)
        MisticaConfig.brandStyle = .vivo
        textField = InputField()
        textField.style = .default
        textField.sizeToFit()
        addSubview(textField)
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        // Define o tamanho e a posição do botão quando a visualização é redimensionada
        textField.frame = bounds
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    
    @objc func textFieldDidChange(_ textField: UITextField) {
        // Enviar o texto digitado para o ActionEventModule
        guard let text = textField.text else {
            return
        }
        
        print("TESTE", text)
        os_log("Text %@", log: log, type: .info, text)
//        ActionEventModuleManager.emmitter.sendEvent(withName: eventName, body: [text])
    }
    

    
}


