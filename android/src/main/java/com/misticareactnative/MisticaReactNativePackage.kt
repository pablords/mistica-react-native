package com.misticareactnative

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import com.misticareactnative.ButtonEventModule
import com.misticareactnative.MisticaTextInputManager
import com.misticareactnative.MisticaButtonManager



class MisticaReactNativePackage : ReactPackage {
  override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
    return listOf(
        ButtonEventModule(reactContext) // Adicione o ButtonEventModule aqui
    )
  }

  override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
    return listOf(MisticaButtonManager(), MisticaTextInputManager())
  }
}
