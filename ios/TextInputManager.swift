import Foundation
import UIKit
import MaterialComponents.MaterialTextControls_FilledTextAreas
import MaterialComponents.MaterialTextControls_FilledTextFields
import MaterialComponents.MaterialTextControls_OutlinedTextAreas
import MaterialComponents.MaterialTextControls_OutlinedTextFields


@objc(TextInputManager)
class TextInputManager: RCTViewManager {

  override func view() -> (TextInput) {
    return TextInput()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}




class TextInput: UIView {
    
    var textField: MDCFilledTextField!
    
    var placeholder: String? {
        didSet {
            // Verifica se o botão já foi inicializado antes de configurar o título
            guard let textField = textField else {
                return
            }
            textField.placeholder = "555-555-5555"
        }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        
        let textField = MDCFilledTextField(frame: frame)
        let blueColor = UIColor.blue
        textField.setTextColor(blueColor, for: .normal)
        textField.label.text = "Phone number"
        textField.placeholder = "555-555-5555"
        textField.leadingAssistiveLabel.text = "This is helper text"
        textField.sizeToFit()
        addSubview(textField)
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    

    
}


