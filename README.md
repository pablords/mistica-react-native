# mistica-react-native

framework that contains reusable UI components and utilities

## Installation

```sh
npm install mistica-react-native
```

## Usage

```js
import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput, ActionEventEmitter } from 'mistica-react-native';

export default function App() {

  const [primaryValue, setPrimaryValueValue] = useState('');

  const buttonPrimaryEvent = useRef<string>('buttonPrimaryEvent');
  const textPrimaryEvent = useRef<string>('textPrimaryEvent');


  const handleChangePrimaryValue = (text: string) => {
    setPrimaryValueValue(text);
  };


  const handlePress = (eventName: string) => {
    Alert.alert(eventName);
  };

  useEffect(() => {
    // Assinando o evento emitido pelo módulo nativo
    const subscriptionPrimaryEvent = ActionEventEmitter.addListener(
      buttonPrimaryEvent.current,
      () => {
        // Aqui você pode adicionar a lógica desejada quando o botão é pressionado no lado nativo
        handlePress(buttonPrimaryEvent.current);
      }
    );

    // Assinando o evento emitido pelo módulo nativo
    const subscriptionPrimaryTextEvent = ActionEventEmitter.addListener(
      textPrimaryEvent.current,
       // Aqui você pode adicionar a lógica desejada quando o botão é pressionado no lado nativo
      ({ text }) => {
        handleChangePrimaryValue(text);
      }
    );


    return () => {
      // Aqui removemos os eventos
      subscriptionPrimaryEvent.remove();
      subscriptionPrimaryTextEvent.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          position: 'absolute',
          top: 100,
          left: 15,
          right: 0,
          bottom: 0,
          width: '90%',
        }}
        inputText={primaryValue}
        eventName={textPrimaryEvent.current}
      />

      <Text
        style={{
          position: 'absolute',
          fontSize: 15,
          top: 170,
          left: 40,
          right: 0,
          bottom: 0,
        }}
      >
        {primaryValue &&
          `Event receive in react native context ${textPrimaryEvent.current} - (${primaryValue})`}
      </Text>

      <Button
        style={{
          width: 300,
          height: 50,
          position: 'absolute',
          bottom: 20,
          left: 35,
          marginBottom: 60,
        }}
        text="Primary"
        eventName={buttonPrimaryEvent.current}
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

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
