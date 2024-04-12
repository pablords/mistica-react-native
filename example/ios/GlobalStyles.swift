
import Mistica



@objc(GlobalStyles)
class GlobalStyles: NSObject {
  @objc static func configure() {
    MisticaConfig.brandStyle = .vivo
  }
  
}

