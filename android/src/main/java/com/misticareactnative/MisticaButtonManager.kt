package com.misticareactnative

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.telefonica.mistica.button.Button

class MisticaButtonManager : SimpleViewManager<Button>() {

    companion object {
        const val REACT_CLASS = "MisticaButton"
    }

    override fun getName(): String {
        return REACT_CLASS // Nome pelo qual o componente será referenciado no JavaScript do
        // React Native
    }

    override fun createViewInstance(context: ThemedReactContext): Button {
        // val themedContext = applyTheme(context, R.style.AppTheme)
        val button = Button(context)
        button.setOnClickListener {
            val buttonId = button.id
            val buttonEventModule = context.getNativeModule(ButtonEventModule::class.java)
            buttonEventModule?.sendPressEvent(buttonId)
        }
        return button
    }

    @ReactProp(name = "text")
    fun setText(view: Button, text: String?) {
        view.text = text ?: ""
    }

    // @ReactProp(name = "isLoading")
    // fun setIsLoading(view: Button, isLoading: Boolean?) {
    //     if (isLoading !== null) {
    //         if (isLoading == true) {
    //             view.showLoading()
    //         } else if (isLoading == false) {
    //             view.hideLoading()
    //         }
    //     }
    // }

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
