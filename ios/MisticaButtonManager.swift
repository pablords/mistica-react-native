import Foundation
import UIKit
import Mistica
import os.log
import React

private let log = OSLog(subsystem: Bundle.main.bundleIdentifier!, category: "MisticaButtonManager")

@objc(MisticaButtonManager)
class MisticaButtonManager: RCTViewManager {

  override func view() -> (MisticaButton) {
    return MisticaButton()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}




class MisticaButton: UIButton {
    
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
    
    @objc var eventName: String = "" {
        didSet {
            if(eventName != ""){
                ActionEventModuleManager.shared?.updateSupportedEvents(eventName)
            }
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
        // Define o tamanho e a posição do botão quando a visualização é redimensionada sem isso o componente não é renderizado da forma correta
        button.frame = bounds
    }
    
    // Método de callback que será chamado quando o botão é pressionado
       @objc func buttonPressed() {
           // Emitir evento para o JavaScript
           ActionEventModuleManager.shared?.emitEvent(withName: eventName, body: nil)

       }
    
}



