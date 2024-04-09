package com.misticareactnative

import android.text.Editable
import android.text.TextWatcher
import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableMap
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
    Log.d("MisticaTextInputManager", "Criando MisticaTextInput")
    return TextInput(context) // Cria uma nova instância do componente de botão Mistica
  }

  @ReactProp(name = "eventName")
  fun setOnTextChanged(view: TextInput, eventName: String) {
    try {
      Log.d("MisticaTextInputManager - eventName", eventName)

      view.addTextChangedListener(
          object : TextWatcher {
            override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {
              // Nada a fazer aqui
            }

            override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
              Log.d("CharSequence", s.toString())

              val context = view.context as ReactContext
              val actionEventModule = context.getNativeModule(ActionEventModule::class.java)

              val params: WritableMap = Arguments.createMap()
              params.putString("text", s?.toString())
              actionEventModule?.sendEvent(eventName, params)
            }

            override fun afterTextChanged(s: Editable?) {
              // Nada a fazer aqui
            }
          }
      )
    } catch (e: Exception) {
      Log.e("MisticaTextInputManager", "Erro ao chamar sendPressEvent", e)
    }
  }

  @ReactProp(name = "inputText")
  fun setInputText(textInput: TextInput, inputText: String) {
    Log.d("MisticaTextInputManager - inputText", inputText)
    textInput.text = inputText
  }

  @ReactProp(name = "placeholder")
  fun setPlaceholder(textInput: TextInput, placeholder: String) {
    Log.d("MisticaTextInputManager - placeholder", placeholder)
    textInput.hint = placeholder
  }

  @ReactProp(name = "inputCounterEnabled")
  fun setInputCounterEnabled(textInput: TextInput, inputCounterEnabled: Boolean) {
    Log.d("MisticaTextInputManager - inputCounterEnabled", inputCounterEnabled.toString())
    textInput.setCounterEnabled(inputCounterEnabled)
  }

  @ReactProp(name = "inputMaxLength")
  fun setInputMaxLength(textInput: TextInput, inputMaxLength: Int) {
    Log.d("MisticaTextInputManager - inputMaxLength", inputMaxLength.toString())
    textInput.setMaxLength(inputMaxLength)
  }

  @ReactProp(name = "inputAutofillEnabled")
  fun setInputAutofillEnabled(textInput: TextInput, inputAutofillEnabled: Boolean) {
    Log.d("MisticaTextInputManager - inputAutofillEnabled", inputAutofillEnabled.toString())
    textInput.setAutofillEnabled(inputAutofillEnabled)
  }
}
