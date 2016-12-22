<a name="Message"></a>

### Message
Message

**Содержание**

* [Message](#Message)
    * [new Message(from, subject, text)](#Message_new)
    * [.sendEmail(messageEmail, query, callback)](#Message+sendEmail1)
    * [.sendEmail(messageEmail, callback)](#Message+sendEmail2)
    * [.sendPush(messagePush, query, callback)](#Message+sendPush1)
    * [.sendPush(messagePush, callback)](#Message+sendPush2)
    * [.sendSms(messageSms, query, callback)](#Message+sendSms1)
    * [.sendSms(messageSms, callback)](#Message+sendSms2)

----------------------------------------------------------------------------------------------

<a name="Message_new"></a>

Конструктор Message

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| from    | `String` |  Необязательный     | Отправитель сообщения | "Any name" | 
| subject  | `String`|   Необязательный    | Тема письма                                    | "С днем рождения"            |
| text     | `String`|   Необязательный    | Текст письма                                   | "Сегодня 18 июня, и это день рождения Мюриэл! Мюриэл сейчас 20. С днём рождения, Мюриэл!" |

```Java
MessageEmail messageEmail = new MessageEmail("Any name", "Any subject", "Any text");
```

----------------------------------------------------------------------------------------------

<a name="Message+sendEmail1"></a>
### .sendEmail(messageEmail, query, callback)
Метод для отправки email сообщения пользователю или группе пользователей

| Параметр     | Тип               | Свойства          | Описание                                                                                                | Пример значения |
| ------------ | ----------------- | ----------------- | ------------------------------------------------------------------------------------------------------- | --------------- |
| messageEmail |  `MessageEmail`     |  Обязательный     |  Объект, содержащий сообщение                                                                           |  см.пример ниже |
| query        | `Query`             |  Необязательный   |  Объект, содержащий условия по которым будет выбран пользователь или группа пользователей для отправки. |  см.пример ниже |
| callback     | `CallbackSendEmail` |  Обязательный     |   Callback, который будет вызван после выполнения запроса.                                              |  см.пример ниже |


```Java
MessageEmail messageEmail = new MessageEmail("Any name", "Any subject", "Any text");

Query query = new Query("USERS");
query.equalTo("_id", "XukL1FrVoL");

Message message = new Message();
message.sendEmail(messageEmail, query, new CallbackSendEmail() {
            @Override
            public void onEmailSend() {
                //email send
            }

            @Override
            public void onEmailSendFailed(String errorCode, String errorMessage) {
                //error during sending
            }
        });
```

----------------------------------------------------------------------------------------------

<a name="Message+sendEmail2"></a>
### .sendEmail(messageEmail, callback)
Метод для отправки email сообщения пользователю или группе пользователей

| Параметр     | Тип               | Свойства          | Описание                                                                                                | Пример значения |
| ------------ | ----------------- | ----------------- | ------------------------------------------------------------------------------------------------------- | --------------- |
| messageEmail |  `MessageEmail`      |  Обязательный     |  Объект, содержащий сообщение                                                                           |  см.пример ниже |
| callback     | `CallbackSendEmail` |  Обязательный     |   Callback, который будет вызван после выполнения запроса.                                              |  см.пример ниже |


```Java
MessageEmail messageEmail = new MessageEmail("Any name", "Any subject", "Any text");
 
Message message = new Message();
message.sendEmail(messageEmail, new CallbackSendEmail() {
            @Override
            public void onEmailSend() {
                //email send
            }

            @Override
            public void onEmailSendFailed(String errorCode, String errorMessage) {
                //error during sending
            }
        });

```


----------------------------------------------------------------------------------------------

<a name="Message+sendPush1"></a>
### .sendPush(messagePush, query, callback)
Метод для отправки push сообщения пользователю или группе пользователей

| Параметр     | Тип               | Свойства          | Описание                                                                                                | Пример значения |
| ------------ | ----------------- | ----------------- | ------------------------------------------------------------------------------------------------------- | --------------- |
| messagePush |  `MessagePush`     |  Обязательный     |  Объект, содержащий сообщение                                                                           |  см.пример ниже |
| query        | `Query`             |  Необязательный   |  Объект, содержащий условия по которым будет выбран пользователь или группа пользователей для отправки. |  см.пример ниже |
| callback     | `CallbackSendPush` |  Обязательный     |   Callback, который будет вызван после выполнения запроса.                                              |  см.пример ниже |


```Java
MessagePush messagePush = new MessagePush("Any text", null);

Query query = new Query("USERS");
query.equalTo("_id", "XukL1FrVoL");

Message message = new Message();
message.sendPush(messagePush, query, new CallbackSendPush() {
            @Override
            public void onPushSended() {
                //push send
            }

            @Override
            public void onPushSendFailed(String errorCode, String errorMessage) {
                //error during sending
            }
        });
```

----------------------------------------------------------------------------------------------

<a name="Message+sendPush2"></a>
### .sendPush(messagePush, callback)
Метод для отправки push сообщения пользователю или группе пользователей

| Параметр     | Тип               | Свойства          | Описание                                                                                                | Пример значения |
| ------------ | ----------------- | ----------------- | ------------------------------------------------------------------------------------------------------- | --------------- |
| messagePush |  `MessagePush`     |  Обязательный     |  Объект, содержащий сообщение                                                                           |  см.пример ниже |
| callback     | `CallbackSendPush` |  Обязательный     |   Callback, который будет вызван после выполнения запроса.                                              |  см.пример ниже |


```Java
MessagePush messagePush = new MessagePush("Any text", null);

Query query = new Query("USERS");
query.equalTo("_id", "XukL1FrVoL");

Message message = new Message();
message.sendPush(messagePush, query, new () {
            @Override
            public void onPushSended() {
                //push send
            }

            @Override
            public void onPushSendFailed(String errorCode, String errorMessage) {
                //error during sending
            }
        });
```

----------------------------------------------------------------------------------------------

<a name="Message+sendSms1"></a>
### .sendSms(messageSms, query, callback)
Метод для отправки sms сообщения пользователю или группе пользователей

| Параметр     | Тип               | Свойства          | Описание                                                                                                | Пример значения |
| ------------ | ----------------- | ----------------- | ------------------------------------------------------------------------------------------------------- | --------------- |
| messageSms   |  `messageSms`     |  Обязательный     |  Объект, содержащий сообщение                                                                           |  см.пример ниже |
| query        | `Query`             |  Необязательный   |  Объект, содержащий условия по которым будет выбран пользователь или группа пользователей для отправки. |  см.пример ниже |
| callback     | `CallbackSendSms` |  Обязательный     |   Callback, который будет вызван после выполнения запроса.                                              |  см.пример ниже |


```Java
MessageSms messageSms = new MessageSms("Hello world");

Query query = new Query("USERS");
query.equalTo("_id", "XukL1FrVoL");

message.sendSms(messageSms, query, new CallbackSendSms() {
            @Override
            public void onSmsSended() {
                //sms send
            }

            @Override
            public void onSmsSendFailed(String errorCode, String errorMessage) {
                //error during sending
            }
        });

```


----------------------------------------------------------------------------------------------

<a name="Message+sendSms2"></a>
### .sendSms(messageSms, callback)
Метод для отправки sms сообщения пользователю или группе пользователей

| Параметр     | Тип               | Свойства          | Описание                                                                                                | Пример значения |
| ------------ | ----------------- | ----------------- | ------------------------------------------------------------------------------------------------------- | --------------- |
| messageSms   |  `messageSms`     |  Обязательный     |  Объект, содержащий сообщение                                                                           |  см.пример ниже |
| callback     | `CallbackSendSms` |  Обязательный     |   Callback, который будет вызван после выполнения запроса.                                              |  см.пример ниже |


```Java
MessageSms messageSms = new MessageSms("Hello world");
message.sendSms(messageSms, new CallbackSendSms() {
            @Override
            public void onSmsSended() {
                //sms send
            }

            @Override
            public void onSmsSendFailed(String errorCode, String errorMessage) {
                //error during sending
            }
        });
```