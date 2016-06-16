<a name="Scorocode.CloudCode"></a>

### Scorocode.CloudCode
Scorocode.CloudCode

**Содержание**

* [.CloudCode](#Scorocode.CloudCode)
    * [new CloudCode(id)](#new_Scorocode.CloudCode_new)
    * [.run(pool, callbacks)](#Scorocode.CloudCode+run) ⇒ <code>promise.{error: Boolean}</code>

<a name="new_Scorocode.CloudCode_new"></a>

#### new CloudCode(id)
Класс для работы с серверным кодом

**Возвращает**: <code>[Scorocode.CloudCode](#Scorocode.CloudCode)</code> - Возвращает новый экземпляр Scorocode.CloudCode

| Параметр | Тип | Описание |
| --- | --- | --- |
| id | <code>String</code> | Идентификатор скрипта |

----------------------------------------------------------------------------------------------

<a name="Scorocode.CloudCode+run"></a>

#### cloudCode.run(pool, callbacks) ⇒ <code>promise.{error: Boolean}</code>
Метод для запуска серверного кода

**Тип**: Метод <code>[CloudCode](#Scorocode.CloudCode)</code>  


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

**Возвращает**: <code>promise.{error: Boolean}</code> - Возвращает promise, который возращает объект {error: false}.

**Исключения**:

- <code>String</code> 'Invalid type of pool'

