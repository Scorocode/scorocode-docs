## Регистрация нового пользователя.

**https://api.scorocode.ru/api/v1/register**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app"         : "", // идентификатор приложения, обязательный
    "cli"         : "", // клиентский ключ, обязательный
    "acc"         : "", // ключ доступа, необязательный, для полного доступа masterKey
    "username"    : "", // имя пользователя, обязательный, минимум 5 символов
    "email"       : "", // email, обязательный
    "password"    : "", // пароль, обязательный, минимум 6 символов
    "doc"         : { } // значения пользовательских полей в коллекции 'users', необязательный
}
```

**Ответы:**

*Выполнено*

```
{
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
    "username": "username",
    "email": "useremail@domain.zone",
    "password": "CorrectHorseStapleButton",
    "doc": {
        "exampleField": "Сегодня 18 июня, и это день рождения Мюриэл! Мюриэл сейчас 20. С днём рождения, Мюриэл!",
        "anotherExampleField": "Не знаю, что и сказать. Когда-то я хотел быть астрофизиком. К сожалению, это правда."
    }
}
' "https://api.scorocode.ru/api/v1/register"
```

## Аутентификация пользователя.

**https://api.scorocode.ru/api/v1/login**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app"         : "", // идентификатор приложения, обязательный
    "cli"         : "", // клиентский ключ, обязательный
    "email"       : "", // email, обязательный
    "password"    : "", // пароль, обязательный
}
```

**Ответы:**

*Выполнено*

```
{
    "error"       : false,
    "result"      : {
        "sessionId"     : "", // ID сессии
        "user"          : {}  // Документ, содержащий пользователя
    }
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
    "email": "useremail@domain.zone",
    "password": "CorrectHorseStapleButton"
}' "https://api.scorocode.ru/api/v1/login"
```

## Деаутентификация пользователя.

**https://api.scorocode.ru/api/v1/logout**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app"         : "", // идентификатор приложения, обязательный
    "cli"         : "", // клиентский ключ, обязательный
    "sess"        : ""  // ID сессии, обязательный
}
```

**Ответы:**

*Выполнено*

```
{
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
    "sess": "6rnbKKGvLLdU9Sl9"
}' "https://api.scorocode.ru/api/v1/logout"
```