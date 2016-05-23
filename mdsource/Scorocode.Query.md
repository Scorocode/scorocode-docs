<a name="Scorocode.Query"></a>

### Scorocode.Query
Scorocode.Query

**Тип**: Класс <code>[Scorocode](Scorocode.md#Scorocode)</code>  

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

**Возвращает**: <code>[Query](#Scorocode.Query)</code> - Возвращает Scorocode.Query  
**Исключение**:

- <code>String</code> 'Collection name must be a Тип of string'


| Параметр | Тип | Описание |
| --- | --- | --- |
| collName | <code>string</code> | Название коллекции |

<a name="Scorocode.Query+find"></a>

#### query.find(options) ⇒ <code>Object</code>
Here be Dragons

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

**Пример**  
```js
var getObjects = new Scorocode.Query("items");
getObjects.find()
```
<a name="Scorocode.Query+count"></a>

#### query.count(options) ⇒ <code>Object</code>
Метод для подсчета количества объектов, которые удовлетворяют запросу.

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

**Пример**  
```js
var countObjects = new Scorocode.Query("users");
countObjects.count()
```
<a name="Scorocode.Query+update"></a>

#### query.update(Object, options) ⇒ <code>Object</code>
Here be Dragons

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| Object | <code>Object</code> | Here be Dragons |
| options | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

<a name="Scorocode.Query+remove"></a>

#### query.remove(options) ⇒ <code>Object</code>
Here be Dragons

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

<a name="Scorocode.Query+reset"></a>

#### query.reset() ⇒ <code>Object</code>
Сброс условий выборки

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  
<a name="Scorocode.Query+equalTo"></a>

#### query.equalTo(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, со значением поля, соответствующим запрошенному.

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>string</code> | Значение |

**Пример**  
```js
var getObjects = new Scorocode.Query("items");
getObjects.equalTo("name", "Водяной чип");
getObjects.find()
```
<a name="Scorocode.Query+notEqualTo"></a>

#### query.notEqualTo(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых не соответствует заданному в запросе.

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>string</code> | Значение |

**Пример**  
```js
var getObjects = new Scorocode.Query("items");
getObjects.notEqualTo("name", "Гидроэлектрический регулятор магнитосферы");
getObjects.find()
```
<a name="Scorocode.Query+containedIn"></a>

#### query.containedIn(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых содержит указанные в запросе элементы массива.

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  
**Исключение**:

- <code>String</code> 'Value must be of Тип: Array'


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>array</code> | Значение |

<a name="Scorocode.Query+containsAll"></a>

#### query.containsAll(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых состоит из указанных в запросе элементов массива.

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные
var getAnotherUsers = new Scorocode.Query("users");
getAnotherUsers.ContainedIn("username",["mitishtchi", "usar", "user4"]);  
**Исключение**:

- <code>String</code> 'Value must be of Тип: Array'


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>array</code> | Значение |

<a name="Scorocode.Query+notContainedIn"></a>

#### query.notContainedIn(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых не содержит указанные в запросе элементы массива.

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  
**Исключение**:

- <code>String</code> 'Value must be of Тип: Array'


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>array</code> | Значение |

**Пример**  
```js
var getAnotherUsers = new Scorocode.Query("users");
getAnotherUsers.notContainedIn("email",["user@mailinator.com", "user3@mailinator.com", "user4@mailinator.com"]);
```
<a name="Scorocode.Query+greaterThan"></a>

#### query.greaterThan(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых больше, чем указанное в запросе число.

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  
**Исключение**:

- <code>String</code> "Value must be a number"


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>number</code> | Значение |

**Пример**  
```js
var getObjects = new Scorocode.Query("content");
getObjects.greaterThan("numField", 10);
getObjects.find();
```
<a name="Scorocode.Query+greaterThanOrEqualTo"></a>

#### query.greaterThanOrEqualTo(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых не меньше, чем указанное в запросе число.

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  
**Исключение**:

- <code>String</code> "Value must be a number"


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>number</code> | Значение |

**Пример**  
```js
var getObjects = new Scorocode.Query("content");
getObjects.greaterThanOrEqualTo("numField", 10);
getObjects.find();
```
<a name="Scorocode.Query+lessThan"></a>

#### query.lessThan(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых меньше, чем указанное в запросе число.

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные
var getObjects = new Scorocode.Query("content");
getObjects.lessThan("numField", 10);
getObjects.find();  
**Исключение**:

- <code>String</code> "Value must be a number"


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>number</code> | Значение |

<a name="Scorocode.Query+lessThanOrEqualTo"></a>

#### query.lessThanOrEqualTo(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых не больше, чем указанное в запросе число.

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  
**Исключение**:

- <code>String</code> "Value must be a number"


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>number</code> | Значение |

**Пример**  
```js
var getObjects = new Scorocode.Query("content");
getObjects.lessThanOrEqualTo("numField", 10);
getObjects.find();
```
<a name="Scorocode.Query+exists"></a>

#### query.exists(field) ⇒ <code>Object</code>
Метод для получения всех объектов с существующим значением заданного поля

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |

**Пример**  
```js
var getObjects = new Scorocode.Query("content");
getObjects.exists("numField");
getObjects.find();
```
<a name="Scorocode.Query+doesNotExist"></a>

#### query.doesNotExist(field) ⇒ <code>Object</code>
Метод для получения всех объектов с существующим значением заданного поля

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные
var getObjects = new Scorocode.Query("content");
getObjects.doesNotExist("numField");
getObjects.find();  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |

<a name="Scorocode.Query+contains"></a>

#### query.contains(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов со значением заданного поля, соответствующим заданному регулярному выражению.

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  
**Исключение**:

- <code>String</code> 'Value must be of Тип: Array'


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>array</code> | Значение |

**Пример**  
```js
TODO
```
<a name="Scorocode.Query+startsWith"></a>

#### query.startsWith(field, value) ⇒ <code>Object</code>
Here be Dragons

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  
**Исключение**:

- <code>String</code> "Value must be a string"


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>string</code> | Значение |

**Пример**  
```js
var getContent = new Scorocode.Query("content");
getContent.startsWith("stringField", "Стр");
getContent.find();
```
<a name="Scorocode.Query+endsWith"></a>

#### query.endsWith(field, value) ⇒ <code>Object</code>
Here be Dragons

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  
**Исключение**:

- <code>String</code> "Value must be a string"
var getContent = new Scorocode.Query("content");
getContent.endssWith("stringField", "ока");
getContent.find();


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Идентификатор поля |
| value | <code>string</code> | Значение |

<a name="Scorocode.Query+limit"></a>

#### query.limit(Limit) ⇒ <code>Object</code>
Метод для определения размера выборки

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  
**Исключение**:

- <code>String</code> "Limit must be a positive number"


| Параметр | Тип | Описание |
| --- | --- | --- |
| Limit | <code>number</code> | Ограничение |

**Пример**  
```js
var getUsers = new Scorocode.Query("users");
getUsers.limit(15).startsWith("email", "pirate");
getUsers.find();
```
<a name="Scorocode.Query+skip"></a>

#### query.skip(skip) ⇒ <code>Object</code>
Метод для пропуска части объектов

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  
**Исключение**:

- <code>String</code> "Skip must be a positive number"


| Параметр | Тип | Описание |
| --- | --- | --- |
| skip | <code>number</code> | The skip |

**Пример**  
```js
var getUsers = new Scorocode.Query("users");
getUsers.skip(100).startsWith("email", "pirate");
getUsers.find();
```
<a name="Scorocode.Query+page"></a>

#### query.page(page) ⇒ <code>Object</code>
Метод для постраничного вывода результатов (то же самое, что и skip, но не нужно рассчитывать итерации)

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  
**Исключение**:

- <code>String</code> "Page must be a positive number"


| Параметр | Тип | Описание |
| --- | --- | --- |
| page | <code>Number</code> | The page |

**Пример**  
```js
var getDataPaginated = new Scorocode.Query("items");
getDataPaginated.limit(15).page(1).find();
```
<a name="Scorocode.Query+ascending"></a>

#### query.ascending(field) ⇒ <code>Object</code>
Here be Dragons

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Идентификатор поля |

**Пример**  
```js
var getObjects = new Scorocode.Query("users");
getObjects.ascending("username");
getObjects.find();
```
<a name="Scorocode.Query+descending"></a>

#### query.descending(field) ⇒ <code>Object</code>
Here be Dragons

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Идентификатор поля |

**Пример**  
```js
var getObjects = new Scorocode.Query("users");
getObjects.descending("username");
getObjects.find();
```
<a name="Scorocode.Query+or"></a>

#### query.or(query) ⇒ <code>Object</code>
Here be Dragons

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  
**Исключение**:

- <code>String</code> "Invalid Тип of Query"


| Параметр | Тип | Описание |
| --- | --- | --- |
| query | <code>query</code> | The query |

**Пример**  
```js
TODO
```
<a name="Scorocode.Query+and"></a>

#### query.and(query) ⇒ <code>Object</code>
Here be Dragons

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| query | <code>query</code> | The query |

**Пример**  
```js
TODO
```
<a name="Scorocode.Query+select"></a>

#### query.select() ⇒ <code>Object</code>
Метод для указания списка возвращаемых полей

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  
**Пример**  
```js
var getObjects = new Scorocode.Query("content");
getObjects.select("fileField").find()
```
<a name="Scorocode.Query+raw"></a>

#### query.raw(filter) ⇒ <code>Object</code>
Прямой запрос к БД приложения

**Тип**: instance method of <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| filter | <code>Object</code> | The filter |