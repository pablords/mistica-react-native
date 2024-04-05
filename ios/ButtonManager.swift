import Foundation
import UIKit
import MaterialComponents.MaterialButtons


@objc(ButtonManager)
class ButtonManager: RCTViewManager {

  override func view() -> (Button) {
    return Button()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}




class Button: UIView {
    
    var button: MDCButton!
    
    var title: String? {
        didSet {
            // Verifica se o botão já foi inicializado antes de configurar o título
            guard let button = button else {
                return
            }
            button.setTitle(title, for: .normal)
        }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        
        // Inicializa o botão
        button = MDCButton()
        let blueColor = UIColor.blue
        button.setBackgroundColor(blueColor)
        button.setTitle("TESTE", for: .normal)
        button.addTarget(self, action: #selector(buttonPressed), for: .touchUpInside)
        
        // Adiciona o botão à visualização
        addSubview(button)
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        
        // Define o tamanho e a posição do botão quando a visualização é redimensionada
        button.frame = bounds
    }
    
    @objc func buttonPressed() {
        print("Button pressed")
        // Chame a função de callback onPress se ela estiver definida
        if let onPress = onPress {
            onPress([:]) // Você pode passar dados para o JavaScript se necessário
        }
    }
    
    // Função de callback onPress que pode ser definida no JavaScript
    @objc var onPress: RCTBubblingEventBlock?
    
}


