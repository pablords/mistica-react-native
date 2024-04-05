

### Erros conhecidos

`fatal error: file '/Users/pablosantos/pocs/mistica-react-native/example/ios/Pods/Headers/Public/folly/RCT-Folly.modulemap'
      has been modified since the precompiled heade`

Esse erro indica que o arquivo RCT-Folly.modulemap foi modificado desde que o arquivo pré-compilado React-utils-prefix.pch.gch foi construído. Isso pode acontecer quando os arquivos no diretório Pods são modificados ou atualizados de alguma forma.

Para resolver esse problema, você pode tentar o seguinte:

1. Reconstrua o pré-compilado header: Siga as instruções na mensagem de erro para reconstruir o pré-compilado header React-utils-prefix.pch.gch. Você pode fazer isso limpando e reconstruindo o projeto no Xcode.

2. Reinstale os pods: Execute pod install novamente no diretório iOS do seu projeto para garantir que todos os pods estejam instalados corretamente e que não haja conflitos entre versões.

3. Limpe o projeto: No Xcode, vá para Product > Clean Build Folder para limpar todos os artefatos de compilação antigos e reconstruir o projeto a partir do zero.

4. Verifique as modificações: Verifique se há modificações indesejadas nos arquivos dentro do diretório Pods. Se você ou outra pessoa modificou manualmente os arquivos dentro do diretório Pods, desfaça essas modificações ou restaure-os para as versões originais.

Após tentar essas etapas, reconstrua o projeto no Xcode e veja se o erro persiste. Se o problema continuar, verifique se há mensagens de erro adicionais ou detalhes no console do Xcode para ajudar a identificar a causa raiz do problema.

### Ao Criar ou atualizar u componente

Quando você instala um pacote ou uma dependência em um projeto iOS usando CocoaPods, é importante reconstruir o aplicativo para garantir que as alterações feitas nas dependências sejam refletidas no aplicativo final. Aqui estão os passos para reconstruir o aplicativo após instalar um pacote no iOS:

Abra o Terminal.
Navegue até o diretório raiz do seu projeto iOS onde está localizado o arquivo Podfile.
Execute o comando pod install para garantir que todas as dependências do CocoaPods sejam instaladas ou atualizadas conforme definido no arquivo Podfile.
Após a instalação ser concluída sem erros, feche o projeto Xcode, se estiver aberto.
No Terminal, navegue até o diretório onde está localizado o arquivo .xcworkspace do seu projeto iOS.
Execute o comando open YourProjectName.xcworkspace para abrir o projeto no Xcode usando o arquivo de workspace gerado pelo CocoaPods.
No Xcode, vá para o menu "Product" e selecione "Clean Build Folder" para limpar todos os artefatos de compilação antigos.
Após limpar o build folder, construa o aplicativo clicando em "Product" e depois em "Build" (ou pressionando Cmd + B).
Esses passos garantirão que o seu aplicativo iOS seja reconstruído com as dependências atualizadas após a instalação de um novo pacote. Isso é essencial para garantir que as alterações feitas nas dependências sejam refletidas corretamente no aplicativo final.



### Carthage

carthage update --platform iOS --use-ssh --use-xcframeworks

rm -rf ~/Library/Caches/org.carthage.CarthageKit



### Instaladno plugins Gem
bundle install