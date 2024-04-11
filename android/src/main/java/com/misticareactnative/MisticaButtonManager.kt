package com.misticareactnative

import android.util.Log
import com.facebook.react.bridge.*
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.telefonica.mistica.button.Button

class MisticaButtonManager : SimpleViewManager<Button>() {

    companion object {
        const val REACT_CLASS = "MisticaButton"
    }

    var componentName: String = ""

    override fun getName(): String {
        Log.d("MisticaButtonManager", "componentName: $this.componentName")
        return REACT_CLASS // Nome pelo qual o componente será referenciado no JavaScript do
        // React Native
    }


    override fun createViewInstance(context: ThemedReactContext): Button {
        return  Button(context)
    }

    @ReactProp(name = "title")
    fun setText(view: Button, title: String = "") {
        Log.d("MisticaButtonManager", "$this.componentName - title: $title")
        view.text = title
    }

    @ReactProp(name = "name")
    fun setOnClickListener(view: Button, eventName: String) {
      try{
        this.componentName = name
        view.setOnClickListener {
          Log.d("MisticaButtonManager", "$this.componentName - setOnClickListener")
          val context = view.context as ReactContext
          val actionEventModule = context.getNativeModule(ActionEventModule::class.java)
          actionEventModule?.sendEvent(eventName, null)
        }
      } catch (e: Exception) {
        Log.d("MisticaButtonManager", "$this.componentName - error: $e")
      }
    }


     @ReactProp(name = "insetTop")
     fun setInsetTop(view: Button, insetTop: Int) {
        Log.d("MisticaButtonManager", "$this.componentName - insetTop: $insetTop.toString()")
        view.setPadding(view.paddingLeft, insetTop, view.paddingRight, view.paddingBottom)
     }

     @ReactProp(name = "insetBottom")
     fun setInsetBottom(view: Button, insetBottom: Int) {
      Log.d("MisticaButtonManager", "$this.componentName - insetBottom: insetBottom.toString()")
      view.setPadding(view.paddingLeft, view.paddingTop, view.paddingRight, insetBottom)
     }

     @ReactProp(name = "paddingStart")
     fun setPaddingStart(view: Button, paddingStart: Int) {
        Log.d("MisticaButtonManager", "$this.componentName - paddingStart: paddingStart.toString()")
         view.setPadding(paddingStart, view.paddingTop, view.paddingRight, view.paddingBottom)
     }
}
