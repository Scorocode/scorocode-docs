<a name="sc.User"></a>

Содержание

* [.User](#sc.User)
    * [new User()](#new_sc.User_new)
    * [.signup(options)](#sc.User+signup) ⇒ <code>[promise.&lt;sc.User&gt;](#sc.User)</code>
    * [.login(email, password, options)](#sc.User+login) ⇒ <code>[promise.&lt;sc.User&gt;](#sc.User)</code>
    * [.logout(options)](#sc.User+logout) 

----------------------------------------------------------------------------------------------

<a name="new_sc.User_new"></a>

## new User()
Класс для работы с пользователями приложения.

**Пример**  

```js
// Подключим SDK и инициализируем его. 
var sc = require('scorocode');
sc.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр sc.User
var appUser = new sc.User();
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

<a name="sc.User+signup"></a>

## .signup(options)
Метод для регистрации пользователей приложения. 

**Тип**: Метод <code>[sc.User](#sc.User)</code>  

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>Object</code>| | Коллбэки success и error для выполняемого запроса. |  |


**Пример**
```js
// Подключим SDK и инициализируем его. 
var sc = require('scorocode');
sc.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр sc.User
var appUser = new sc.User();
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

**Возвращает** <code>promise.{sc.User}</code> - возвращает promise, который возвращает данные sc.User

----------------------------------------------------------------------------------------------


<a name="sc.User+login"></a>

## .login(email, password, options)

Метод для аутентификации пользователя приложения и получения пользовательской сессии.

**Тип**: instance method of <code>[User](#sc.User)</code>  

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| email    | <code>String</code>| Обязательный | Email пользователя                                 | "user@domain.zone"          | 
| password | <code>String</code>| Обязательный | Пароль пользователя                                | "CorrectHorseBatteryStaple" |
| callback | <code>Object</code>|              | Коллбэки success и error для выполняемого запроса. |                             |

**Пример**
```js
// Подключим SDK и инициализируем его. 
var sc = require('scorocode');
sc.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр sc.User
var appUser = new sc.User();
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

**Возвращает** <code>promise.{sc.User}</code> - возвращает promise, который возвращает данные sc.User

----------------------------------------------------------------------------------------------

<a name="sc.User+logout"></a>

## .logout(options) 

Метод для деаутентификации пользователя приложения и удаления пользовательской сессии.

**Тип**: Метод <code>[sc.User](#sc.User)</code>  

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>Object</code>| | Коллбэки success и error для выполняемого запроса. |  |

**Пример**
```js
// Подключим SDK и инициализируем его. 
var sc = require('scorocode');
sc.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения",
});

// Создадим новый экземпляр sc.User
var appUser = new sc.User();
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



