<a name="sc.Messenger"></a>

Содержание

* [Messenger](#sc.Messenger)
    * [new Messenger()](#new_sc.Messenger_new)
    * [.sendPush(options, callbacks)](#sc.Messenger+sendPush) ⇒ <code>{error: Boolean, count: Number}</code>
    * [.sendSms(options, callbacks)](#sc.Messenger+sendSms) ⇒ <code>{error: Boolean, count: Number}</code>

----------------------------------------------------------------------------------------------

<a name="new_sc.Messenger_new"></a>

## new Messenger()

Класс для отправки сообщений

**Пример**
```js
var Broadcast = new sc.Messenger();
```

----------------------------------------------------------------------------------------------

<a name="sc.Messenger+sendPush"></a>

## .sendPush(options, callbacks)

Метод для отправки Push


| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Объект, состоящий из параметров where и data |
| callbacks | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Описание объекта options**

* Параметр where - принимает в качестве значения sc.Query("devices") с условиями выборки устройств, которым будет отпрален PUSH.
* Параметр data - объект, содержащий данные для передачи в PUSH-сообщении и имеющий следующую структуру:

```
data: {
    "gcm": {
        //данные для отправки Android-устройствам
    },
    "apns": {
        //данные для отправки iOs-устройствам
    } 
}
```

**Пример**  

```js
// Подключим SDK и инициализируем его. 
var sc = require('scorocode');
sc.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения",
    MessageKey: "messageKey_приложения"
});

var Devices = new sc.Query("devices");
var Broadcast = new sc.Messenger();
Broadcast.sendPush({
        where: Devices,
        data: {
            "gcm": {
                "protocol": "http"
                "notification": {
                    "body" : "great match!",
                    "title" : "Portugal vs. Denmark",
                    "icon" : "myicon"
                },
                "data": {
                    "key": "value"
                }
            },
            "apns": {
                "aps" : {
                    "alert" : {
                        "title" : "Portugal vs. Denmark",
                        "body" : "great match!",
                        "action-loc-key" : "Watch"
                    },
                    "badge" : 5
                },
                "acme1" : "bar",
                "acme2" : [ "bang",  "whiz" ]
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

<a name="sc.Messenger+sendSms"></a>

## .sendSms(options, callbacks)

Метод для отправки СМС


| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Параметры сообщения |
| callbacks | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Описание объекта options**

* Параметр where - принимает в качестве значения sc.Query("user") с условиями выборки пользователей, которым будет отпралено sms.
* Параметр data - объект, содержащий данные для передачи в СМС-сообщении и имеющий следующую структуру:

```json
data: {
            "text": "Текст смс-сообщения"     
      }
```

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var sc = require('scorocode');
sc.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения",
    MessageKey: "messageKey_приложения"
});

var findUsers = new sc.Query("users");
var Broadcast = new sc.Messenger();
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
