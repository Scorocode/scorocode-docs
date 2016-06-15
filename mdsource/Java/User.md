<a name="User"></a>

### User
User

**Содержание**
* [User](#User)
    * [new User(name)](#User_new)
    * [.register(callback, username, email, password)](#User+run)
    * [.login(callback, email, password)](#User+stat)
    * [.logout(callback, sessionId)](#User+stat)


<a name="User_new"></a>

### new User(name)

| Параметр | Тип | Описание |
| --- | --- | --- |
| name | <code>String</code> | Идентификатор объекта |

**Пример** 
```Java
User appUser = new User("user1");
```

----------------------------------------------------------------------------------------------
<a name="User+register"></a>

### User.register(callback, username, email, password) ⇒ void

Метод для регистрации нового пользователя приложения

| Параметр  | Тип                              | Свойства     | Описание                         | Пример значения |
| --------- | -------------------------------- | ------------ | -------------------------------- | --------------- |
| callback  | <code>SCCallback<RegistrationResponseEntity></code> |              | Коллбэк для выполняемого запроса |                 | 
| username  | <code>String</code>              | Обязательный | Имя пользователя                 | "Jovan"                     | 
| email     | <code>String</code>              | Обязательный | Email пользователя               | "user@domain.zone"          | 
| password  | <code>String</code>              | Обязательный | Пароль пользователя              | "CorrectHorseBatteryStaple" |

**Пример** 
**Пример** 
```Java
String username = username.getText().toString();
String email = email.getText().toString();
String password = password.getText().toString();

if (TextUtils.isEmpty(username) || TextUtils.isEmpty(email) || TextUtils.isEmpty(password)) {
    showToast("Пожалуйста, заполните все поля");
    return;
}
User appUser = new User("user1");
appUser.register(callback, username, email, password);
```
----------------------------------------------------------------------------------------------
<a name="User+login"></a>

### User.login(callback, email, password) ⇒ void

Метод для аутентификации пользователя приложения

| Параметр  | Тип                              | Свойства     | Описание                         | Пример значения |
| --------- | -------------------------------- | ------------ | -------------------------------- | --------------- |
| callback  | <code>SCCallback<LoginResponseEntity></code> |              | Коллбэк для выполняемого запроса |                 | 
| email     | <code>String</code>              | Обязательный | Email пользователя               | "user@domain.zone"          | 
| password  | <code>String</code>              | Обязательный | Пароль пользователя              | "CorrectHorseBatteryStaple" |

**Пример** 
```Java

```
----------------------------------------------------------------------------------------------
<a name="User+logout"></a>

### User.logout(callback, sessionId) ⇒ void

Метод для завершения активноий сессии пользователя.

| Параметр  | Тип                              | Свойства     | Описание                         | Пример значения |
| --------- | -------------------------------- | ------------ | -------------------------------- | --------------- |
| callback  | <code>SCCallback<Boolean></code> |              | Коллбэк для выполняемого запроса |                 | 
| sessionId  | <code>String</code>             | Обязательный | Идентификатор сессии             |                 | 

**Пример** 
```Java

```