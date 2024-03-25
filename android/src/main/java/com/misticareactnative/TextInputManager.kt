package com.misticareactnative

import android.text.Editable
import android.text.TextWatcher
import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.telefonica.mistica.button.Button
import com.telefonica.mistica.input.TextInput

class TextInputManager : SimpleViewManager<TextInput>() {

    companion object {
        const val REACT_CLASS = "TextInput"
    }

    override fun getName(): String {
        return REACT_CLASS // Nome pelo qual o componente será referenciado no JavaScript do
        // React Native
    }

    override fun createViewInstance(context: ThemedReactContext): TextInput {
        return TextInput(context) // Cria uma nova instância do componente de botão Mistica
    }

    @ReactProp(name = "eventName")
    fun setOnTextChanged(view: TextInput, eventName: String) {
      try{
        Log.d("setOnTextChanged", eventName)

        view.addTextChangedListener(object : TextWatcher {
          override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {
            // Nada a fazer aqui
          }

          override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
            Log.d("CharSequence", s.toString())
            val reactContext = view.context as ReactContext
            val eventEmitter = reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            val params: WritableMap = Arguments.createMap()
            params.putString("text", s?.toString())
            eventEmitter.emit(eventName, params)
          }

          override fun afterTextChanged(s: Editable?) {
            // Nada a fazer aqui
          }
        })

      } catch (e: Exception) {
        Log.e("CustomButton", "Erro ao chamar sendPressEvent", e)
      }
    }


    @ReactProp(name = "inputText")
    fun setInputText(textInput: TextInput, inputText: String) {
        Log.d("inputText", inputText)
        textInput.text = inputText
    }

    @ReactProp(name = "inputCounterEnabled")
    fun setInputCounterEnabled(textInput: TextInput, inputCounterEnabled: Boolean) {
        Log.d("inputCounterEnabled", inputCounterEnabled.toString())
        textInput.setCounterEnabled(inputCounterEnabled)
    }

    @ReactProp(name = "inputMaxLength")
    fun setInputMaxLength(textInput: TextInput, inputMaxLength: Int) {
        Log.d("inputMaxLength", inputMaxLength.toString())
        textInput.setMaxLength(inputMaxLength)
    }

    @ReactProp(name = "inputAutofillEnabled")
    fun setInputAutofillEnabled(textInput: TextInput, inputAutofillEnabled: Boolean) {
        Log.d("inputAutofillEnabled", inputAutofillEnabled.toString())
        textInput.setAutofillEnabled(inputAutofillEnabled)
    }
}
