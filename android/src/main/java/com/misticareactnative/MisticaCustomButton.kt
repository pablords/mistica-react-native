package com.misticareactnative

import android.content.Context
import android.util.AttributeSet
import com.google.android.material.button.MaterialButton
import com.telefonica.mistica.util.setAlpha
import com.facebook.react.bridge.ReactApplicationContext

class MisticaCustomButton : MaterialButton {

    private var onPressListener: (() -> Unit)? = null

    constructor(context: Context) : super(context)

    constructor(context: Context, attrs: AttributeSet?) : super(context, attrs)

    constructor(
            context: Context,
            attrs: AttributeSet?,
            defStyleAttr: Int
    ) : super(context, attrs, defStyleAttr)

    override fun setEnabled(enabled: Boolean) {
        super.setEnabled(enabled)
        setAlpha(enabled)
    }

    init {
        // Configurar o OnClickListener para o botão
        setOnClickListener {
            // Chamar a função de callback onPress quando o botão é pressionado
            onPressListener?.invoke()
        }
    }

    fun setOnPressListener(listener: (() -> Unit)?) {
        onPressListener = listener
    }
}
