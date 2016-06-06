<a name="SCUser"></a>

### SCUser
SCUser

Класс для работы с серверными скриптами приложения

**Тип**: Класс <code>SCObject</code>  

* [SCUser](#SCUser)
    * [init()](#SCUser+init)
    * [.login(email, password, callback)](#SCUser+login)
    * [.logout(callback)](#SCScript+logout)
    * [.signup(callback)](#SCScript+signup)
    * [.signup(username, email, password, callback)](#SCScript+signup2)

<a name="SCUser+init"></a>
#### init()
Инициализация SCUser

**Пример**
```SWIFT
let appUser = SCUser()
```

----------------------------------------------------------------------------------------------
<a name="SCUser+login"></a>
#### SCUser.login(email, password, callback)
Метод для аутентификации пользователя приложения


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| email    | <code>String</code>                                         | Обязательный | Email пользователя                 | "user@domain.zone"          | 
| password | <code>String</code>                                         | Обязательный | Пароль пользователя                | "CorrectHorseBatteryStaple" |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |              | Коллбэки для выполняемого запроса. |                             |

**Пример**   
```SWIFT

```

----------------------------------------------------------------------------------------------
<a name="SCUser+logout"></a>
#### SCUser.logout(callback)
Метод для деутентификации пользователя приложения


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |              | Коллбэки для выполняемого запроса. |                             |

**Пример**   
```SWIFT

```

----------------------------------------------------------------------------------------------
<a name="SCUser+signup"></a>
#### SCUser.signup(callback)
Метод для регистрации пользователя приложения. Поля устанавливаются методами родительского класса Object.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |              | Коллбэки для выполняемого запроса. |                             |

**Пример**   
```SWIFT

```

----------------------------------------------------------------------------------------------
<a name="SCUser+signup2"></a>
#### SCUser.signup(username, email, password, callback)
Метод для регистрации пользователя приложения.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| username | <code>String</code>                                         | Обязательный | Имя пользователя                   | "Jovan"                     | 
| email    | <code>String</code>                                         | Обязательный | Email пользователя                 | "user@domain.zone"          | 
| password | <code>String</code>                                         | Обязательный | Пароль пользователя                | "CorrectHorseBatteryStaple" |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |              | Коллбэки для выполняемого запроса. |                             |


**Пример**   
```SWIFT

```