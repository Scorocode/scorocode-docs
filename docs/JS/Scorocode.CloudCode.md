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
| id | `String` | Обязательный | Идентификатор скрипта | "574860d2781267d34f7a2415" |
| options | `Object` | Необязательный | Объект, содержащий опции запуска | См. пример ниже |

Свойства параметра `options`


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| isRunByPath | `Boolean` | необязательный | Флаг запуска скрипта по его пути | См. пример ниже | 
| logger | `Object` | Необязательный | Объект `sc.Logger` для режима отладки | См. пример ниже |


!!! tip "Пример - инициализация серверного скрипта по его id"
    ```js
    var newUserRegistration = new sc.CloudCode("574860d2781267d34f7a2415", {logger: new sc.Logger()});
    ```

!!! tip "Пример - инициализация серверного скрипта по его пути"
    ```js
    var newUserRegistration = new sc.CloudCode("/backend.js", {logger: new sc.Logger()});
    ```

!!! tip "Пример - инициализация серверного скрипта по его id для отладки"
    ```js
    var newUserRegistration = new sc.CloudCode("574860d2781267d34f7a2415", {logger: new sc.Logger()});
    ```

!!! tip "Пример - инициализация серверного скрипта по его пути для отладки"
    ```js
    var newUserRegistration = new sc.CloudCode("/backend.js", {isRunByPath: true, logger: new sc.Logger()});
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

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения",
        ScriptKey: "scriptKey_приложения"
    });

    var someScript = new sc.CloudCode("574860d2781267d34f7a2415", {logger: new sc.Logger()});
    // Определим данные, которые будут переданы скрипту при запуске
    var pool = {
        "key": "value",
        "counter": 42
    };

    // Запустим выполнение серверного кода
    someScript.run(pool, true)
        .then((success)=>{
            console.log(success);
        })
        .catch((error)=>{
            console.log(error)
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

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения",
        MasterKey: "masterKey_приложения" // необходим для отладки
        WebSocketKey: "websocketKey_приложения" // необходим для отладки
    });

    // Создадим новый экземпляр запроса к серверному скрипту "574860d2781267d34f7a2415".
    // Вторым параметром передаем вновь созданный объект Logger
    var someScript = new sc.CloudCode("574860d2781267d34f7a2415", {logger: new sc.Logger()});

    // Определим данные, которые будут переданы скрипту при запуске
    var pool = {
        "key": "value",
        "counter": 42
    };

    // Запустим выполнение серверного кода
    // Вторым параметром передаем true - включаем режим отладки
    // Теперь если в серверном скрипте написать console.log("Hello, Scorocode!"), то это выведется в вашу консоль
    someScript.run(pool, true)
        .then((success)=>{
            console.log(success);
        })
        .catch((error)=>{
            console.log(error)
        });
    });
    ```
