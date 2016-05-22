<a name="Scorocode"></a>

## Scorocode : <code>ItWorks</code>
Без "ItWorks" не работает генерация документации

**Kind**: global variable  

* [Scorocode](#Scorocode) : <code>ItWorks</code>
    * _instance_
        * [.Init Инициализация SDK(opt)](#Scorocode+Init Инициализация SDK)
    * _static_
        * [.Object](#Scorocode.Object)
            * [new Object(collName)](#new_Scorocode.Object_new)
            * [.getById(_id, options)](#Scorocode.Object+getById) ⇒ <code>[Promise.&lt;Object&gt;](#Scorocode.Object)</code>
            * [.get(key)](#Scorocode.Object+get) ⇒ <code>promise.&lt;value&gt;</code>
            * [.getFileLink(field)](#Scorocode.Object+getFileLink) ⇒ <code>String</code>
            * [.uploadFile(field, filename, file, options)](#Scorocode.Object+uploadFile) ⇒ <code>promise.&lt;Object&gt;</code>
            * [.save(options)](#Scorocode.Object+save) ⇒ <code>[Object](#Scorocode.Object)</code>
            * [.remove(options)](#Scorocode.Object+remove) ⇒ <code>Object</code>
            * [.extend(collName, childObject)](#Scorocode.Object+extend) ⇒ <code>Object</code>
            * [.set(data)](#Scorocode.Object+set)
            * [.push(key, value)](#Scorocode.Object+push) ⇒ <code>Object</code>
            * [.pull(key, value)](#Scorocode.Object+pull) ⇒ <code>Object</code>
            * [.pullAll(key, value)](#Scorocode.Object+pullAll) ⇒ <code>Object</code>
            * [.addToSet(key, value)](#Scorocode.Object+addToSet) ⇒ <code>Object</code>
            * [.pop(key, pos)](#Scorocode.Object+pop) ⇒ <code>Object</code>
            * [.inc(key, amount)](#Scorocode.Object+inc)
            * [.currentDate()](#Scorocode.Object+currentDate)
            * [.mul(key, number)](#Scorocode.Object+mul)
            * [.min()](#Scorocode.Object+min)
            * [.max()](#Scorocode.Object+max)
        * [.User](#Scorocode.User)
            * [new User()](#new_Scorocode.User_new)
            * [.signup(options)](#Scorocode.User+signup) ⇒ <code>Response</code>
            * [.logout(options)](#Scorocode.User+logout) ⇒ <code>Response</code>
            * [.login(email, password, options)](#Scorocode.User+login) ⇒ <code>Response</code>
        * [.Query](#Scorocode.Query)
            * [new Query(collName)](#new_Scorocode.Query_new)
            * [.find(options)](#Scorocode.Query+find) ⇒ <code>Object</code>
            * [.count(options)](#Scorocode.Query+count) ⇒ <code>Object</code>
            * [.update(Object, options)](#Scorocode.Query+update) ⇒ <code>Object</code>
            * [.remove(options)](#Scorocode.Query+remove) ⇒ <code>Object</code>
            * [.reset()](#Scorocode.Query+reset) ⇒ <code>Object</code>
            * [.equalTo(field, value)](#Scorocode.Query+equalTo) ⇒ <code>Object</code>
            * [.notEqualTo(field, value)](#Scorocode.Query+notEqualTo) ⇒ <code>Object</code>
            * [.containedIn(field, value)](#Scorocode.Query+containedIn) ⇒ <code>Object</code>
            * [.containsAll(field, value)](#Scorocode.Query+containsAll) ⇒ <code>Object</code>
            * [.notContainedIn(field, value)](#Scorocode.Query+notContainedIn) ⇒ <code>Object</code>
            * [.greaterThan(field, value)](#Scorocode.Query+greaterThan) ⇒ <code>Object</code>
            * [.greaterThanOrEqualTo(field, value)](#Scorocode.Query+greaterThanOrEqualTo) ⇒ <code>Object</code>
            * [.lessThan(field, value)](#Scorocode.Query+lessThan) ⇒ <code>Object</code>
            * [.lessThanOrEqualTo(field, value)](#Scorocode.Query+lessThanOrEqualTo) ⇒ <code>Object</code>
            * [.exists(field)](#Scorocode.Query+exists) ⇒ <code>Object</code>
            * [.doesNotExist(field)](#Scorocode.Query+doesNotExist) ⇒ <code>Object</code>
            * [.contains(field, value)](#Scorocode.Query+contains) ⇒ <code>Object</code>
            * [.startsWith(field, value)](#Scorocode.Query+startsWith) ⇒ <code>Object</code>
            * [.endsWith(field, value)](#Scorocode.Query+endsWith) ⇒ <code>Object</code>
            * [.limit(Limit)](#Scorocode.Query+limit) ⇒ <code>Object</code>
            * [.skip(skip)](#Scorocode.Query+skip) ⇒ <code>Object</code>
            * [.page(page)](#Scorocode.Query+page) ⇒ <code>Object</code>
            * [.ascending(field)](#Scorocode.Query+ascending) ⇒ <code>Object</code>
            * [.descending(field)](#Scorocode.Query+descending) ⇒ <code>Object</code>
            * [.or(query)](#Scorocode.Query+or) ⇒ <code>Object</code>
            * [.and(query)](#Scorocode.Query+and) ⇒ <code>Object</code>
            * [.select()](#Scorocode.Query+select) ⇒ <code>Object</code>
            * [.raw(filter)](#Scorocode.Query+raw) ⇒ <code>Object</code>
        * [.CloudCode](#Scorocode.CloudCode)
            * [new CloudCode(id)](#new_Scorocode.CloudCode_new)
            * [.run(pool, callbacks)](#Scorocode.CloudCode+run) ⇒ <code>promise</code>
        * [.Messenger](#Scorocode.Messenger)
            * [new Messenger()](#new_Scorocode.Messenger_new)
            * [.sendEmail(options, callbacks)](#Scorocode.Messenger+sendEmail) ⇒ <code>Object</code>
            * [.sendPush(options, callbacks)](#Scorocode.Messenger+sendPush) ⇒ <code>Object</code>
            * [.sendSms(options, callbacks)](#Scorocode.Messenger+sendSms) ⇒ <code>Object</code>
        * [.UpdateOps](#Scorocode.UpdateOps)
            * [new UpdateOps()](#new_Scorocode.UpdateOps_new)

<a name="Scorocode+Init Инициализация SDK"></a>

### scorocode.Init Инициализация SDK(opt)
Базовый класс для работы с SDK

**Kind**: instance method of <code>[Scorocode](#Scorocode)</code>  

| Param | Type | Description |
| --- | --- | --- |
| opt | <code>Object</code> | Ключи для инциализации: идентификатор приложения, клиентский ключ вашей платформы и необходимые вам ключи доступа. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| ApplicationID | <code>String</code> | Идентификатор приложения |
| JavaScriptKey | <code>String</code> | Клиентский ключ для платформы JavaScript |
| AndroidKey | <code>String</code> | Клиентский ключ для платформы Android |
| iOsKey | <code>String</code> | Клиентский ключ для платформы iOs |
| WinPhoneKey | <code>String</code> | Клиентский ключ для платформы WindowsPhone |
| FileKey | <code>String</code> | Ключ авторизации для доступа к файлам |
| ScriptKey | <code>String</code> | Ключ авторизации для запуска серверных скриптов |
| MessageKey | <code>String</code> | Ключ авторизации для отправки сообщений |
| MasterKey | <code>String</code> | Мастер-ключ |

**Example**  
```js
{
Scorocode.Init({
   		ApplicationID: "a3d04e75e157b2f7ae20c2fce02f63d6",
   		JavaScriptKey: "ad6a8fe72ef7dfb9c46958aacb15196a",
  		FileKey: "2aceceec7d2e96b1487ec399f5afa101",
 		MessageKey: "e215ed465646775b42d65cca2d2f5db9"
		});}
```
<a name="Scorocode.Object"></a>

### Scorocode.Object
Scorocode.Object

**Kind**: static class of <code>[Scorocode](#Scorocode)</code>  
**See**

- [set](#Scorocode.Object+set)
- [save](#Scorocode.Object+save)


* [.Object](#Scorocode.Object)
    * [new Object(collName)](#new_Scorocode.Object_new)
    * [.getById(_id, options)](#Scorocode.Object+getById) ⇒ <code>[Promise.&lt;Object&gt;](#Scorocode.Object)</code>
    * [.get(key)](#Scorocode.Object+get) ⇒ <code>promise.&lt;value&gt;</code>
    * [.getFileLink(field)](#Scorocode.Object+getFileLink) ⇒ <code>String</code>
    * [.uploadFile(field, filename, file, options)](#Scorocode.Object+uploadFile) ⇒ <code>promise.&lt;Object&gt;</code>
    * [.save(options)](#Scorocode.Object+save) ⇒ <code>[Object](#Scorocode.Object)</code>
    * [.remove(options)](#Scorocode.Object+remove) ⇒ <code>Object</code>
    * [.extend(collName, childObject)](#Scorocode.Object+extend) ⇒ <code>Object</code>
    * [.set(data)](#Scorocode.Object+set)
    * [.push(key, value)](#Scorocode.Object+push) ⇒ <code>Object</code>
    * [.pull(key, value)](#Scorocode.Object+pull) ⇒ <code>Object</code>
    * [.pullAll(key, value)](#Scorocode.Object+pullAll) ⇒ <code>Object</code>
    * [.addToSet(key, value)](#Scorocode.Object+addToSet) ⇒ <code>Object</code>
    * [.pop(key, pos)](#Scorocode.Object+pop) ⇒ <code>Object</code>
    * [.inc(key, amount)](#Scorocode.Object+inc)
    * [.currentDate()](#Scorocode.Object+currentDate)
    * [.mul(key, number)](#Scorocode.Object+mul)
    * [.min()](#Scorocode.Object+min)
    * [.max()](#Scorocode.Object+max)

<a name="new_Scorocode.Object_new"></a>

#### new Object(collName)
Scorocode.Object представляет объект данных приложения и включает методы для работы с этими данными. Конструктор формирует минимальную базовую "обёртку" для пользовательских данных.

**Throws**:

- <code>String</code> "Invalid collection name" - некорректно указано имя коллекции


| Param | Type | Description |
| --- | --- | --- |
| collName | <code>String</code> | Имя коллекции в которую добавляется объект |

**Example**  
```js
// Создадим новый объект коллекции items.
var questItem = new Scorocode.Object("items"); 
// Используем метод set() для передачи объекту данных name и 
questItem.set("name", "Водяной чип").set("quest", "Sd4OyACUy2"); 
// Используем метод save() для записи объекта в базу данных приложения
questItem.save();
```
<a name="Scorocode.Object+getById"></a>

#### object.getById(_id, options) ⇒ <code>[Promise.&lt;Object&gt;](#Scorocode.Object)</code>
Метод для получения объекта по его идентификатору

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Returns**: <code>[Promise.&lt;Object&gt;](#Scorocode.Object)</code> - Возвращает promise, который возвращает запрошенный объект.  
**Throws**:

- <code>String</code> "Document not found" - объект не найден

**See**: [Object](#Scorocode.Object)  

| Param | Type | Description |
| --- | --- | --- |
| _id | <code>String</code> | Идентификатор объекта |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Example**  
```js
// Создадим новый объект коллекции items.
var getItem = new Scorocode.Object("items");
// Запросим интересующий нас объект по его _id
getItem.getById("kljQ1Oodqp")
// Обработчик успешного выполнения запроса
    .then((itWorked) => {
         console.log("Вот что мы нашли: \n", itWorked);
     })
// Обработчик ошибки
    .catch((itFailed) => {
         console.log("Что-то пошло не так: \n", itFailed)
    });
```
<a name="Scorocode.Object+get"></a>

#### object.get(key) ⇒ <code>promise.&lt;value&gt;</code>
Метод для получения данных указанного поля объекта.

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Returns**: <code>promise.&lt;value&gt;</code> - Возвращает promise вернуть значение поля  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно получить |

**Example**  
```js
var getItem = new Scorocode.Object("items");
getItem.getById("kljQ1Oodqp")
		.then((finded) => {
    		return getItem.get("name");
      })
      	.then((success) => {
    		 	// console.log("Вот, что мы нашли: \n", success);
        	})
         .catch((error) => {
    		   // console.log("Что-то пошло не так: \n", error)
         });
```
<a name="Scorocode.Object+getFileLink"></a>

#### object.getFileLink(field) ⇒ <code>String</code>
Метод для получения ссылки на файл.

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Returns**: <code>String</code> - Возвращает ссылку на запрошенный файл  
**Throws**:

- <code>String</code> 'You must first create a document and upload file' - Объект [Scorocode.Object.save()](Scorocode.Object.save())
- <code>String</code> 'Unknown field' - Поле не существует
- <code>String</code> 'Field is empty' - Поле пустое


| Param | Type | Description |
| --- | --- | --- |
| field | <code>String</code> | Название поля коллекции |

**Example**  
```js
var getObject = new Scorocode.Object("content");
getObject.getById("fHGCvxVuuv")
    .then((finded) => {
        console.log(getObject.getFileLink("fileField"));
    })
    .catch((error) => {console.log("Что-то пошло не так: \n", error)});
```
<a name="Scorocode.Object+uploadFile"></a>

#### object.uploadFile(field, filename, file, options) ⇒ <code>promise.&lt;Object&gt;</code>
Метод для загрузки файлов

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Returns**: <code>promise.&lt;Object&gt;</code> - Возвращает promise, который возвращает название загруженного файла.  
**Throws**:

- <code>String</code> 'You must first create a document' -Dragons


| Param | Type | Description |
| --- | --- | --- |
| field | <code>String</code> | Название поля коллекции |
| filename | <code>String</code> | Имя файла |
| file | <code>String</code> | Файл в формате base64 |
| options | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

**Example**  
```js
var getItem = new Scorocode.Object("Items");
getItem.getById("xL0uOFtiJx")
.then(()=>{
   getItem.uploadFile("attachment", "file.txt", "VEhJUyBJUyBGSUxFLUUtRS1FLUUtRS1FIQ==")
   .then((uploaded)=>{
       console.log("Вот что получилось:", uploaded);
   })
   .catch((error) => {console.log("Что-то пошло не так: \n", error)});
})
.catch((error) => {console.log("Что-то пошло не так: \n", error)});
    
```
<a name="Scorocode.Object+save"></a>

#### object.save(options) ⇒ <code>[Object](#Scorocode.Object)</code>
Метод сохраняет объект в хранилище данных приложения или обновляет уже имеющийся там объект

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Returns**: <code>[Object](#Scorocode.Object)</code> - Возвращает сохраненный объект  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

**Example**  
```js
* // Создадим новый объект коллекции items.
var questItem = new Scorocode.Object("items"); 
// Используем метод set() для передачи объекту данных name и 
questItem.set("name", "Водяной чип").set("quest", "Sd4OyACUy2"); 
// Используем метод save() для записи объекта в базу данных приложения
questItem.save();
```
<a name="Scorocode.Object+remove"></a>

#### object.remove(options) ⇒ <code>Object</code>
Метод для удаления указанного объекта

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Returns**: <code>Object</code> - Возвращает promise, который возвращает объект с количеством удаленных объектов и массивом их идентификаторов.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

**Example**  
```js
var getItem = new Scorocode.Object("items");
getItem.getById("7aoWpeyf7a")
  .then((finded) => {
   getItem.remove(finded);
   })
   .catch((error) => {console.log("Что-то пошло не так: \n", error)});
```
<a name="Scorocode.Object+extend"></a>

#### object.extend(collName, childObject) ⇒ <code>Object</code>
Extend

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Returns**: <code>Object</code> - Результат  
**Todo**

- [ ] Дописать


| Param | Type | Description |
| --- | --- | --- |
| collName | <code>String</code> | Название коллекции |
| childObject | <code>Object</code> | Дочерний объект |

<a name="Scorocode.Object+set"></a>

#### object.set(data)
Метод для передачи данных объекту

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Данные в формате {"key", "value"}, где key - идентификатор поля коллекции. |

**Example**  
```js
// Создадим новый объект коллекции items.
var questItem = new Scorocode.Object("items"); 
// Используем метод set() для передачи объекту данных name и 
questItem.set("name", "Водяной чип").set("quest", "Sd4OyACUy2"); 
// Используем метод save() для записи объекта в базу данных приложения
questItem.save();
```
<a name="Scorocode.Object+push"></a>

#### object.push(key, value) ⇒ <code>Object</code>
Метод для добавления элемента в массив.

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Returns**: <code>Object</code> - { description_of_the_return_value }  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | The key |
| value | <code>String</code> | The value |

<a name="Scorocode.Object+pull"></a>

#### object.pull(key, value) ⇒ <code>Object</code>
Метод для удаления всех элементов массива, подходящих под условия запроса

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Returns**: <code>Object</code> - { description_of_the_return_value }  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | The key |
| value | <code>String</code> | The value |

<a name="Scorocode.Object+pullAll"></a>

#### object.pullAll(key, value) ⇒ <code>Object</code>
{ function_description }

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Returns**: <code>Object</code> - { description_of_the_return_value }  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | The key |
| value | <code>Array</code> | The value |

<a name="Scorocode.Object+addToSet"></a>

#### object.addToSet(key, value) ⇒ <code>Object</code>
Метод для добавления элемента в массив, если он откутствует в выборке

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Returns**: <code>Object</code> - { description_of_the_return_value }  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | The key |
| value | <code>Array</code> | The value |

<a name="Scorocode.Object+pop"></a>

#### object.pop(key, pos) ⇒ <code>Object</code>
{ function_description }

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Returns**: <code>Object</code> - { description_of_the_return_value }  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | The key |
| pos | <code>number</code> | The pos |

<a name="Scorocode.Object+inc"></a>

#### object.inc(key, amount)
Метод увеличивает значение числового поля на заданное число

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | Идентификатор поля |
| amount | <code>Number</code> | Шаг увеличения |

**Example**  
```js
// Dragons
```
<a name="Scorocode.Object+currentDate"></a>

#### object.currentDate()
Устанавливает текущее время в качестве значения поля

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  
<a name="Scorocode.Object+mul"></a>

#### object.mul(key, number)
Метод умножает значение числового поля на заданное число

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | Идентификатор поля |
| number | <code>Number</code> | Мультипликатор |

**Example**  
```js
// Dragons
```
<a name="Scorocode.Object+min"></a>

#### object.min()
Метод обновляет значение поля только в случае, если указанное значение меньше текущего значения поля

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Example**  
```js
// Dragons
```
<a name="Scorocode.Object+max"></a>

#### object.max()
Метод обновляет значение поля только в случае, если указанное значение больше текущего значения поля

**Kind**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Example**  
```js
// Dragons
```
<a name="Scorocode.User"></a>

### Scorocode.User
Scorocode.User

**Kind**: static class of <code>[Scorocode](#Scorocode)</code>  

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

**Kind**: instance method of <code>[User](#Scorocode.User)</code>  
**Returns**: <code>Response</code> - Возвращает Here be Dragons  

| Param | Type | Description |
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

**Kind**: instance method of <code>[User](#Scorocode.User)</code>  
**Returns**: <code>Response</code> - Возвращает Here be Dragons  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Опции обратного вызова |

<a name="Scorocode.User+login"></a>

#### user.login(email, password, options) ⇒ <code>Response</code>
Метод для аутентификации пользователя приложения и получения пользовательской сессии.

**Kind**: instance method of <code>[User](#Scorocode.User)</code>  
**Returns**: <code>Response</code> - Возвращает Here be Dragons  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>String</code> | Email пользователя |
| password | <code>String</code> | Пароль пользователя |
| options | <code>Object</code> | Опции обратного вызова |

<a name="Scorocode.Query"></a>

### Scorocode.Query
Scorocode.Query

**Kind**: static class of <code>[Scorocode](#Scorocode)</code>  

* [.Query](#Scorocode.Query)
    * [new Query(collName)](#new_Scorocode.Query_new)
    * [.find(options)](#Scorocode.Query+find) ⇒ <code>Object</code>
    * [.count(options)](#Scorocode.Query+count) ⇒ <code>Object</code>
    * [.update(Object, options)](#Scorocode.Query+update) ⇒ <code>Object</code>
    * [.remove(options)](#Scorocode.Query+remove) ⇒ <code>Object</code>
    * [.reset()](#Scorocode.Query+reset) ⇒ <code>Object</code>
    * [.equalTo(field, value)](#Scorocode.Query+equalTo) ⇒ <code>Object</code>
    * [.notEqualTo(field, value)](#Scorocode.Query+notEqualTo) ⇒ <code>Object</code>
    * [.containedIn(field, value)](#Scorocode.Query+containedIn) ⇒ <code>Object</code>
    * [.containsAll(field, value)](#Scorocode.Query+containsAll) ⇒ <code>Object</code>
    * [.notContainedIn(field, value)](#Scorocode.Query+notContainedIn) ⇒ <code>Object</code>
    * [.greaterThan(field, value)](#Scorocode.Query+greaterThan) ⇒ <code>Object</code>
    * [.greaterThanOrEqualTo(field, value)](#Scorocode.Query+greaterThanOrEqualTo) ⇒ <code>Object</code>
    * [.lessThan(field, value)](#Scorocode.Query+lessThan) ⇒ <code>Object</code>
    * [.lessThanOrEqualTo(field, value)](#Scorocode.Query+lessThanOrEqualTo) ⇒ <code>Object</code>
    * [.exists(field)](#Scorocode.Query+exists) ⇒ <code>Object</code>
    * [.doesNotExist(field)](#Scorocode.Query+doesNotExist) ⇒ <code>Object</code>
    * [.contains(field, value)](#Scorocode.Query+contains) ⇒ <code>Object</code>
    * [.startsWith(field, value)](#Scorocode.Query+startsWith) ⇒ <code>Object</code>
    * [.endsWith(field, value)](#Scorocode.Query+endsWith) ⇒ <code>Object</code>
    * [.limit(Limit)](#Scorocode.Query+limit) ⇒ <code>Object</code>
    * [.skip(skip)](#Scorocode.Query+skip) ⇒ <code>Object</code>
    * [.page(page)](#Scorocode.Query+page) ⇒ <code>Object</code>
    * [.ascending(field)](#Scorocode.Query+ascending) ⇒ <code>Object</code>
    * [.descending(field)](#Scorocode.Query+descending) ⇒ <code>Object</code>
    * [.or(query)](#Scorocode.Query+or) ⇒ <code>Object</code>
    * [.and(query)](#Scorocode.Query+and) ⇒ <code>Object</code>
    * [.select()](#Scorocode.Query+select) ⇒ <code>Object</code>
    * [.raw(filter)](#Scorocode.Query+raw) ⇒ <code>Object</code>

<a name="new_Scorocode.Query_new"></a>

#### new Query(collName)
Запрос данных приложения

**Returns**: <code>[Query](#Scorocode.Query)</code> - Возвращает Scorocode.Query  
**Throws**:

- <code>String</code> 'Collection name must be a type of string'


| Param | Type | Description |
| --- | --- | --- |
| collName | <code>string</code> | Название коллекции |

<a name="Scorocode.Query+find"></a>

#### query.find(options) ⇒ <code>Object</code>
Here be Dragons

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

**Example**  
```js
var getObjects = new Scorocode.Query("items");
getObjects.find()
```
<a name="Scorocode.Query+count"></a>

#### query.count(options) ⇒ <code>Object</code>
Метод для подсчета количества объектов, которые удовлетворяют запросу.

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

**Example**  
```js
var countObjects = new Scorocode.Query("users");
countObjects.count()
```
<a name="Scorocode.Query+update"></a>

#### query.update(Object, options) ⇒ <code>Object</code>
Here be Dragons

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  

| Param | Type | Description |
| --- | --- | --- |
| Object | <code>Object</code> | Here be Dragons |
| options | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

<a name="Scorocode.Query+remove"></a>

#### query.remove(options) ⇒ <code>Object</code>
Here be Dragons

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

<a name="Scorocode.Query+reset"></a>

#### query.reset() ⇒ <code>Object</code>
Сброс условий выборки

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  
<a name="Scorocode.Query+equalTo"></a>

#### query.equalTo(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, со значением поля, соответствующим запрошенному.

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  

| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>string</code> | Значение |

**Example**  
```js
var getObjects = new Scorocode.Query("items");
getObjects.equalTo("name", "Водяной чип");
getObjects.find()
```
<a name="Scorocode.Query+notEqualTo"></a>

#### query.notEqualTo(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых не соответствует заданному в запросе.

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  

| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>string</code> | Значение |

**Example**  
```js
var getObjects = new Scorocode.Query("items");
getObjects.notEqualTo("name", "Гидроэлектрический регулятор магнитосферы");
getObjects.find()
```
<a name="Scorocode.Query+containedIn"></a>

#### query.containedIn(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых содержит указанные в запросе элементы массива.

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  
**Throws**:

- <code>String</code> 'Value must be of type: Array'


| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>array</code> | Значение |

<a name="Scorocode.Query+containsAll"></a>

#### query.containsAll(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых состоит из указанных в запросе элементов массива.

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные
var getAnotherUsers = new Scorocode.Query("users");
getAnotherUsers.ContainedIn("username",["mitishtchi", "usar", "user4"]);  
**Throws**:

- <code>String</code> 'Value must be of type: Array'


| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>array</code> | Значение |

<a name="Scorocode.Query+notContainedIn"></a>

#### query.notContainedIn(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых не содержит указанные в запросе элементы массива.

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  
**Throws**:

- <code>String</code> 'Value must be of type: Array'


| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>array</code> | Значение |

**Example**  
```js
var getAnotherUsers = new Scorocode.Query("users");
getAnotherUsers.notContainedIn("email",["user@mailinator.com", "user3@mailinator.com", "user4@mailinator.com"]);
```
<a name="Scorocode.Query+greaterThan"></a>

#### query.greaterThan(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых больше, чем указанное в запросе число.

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  
**Throws**:

- <code>String</code> "Value must be a number"


| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>number</code> | Значение |

**Example**  
```js
var getObjects = new Scorocode.Query("content");
getObjects.greaterThan("numField", 10);
getObjects.find();
```
<a name="Scorocode.Query+greaterThanOrEqualTo"></a>

#### query.greaterThanOrEqualTo(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых не меньше, чем указанное в запросе число.

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  
**Throws**:

- <code>String</code> "Value must be a number"


| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>number</code> | Значение |

**Example**  
```js
var getObjects = new Scorocode.Query("content");
getObjects.greaterThanOrEqualTo("numField", 10);
getObjects.find();
```
<a name="Scorocode.Query+lessThan"></a>

#### query.lessThan(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых меньше, чем указанное в запросе число.

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные
var getObjects = new Scorocode.Query("content");
getObjects.lessThan("numField", 10);
getObjects.find();  
**Throws**:

- <code>String</code> "Value must be a number"


| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>number</code> | Значение |

<a name="Scorocode.Query+lessThanOrEqualTo"></a>

#### query.lessThanOrEqualTo(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых не больше, чем указанное в запросе число.

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  
**Throws**:

- <code>String</code> "Value must be a number"


| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>number</code> | Значение |

**Example**  
```js
var getObjects = new Scorocode.Query("content");
getObjects.lessThanOrEqualTo("numField", 10);
getObjects.find();
```
<a name="Scorocode.Query+exists"></a>

#### query.exists(field) ⇒ <code>Object</code>
Метод для получения всех объектов с существующим значением заданного поля

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  

| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |

**Example**  
```js
var getObjects = new Scorocode.Query("content");
getObjects.exists("numField");
getObjects.find();
```
<a name="Scorocode.Query+doesNotExist"></a>

#### query.doesNotExist(field) ⇒ <code>Object</code>
Метод для получения всех объектов с существующим значением заданного поля

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные
var getObjects = new Scorocode.Query("content");
getObjects.doesNotExist("numField");
getObjects.find();  

| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |

<a name="Scorocode.Query+contains"></a>

#### query.contains(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов со значением заданного поля, соответствующим заданному регулярному выражению.

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  
**Throws**:

- <code>String</code> 'Value must be of type: Array'


| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>array</code> | Значение |

**Example**  
```js
TODO
```
<a name="Scorocode.Query+startsWith"></a>

#### query.startsWith(field, value) ⇒ <code>Object</code>
Here be Dragons

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  
**Throws**:

- <code>String</code> "Value must be a string"


| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>string</code> | Значение |

**Example**  
```js
var getContent = new Scorocode.Query("content");
getContent.startsWith("stringField", "Стр");
getContent.find();
```
<a name="Scorocode.Query+endsWith"></a>

#### query.endsWith(field, value) ⇒ <code>Object</code>
Here be Dragons

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  
**Throws**:

- <code>String</code> "Value must be a string"
var getContent = new Scorocode.Query("content");
getContent.endssWith("stringField", "ока");
getContent.find();


| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>string</code> | Значение |

<a name="Scorocode.Query+limit"></a>

#### query.limit(Limit) ⇒ <code>Object</code>
Метод для определения размера выборки

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  
**Throws**:

- <code>String</code> "Limit must be a positive number"


| Param | Type | Description |
| --- | --- | --- |
| Limit | <code>number</code> | Ограничение |

**Example**  
```js
var getUsers = new Scorocode.Query("users");
getUsers.limit(15).startsWith("email", "pirate");
getUsers.find();
```
<a name="Scorocode.Query+skip"></a>

#### query.skip(skip) ⇒ <code>Object</code>
Метод для пропуска части объектов

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  
**Throws**:

- <code>String</code> "Skip must be a positive number"


| Param | Type | Description |
| --- | --- | --- |
| skip | <code>number</code> | The skip |

**Example**  
```js
var getUsers = new Scorocode.Query("users");
getUsers.skip(100).startsWith("email", "pirate");
getUsers.find();
```
<a name="Scorocode.Query+page"></a>

#### query.page(page) ⇒ <code>Object</code>
Метод для постраничного вывода результатов (то же самое, что и skip, но не нужно рассчитывать итерации)

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  
**Throws**:

- <code>String</code> "Page must be a positive number"


| Param | Type | Description |
| --- | --- | --- |
| page | <code>Number</code> | The page |

**Example**  
```js
var getDataPaginated = new Scorocode.Query("items");
getDataPaginated.limit(15).page(1).find();
```
<a name="Scorocode.Query+ascending"></a>

#### query.ascending(field) ⇒ <code>Object</code>
Here be Dragons

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  

| Param | Type | Description |
| --- | --- | --- |
| field | <code>String</code> | Идентификатор поля |

**Example**  
```js
var getObjects = new Scorocode.Query("users");
getObjects.ascending("username");
getObjects.find();
```
<a name="Scorocode.Query+descending"></a>

#### query.descending(field) ⇒ <code>Object</code>
Here be Dragons

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  

| Param | Type | Description |
| --- | --- | --- |
| field | <code>String</code> | Идентификатор поля |

**Example**  
```js
var getObjects = new Scorocode.Query("users");
getObjects.descending("username");
getObjects.find();
```
<a name="Scorocode.Query+or"></a>

#### query.or(query) ⇒ <code>Object</code>
Here be Dragons

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  
**Throws**:

- <code>String</code> "Invalid type of Query"


| Param | Type | Description |
| --- | --- | --- |
| query | <code>query</code> | The query |

**Example**  
```js
TODO
```
<a name="Scorocode.Query+and"></a>

#### query.and(query) ⇒ <code>Object</code>
Here be Dragons

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>query</code> | The query |

**Example**  
```js
TODO
```
<a name="Scorocode.Query+select"></a>

#### query.select() ⇒ <code>Object</code>
Метод для указания списка возвращаемых полей

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  
**Example**  
```js
var getObjects = new Scorocode.Query("content");
getObjects.select("fileField").find()
```
<a name="Scorocode.Query+raw"></a>

#### query.raw(filter) ⇒ <code>Object</code>
Прямой запрос к БД приложения

**Kind**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Returns**: <code>Object</code> - Запрошенные данные  

| Param | Type | Description |
| --- | --- | --- |
| filter | <code>Object</code> | The filter |

<a name="Scorocode.CloudCode"></a>

### Scorocode.CloudCode
Scorocode.CloudCode

**Kind**: static class of <code>[Scorocode](#Scorocode)</code>  

* [.CloudCode](#Scorocode.CloudCode)
    * [new CloudCode(id)](#new_Scorocode.CloudCode_new)
    * [.run(pool, callbacks)](#Scorocode.CloudCode+run) ⇒ <code>promise</code>

<a name="new_Scorocode.CloudCode_new"></a>

#### new CloudCode(id)
Класс для работы с серверным кодом

**Returns**: <code>[CloudCode](#Scorocode.CloudCode)</code> - Удалить  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Идентификатор скрипта |

<a name="Scorocode.CloudCode+run"></a>

#### cloudCode.run(pool, callbacks) ⇒ <code>promise</code>
Метод для запуска серверного кода

**Kind**: instance method of <code>[CloudCode](#Scorocode.CloudCode)</code>  
**Returns**: <code>promise</code> - Возвращает promise  
**Throws**:

- <code>String</code> 'Invalid type of pool'


| Param | Type | Description |
| --- | --- | --- |
| pool | <code>Object</code> | The pool |
| callbacks | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

<a name="Scorocode.Messenger"></a>

### Scorocode.Messenger
Scorocode.Messenger

**Kind**: static class of <code>[Scorocode](#Scorocode)</code>  

* [.Messenger](#Scorocode.Messenger)
    * [new Messenger()](#new_Scorocode.Messenger_new)
    * [.sendEmail(options, callbacks)](#Scorocode.Messenger+sendEmail) ⇒ <code>Object</code>
    * [.sendPush(options, callbacks)](#Scorocode.Messenger+sendPush) ⇒ <code>Object</code>
    * [.sendSms(options, callbacks)](#Scorocode.Messenger+sendSms) ⇒ <code>Object</code>

<a name="new_Scorocode.Messenger_new"></a>

#### new Messenger()
Класс для отправки сообщений

**Returns**: <code>[Messenger](#Scorocode.Messenger)</code> - Удалить  
<a name="Scorocode.Messenger+sendEmail"></a>

#### messenger.sendEmail(options, callbacks) ⇒ <code>Object</code>
Метод для отправки Email

**Kind**: instance method of <code>[Messenger](#Scorocode.Messenger)</code>  
**Returns**: <code>Object</code> - Возвращает promise  
**Throws**:

- <code>String</code> 'Invalid options type'
- <code>String</code> 'Where must be a type of Query'
- <code>String</code> 'Invalid data type'
- <code>String</code> 'Missing subject or text message'


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Параметры сообщения (...) |
| callbacks | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

**Example**  
```js
var myself = new Scorocode.Query("users");
myself.equalTo("username","SergeyYurievich");
myself.find();
var mailMeBaby = new Scorocode.Messenger();
mailMeBaby.sendEmail({
    where: myself,
        data: {
                subject:"Тема письма",
                        text:"Текст письма"
}})
```
<a name="Scorocode.Messenger+sendPush"></a>

#### messenger.sendPush(options, callbacks) ⇒ <code>Object</code>
Метод для отправки Push

**Kind**: instance method of <code>[Messenger](#Scorocode.Messenger)</code>  
**Returns**: <code>Object</code> - Возвращает promise  
**Throws**:

- <code>String</code> 'Invalid options type'
- <code>String</code> 'Where must be a type of Query'
- <code>String</code> 'Invalid data type'
- <code>String</code> 'Missing subject or text message'


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Параметры сообщения |
| callbacks | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

<a name="Scorocode.Messenger+sendSms"></a>

#### messenger.sendSms(options, callbacks) ⇒ <code>Object</code>
Метод для отправки СМС

**Kind**: instance method of <code>[Messenger](#Scorocode.Messenger)</code>  
**Returns**: <code>Object</code> - Возвращает promise  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Параметры сообщения |
| callbacks | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

<a name="Scorocode.UpdateOps"></a>

### Scorocode.UpdateOps
**Kind**: static class of <code>[Scorocode](#Scorocode)</code>  
<a name="new_Scorocode.UpdateOps_new"></a>

#### new UpdateOps()
Класс для осуществления операций множественного обновления объектов

**Returns**: <code>[UpdateOps](#Scorocode.UpdateOps)</code> - Возвращает экземпляр Scorocode.UpdateOps  
