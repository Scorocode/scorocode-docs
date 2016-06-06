<a name="Scorocode"></a>

## SС - Базовый класс для работы с SDK
* [SC](#Scorocode)
	* [Подключение SDK](#Подключение SDK)
    * [.Init(opt)](#Scorocode+Init)

<a name="Подключение SDK"></a>

### Подключение SDK

Информация о подключении SDK и исходные коды опубликованы в репозитории (https://github.com/Scorocode/scorocode-sdk-swift)

```
git clone (https://github.com/Scorocode/scorocode-sdk-swift)
```

<a name="Scorocode+initWith"></a>

### SC.initWith(applicationId, clientId, accessKey, fileKey, messageKey)
Инициализация SDK


**Тип**: Метод <code>[SC](#Scorocode)</code>  

| Параметр | Тип | Свойства | Описание | Пример знаычения |
| --- | --- | --- | --- | --- |
| applicationId | <code>String</code> | Обязательный | Идентификатор приложения | "db8a1b41b8543397a798a181d9891b4c" |
| clientId      | <code>String</code> | Обязательный | Клиентский ключ для платформы iOs | "563452bbc611d8106d5da767365897de" |
| accessKey     | <code>String</code> |  | Ключ авторизации (master key, script key) | "28f06b89b62165c33de55265166d8781"  |
| fileKey       | <code>String</code> |  | Ключ авторизации для доступа к файлам | "6305ee7ac8023191a333d9267f1a07e8" |
| messageKey    | <code>String</code> |  | Ключ авторизации для отправки сообщений |  "9d774f6fa704f192e6aef53933f44e4f" |


**Пример**  
```SWIFT
override func setUp() {
    super.setUp()
        
    SC.initWith(
        applicationId: "db8a1b41b8543397a798a181d9891b4c",
        clientId: "563452bbc611d8106d5da767365897de", 
        accessKey: "", 
        fileKey: "", 
        messageKey: ""
    )
}
```