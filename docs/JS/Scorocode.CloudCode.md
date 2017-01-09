<a name="sc.CloudCode"></a>

Содержание

* [.CloudCode](#sc.CloudCode)
    * [new CloudCode(id)](#new_sc.CloudCode_new)
    * [.run(pool, callbacks)](#sc.CloudCode+run) ⇒ <code>promise.{error: Boolean}</code>

----------------------------------------------------------------------------------------------

<a name="new_sc.CloudCode_new"></a>

## new CloudCode(id)

Класс для работы с серверным кодом

**Возвращает**: <code>[sc.CloudCode](#sc.CloudCode)</code> - Возвращает новый экземпляр sc.CloudCode

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| id | <code>String</code> | Обязательный | Идентификатор скрипта | "574860d2781267d34f7a2415" | 
| logger | <code>Object</code> | Необязательный | Объект sc.Logger для режима отладки | См. пример ниже |

**Пример**

```js
var newUserRegistration = new sc.CloudCode("574860d2781267d34f7a2415", {logger: new sc.Logger()});
```

----------------------------------------------------------------------------------------------

<a name="sc.CloudCode+run"></a>

## .run(pool, callbacks) 

Метод для запуска серверного кода

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| pool | <code>Object</code> | Необязательный | Объект с данными, которые будут переданы серверному коду | {"key": "value"} |
| debug | `Boolean` | Необязательный | Флаг включения режима отладки | true |
| callbacks | <code>Object</code> | Необязательный | Коллбэки success и error для выполняемого запроса | |

**Пример**

```js
// Подключим SDK и инициализируем его. 
var sc = require('scorocode');
sc.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения",
    ScriptKey: "scriptKey_приложения"
});

var Prompt = require('prompt');
Prompt.start();
Prompt.get(['email', 'password', 'username'], function (err, result) {
    // Создадим новый экземпляр запроса к серверному скрипту "574860d2781267d34f7a2415".
    var newUserRegistration = new sc.CloudCode("574860d2781267d34f7a2415", {logger: new sc.Logger()});
    // Определим данные, которые будут переданы скрипту при запуске
    var pool = {
        "email":result.email,
        "password":result.password,
        "username":result.username
    };
    // Запустим выполнение серверного кода
    newUserRegistration.run(pool, true)
        .then((success)=>{
            console.log(success);
        })
        .catch((error)=>{
            console.log(error)
        });
  });
```

**Возвращает**: <code>promise.{error: Boolean}</code> - Возвращает promise, который возвращает объект {error: false}.

**Исключения**:

- <code>String</code> 'Invalid type of pool'

----------------------------------------------------------------------------------------------

## Отладка

При использовании JavaScript SDK возможна отладка серверных скриптов. Для этого при инициализации библиотеки с помощью
<code>sc.Init({})</code> необходимо передать еще два ключа: <code>MasterKey</code> и <code>WebSocketKey</code>. Это связано с тем, что
консольный вывод выполняемого на сервере скрипта перенаправляется через websockets на вызывающего клиента.

Для включения режима отладки также необходимо создать объект <code>Logger</code>.

**Пример**

```js
// Подключим SDK и инициализируем его. 
var sc = require('scorocode');
sc.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения",
    ScriptKey: "scriptKey_приложения"
    MasterKey: "masterKey_приложения" // необходим для отладки
    WebSocketKey: "websocketKey_приложения" // необходим для отладки
});

var Prompt = require('prompt');
Prompt.start();
Prompt.get(['email', 'password', 'username'], function (err, result) {

// Создадим новый экземпляр запроса к серверному скрипту "574860d2781267d34f7a2415".
// Вторым параметром передаем вновь созданный объект Logger
var newUserRegistration = new sc.CloudCode("574860d2781267d34f7a2415", {logger: new sc.Logger()});

// Определим данные, которые будут переданы скрипту при запуске
var pool = {
    "email":result.email,
    "password":result.password,
    "username":result.username
};

// Запустим выполнение серверного кода
// Вторым параметром передаем true - включаем режим отладки
// Теперь если в скрипте написать console.log("Hello, Scorocode!"), это выведется в вашу консоль
newUserRegistration.run(pool, true)
    .then((success)=>{
        console.log(success);
    })
    .catch((error)=>{
        console.log(error)
    });
});
```
