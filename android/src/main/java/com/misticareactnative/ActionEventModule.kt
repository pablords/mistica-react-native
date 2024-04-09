// ButtonEventModule.kt

package com.misticareactnative

import com.facebook.react.bridge.*
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.modules.core.DeviceEventManagerModule

@ReactModule(name = "ActionEventModuleManager")
class ActionEventModule(reactContext: ReactApplicationContext) :
        ReactContextBaseJavaModule(reactContext) {
    private var eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter? = null
    private var supportedEventNames: MutableList<String> = mutableListOf();

    companion object {
      const val REACT_CLASS = "ActionEventModuleManager"
    }

    override fun getName(): String {
        return REACT_CLASS
    }

    override fun initialize() {
      super.initialize()
      eventEmitter =
        reactApplicationContext.getJSModule(
          DeviceEventManagerModule.RCTDeviceEventEmitter::class.java
        )
    }

    // Método para atualizar os eventos suportados com base na propriedade passada pelo componente
    @ReactMethod
    fun updateSupportedEvents(event: String) {
      supportedEventNames.add(event)
    }

    @ReactMethod
    fun sendEvent(eventName: String, params: WritableMap? = null) {
        eventEmitter?.emit(eventName, params)
    }

    @ReactMethod
    fun addListener(type: String?) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    @ReactMethod
    fun removeListeners(type: Int?) {
        // Keep: Required for RN built in Event Emitter Calls.
    }
}
