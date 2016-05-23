<a name="Scorocode.User"></a>

### Scorocode.User
Scorocode.User

**Тип**: Класс <code>[Scorocode](#Scorocode)</code>  

* [.User](#Scorocode.User)
    * [new User()](#new_Scorocode.User_new)
    * [.signup(options)](#Scorocode.User+signup) ⇒ <code>Response</code>
    * [.logout(options)](#Scorocode.User+logout) ⇒ <code>Response</code>
    * [.login(email, password, options)](#Scorocode.User+login) ⇒ <code>Response</code>

<a name="new_Scorocode.User_new"></a>

#### new User()
Класс для работы с пользователями приложения.

**Returns**: <code>[User](#Scorocode.User)</code> - Возвращает экземпляр Scorocode.User  
**Example**  
```js
var player = new Scorocode.User();
player.set("email", "Arrrr@mailinator.com").set("password", "password").set("username", "ArrrrPirate");
player.signup()
```
<a name="Scorocode.User+signup"></a>

#### user.signup(options) ⇒ <code>Response</code>
Метод для регистрации пользователей приложения.

**Тип**: instance method of <code>[User](#Scorocode.User)</code>  
**Returns**: <code>Response</code> - Возвращает Here be Dragons  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Опции обратного вызова |

**Example**  
```js
var player = new Scorocode.User();
player.set("email", "Arrrr@mailinator.com").set("password", "password").set("username", "ArrrrPirate");
player.signup()
```
<a name="Scorocode.User+logout"></a>

#### user.logout(options) ⇒ <code>Response</code>
Метод для деаутентификации пользователя приложения и удаления пользовательской сессии.

**Тип**: instance method of <code>[User](#Scorocode.User)</code>  
**Returns**: <code>Response</code> - Возвращает Here be Dragons  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Опции обратного вызова |

<a name="Scorocode.User+login"></a>

#### user.login(email, password, options) ⇒ <code>Response</code>
Метод для аутентификации пользователя приложения и получения пользовательской сессии.

**Тип**: instance method of <code>[User](#Scorocode.User)</code>  
**Returns**: <code>Response</code> - Возвращает Here be Dragons  

| Параметр | Тип | Описание |
| --- | --- | --- |
| email | <code>String</code> | Email пользователя |
| password | <code>String</code> | Пароль пользователя |
| options | <code>Object</code> | Опции обратного вызова |
