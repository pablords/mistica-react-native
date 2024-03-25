// ButtonEventModule.kt

package com.misticareactnative

import com.facebook.react.bridge.*
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.modules.core.DeviceEventManagerModule

@ReactModule(name = "ActionEventModule")
class ActionEventModule(reactContext: ReactApplicationContext) :
        ReactContextBaseJavaModule(reactContext) {
    private var eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter? = null

    companion object {
      const val REACT_CLASS = "ActionEventModule"
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

    @ReactMethod()
    fun sendEvent(eventName: String) {
        val params: WritableMap = Arguments.createMap()
        // params.putInt("buttonId", buttonId)
        eventEmitter?.emit(eventName, null)
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
