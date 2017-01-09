## Отправка push на устройства.

**https://api.scorocode.ru/api/v1/sendpush**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```JSON
{
    "app"         : "", // идентификатор приложения, обязательный
    "cli"         : "", // клиентский ключ, обязательный
    "acc"         : "", // ключ доступа, обязательный, messageKey или для полного доступа masterKey
    "sess"        : "", // ID сессии, обязательный, если acc != masterKey
    "coll"        : "", // имя коллекции, обязательный; users, roles или devices
    "query"       : {}, // запрос в коллекцию devices для выборки адресатов с парами имя_поля/оператор:значение, необязательный
    "msg"         : {
        "text"        : "", // Текст сообщения, обязательный.
        "data"        : {
            "gcm": {        // Данные для передачи Android-устройствам, необязательно
                "protocol": "http",   // Протокол передачи 'http' || 'xmpp', необязательно
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
}
```

**Ответы:**

*Выполнено*

```JSON
{
    "count"       : int,       //Количество отправленных сообщений 
    "error"       : false
}
```

*Ошибка*

```JSON
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```bash
curl -X POST -H "Content-Type: application/json" -d '{
    "acc": "e9c6a65b9d6acd5043aeeasasd1e6dc3",
    "app": "5c46ec2f6f94aa92sd6ef831228ef14c",
    "cli": "86df1ce52d8sdftr61d632f1d6e15936",
    "sess": "",
    "debug": true,
    "coll": "devices",
    "query": {
        "deviceType": {
            "$eq": "android"
        }
    },
    "msg": {
        "text": "push",
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
    }
}' "https://api.scorocode.ru/api/v1/sendpush"
```

## Отправка sms на номера пользователей.

**https://api.scorocode.ru/api/v1/sendsms**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```JSON
{
    "app"         : "", // идентификатор приложения, обязательный
    "cli"         : "", // клиентский ключ, обязательный
    "acc"         : "", // ключ доступа, обязательный, messageKey или для полного доступа masterKey
    "sess"        : "", // ID сессии, обязательный, если acc != masterKey
    "coll"        : "", // имя коллекции, обязательный, users или roles
    "query"       : {}, // запрос в коллекцию users для выборки адресатов с парами имя_поля/оператор:значение, необязательный
    "msg"         : {
        "text"        : "" // Текст sms
    }
}
```

**Ответы:**

*Выполнено*

```JSON
{
    "count"       : int,       //Количество отправленных сообщений 
    "error"       : false
}
```

*Ошибка*

```JSON
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```bash
curl -X POST -H "Content-Type: application/json" -d '{
    "app": "db8a1b41b8543397a798a181d9891b4c",
    "cli": "ad6a8fe72ef7dfb9c46958aacb15196a",
    "acc": "fb33e473e08515ff6b57ef6f59392e5d",
    "sess": "rYgRe6xL2y8VccMJ",
    "coll": "users",
    "query": {
        "phone": {
            "$exists": true
        }
    },
    "msg": {
        "text": "Текст SMS"
    }
}' "https://api.scorocode.ru/api/v1/sendsms"
```