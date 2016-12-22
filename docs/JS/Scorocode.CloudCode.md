<a name="Scorocode.CloudCode"></a>

Содержание

* [.CloudCode](#Scorocode.CloudCode)
    * [new CloudCode(id)](#new_Scorocode.CloudCode_new)
    * [.run(pool, callbacks)](#Scorocode.CloudCode+run) ⇒ <code>promise.{error: Boolean}</code>

----------------------------------------------------------------------------------------------

<a name="new_Scorocode.CloudCode_new"></a>

## new CloudCode(id)

Класс для работы с серверным кодом

**Возвращает**: <code>[Scorocode.CloudCode](#Scorocode.CloudCode)</code> - Возвращает новый экземпляр Scorocode.CloudCode

| Параметр | Тип | Описание |
| --- | --- | --- |
| id | <code>String</code> | Идентификатор скрипта |

----------------------------------------------------------------------------------------------

<a name="Scorocode.CloudCode+run"></a>

## .run(pool, callbacks) 

Метод для запуска серверного кода

| Параметр | Тип | Описание |
| --- | --- | --- |
| pool | <code>Object</code> | Объект с данными, которые будут переданы серверному коду |
| callbacks | <code>Object</code> | Коллбэки success и error для выполняемого запроса |

**Пример**

```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения",
    ScriptKey: "scriptKey_приложения"
});

var Prompt = require('prompt');
Prompt.start();
Prompt.get(['email', 'password', 'username'], function (err, result) {
    // Создадим новый экземпляр запроса к серверному скрипту "574860d2781267d34f7a2415".
    var newUserRegistration = new Scorocode.CloudCode("574860d2781267d34f7a2415");
    // Определим данные, которые будут переданы скрипту при запуске
    var pool = {
        "email":result.email,
        "password":result.password,
        "username":result.username
    };
    // Запустим выполнение серверного кода
    newUserRegistration.run(pool)
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
<code>Scorocode.Init({})</code> необходимо передать еще два ключа: <code>MasterKey</code> и <code>WebSocketKey</code>. Это связано с тем, что
консольный вывод выполняемого на сервере скрипта перенаправляется через websockets на вызывающего клиента.

Для включения режима отладки также необходимо создать объект <code>Logger</code>.

**Пример**

```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
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
var newUserRegistration = new Scorocode.CloudCode("574860d2781267d34f7a2415", {logger: new Scorocode.Logger()});

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
