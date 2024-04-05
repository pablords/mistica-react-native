import React, { useEffect, useRef, useState } from 'react';

import { Alert, StyleSheet, Text, View } from 'react-native';
import { ActionEventEmitter, Button, TextInput } from 'mistica-react-native';

export default function App() {
  const [primaryValue, setPrimaryValueValue] = useState('');
  const [secondaryValue, setSecondaryValue] = useState('');

  const buttonPrimaryEvent = useRef<string>('buttonPrimaryEvent');
  const buttonSecondaryEvent = useRef<string>('buttonSecondaryEvent');
  const textPrimaryEvent = useRef<string>('textPrimaryEvent');
  const textSecondaryEvent = useRef<string>('textSecondaryEvent');

  const handleChangePrimaryValue = (text: string) => {
    setPrimaryValueValue(text);
  };

  const handleChangeSecondaryValue = (text: string) => {
    setSecondaryValue(text);
  };

  const handlePress = (eventName: string) => {
    Alert.alert(eventName);
  };

  useEffect(() => {
    // Assinando o evento emitido pelo módulo nativo
    const subscriptionPrimaryEvent = ActionEventEmitter?.addListener(
      buttonPrimaryEvent.current,
      () => {
        // Aqui você pode adicionar a lógica desejada quando o botão é pressionado no lado nativo
        handlePress(buttonPrimaryEvent.current);
      }
    );

    const subscriptionSecondaryEvent = ActionEventEmitter?.addListener(
      buttonSecondaryEvent.current,
      () => {
        handlePress(buttonSecondaryEvent.current);
      }
    );

    const subscriptionPrimaryTextEvent = ActionEventEmitter?.addListener(
      textPrimaryEvent.current,
      ({ text }) => {
        handleChangePrimaryValue(text);
      }
    );

    const subscriptionSecondaryTextEvent = ActionEventEmitter?.addListener(
      textSecondaryEvent.current,
      ({ text }) => {
        handleChangeSecondaryValue(text);
      }
    );

    return () => {
      subscriptionPrimaryEvent.remove();
      subscriptionSecondaryEvent.remove();
      subscriptionPrimaryTextEvent.remove();
      subscriptionSecondaryTextEvent.remove();
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

      <TextInput
        style={{
          position: 'absolute',
          top: 230,
          left: 15,
          right: 0,
          bottom: 0,
          width: '90%'
        }}
        eventName={textSecondaryEvent.current}
      />

      <Text
        style={{
          position: 'absolute',
          fontSize: 15,
          top: 300,
          left: 40,
          right: 0,
          bottom: 0,
        }}
      >
        {secondaryValue &&
          `Event receive in react native context ${textSecondaryEvent.current} - (${secondaryValue})`}
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
    width: "90%",
    height: 60,
    marginVertical: 20,
    position: "absolute",
    bottom: 10,
    borderRadius: 10,
    backgroundColor: "blue"
  },
});
