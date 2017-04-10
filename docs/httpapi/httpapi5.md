## Отправка задания на выполнение серверного скрипта.

**https://api.scorocode.ru/api/v1/scripts**

Метод: `POST`

Заголовки: `Content-Type: application/json`

```JSON
{
    "app"         : "",   // идентификатор приложения, обязательный
    "cli"         : "",   // клиентский ключ, обязательный
    "acc"         : "",   // ключ доступа, обязательный, scriptKey или для полного доступа masterKey
    "sess"        : "",   // Id сессии, обязательный если acc != masterKey
    "debug"       : bool, // флаг включения режима отладки, необязательный
    "script"      : "",   // Id скрипта, необязательный если isRunByPath = true
    "isRunByPath" : bool, // Флаг запуска серверного скрипта по его пути, необязательный
    "path"        : "",   // Путь до скрипта, необязательный
    "pool"        : {}    // пул данных для установки передачи в контекст скрипта, необязательный
}
```

!!! tip "Пример cURL - Вызов серверного скрипта по его Id"
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{
        "app": "db8a1b41b8543397a798a181d9891b4c",
        "cli": "ad6a8fe72ef7dfb9c46958aacb15196a",
        "acc": "28f06b89b62165c33de55265166d8781",
        "sess": "6rnbKKGvLLdU9Sl9",
        "script": "57484fb91c5666544db25675",
        "pool": {
            "collname": "items",
            "key": "exampleField",
            "val": "Сегодня 18 июня, и это день рождения Мюриэл! Мюриэл сейчас 20. С днём рождения, Мюриэл!"
        }
    }' "https://api.scorocode.ru/api/v1/scripts"
    ```

!!! tip "Пример cURL - Вызов серверного скрипта по его пути"
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{
        "app": "db8a1b41b8543397a798a181d9891b4c",
        "cli": "ad6a8fe72ef7dfb9c46958aacb15196a",
        "acc": "28f06b89b62165c33de55265166d8781",
        "sess": "6rnbKKGvLLdU9Sl9",
        "isRunByPath": true,
        "path": "/folder/script.js",
        "pool": {
            "collname": "items",
            "key": "exampleField",
            "val": "Сегодня 18 июня, и это день рождения Мюриэл! Мюриэл сейчас 20. С днём рождения, Мюриэл!"
        }
    }' "https://api.scorocode.ru/api/v1/scripts"
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

