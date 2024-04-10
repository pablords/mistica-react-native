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
        os_log("inputFieldTextDidChange %@", log: log, type: .info, params)
        ActionEventModuleManager.shared?.emitEvent(withName: eventName, body: params)
    }
    
//    func inputFieldShouldBeginEditing(_ field: Mistica.InputField) -> Bool {
//        os_log("inputFieldShouldBeginEditing", log: log, type: .info)
//       return true
//    }
//    
//    func inputFieldShouldReturn(_ field: Mistica.InputField) -> Bool {
//        os_log("inputFieldShouldReturn", log: log, type: .info)
//        return true
//    }
//    func inputField(_ field: Mistica.InputField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool {
//        return true
//    }
    
    func inputFieldDidBeginEditing(_ field: Mistica.InputField) {
        os_log("inputFieldDidBeginEditing", log: log, type: .info)
    }
    
    func inputFieldDidEndEditing(_ field: Mistica.InputField) {
        os_log("inputFieldDidEndEditing", log: log, type: .info)
    }
    
    func inputField(_ field: Mistica.InputField, didTapLeadingButton button: UIButton) {
        os_log("field", log: log, type: .info)
    }
    
    func inputField(_ field: Mistica.InputField, didTapTraillingButton button: UIButton) {
        os_log("field", log: log, type: .info)
    }
    
    func inputFieldDidUpdateState(_ field: Mistica.InputField) {
        os_log("inputFieldDidUpdateState", log: log, type: .info)
    }
    
    func inputFieldShouldLayout(_ field: Mistica.InputField) {
        os_log("inputFieldShouldLayout", log: log, type: .info)
    }
    

    
    @objc var eventName: String = ""

    // Text
    @objc var text: String? {
        get { return textField.text }
        set { textField.text = newValue }
    }

    // Placeholder
    @objc var placeholder: String? {
        get { return textField.placeholderText }
        set { textField.placeholderText = newValue }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        MisticaConfig.brandStyle = .vivo
        setupTextField()
    }
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        setupTextField()
    }
    
    private func setupTextField() {
        textField = InputField(style: .email)
        textField.delegate = self // Defina-se como delegado do textField
        addSubview(textField)
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        textField.frame = bounds
    }

    
}




