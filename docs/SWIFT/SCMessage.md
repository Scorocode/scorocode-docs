<a name="SCMessage"></a>

### SCMessage

SCMessage

Класс для работы с серверными скриптами приложения

* [SCMessage](#SCMessage)
    * [.sendEmail(query: SCQuery, subject: String, text: String, callback: (Bool, SCError?, Int?) -> Void)](#SCMessage+sendEmail)
    * [.sendPush(query: SCQuery, subject: String, text: String, callback: (Bool, SCError?, Int?) -> Void)](#SCScript+sendPush)
    * [.sendSms(query: SCQuery, subject: String, text: String, callback: (Bool, SCError?, Int?) -> Void)](#SCScript+sendSms)

----------------------------------------------------------------------------------------------
<a name="SCMessage+sendEmail"></a>
#### .sendEmail(query, subject, text, callback)
Метод для отправки Email
 
| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| query    | <code>SCQuery</code>                        |              | Запрос в коллекцию users для выборки адресатов |                        | 
| subject  | <code>String</code>                         |              | Тема письма                                    | "Тема письма"          |
| text     | <code>String</code>                         |              | Текст письма                                   | "Текст письма"         |
| callback | <code>(Bool, SCError?, Int?) -> Void</code> |              | Коллбэк для выполняемого запроса.              |                        |

**Пример**   
```SWIFT
var queryUsers = SCQuery(collection: "users")
var broadcast = new SCMessage()

broadcast.sendEmail(queryUsers, subject:"Тема письма", text:"Текст письма") {
    success, error, result in
    if success {
        print("Success")
    } else {
        if let error = error {
            print("Error")
        }
    }
}

```

----------------------------------------------------------------------------------------------
<a name="SCMessage+sendPush"></a>
#### .sendPush(query, subject, text, callback)
Метод для отправки Push
 

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| query    | <code>SCQuery</code>                        |              | Запрос в коллекцию users для выборки адресатов |                        | 
| text     | <code>String</code>                         |              | Текст письма                                   | "Текст Push-уведомления"         |
| callback | <code>(Bool, SCError?, Int?) -> Void</code> |              | Коллбэк для выполняемого запроса.              |                        |

**Пример**   
```SWIFT
var queryUserDevices = SCQuery(collection: "devices")
var broadcast = SCMessage()

queryUserDevices.exists("userRelation")
broadcast.sendPush(queryUserDevices, text:"Текст Push-уведомления") {
    success, error, result in
    if success {
        print("Success")
    } else {
        if let error = error {
            print("Error")
        }
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
var broadcast = SCMessage()

queryUsersWithPhone.exists("phone")
broadcast.sendSms(queryUsersWithPhone, text:"Текст СМС сообщения") {
    success, error, result in
    if success {
        print("Success")
    } else {
        if let error = error {
            print("Error")
        }
    }
}
```
