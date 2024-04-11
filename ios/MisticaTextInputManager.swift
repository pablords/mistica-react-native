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


class MisticaTextInput: UIView, InputFieldDelegate {
    var textField: InputField!
    
    func inputFieldTextDidChange(_ field: Mistica.InputField) {
        // Crie um dicionário para armazenar os parâmetros
        var params = [String: Any]()
        // Adicione o texto ao dicionário
        params["text"] = field.text
        os_log("%@ - %@: %@", log: log, type: .info, name, "inputFieldTextDidChange", params)
        ActionEventModuleManager.shared?.emitEvent(withName: name, body: params)
    }
    
    func inputFieldShouldBeginEditing(_ field: Mistica.InputField) -> Bool {
        os_log("%@ - inputFieldShouldBeginEditing", log: log, type: .info, name)
       return true
    }
    
    func inputFieldShouldReturn(_ field: Mistica.InputField) -> Bool {
        os_log("%@ - inputFieldShouldReturn", log: log, type: .info, name)
        return true
    }
    
    func inputField(_ field: Mistica.InputField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool {
        os_log("%@ - shouldChangeCharactersIn", log: log, type: .info, name)
        return true
    }
    
    func inputFieldDidBeginEditing(_ field: Mistica.InputField) {
        os_log("%@ - inputFieldDidBeginEditing", log: log, type: .info, name)
    }
    
    func inputFieldDidEndEditing(_ field: Mistica.InputField) {
        os_log("%@ - inputFieldDidEndEditing", log: log, type: .info, name)
    }
    
    func inputField(_ field: Mistica.InputField, didTapLeadingButton button: UIButton) {
        os_log("%@ - didTapLeadingButton", log: log, type: .info, name)
    }
    
    func inputField(_ field: Mistica.InputField, didTapTraillingButton button: UIButton) {
        os_log("%@ - didTapTraillingButton", log: log, type: .info, name)
    }
    
    func inputFieldDidUpdateState(_ field: Mistica.InputField) {
        os_log("%@ - inputFieldDidUpdateState", log: log, type: .info, name)
    }
    
    func inputFieldShouldLayout(_ field: Mistica.InputField) {
        os_log("%@ - inputFieldShouldLayout", log: log, type: .info, name)
    }
    

    
    @objc var name: String = "" {
        didSet {
            os_log("componentName: %@", log: log, type: .info, name)
        }
    }
    
    @objc var text: String = "" {
        didSet {
            textField.text = text
            os_log("%@ - %@: %@", log: log, type: .info, name, "text", text)
        }
    }
    
    @objc var placeholder: String = "" {
        didSet {
            textField.placeholderText = placeholder
            os_log("%@ - %@: %@", log: log, type: .info, name, "placeholder", placeholder)
        }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupTextField()
    }
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        setupTextField()
    }
    
    private func setupTextField() {
        textField = InputField()
        textField.delegate = self // Defina-se como delegado do textField
        addSubview(textField)
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        textField.frame = bounds
    }
    
    @objc var type: String? {
         didSet {
             guard let type = type else { return }
             os_log("%@ - %@: %@", log: log, type: .info, name, "type", type)
             // Converte o tipo de teclado do React Native para o correspondente do iOS
             let iosKeyboardType = convertType(from: type)
             textField.style = iosKeyboardType
         }
     }
    
    private func convertType(from keyboardType: String) -> InputField.Style {
        switch keyboardType {
        case "default": return .default
        case "phoneNumber": return .phoneNumber
        case "email": return .email
//        case "password": return .password
        case "dropdown": return .dropdown
        default: return .default
        }
    }

    
}




