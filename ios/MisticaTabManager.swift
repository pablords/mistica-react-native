import Foundation
import UIKit
import Mistica
import os.log
import React

private let log = OSLog(subsystem: Bundle.main.bundleIdentifier!, category: "MisticaTabsManager")


@objc(MisticaTabManager)
class MisticaTabManager: RCTViewManager {

    override func view() -> (MisticaTab) {
        return MisticaTab()
    }

    @objc override static func requiresMainQueueSetup() -> Bool {
        return false
    }
}

class MisticaTab: UIView {

    var tab: TabsView!
    

    @objc var name: String = "" {
        didSet {
            os_log("componentName: %@", log: log, type: .info, name)
        }
    }

    @objc var items: NSArray = [] {
        didSet {
            os_log("%@ - %@: %@", log: log, type: .info, name, "items", items)
            updateTabItems()
        }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupTabsView()
    }

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func layoutSubviews() {
        super.layoutSubviews()
        tab.frame = bounds
    }

    private func setupTabsView() {
        tab = TabsView(tabItems: [])
        addSubview(tab)
    }



    private func updateTabItems() {
        let tabItems = convertToTabItems(from: items)
        tab.reload(with: tabItems)
    }

    private func from(dictionary: NSDictionary) -> TabItem? {
        os_log("%@ - %@: %@", log: log, type: .info, name, "dictionary", dictionary)
        guard let title = dictionary["title"] as? String else {
            return nil
        }
        guard let iconName = dictionary["icon"] as? String else {
            return nil
        }
        guard let icon = UIImage(systemName: iconName) else {
            return nil
        }
        let accessibilityIdentifier = dictionary["accessibilityIdentifier"] as? String
        return TabItem(title: title, icon: icon, accessibilityIdentifier: accessibilityIdentifier)
    }

    private func convertToTabItems(from array: NSArray) -> [TabItem] {
        var tabItems: [TabItem] = []
        for item in array {
            if let dictionary = item as? NSDictionary, let tabItem = from(dictionary: dictionary) {
                tabItems.append(tabItem)
            }
        }
        return tabItems
    }
}

