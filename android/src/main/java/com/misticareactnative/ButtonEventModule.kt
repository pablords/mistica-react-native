// ButtonEventModule.kt

package com.misticareactnative

import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule

class ButtonEventModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private var eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter? = null

    override fun getName(): String {
        return "ButtonEventModule"
    }

    @ReactMethod
    fun sendPressEvent(buttonId: Int) {
        val params: WritableMap? = null
        eventEmitter?.emit("onPress", params)
    }

    override fun initialize() {
        super.initialize()
        eventEmitter = reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
    }

//    fun removeEventListeners() {
//        // Remover os ouvintes de eventos quando necessário
//        eventEmitter?.removeListener("onPress")
//    }
}
