import Foundation
import UIKit
import Mistica
import os.log


private let log = OSLog(subsystem: Bundle.main.bundleIdentifier!, category: "MisticaTextInputManager")


@objc(MisticaTextInputManager)
class MisticaTextInputManager: RCTViewManager {

  override func view() -> (MisticaTextInput) {
    return MisticaTextInput()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}




class MisticaTextInput: UIView {
    
    var textField: InputField!
    
    
    var placeholderText: String? {
        didSet {
            // Verifica se o botão já foi inicializado antes de configurar o título
            guard let textField = textField else {
                return
            }
            textField.placeholderText = "Email"
        }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        MisticaConfig.brandStyle = .vivo
        textField = InputField(style: .email)
        textField.placeholderText = "Email"
        textField.validationStrategy = EmailInputFieldValidationStrategy(failureMessage: "Email invalido")
        textField.validate() // sets the state to .invalid
        textField.sizeToFit()
        addSubview(textField)
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        os_log("Criando MisticaTextInput", log: log, type: .info)
        
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
        ActionEventModuleManager.emmiter.sendEvent(withName: "onChange", body: [text])
    }
    

    
}


