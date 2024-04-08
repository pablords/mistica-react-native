import Foundation
import UIKit
import Mistica
import os.log


private let log = OSLog(subsystem: Bundle.main.bundleIdentifier!, category: "MisticaButtonManager")

@objc(MisticaButtonManager)
class ButtonManager: RCTViewManager {

  override func view() -> (MisticaButton) {
    return MisticaButton()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}




class MisticaButton: UIView {
    
    var button: Button!
    
    
    var title: String? {
        didSet {
            // Verifica se o botão já foi inicializado antes de configurar o título
            guard let button = button else {
                return
            }
          button.title = "Teste"
        }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        os_log("Criando MisticaButton", log: log, type: .info)
        MisticaConfig.brandStyle = .vivo
        // Inicializa o botão
        button = Button()
        button.title = "Teste"
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
            os_log("Botão Pressionado", log: log, type: .info)
//            let actionEventModule = ActionEventModule()
//            actionEventModule.sendEvent(eventName: "onPress")
              // Você pode passar dados para o JavaScript se necessário
            ActionEventModuleManager.emmiter.sendEvent(withName: "onPress", body: ["TESTE BOTAO"])
            onPress([:])
        }

    }
    
    
    // Função de callback onPress que pode ser definida no JavaScript
    @objc var onPress: RCTBubblingEventBlock?
    
}



