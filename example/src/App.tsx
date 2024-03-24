import React, { useState } from 'react';

import { Alert, StyleSheet, View } from 'react-native';
import { MisticaButton, MisticaTextInput, buttonEventEmitter } from 'mistica-react-native';

export default function App() {

  const [value, setValue] = useState("")
  const [titleText, setTitleText] = useState("Bird's Nest");



  const handleChangeValue = (text: string) => {
    setValue(text)
  }


  const handlePress = () => {
    setTitleText(value);
    // Emitindo um evento quando o botão é pressionado
    buttonEventEmitter.emit('onPress', null);
  };

  // Assinando o evento emitido pelo módulo nativo
  buttonEventEmitter.addListener('onPress', () => {
    console.log('Botão pressionado');
    // Aqui você pode adicionar a lógica desejada quando o botão é pressionado no lado nativo
  });


  return (
    <View style={styles.container}>
      <MisticaTextInput
        style={{
          position: 'absolute',
          top: 100,
          left: 15,
          right: 0,
          bottom: 0,
          width: "90%",
        }}
        inputText={value}
        onChangeText={handleChangeValue}
      />
      <MisticaButton
        style={{
          width: 300,
          height: 50,
          position: "absolute",
          bottom: 20,
          left: 35,
        }}
        text="Meu Botão Mistica"
        onPress={() => Alert.alert("Botao acionado")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
