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

**Возвращает**: <code>[Messenger](#Scorocode.Messenger)</code> - Удалить  
<a name="Scorocode.Messenger+sendEmail"></a>

#### messenger.sendEmail(options, callbacks) ⇒ <code>Object</code>
Метод для отправки Email

**Тип**: instance method of <code>[Messenger](#Scorocode.Messenger)</code>  
**Возвращает**: <code>Object</code> - Возвращает promise  
**Исключение**:

- <code>String</code> 'Invalid options Тип'
- <code>String</code> 'Where must be a Тип of Query'
- <code>String</code> 'Invalid data Тип'
- <code>String</code> 'Missing subject or text message'


| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Параметры сообщения (...) |
| callbacks | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

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
}})
```
<a name="Scorocode.Messenger+sendPush"></a>

#### messenger.sendPush(options, callbacks) ⇒ <code>Object</code>
Метод для отправки Push

**Тип**: instance method of <code>[Messenger](#Scorocode.Messenger)</code>
**Возвращает**: <code>Object</code> - Возвращает promise
**Исключение**:

- <code>String</code> 'Invalid options Тип'
- <code>String</code> 'Where must be a Тип of Query'
- <code>String</code> 'Invalid data Тип'
- <code>String</code> 'Missing subject or text message'


| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Параметры сообщения |
| callbacks | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

<a name="Scorocode.Messenger+sendSms"></a>

#### messenger.sendSms(options, callbacks) ⇒ <code>Object</code>
Метод для отправки СМС

**Тип**: instance method of <code>[Messenger](#Scorocode.Messenger)</code>  
**Возвращает**: <code>Object</code> - Возвращает promise  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Параметры сообщения |
| callbacks | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |