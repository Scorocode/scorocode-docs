<a name="Scorocode.Messenger"></a>

Содержание

* [Messenger](#Scorocode.Messenger)
    * [new Messenger()](#new_Scorocode.Messenger_new)
    * [.sendEmail(options, callbacks)](#Scorocode.Messenger+sendEmail) ⇒ <code>{error: Boolean, count: Number}</code>
    * [.sendPush(options, callbacks)](#Scorocode.Messenger+sendPush) ⇒ <code>{error: Boolean, count: Number}</code>
    * [.sendSms(options, callbacks)](#Scorocode.Messenger+sendSms) ⇒ <code>{error: Boolean, count: Number}</code>

----------------------------------------------------------------------------------------------

<a name="new_Scorocode.Messenger_new"></a>

## new Messenger()

Класс для отправки сообщений

**Пример**
```js
var Broadcast = new Scorocode.Messenger();
```

----------------------------------------------------------------------------------------------

<a name="Scorocode.Messenger+sendEmail"></a>

## .sendEmail(options, callbacks)

Метод для отправки Email


| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Параметры сообщения |
| callbacks | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения",
    MessageKey: "messageKey_приложения"
});

var findUsers = new Scorocode.Query("users");
findUsers.equalTo("username","ChosenOne");

var Broadcast = new Scorocode.Messenger();
Broadcast.sendEmail({
    where: findUsers,
    data: {
        subject:"Тема письма",
        text:"Текст письма"
		}
	})
    .then((success)=>{
        console.log(success);
    })
    .catch((error)=>{
        console.log(error)
    });
```
**Возвращает**: <code>promise.{error: Boolean, count: Number}</code> - Возвращает promise который возвращает объект с результатом выполнения запроса.

- "error" - <code>Boolean</code> - Флаг ошибки
- "count" - <code>Number</code>  - Количество отправленных сообщений.

**Исключение**:

- <code>String</code> 'Invalid options type'
- <code>String</code> 'Where must be a type of Query'
- <code>String</code> 'Invalid data type'
- <code>String</code> 'Missing subject or text message'

----------------------------------------------------------------------------------------------

<a name="Scorocode.Messenger+sendPush"></a>

## .sendPush(options, callbacks)

Метод для отправки Push


| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Параметры сообщения |
| callbacks | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения",
    MessageKey: "messageKey_приложения"
});

var Devices = new Scorocode.Query("devices");
var Broadcast = new Scorocode.Messenger();
Broadcast.sendPush({
        where: Devices,
        data: {
            "data": {
                "message": "текст PUSH-уведомления!",
                }           
            }
        })
        .then((success)=>{
            console.log(success);
        })
        .catch((error)=>{
            console.log(error)
        });
```

**Возвращает**: <code>promise.{error: Boolean, count: Number}</code> - Возвращает promise который возвращает объект с результатом выполнения запроса.

- "error" - <code>Boolean</code> - Флаг ошибки
- "count" - <code>Number</code>  - Количество отправленных сообщений.

**Исключение**:

- <code>String</code> 'Invalid options type'
- <code>String</code> 'Where must be a type of Query'
- <code>String</code> 'Invalid data type'
- <code>String</code> 'Missing subject or text message'



----------------------------------------------------------------------------------------------

<a name="Scorocode.Messenger+sendSms"></a>

## .sendSms(options, callbacks)

Метод для отправки СМС


| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Параметры сообщения |
| callbacks | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения",
    MessageKey: "messageKey_приложения"
});

var findUsers = new Scorocode.Query("users");
var Broadcast = new Scorocode.Messenger();
Broadcast.sendPush({
        where: findUsers,
        data: {
            "text": "Текст смс-сообщения"     
            }
        })
        .then((success)=>{
            console.log(success);
        })
        .catch((error)=>{
            console.log(error)
        });
```

**Возвращает**: <code>{error: Boolean, count: Number}</code> - Возвращает promise который возвращает объект с результатом выполнения запроса.

- "error" - <code>Boolean</code> - Флаг ошибки
- "count" - <code>Number</code>  - Количество отправленных сообщений.
