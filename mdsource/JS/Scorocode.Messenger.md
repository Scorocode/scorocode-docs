<a name="Scorocode.Messenger"></a>

### Scorocode.Messenger
Scorocode.Messenger

**Тип**: Класс <code>[Scorocode](Scorocode.md#Scorocode)</code>  

* [.Messenger](#Scorocode.Messenger)
    * [new Messenger()](#new_Scorocode.Messenger_new)
    * [.sendEmail(options, callbacks)](#Scorocode.Messenger+sendEmail) ⇒ <code>Object</code>
    * [.sendPush(options, callbacks)](#Scorocode.Messenger+sendPush) ⇒ <code>Object</code>
    * [.sendSms(options, callbacks)](#Scorocode.Messenger+sendSms) ⇒ <code>Object</code>

<a name="new_Scorocode.Messenger_new"></a>

#### new Messenger()
Класс для отправки сообщений

**Пример**
``js
var Broadcast = new Scorocode.Messenger();
``

----------------------------------------------------------------------------------------------

<a name="Scorocode.Messenger+sendEmail"></a>

#### messenger.sendEmail(options, callbacks)
Метод для отправки Email

**Тип**: Метод <code>[Messenger](#Scorocode.Messenger)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Параметры сообщения |
| callbacks | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**  
```js
var findUsers = new Scorocode.Query("users");
findUsers.equalTo("username","SergeyYurievich");
findUsers.find();
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
**Возвращает**: <code>{error: Boolean, count: Number}</code> - Возвращает promise который возвращает объект с результатом выполнения запроса.
- "error" - <code>Boolean</code> - Флаг ошибки
- "count" - <code>Number</code>  - Количество отправленных, собщений.

**Исключение**:

- <code>String</code> 'Invalid options Тип'
- <code>String</code> 'Where must be a Тип of Query'
- <code>String</code> 'Invalid data Тип'
- <code>String</code> 'Missing subject or text message'

----------------------------------------------------------------------------------------------

<a name="Scorocode.Messenger+sendPush"></a>

#### messenger.sendPush(options, callbacks) ⇒ <code>Object</code>
Метод для отправки Push

**Тип**: Метод <code>[Messenger](#Scorocode.Messenger)</code>

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Параметры сообщения |
| callbacks | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**  
```js
var Devices = new Scorocode.Query("devices");
Devices.find()
.then((finded)=> {
    var Broadcast = new Scorocode.Messenger();
    Broadcast.sendPush({
        where: Devices,
        data: {
            "data": {
                "message": "PUSH-уведомление!",
                }           
            }
        })
        .then((success)=>{
            console.log(success);
        })
        .catch((error)=>{
            console.log(error)
        });
    })
.catch((error)=>{
    console.log(error)
});

```

**Возвращает**: <code>{error: Boolean, count: Number}</code> - Возвращает promise который возвращает объект с результатом выполнения запроса.
- "error" - <code>Boolean</code> - Флаг ошибки
- "count" - <code>Number</code>  - Количество отправленных, собщений.

**Исключение**:

- <code>String</code> 'Invalid options Тип'
- <code>String</code> 'Where must be a Тип of Query'
- <code>String</code> 'Invalid data Тип'
- <code>String</code> 'Missing subject or text message'



----------------------------------------------------------------------------------------------

<a name="Scorocode.Messenger+sendSms"></a>

#### messenger.sendSms(options, callbacks) ⇒ <code>Object</code>
Метод для отправки СМС

**Тип**: Метод <code>[Messenger](#Scorocode.Messenger)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Параметры сообщения |
| callbacks | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**  
```js
var findUsers = new Scorocode.Query("users");
findUsers.find()
.then((finded)=> {
    var Broadcast = new Scorocode.Messenger();
    Broadcast.sendPush({
        where: findUsers,
        data: {
            "data": {
                "message": "PUSH-уведомление!",
                }           
            }
        })
        .then((success)=>{
            console.log(success);
        })
        .catch((error)=>{
            console.log(error)
        });
    })
.catch((error)=>{
    console.log(error)
});
**Возвращает**: <code>{error: Boolean, count: Number}</code> - Возвращает promise который возвращает объект с результатом выполнения запроса.
- "error" - <code>Boolean</code> - Флаг ошибки
- "count" - <code>Number</code>  - Количество отправленных, собщений.
