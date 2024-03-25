package com.misticareactnative
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.modules.core.DeviceEventManagerModule

@ReactModule(name = "CustomEventModule")
class GenericEventModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  override fun getName(): String {
    return "CustomEventModule"
  }

  @ReactMethod
  fun handleEvent(eventName: String) {
    // Lógica para manipular o evento recebido do JavaScript
    val responseData = "Response Data for $eventName"

    // Emitir um evento de resposta para o JavaScript
    val eventEmitter = reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
    eventEmitter.emit(eventName, responseData)
  }
}
