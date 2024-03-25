package com.misticareactnative

import android.util.Log
import com.facebook.react.bridge.*
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.telefonica.mistica.button.Button

class ButtonManager : SimpleViewManager<Button>() {

    companion object {
        const val REACT_CLASS = "Button"
    }

    override fun getName(): String {
        return REACT_CLASS // Nome pelo qual o componente será referenciado no JavaScript do
        // React Native
    }

    override fun createViewInstance(context: ThemedReactContext): Button {
        return  Button(context)
    }

    @ReactProp(name = "text")
    fun setText(view: Button, text: String?) {
        view.text = text ?: ""
    }

    @ReactProp(name = "eventName")
    fun setOnClickListener(view: Button, eventName: String) {
      try{
        Log.d("setOnPressListener", eventName)
        view.setOnClickListener {
          val context = view.context as ReactContext
          val actionEventModule = context.getNativeModule(ActionEventModule::class.java)
          actionEventModule?.sendEvent(eventName)
        }
      } catch (e: Exception) {
         Log.e("CustomButton", "Erro ao chamar sendPressEvent", e)
      }
    }


     @ReactProp(name = "insetTop")
     fun setInsetTop(view: Button, insetTop: Int) {
         view.setPadding(view.paddingLeft, insetTop, view.paddingRight, view.paddingBottom)
     }

     @ReactProp(name = "insetBottom")
     fun setInsetBottom(view: Button, insetBottom: Int) {
         view.setPadding(view.paddingLeft, view.paddingTop, view.paddingRight, insetBottom)
     }

     @ReactProp(name = "paddingStart")
     fun setPaddingStart(view: Button, paddingStart: Int) {
         view.setPadding(paddingStart, view.paddingTop, view.paddingRight, view.paddingBottom)
     }
}
