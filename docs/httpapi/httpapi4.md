## Отправка email пользователям.

**https://api.scorocode.ru/api/v1/sendemail**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app"         : "", // идентификатор приложения, обязательный
    "cli"         : "", // клиентский ключ, обязательный
    "acc"         : "", // ключ доступа, обязательный, messageKey или для полного доступа masterKey
    "sess"        : "", // ID сессии, обязательный, если acc != masterKey
    "coll"        : "", // имя коллекции, обязательный, "users" или "roles"
    "query"       : {}, // запрос в коллекцию users для выборки адресатов с парами имя_поля/оператор:значение, необязательный
    "msg"         : {
        "subject"     : "", // Тема письма
        "text"        : "", // Текст письма
        "from"        : ""  // Имя отправителя
    }
}
```

**Ответы:**

*Выполнено*

```
{
    "count"       : int       //Количество отправленных сообщений 
    "error"       : false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
    "app": "db8a1b41b8543397a798a181d9891b4c",
    "cli": "ad6a8fe72ef7dfb9c46958aacb15196a",
    "acc": "fb33e473e08515ff6b57ef6f59392e5d",
    "sess": "rYgRe6xL2y8VccMJ",
    "coll": "roles",
    "msg": {
        "subject": "Тема письма",
        "text": "Текст письма",
        "from": "Отправитель"
    }
}' "https://api.scorocode.ru/api/v1/sendemail"
```

## Отправка push на устройства.

**https://api.scorocode.ru/api/v1/sendpush**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app"         : "", // идентификатор приложения, обязательный
    cli         : "", // клиентский ключ, обязательный
    "acc"         : "", // ключ доступа, обязательный, messageKey или для полного доступа masterKey
    sess        : "", // ID сессии, обязательный, если acc != masterKey
    "coll"        : "", // имя коллекции, обязательный, "users", "roles" или "devices"
    "query"       : {}, // запрос в коллекцию devices для выборки адресатов с парами имя_поля/оператор:значение, необязательный
    "msg"         : {
        "text"        : "", // Текст сообщения
        "data"        : { } // объект с передаваемыми данными
    }
}
```

**Ответы:**

*Выполнено*

```
{
    "count"       : int       //Количество отправленных сообщений 
    "error"       : false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
    "app": "db8a1b41b8543397a798a181d9891b4c",
    "cli": "ad6a8fe72ef7dfb9c46958aacb15196a",
    "acc": "fb33e473e08515ff6b57ef6f59392e5d",
    "sess": "rYgRe6xL2y8VccMJ",
    "coll": "devices",
    "query": {
        "userId": {
            "$exists": true
        }
    },
    "msg": {
        "text": "Текст PUSH"
    }
}' "https://api.scorocode.ru/api/v1/sendpush"
```

## Отправка sms на номера пользователей.

**https://api.scorocode.ru/api/v1/sendsms**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app"         : "", // идентификатор приложения, обязательный
    "cli"         : "", // клиентский ключ, обязательный
    "acc"         : "", // ключ доступа, обязательный, messageKey или для полного доступа masterKey
    "sess"        : "", // ID сессии, обязательный, если acc != masterKey
    "coll"        : "", // имя коллекции, обязательный, "users" или "roles"
    "query"       : {}, // запрос в коллекцию users для выборки адресатов с парами имя_поля/оператор:значение, необязательный
    "msg"         : {
        "text"        : "", // Текст sms
    }
}
```

**Ответы:**

*Выполнено*

```
{
    "count"       : int       //Количество отправленных сообщений 
    "error"       : false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
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