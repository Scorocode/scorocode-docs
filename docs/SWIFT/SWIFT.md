## Подключение SDK

Дистрибутив Scorocode SWIFT SDK можно скачать [тут](https://github.com/Scorocode/scorocode-SDK-JS).

SDK предоставляет доступ к платформе Scorocode для построения приложений, основанных на swift. Подробности на нашем сайте: https://scorocode.ru
Дистрибутив Scorocode SWIFT SDK находится в репозитории (https://github.com/Scorocode/scorocode-sdk-swift)

### Установка
Подключение библиотеки к проекту

Установить [Carthage](https://github.com/Carthage/Carthage)

Создать приложение

Создать в корне проекта файл с именем "Cartfile", записать в него строки:
```
github "Alamofire/Alamofire" ~> 3.3
github "SwiftyJSON/SwiftyJSON"
github "daltoniam/Starscream"
```
Закрыть проект в xcode, запустить в консоли:
```
carthage update --platform iOS,Mac
```
Открыть заново проект в Xcode. В Target -> General -> Linked Frameworks and Libraries из <Каталог проекта> -> Carthage -> Build -> iOS перетащить 3 файла:
```
Alamofire.framework
SwiftyJSON.framework
Starscream.framework
```

В Target -> Build Phases добавить New Run Script Phase:

Скрипт:
```
/usr/local/bin/carthage copy-frameworks
```
Три Input File:

```
$(SRCROOT)/Carthage/Build/iOS/Alamofire.framework
```
```
$(SRCROOT)/Carthage/Build/iOS/SwiftyJSON.framework
```
и
```
$(SRCROOT)/Carthage/Build/iOS/Starscream.framework
```

В случае отсутствия bridging header создать его с таким содержимым:

```
#import "BSONSerialization.h"
```

Создать в проекте новую группу (например, SCLib)

Добавить в нее 3 папки (BSON, API, Model) из папки SCLib проекта, полученной из репозитория