## Получение статистики по приложению.

**https://api.scorocode.ru/api/v1/stat**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app"         : "", // идентификатор приложения, обязательный
    "cli"         : "", // клиентский ключ, обязательный
    "acc"         : ""  // ключ доступа, обязательный, только masterKey
}
```

**Ответы:**

*Выполнено*

```
{
    "error"       : false
    "results"     : {
        "dataSize"    : int, // Размер данных приложения, в байтах
        "indexSize"   : int, // "Размер" индексов приложения, в байтах
        "filesSize"   : int  // Размер файлов приложения, в байтах
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
    "acc": "2aceceec7d2e96b1121ec399f5afa101"
}' "https://api.scorocode.ru/api/v1/stat"
```