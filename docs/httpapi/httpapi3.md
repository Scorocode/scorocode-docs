## Загрузка файла в хранилище.


**https://api.scorocode.ru/api/v1/upload**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app"         : "", // идентификатор приложения, обязательный
    "cli"         : "", // клиентский ключ, обязательный
    "acc"         : "", // ключ доступа, обязательный, fileKey или для полного доступа masterKey
    "sess"        : "", // ID сессии, обязательный, если acc != masterKey
    "coll"        : "", // имя коллекции, обязательный
    "docId"       : "", // ID документа, обязательный
    "field"       : "", // имя поля, обязательный
    "file"        : "", // имя файла, обязательный
    "content"     : ""  // т
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
    "acc": "8c23d74f447f63ce495cc8fd9ee4d543",
    "sess": "rYgRe6xL2y8VccMJ",
    "coll": "items",
    "docId": "Y3bET236FX",
    "field": "attachment",
    "file": "file.txt",
    "content": "VEhJUyBJUyBGSUxFLUUtRS1FLUUtRS1FIQ=="
}' "https://api.scorocode.ru/api/v1/upload"
```

## Получение файла редиректом.


**https://api.scorocode.ru/api/v1/getfile/{app}/{coll}/{field}/{docId}/{file}**

Метод: `GET`

Запрос:

```
https://api.scorocode.ru/api/v1/getfile/{app}/{coll}/{field}/{docId}/{file}
```

, где

```
    {app}     - идентификатор приложения, обязательный
    {coll}    - имя коллекции, обязательный
    {field}   - имя поля, обязательный
    {docId}   - идентификатор документа, обязательный
    {file}    - имя файла, обязательный
```

**Ответы:**

*Выполнено*

```
    Status: Status: 302 (Redirect на файл)
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
curl -X GET -H "Content-Type: application/json" "https://api.scorocode.ru/api/v1/getfile/db8a1b41b8543397a798a181d9891b4c/items/attachment/Y3bET236FX/file.txt"
```

## Удаление файла.

**https://api.scorocode.ru/api/v1/deletefile**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app"         : "", // идентификатор приложения, обязательный
    "cli"         : "", // клиентский ключ, обязательный
    "acc"         : "", // ключ доступа, обязательный, fileKey или для полного доступа masterKey
    "sess"        : "", // ID сессии, обязательный, если acc != masterKey
    "coll"        : "", // имя коллекции, обязательный
    "docId"       : "", // ID документа, обязательный
    "field"       : "", // имя поля, обязательный
    "file"        : ""  // имя файла, обязательный
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
    "acc": "8c23d74f447f63ce495cc8fd9ee4d543",
    "sess": "rYgRe6xL2y8VccMJ",
    "coll": "items",
    "docId": "Y3bET236FX",
    "field": "attachment",
    "file": "file.txt"
}' "https://api.scorocode.ru/api/v1/deletefile"
```