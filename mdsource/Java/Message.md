<a name="Message"></a>

### Message
Message

**Содержание**
* [Message](#Message)
    * [new Message(from, subject, text)](#Message_new)
    * [.sendEmail(callback, sessionId, accessKey)](#Message+sendEmail)
    * [.sendPush(callback, sessionId, accessKey)](#Message+sendPush)
    * [.sendSms(callback, sessionId, accessKey)](#Message+sendSms)

<a name="Message_new"></a>

Конструктор Message

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| from    | <code>String</code> |              | Отправитель сообщения |                        | 
| subject  | <code>String</code>|              | Тема письма                                    | "С днем рождения"            |
| text     | <code>String</code>|              | Текст письма                                   | "Сегодня 18 июня, и это день рождения Мюриэл! Мюриэл сейчас 20. С днём рождения, Мюриэл!" |



----------------------------------------------------------------------------------------------
<a name="Message+sendEmail"></a>
#### Message.sendEmail(callback, sessionId, accessKey)
 

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback  | <code>SCCallback<Boolean></code>|              | Коллбэк для выполняемого запроса. |     | 
| sessionId | <code>String</code>             |              | Идентификатор сессии              |     |
| accessKey | <code>String</code>             |              | Ключ доступа                      |     |

**Пример**   
```Java
SC.init("appId", "clientKey");

Message message = new Message("me@example.com", "Subject", "Text");

message.sendEmail(new SCCallback<Boolean>() {
            @Override
            public void onSuccess(Boolean result) {
                Log.d(TAG, "Message was successfully sent");
            }

            @Override
            public void onError(String message) {
                Log.d(TAG, "Failed to deliver message");
            }
        });
```

----------------------------------------------------------------------------------------------
<a name="Message+sendPush"></a>
#### Message.sendPush(callback, sessionId, accessKey)
Метод для отправки Push
 

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback  | <code>SCCallback<Boolean></code>|              | Коллбэк для выполняемого запроса. |     | 
| sessionId | <code>String</code>             |              | Идентификатор сессии              |     |
| accessKey | <code>String</code>             |              | Ключ доступа                      |     |

**Пример**   
```Java

```
----------------------------------------------------------------------------------------------
<a name="Message+sendSms"></a>
#### Message.sendSms(callback, sessionId, accessKey)

Метод для отправки Sms
 

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback  | <code>SCCallback<Boolean></code>|              | Коллбэк для выполняемого запроса. |     | 
| sessionId | <code>String</code>             |              | Идентификатор сессии              |     |
| accessKey | <code>String</code>             |              | Ключ доступа                      |     |

**Пример**   
```Java

```