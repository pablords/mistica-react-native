# mistica-react-native

Exposes native components from the [mistica-ios](https://github.com/Telefonica/mistica-ios) and [mistica-android](https://github.com/Telefonica/mistica-android) libraries to be used as react-native components


## Installation

```sh
npm install mistica-react-native
```

### ios

Add mistica-ios dependencies in Podfile

```ruby
  pod 'Mistica', :git => 'https://github.com/pablords/mistica-ios.git', :branch => "podspec-support"
  pod 'SDWebImage', :modular_headers => true
  pod 'SDWebImageSVGCoder', :modular_headers => true
```

Install pod dependencies

```sh
cd ios && pod install
```

### Android

Add mistica-android dependencie in build.gradle

```gradle

repositories {
  mavenCentral()
  google()
}

dependencies {
  implementation "com.telefonica:mistica:11.2.2"
}
```

## Usage

### Button

```js

import { Button } from 'mistica-react-native';

export function App() {

  const handlePress = () => {
    Alert.alert('handlePress');
  };

  return (
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
        eventName={"submit_button"}
        onPress={handlePress}
      />
  );
}

```

### TextInput

```js

import { TextInput } from 'mistica-react-native';

export default function App() {


  const handleChangeText = (text: string) => {
    console.log(text);
  };

  return (
      <TextInput
        style={{
          position: 'absolute',
          top: 230,
          left: 15,
          right: 0,
          bottom: 0,
          width: '90%',
        }}
        eventName={"text_input"}
        placeholder="Digite seu Nome"
        onChangeText={handleChangeText}
      />
  );
}

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
