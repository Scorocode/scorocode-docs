<a name="ScorocodeSDK"></a>
SDK предоставляет доступ к платформе Scorocode для построения приложений, основанных на Java / Android. Подробности на нашем сайте: https://scorocode.ru

## ScorocodeSDK - Базовый класс для работы с SDK
* [ScorocodeSDK](#ScorocodeSDK)
	* [Подключение SDK](#Подключение SDK)
    * [.initWith(appId, clientKey, masterKey, fileKey, messageKey, scriptKey, websocketKey)](#ScorocodeSDK+init)

----------------------------------------------------------------------------------------------
<a name="Подключение SDK"></a>

### Подключение SDK

Исходный код Scorocode Java SDK опубликован в репозитории (https://github.com/Scorocode/scorocode-sdk-java).

Подключить библиотеку к проекту можно при помощи Gradle добавив в dependencies:
```java

dependencies {
   compile 'ru.prof-itgroup:scorocode_sdk:1.0.15-beta'
}
```

Убедитесь, что gradle ищет библиотеки в рекомендуемом Google репозитории jcenter (который включает в себя библиотеки maven):

```java
repositories {
   jcenter()
}
```

----------------------------------------------------------------------------------------------
<a name="ScorocodeSDK+initWith"></a>

### ScorocodeSDK.initWith(appId, clientKey, masterKey, fileKey, messageKey)

Инициализация SDK. 

**Тип**: Метод <code>[ScorocodeSDK](#ScorocodeSDK)</code>  

| Параметр | Тип | Свойства | Описание | Пример знаычения |
| --- | --- | --- | --- | --- |
| applicationId | <code>String</code> | Обязательный | Идентификатор приложения | "db8a1b41b8543397a798a181d9891b4c" |
| clientKey  | <code>String</code> | Обязательный | Клиентский ключ приложения (Android Key ) | "563452bbc611d8106d5da767365897de" |
| masterKey  | <code>String</code> | Необязательный | Мастер ключ приложения | "28f06b89b62165c33de55265166d8781"  |
| fileKey    | <code>String</code> | Необязательный| Ключ для доступа к файлам | "6305ee7ac8023191a333d9267f1a07e8" |
| messageKey | <code>String</code> | Необязательный | Ключ для отправки сообщений |  "9d774f6fa704f192e6aef53933f44e4f" |
| scriptKey  | <code>String</code> | Необязательный | Ключ для запуска скриптов |  "2ba656a564e8e3868356318cb64a9d6d" |
| websocketKey | <code>String</code> | Необязательный |  WebSocket ключ приложения |  "694bcf2ffd29369dab1c3d0e3f1776ae" |


**Примечания**
* Инициализация Sdk должна происходить ранее использования других методов SDK;
* Посмотреть значения ключей можно на вкладке “Безопастность” настроек проекта;
* ClientKey соответствует ключ с именем “android”;


**Пример**  

```Java
ScorocodeSdk.initWith("db8a1b41b8543397a798a181d9891b4c", "563452bbc611d8106d5da767365897de", "28f06b89b62165c33de55265166d8781", null, null, null, "694bcf2ffd29369dab1c3d0e3f1776ae");
```
