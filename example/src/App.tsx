import './global-style';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput, Tab } from 'mistica-react-native';

export default function App() {
  const [primaryValue, setPrimaryValueValue] = useState('');
  const [secondaryValue, setSecondaryValue] = useState('');

  const handleChangePrimaryValue = (text: string) => {
    setPrimaryValueValue(text);
  };

  const handleChangeSecondaryValue = (text: string) => {
    setSecondaryValue(text);
  };

  const handlePress = () => {
    Alert.alert('handlePress');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.formContainer}>
        <TextInput
          style={{
            position: 'absolute',
            top: 100,
            left: 15,
            right: 0,
            bottom: 0,
            width: '90%',
          }}
          placeholder="Digite seu Email"
          onChangeText={handleChangePrimaryValue}
          type="default"
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
            `Event receive in react native context - (${primaryValue})`}
        </Text>

        <TextInput
          style={{
            position: 'absolute',
            top: 230,
            left: 15,
            right: 0,
            bottom: 0,
            width: '90%',
          }}
          placeholder="Digite seu Nome"
          onChangeText={handleChangeSecondaryValue}
          type="email"
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
            `Event receive in react native context - (${secondaryValue})`}
        </Text>

        <Button
          style={{
            width: 300,
            height: 50,
            position: 'absolute',
            bottom: 20,
            left: 35,
            marginBottom: 60,
            flex: 1,
          }}
          title="BOTAO"
          onPress={handlePress}
        />
      </View>

      <View style={{ flex: 1, marginBottom: -450 }}>
        <Tab
          style={{
            flex: 1,
          }}
          items={[
            {
              title: 'house.fill',
              icon: 'house.fill',
            },
            {
              title: 'Cart',
              icon: 'cart.fill',
            },
            {
              title: 'Folder',
              icon: 'folder.fill',
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '90%',
    height: 60,
    marginVertical: 20,
    position: 'absolute',
    bottom: 10,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
});
