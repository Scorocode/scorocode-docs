<a name="sc.Messenger"></a>

Содержание

* [Messenger](#sc.Messenger)
    * [new Messenger()](#new_sc.Messenger_new)
    * [.sendPush(options, callbacks)](#sc.Messenger+sendPush) ⇒ <code>{error: Boolean, count: Number}</code>
    * [.sendSms(options, callbacks)](#sc.Messenger+sendSms) ⇒ <code>{error: Boolean, count: Number}</code>

----------------------------------------------------------------------------------------------

<a name="new_sc.Messenger_new"></a>

## new Messenger(logger)

Класс для отправки сообщений

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| logger | <code>Object</code> | Необязательный | Объект sc.Logger для режима отладки | См. пример ниже |


!!! tip "Пример"
    ```js
    var Broadcast = new sc.Messenger({logger: new sc.Logger()});
    ```

----------------------------------------------------------------------------------------------

<a name="sc.Messenger+sendPush"></a>

## .sendPush(options, callbacks)

Метод для отправки Push


| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Объект, состоящий из параметров where и data |
| debug | `Boolean` | Флаг включения режима отладки | Флаг включения режима отладки | true |
| callbacks | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |


**Описание объекта options**

* Параметр where - принимает в качестве значения sc.Query("devices") с условиями выборки устройств, которым будет отпрален PUSH.
* Параметр data - объект, содержащий данные для передачи в PUSH-сообщении и имеющий следующую структуру:

```
data: {
    "data": {
        "gcm": {
            //данные для отправки Android-устройствам
        },
        "apns": {
            //данные для отправки iOs-устройствам
        }
    }    
}
```

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения",
        MessageKey: "messageKey_приложения",
        WebSocketKey: "websocket key приложения"
    });

    var Devices = new sc.Query("devices");
    var Broadcast = new sc.Messenger({logger: new sc.Logger()});
    Broadcast.sendPush({
            where: Devices,
            data: {
                "data": {
                    "gcm": {
                        "protocol": "http",
                        "notification": {
                            "body" : "great match!",
                            "title" : "Portugal vs. Denmark",
                            "icon" : "myicon"
                        },
                        "data": {
                            "key": "value"
                        }
                    },
                    "apns": {       // Данные для передачи iOs-устройствам, необязательно
                        "id": "123e4567-e89b-12d3-a456-42665544000", // apns-id, необязательно
                        "topic": "com.sideshow.Apns2",               // apns-topic, необязательно
                        "collapseId": "my_collapse",                 // apns-collapse-id, необязательно
                        "expiration": "2006-01-02T15:04:05Z07:00",   // apns-expiration, необязательно
                        "priority":5,                                // apns-priority, необязательно
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
            }
        }, true)
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



----------------------------------------------------------------------------------------------

<a name="sc.Messenger+sendSms"></a>

## .sendSms(options, callbacks)

Метод для отправки СМС


| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Параметры сообщения |
| callbacks | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

!!! note "Описание объекта options"
    * Параметр where - принимает в качестве значения sc.Query("user") с условиями выборки пользователей, которым будет отпралено sms.
    * Параметр data - объект, содержащий данные для передачи в СМС-сообщении и имеющий следующую структуру:
    ```json
    data: {
                "text": "Текст смс-сообщения"     
          }
    ```

!!! tip "Пример"
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
    Broadcast.sendSms({
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
