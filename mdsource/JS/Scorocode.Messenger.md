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
var myself = new Scorocode.Query("users");
myself.equalTo("username","SergeyYurievich");
myself.find();
var mailMeBaby = new Scorocode.Messenger();
mailMeBaby.sendEmail({
    where: myself,
        data: {
                subject:"Тема письма",
                        text:"Текст письма"
		}
	})
```
**Возвращает**: <code>Object</code> - Возвращает promise  
**Исключение**:

- <code>String</code> 'Invalid options Тип'
- <code>String</code> 'Where must be a Тип of Query'
- <code>String</code> 'Invalid data Тип'
- <code>String</code> 'Missing subject or text message'


<a name="Scorocode.Messenger+sendPush"></a>

#### messenger.sendPush(options, callbacks) ⇒ <code>Object</code>
Метод для отправки Push

**Тип**: Метод <code>[Messenger](#Scorocode.Messenger)</code>
**Возвращает**: <code>Object</code> - Возвращает promise
**Исключение**:

- <code>String</code> 'Invalid options Тип'
- <code>String</code> 'Where must be a Тип of Query'
- <code>String</code> 'Invalid data Тип'
- <code>String</code> 'Missing subject or text message'


| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Параметры сообщения |
| callbacks | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

<a name="Scorocode.Messenger+sendSms"></a>

#### messenger.sendSms(options, callbacks) ⇒ <code>Object</code>
Метод для отправки СМС

**Тип**: Метод <code>[Messenger](#Scorocode.Messenger)</code>  
**Возвращает**: <code>Object</code> - Возвращает promise  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Параметры сообщения |
| callbacks | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |