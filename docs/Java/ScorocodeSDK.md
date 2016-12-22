<a name="ScorocodeSDK"></a>

## ScorocodeSDK 

Базовый класс для работы с SDK

* [ScorocodeSDK](#ScorocodeSDK)
    * [.initWith(appId, clientKey, masterKey, fileKey, messageKey, scriptKey, websocketKey)](#ScorocodeSDK+init)

----------------------------------------------------------------------------------------------
<a name="ScorocodeSDK+initWith"></a>

### ScorocodeSDK.initWith(appId, clientKey, masterKey, fileKey, messageKey)

Инициализация SDK. 

**Тип**: Метод `[ScorocodeSDK](#ScorocodeSDK)`  

| Параметр | Тип | Свойства | Описание | Пример знаычения |
| --- | --- | --- | --- | --- |
| applicationId | `String` | Обязательный | Идентификатор приложения | "db8a1b41b8543397a798a181d9891b4c" |
| clientKey  | `String` | Обязательный | Клиентский ключ приложения (Android Key ) | "563452bbc611d8106d5da767365897de" |
| masterKey  | `String` | Необязательный | Мастер ключ приложения | "28f06b89b62165c33de55265166d8781"  |
| fileKey    | `String` | Необязательный| Ключ для доступа к файлам | "6305ee7ac8023191a333d9267f1a07e8" |
| messageKey | `String` | Необязательный | Ключ для отправки сообщений |  "9d774f6fa704f192e6aef53933f44e4f" |
| scriptKey  | `String` | Необязательный | Ключ для запуска скриптов |  "2ba656a564e8e3868356318cb64a9d6d" |
| websocketKey | `String` | Необязательный |  WebSocket ключ приложения |  "694bcf2ffd29369dab1c3d0e3f1776ae" |


!!! Note "Примечания"
    - Инициализация Sdk должна происходить ранее использования других методов SDK;
    - Посмотреть значения ключей можно на вкладке “Безопастность” настроек проекта;
    - ClientKey соответствует ключ с именем “android”;


**Пример**  

```Java
ScorocodeSdk.initWith("db8a1b41b8543397a798a181d9891b4c", "563452bbc611d8106d5da767365897de", "28f06b89b62165c33de55265166d8781", null, null, null, "694bcf2ffd29369dab1c3d0e3f1776ae");
```
