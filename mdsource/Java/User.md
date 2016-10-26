<a name="User"></a>

### User
Класс для работы с пользователями приложения.

**Содержание**
* [User](#User)
    * [new User(name)](#User_new)
    * [.register(username, email,  password,  documentContent,  callback)](#User+register1) 
    * [.register(username, email, password, callback)](#User+register2)
    * [.login(email, password, callback)](#User+login)
    * [.logout(callback)](#User+logout)

----------------------------------------------------------------------------------------------

<a name="User_new"></a>

### new User()

Инициализация экземпляра класса User

**Пример** 
```Java
User appUser = new User();
```

----------------------------------------------------------------------------------------------
<a name="User+register1"></a>

### User.register(callback, username, email, password)

Метод для регистрации нового пользователя приложения (с возможностью добавления дополнительной информации о нем).

| Параметр  | Тип                              | Свойства     | Описание                         | Пример значения |
| --------- | -------------------------------- | ------------ | -------------------------------- | --------------- |
| username  | <code>String</code>              | Обязательный | Имя пользователя                 | "Username"                     | 
| email     | <code>String</code>              | Обязательный | Email пользователя               | "user@domain.zone"          | 
| password  | <code>String</code>              | Обязательный | Пароль пользователя              | "CorrectHorseBatteryStaple" |
| documentContent  | <code>DocumentInfo</code>  | Необязательный | Документ, ассоциированный с пользователем | doc.getDocumentContent() |
| callback  | <code>CallbackRegisterUser</code> | Обязательныйй | Callback, который будет вызван после выполнения запроса. |  см.пример ниже |


**Пример** 
```Java
ScorocodeSdk.initWith("applicationId", "cientKey");

Document doc = new Document("users");
doc.setField("city", "Moscow");
doc.setField("isPlaceAnyOrder", true);
User user = new User();
user.register("any_username", "anyemail@mailinator.com", "test1111", doc.getDocumentContent(), 

    new CallbackRegisterUser() {
            @Override
            public void onRegisterSucceed() {
                //user register succeed
            }

            @Override
            public void onRegisterFailed(String errorCode, String errorMessage) {
                //user regiser failed
                //See errorCode and errorMessage
            }
        });

```

----------------------------------------------------------------------------------------------
<a name="User+register2"></a>

### User.register(username, email, password, callback)

Метод для регистрации нового пользователя приложения

| Параметр  | Тип                              | Свойства     | Описание                         | Пример значения |
| --------- | -------------------------------- | ------------ | -------------------------------- | --------------- |
| username  | <code>String</code>              | Обязательный | Имя пользователя                 | "Jovan"                     | 
| email     | <code>String</code>              | Обязательный | Email пользователя               | "user@domain.zone"          | 
| password  | <code>String</code>              | Обязательный | Пароль пользователя              | "CorrectHorseBatteryStaple" |
| callback  | <code>CallbackRegisterUser</code> | Обязательныйй | Callback, который будет вызван после выполнения запроса. |  см.пример ниже |


**Пример** 
```Java
ScorocodeSdk.initWith("applicationId", "cientKey");

User user = new User();
user.register("any_username", "anyemail@gmail.com", "test1111", doc.getDocumentContent(), 
    new CallbackRegisterUser() {
            @Override
            public void onRegisterSucceed() {
                //user register succeed
            }

            @Override
            public void onRegisterFailed(String errorCode, String errorMessage) {
                //user regiser failed
        //See errorCode and errorMessage
            }
        });
```


----------------------------------------------------------------------------------------------
<a name="User+login"></a>

### login(email, password, callback)

Метод для аутентификации пользователя приложения

| Параметр  | Тип                              | Свойства     | Описание                         | Пример значения |
| --------- | -------------------------------- | ------------ | -------------------------------- | --------------- |
| email     | <code>String</code>              | Обязательный | Email пользователя               | "user@domain.zone" | 
| password  | <code>String</code>              | Обязательный | Пароль пользователя              | "CorrectHorseBatteryStaple" |
| callback  | <code>CallbackLoginUser</code> |  | Коллбэк для выполняемого запроса |  см.пример ниже  | 


**Пример** 
```Java
ScorocodeSdk.initWith("applicationId", "cientKey");

User user = new User();
user.login(“anymail@mail.com”, “any pass”, new CallbackLoginUser() {
            @Override
            public void onLoginSucceed(ResponseLogin responseLogin) {
                 //login succed. See returned responseLogin instance:
                 //which contain session id and user info   
            }

            @Override
            public void onLoginFailed(String errorCode, String errorMessage) {
                 //Login failed. 
          //See errorCode and errorMessage
            }
        });

```
----------------------------------------------------------------------------------------------
<a name="User+logout"></a>

### User.logout(callback)

Метод для завершения активноий сессии пользователя.

| Параметр  | Тип                              | Свойства     | Описание                         | Пример значения |
| --------- | -------------------------------- | ------------ | -------------------------------- | --------------- |
| callback  | <code>CallbackLogoutUser</code> | Обязательный | Callback, который будет вызван после выполнения запроса.   |       см.пример ниже          | 


**Пример** 
```Java
ScorocodeSdk.initWith("applicationId", "cientKey");

User user = new User();
user.logout(new CallbackLogoutUser() {
            @Override
            public void onLogoutSucceed() {
                //user logout succeed
            }

            @Override
            public void onLogoutFailed(String errorCode, String errorMessage) {
                //user logout failed
                //See errorCode and errorMessage
            }
        });

```
