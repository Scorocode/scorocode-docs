<a name="SCMessage"></a>

### SCMessage

SCMessage

Класс для работы с серверными скриптами приложения

* [SCMessage](#SCMessage)
    * [.sendPush(query: SCQuery, title: String, text: String, debug, callback: (Bool, SCError?, Int?) -> Void)](#SCMessage+sendPush1)
    * [.sendPush(query: SCQuery, data: [String: Any], debug, callback: (Bool, SCError?, Int?) -> Void)](#SCMessage+sendPush2)
    * [.sendSms(query: SCQuery, subject: String, text: String, debug, callback: (Bool, SCError?, Int?) -> Void)](#SCMessage+sendSms)

----------------------------------------------------------------------------------------------
<a name="SCMessage+sendPush"></a>
#### .sendPush(query, title, text, debug, callback)
Упрощенный метод для отправки Push-сообщения
 
| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| query    | <code>SCQuery</code>                        |              | Запрос в коллекцию devices для выборки адресатов |                        | 
| title     | <code>String</code>                        |              | Текст заголовка                                | "Внимание!"            |
| text     | <code>String</code>                        |              | Текст сообщения                                | "Ваш заказ поступил в магазин."       |
| debug     | <code>Bool</code>                        |              |  флаг включения режима отладки  | false       |
| callback | <code>(Bool, SCError?, Int?) -> Void</code> |              | Коллбэк для выполняемого запроса.              |                        |

**Пример**   
```SWIFT
let userId = "qRmX5rHsc6"
var query = SCQuery(collection: "devices")
query.equalTo("userId", SCString(userId))
SCMessage.sendPush(query, title: "Внимание !", text: "Ваш заказ поступил в магазин.", debug: false) { (success, error, count) in
    if error == nil, let num = count {
        print("Пуш отправлен на \(num) устройств")
    }
}

```

----------------------------------------------------------------------------------------------
<a name="SCMessage+sendPush2"></a>
#### .sendPush(query, title, text, debug, callback)
Метод для отправки Push-сообщения с тонкой настройкой
 
| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| query    | <code>SCQuery</code>                        |              | Запрос в коллекцию devices для выборки адресатов |                        | 
| data     | <code>[String:Any]]</code>                        |              | Словарь для более тонкой настройки пуш-сообщения                                | см. пример            |
| debug     | <code>Bool</code>                        |              |  флаг включения режима отладки  | false       |
| callback | <code>(Bool, SCError?, Int?) -> Void</code> |              | Коллбэк для выполняемого запроса.              |                        |


**Пример**   
Полное описание словаря apns можно найти по ссылке: 
[Payload Reference](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/PayloadKeyReference.html)
```SWIFT
let userId = "qRmX5rHsc6"
var query = SCQuery(collection: "devices")
query.equalTo("userId", SCString(userId))

let data = ["apns": [
                "id": "123e4567-e89b-12d3-a456-42665544000",
                "topic": "com.sideshow.Apns2",
                "collapseId": "my_collapse",
                "expiration": "2006-01-02T15:04:05Z07:00",
                "priority": 5,
                "aps" : [
                    "alert" : [
                        "title" : "Portugal vs. Denmark",
                        "body" : "great match!",
                        "action-loc-key" : "Watch"],
                    "badge" : 5],
                "acme1" : "bar",
                "acme2" : [ "bang",  "whiz" ]
                ]
            ]
SCMessage.sendPush(query, data: data, debug: false) { (success, error, counter) in
    if error == nil, let num = counter {
        print("Пуш отправлен на \(num) устройств")
    }
}

```
----------------------------------------------------------------------------------------------
<a name="SCMessage+sendSms"></a>
#### .sendSms(query, subject, text, callback)
Метод для отправки Sms
 

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| query    | <code>SCQuery</code>                        |              | запрос в коллекцию users для выборки адресатов |                        | 
| text     | <code>String</code>                         |              | Текст письма                                   | "Текст СМС сообщения"         |
| callback | <code>(Bool, SCError?, Int?) -> Void</code> |              | Коллбэк для выполняемого запроса.              |                        |

**Пример**   
```SWIFT
var queryUsersWithPhone = SCQuery(collection: "users")
queryUsersWithPhone.exists("phone")
SCMessage.sendSms(queryUsersWithPhone, text:"Текст СМС сообщения") {
    success, error, counter in
    if error == nil, let num = counter {
        print("смс посланы \(num) пользователям")
    }
}

```
