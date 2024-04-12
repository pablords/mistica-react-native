// MisticaNavigationBarManager.swift

import Foundation
import UIKit

@objc(MisticaNavigationBarManager)
class MisticaNavigationBarManager: NSObject {
    // Método para aplicar o estilo do Mistica ao UINavigationBar
    @objc func applyMisticaStyle() {
        DispatchQueue.main.async {
            UINavigationBar.appearance().applyMisticaStyle()
        }
    }
}

