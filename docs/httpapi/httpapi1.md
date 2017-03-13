## Регистрация нового пользователя.

**https://api.scorocode.ru/api/v1/register**

Метод: `POST`

Заголовки: `Content-Type: application/json`

```JSON
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

!!! tip "Пример cURL"
    ```bash
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

**Ответы:**

!!! success "Выполнено"
    ```JSON
    {
        "error"       : false
    }
    ```

!!! failure "Ошибка"
    ```JSON
    {
        "error"       : true,
        "errCode"     : 4XX/5XX, // Код ошибки
        "errMsg"      : "Текст ошибки"
    }
    ```

---------------------------------------------------------------------------------------------------------------------------------


## Аутентификация пользователя.

**https://api.scorocode.ru/api/v1/login**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```JSON
{
    "app"         : "", // идентификатор приложения, обязательный
    "cli"         : "", // клиентский ключ, обязательный
    "email"       : "", // email, обязательный
    "password"    : "", // пароль, обязательный
}
```

!!! tip "Пример cURL"
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{
        "app": "db8a1b41b8543397a798a181d9891b4c",
        "cli": "ad6a8fe72ef7dfb9c46958aacb15196a",
        "email": "useremail@domain.zone",
        "password": "CorrectHorseStapleButton"
    }' "https://api.scorocode.ru/api/v1/login"
    ```

**Ответы:**

!!! success "Выполнено"
    ```JSON
    {
        "error"       : false,
        "result"      : {
            "sessionId"     : "", // ID сессии
            "user"          : {}  // Документ, содержащий пользователя
        }
    }
    ```

!!! failure "Ошибка"
    ```JSON
    {
        "error"       : true,
        "errCode"     : 4XX/5XX, // Код ошибки
        "errMsg"      : "Текст ошибки"
    }
    ```

---------------------------------------------------------------------------------------------------------------------------------


## Деаутентификация пользователя.

**https://api.scorocode.ru/api/v1/logout**

Метод: `POST`

Заголовки: `Content-Type: application/json`

```JSON
{
    "app"         : "", // идентификатор приложения, обязательный
    "cli"         : "", // клиентский ключ, обязательный
    "sess"        : ""  // ID сессии, обязательный
}
```

!!! tip "Пример cURL"
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{
        "app": "db8a1b41b8543397a798a181d9891b4c",
        "cli": "ad6a8fe72ef7dfb9c46958aacb15196a",
        "sess": "6rnbKKGvLLdU9Sl9"
    }' "https://api.scorocode.ru/api/v1/logout"
    ```

**Ответы:**

!!! success "Выполнено"
    ```JSON
    {
        "error"       : false
    }
    ```

!!! failure "Ошибка"
    ```JSON
    {
        "error"       : true,
        "errCode"     : 4XX/5XX, // Код ошибки
        "errMsg"      : "Текст ошибки"
    }
    ```

