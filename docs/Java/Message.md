<a name="Message"></a>

### Message

**Содержание**

* [Message](#Message)
    * [new Message(isDebugMode)](#Message_new)
    * [.sendPush(messagePush, query, callback)](#Message+sendPush1)
    * [.sendPush(messagePush, callback)](#Message+sendPush2)
    * [.sendSms(messageSms, query, callback)](#Message+sendSms1)
    * [.sendSms(messageSms, callback)](#Message+sendSms2)

----------------------------------------------------------------------------------------------

<a name="Message_new"></a>

### new Message(isDebugMode)

Конструктор Message

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| isDebugMode | Boolean | Необязательный | Флаг включения режима отладки | true |

```Java
Message message = new Message(true);
```


----------------------------------------------------------------------------------------------

<a name="Message+sendPush1"></a>
### .sendPush(messagePush, query, callback)
Метод для отправки push сообщения пользователю или группе пользователей

| Параметр     | Тип               | Свойства          | Описание                                                                                                | Пример значения |
| ------------ | ----------------- | ----------------- | ------------------------------------------------------------------------------------------------------- | --------------- |
| messagePush |  `MessagePush`     |  Обязательный    |  Объект, содержащий сообщение |  см.пример ниже |
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