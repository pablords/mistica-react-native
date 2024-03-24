package com.misticareactnative

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.telefonica.mistica.input.TextInput

class MisticaTextInputManager : SimpleViewManager<TextInput>() {

    companion object {
        const val REACT_CLASS = "MisticaTextInput"
    }

    override fun getName(): String {
        return REACT_CLASS // Nome pelo qual o componente será referenciado no JavaScript do
        // React Native
    }

    override fun createViewInstance(context: ThemedReactContext): TextInput {
        return TextInput(context) // Cria uma nova instância do componente de botão Mistica
    }


    @ReactProp(name = "inputText")
    fun setInputText(textInput: TextInput, inputText: String?) {
        textInput.text = inputText
    }

    @ReactProp(name = "inputCounterEnabled")
    fun setInputCounterEnabled(textInput: TextInput, inputCounterEnabled: Boolean) {
        textInput.setCounterEnabled(inputCounterEnabled)
    }

    @ReactProp(name = "inputMaxLength")
    fun setInputMaxLength(textInput: TextInput, inputMaxLength: Int) {
        textInput.setMaxLength(inputMaxLength)
    }

    @ReactProp(name = "inputAutofillEnabled")
    fun setInputAutofillEnabled(textInput: TextInput, inputAutofillEnabled: Boolean) {
        textInput.setAutofillEnabled(inputAutofillEnabled)
    }
}
