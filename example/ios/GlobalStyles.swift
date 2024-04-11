
import Mistica



@objc(GlobalStyles)
class GlobalStyles: NSObject {
  
  
  @objc static func configure() {
    MisticaConfig.brandStyle = .vivo
  }
  
  @objc func configureBrandStyle(_ brandStyle: String) {
    if(brandStyle != ""){
      let style = convertBrand(from: brandStyle)
      MisticaConfig.brandStyle = style
    }
  }
  
  private func convertBrand(from brandStyle: String) -> BrandStyle {
      switch brandStyle {
      case "vivo": return .vivo
      case "o2": return .o2
      case "telefonica": return .telefonica
      case "movistar": return .movistar
      case "blau": return .blau
      case "tu": return .tu
      case "vivoNew": return .vivoNew
      default: return .vivo
      }
  }
}

