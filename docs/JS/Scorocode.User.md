<a name="Scorocode.User"></a>

Содержание

* [.User](#Scorocode.User)
    * [new User()](#new_Scorocode.User_new)
    * [.signup(options)](#Scorocode.User+signup) ⇒ <code>[promise.&lt;Scorocode.User&gt;](#Scorocode.User)</code>
    * [.login(email, password, options)](#Scorocode.User+login) ⇒ <code>[promise.&lt;Scorocode.User&gt;](#Scorocode.User)</code>
    * [.logout(options)](#Scorocode.User+logout) 

----------------------------------------------------------------------------------------------

<a name="new_Scorocode.User_new"></a>

## new User()
Класс для работы с пользователями приложения.

**Пример**  

```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр Scorocode.User
var appUser = new Scorocode.User();
// Передадим данные, необходимые для регистрации пользователя приложения
appUser.set("email", "user@mailserver.domain").set("password", "52c7ab3dab2c").set("username", "ChosenOne");
// Зарегистрируем пользователя приложения
appUser.signup()
    // Обработчик успешного выполнения запроса
    .then((success)=>{
        // Выведем результат в консоль
        console.log(success);
    })
    // Обработчик ошибки
    .catch((error)=>{
        // Выведем результат в консоль    
        console.log(error)
    });
```

----------------------------------------------------------------------------------------------

<a name="Scorocode.User+signup"></a>

## .signup(options)
Метод для регистрации пользователей приложения. 

**Тип**: Метод <code>[Scorocode.User](#Scorocode.User)</code>  

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>Object</code>| | Коллбэки success и error для выполняемого запроса. |  |


**Пример**
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр Scorocode.User
var appUser = new Scorocode.User();
// Передадим данные, необходимые для регистрации пользователя приложения
appUser.set("email", "user@domain.zone").set("password", "CorrectHorseBatteryStaple").set("username", "ChosenOne");
// Зарегистрируем пользователя приложения
appUser.signup()
    // Обработчик успешного выполнения запроса
    .then((success)=>{
        // Выведем результат в консоль
        console.log(success);
    })
    // Обработчик ошибки
    .catch((error)=>{
        // Выведем результат в консоль    
        console.log(error)
    });
```

**Возвращает** <code>promise.{Scorocode.User}</code> - возвращает promise, который возвращает данные Scorocode.User

----------------------------------------------------------------------------------------------


<a name="Scorocode.User+login"></a>

## .login(email, password, options)

Метод для аутентификации пользователя приложения и получения пользовательской сессии.

**Тип**: instance method of <code>[User](#Scorocode.User)</code>  

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| email    | <code>String</code>| Обязательный | Email пользователя                                 | "user@domain.zone"          | 
| password | <code>String</code>| Обязательный | Пароль пользователя                                | "CorrectHorseBatteryStaple" |
| callback | <code>Object</code>|              | Коллбэки success и error для выполняемого запроса. |                             |

**Пример**
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр Scorocode.User
var appUser = new Scorocode.User();
// Аутентифицируем пользователя приложения, используя его email и password
appUser.login("user@domain.zone", "CorrectHorseBatteryStaple")
    // Обработчик успешного выполнения запроса
    .then((loggedIn)=>{
        console.log("Пользователь приложения аутентифицирован: \n", loggedIn);
        // Установим время сессии - 10000 мс.
        setTimeout( function () {
        	// Деаутентифицируем пользователя приложения
            appUser.logout()
                // Обработчик успешного выполнения запроса
                .then((loggedOut)=>{
                    console.log("Пользователь приложения деаутентифицирован \n");
                })
                // Обработчик ошибки
                .catch((errLogout)=>{
                    console.log(errLogout)
                });
            },10000);
    })
	// Обработчик ошибки
    .catch((errLogin)=>{
        console.log(errLogin)
    });
```

**Возвращает** <code>promise.{Scorocode.User}</code> - возвращает promise, который возвращает данные Scorocode.User

----------------------------------------------------------------------------------------------

<a name="Scorocode.User+logout"></a>

## .logout(options) 

Метод для деаутентификации пользователя приложения и удаления пользовательской сессии.

**Тип**: Метод <code>[Scorocode.User](#Scorocode.User)</code>  

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>Object</code>| | Коллбэки success и error для выполняемого запроса. |  |

**Пример**
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения",
});

// Создадим новый экземпляр Scorocode.User
var appUser = new Scorocode.User();
// Аутентифицируем пользователя приложения, используя его email и password
appUser.login("user@domain.zone", "CorrectHorseBatteryStaple")
    // Обработчик успешного выполнения запроса
    .then((loggedIn)=>{
        console.log("Пользователь приложения аутентифицирован: \n", loggedIn);
        // Установим время сессии - 10000 мс.
        setTimeout( function () {
            // Деаутентифицируем пользователя приложения
            appUser.logout()
                // Обработчик успешного выполнения запроса
                .then((loggedOut)=>{
                    console.log("Пользователь приложения деаутентифицирован \n");
                })
                // Обработчик ошибки
                .catch((errLogout)=>{
                    console.log(errLogout)
                });
            },10000);
    })
    // Обработчик ошибки
    .catch((errLogin)=>{
        console.log(errLogin)
    });
```



