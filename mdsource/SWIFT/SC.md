<a name="Scorocode"></a>

## SС - Базовый класс для работы с SDK
* [SC](#Scorocode)
	* [Подключение SDK](#Подключение SDK)
    * [.initWith(opt)](#Scorocode+initWith)

<a name="Подключение SDK"></a>

## Подключение SDK

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
```
Закрыть проект в xcode, запустить в консоли:
```
carthage update --platform iOS,Mac
```
Открыть заново проект в Xcode. В Target -> General -> Linked Frameworks and Libraries из <Каталог проекта> -> Carthage -> Build -> iOS перетащить 2 файла:
```
Alamofire.framework
SwiftyJSON.framework
```

В Target -> Build Phases добавить New Run Script Phase:

Скрипт:
```
/usr/local/bin/carthage copy-frameworks
```
Два Input File:

```
$(SRCROOT)/Carthage/Build/iOS/Alamofire.framework
```
и
```
$(SRCROOT)/Carthage/Build/iOS/SwiftyJSON.framework
```

В случае отсутствия bridging header создать его с таким содержимым:

```
#import "BSONSerialization.h"
```

Создать в проекте новую группу (например, SCLib)

Добавить в нее 3 папки (BSON, API, Model) из папки SCLib проекта, полученного из репозитория


<a name="Scorocode+initWith"></a>

## SC.initWith(applicationId, clientId, accessKey, fileKey, messageKey)

Инициализация SDK. Значения параметров определяются в AppDelegate.swift


**Тип**: Метод <code>[SC](#Scorocode)</code>  

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| applicationId | <code>String</code> | Обязательный | Идентификатор приложения | "db8a1b41b8543397a798a181d9891b4c" |
| clientId      | <code>String</code> | Обязательный | Клиентский ключ для платформы iOs | "563452bbc611d8106d5da767365897de" |
| accessKey     | <code>String</code> | Обязательный | Ключ авторизации (master key, script key) | "28f06b89b62165c33de55265166d8781"  |
| fileKey       | <code>String</code> |  | Ключ авторизации для доступа к файлам | "6305ee7ac8023191a333d9267f1a07e8" |
| messageKey    | <code>String</code> |  | Ключ авторизации для отправки сообщений |  "9d774f6fa704f192e6aef53933f44e4f" |


**Пример**  

В AppDelegate.swift, в метод didFinishLaunchingWithOptions, указать значения параметров инициализации:

```SWIFT
let applicationId = "db8a1b41b8543397a798a181d9891b4c"
let clientId = "563452bbc611d8106d5da767365897de"
let accessKey = "28f06b89b62165c33de55265166d8781"
let fileKey = "6305ee7ac8023191a333d9267f1a07e8"
let messageKey = "9d774f6fa704f192e6aef53933f44e4f"
```

Инициализация SDK

```SWIFT
SC.initWith(applicationId: applicationId, clientId: clientId, accessKey: accessKey, fileKey: fileKey, messageKey: messageKey)
```