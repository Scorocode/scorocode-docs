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


| Параметр | Тип | Описание |
| --- | --- | --- |
| collName | <code>string</code> | Название коллекции |

**Пример**
```js
// Создадим новый экземпляр запроса к коллекции items.
var data = new Scorocode.Query("items");
// Запросим все объекты коллекции
data.find()
    // Обработка успешного выполнения запроса
    .then((finded) =>{
        //Выведем полученные данные в консоль
        console.log(finded);
    })
    // Обработка ошибки 
    .catch((err)=>{
        console.log(err)
    });    

```
**Возвращает**: <code>[Query](#Scorocode.Query)</code> - Возвращает экземпляр Scorocode.Query  
**Исключение**:
- <code>String</code> 'Collection name must be a Тип of string'


<a name="Scorocode.Query+find"></a>

#### query.find(options) ⇒ <code>Promise.{error: Boolean, limit: Number, skip: Number, result: [{Scorocode.Object}]}</code>

Метод для запроса документов из коллекции. Возвращает данные объектов, которые соответствуют условиям выборки. Если условия не заданы, по-умолчанию возвращает первые 100 объектов коллекции.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**
```js
// Создадим новый экземпляр запроса к коллекции items.
var data = new Scorocode.Query("items");
// Запросим все объекты коллекции
data.find()
    // Обработка успешного выполнения запроса
    .then((finded) =>{
        var util = require('util');
        //Выведем полученные данные в консоль
        console.log(util.inspect(finded, {showHidden: false, depth: null}))
    })
    // Обработка ошибки 
    .catch((err)=>{
        console.log(err)
    });    
```

**Возвращает**: <code>Promise.{error: Boolean, limit: Number, skip: Number, result: [{Scorocode.Object}]}</code> - Возвращает promise, который возвращает объект с результатом выполнения запроса. 
- "error" - <code>Boolean</code> - Флаг ошибки
- "limit" - <code>Number</code>  - лимит размера выборки
- "skip" - <code>Number</code>  - количество документов, которое было пропущено при выборке
- "result" - <code>Array</code>  - массив полученных данных

```
{ 
    error: false,
    limit: 100,
    skip: 0,
    result:
    [ 
       { _id: 'CrT49joIxn',
           createdAt: Wed May 25 2016 17:24:17 GMT+0300 (RTZ 2 (зима)),
           updatedAt: Wed May 25 2016 22:15:03 GMT+0300 (RTZ 2 (зима)),
           readACL: [],
           updateACL: [],
           removeACL: [],
           arrayField: [ false,"",42.42,[1,2,3],["Массив",{"123": 4}],{ "Объект": true }],
           price: 41.999 
       },
       // ...
       { _id: 'NseSaqqd5v',
           createdAt: Wed May 25 2016 17:24:17 GMT+0300 (RTZ 2 (зима)),
           updatedAt: Wed May 25 2016 22:15:03 GMT+0300 (RTZ 2 (зима)),
           readACL: [],
           updateACL: [],
           removeACL: []
       } 
    ]
}
```

<a name="Scorocode.Query+count"></a>

#### query.count(options) ⇒ <code>Promise.{error: Boolean, result: Number}</code>

Метод для подсчета количества объектов, которые удовлетворяют условиям запроса.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var countItems = new Scorocode.Query("items");
// Подсчитаем количество объектов с существующим значением поля "price".
countItems.exists("price")
    .count()
        // Обработчик успешного выполнения запроса
        .then((counted) => {
            // Выведем результат в консоль.
            console.log(counted) // { error: false, result: 5 }
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```
**Возвращает**: <code>Promise.{error: Boolean, result: Number}</code> - Возвращает promise, который возвращает объект с результатом выполнения запроса.
- "error" - <code>Boolean</code> - Флаг ошибки
- "result" - <code>Number</code>  - Количество объектов, подходящих под условие выборки.

<a name="Scorocode.Query+update"></a>

#### query.update(Object, options) ⇒ <code>Promise.{error: Boolean, result: {count: Number, docs: Array}}</code>

Метод для обновления запрошенных объектов.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| Object | <code>Scorocode.UpdateOps</code> | Объект Scorocode.UpdateOps в который переданы обновляемые данные. |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |


**Пример**
```JS
// Создадим новый экземпляр запроса к коллекции items и объект обновления.
var Items = new Scorocode.Query("items");
var updateItems = new Scorocode.UpdateOps("items");

// Установим условие выборки - запросить все объекты, значение поля price которых не равно 42.
Items.notEqualTo("price", 42)
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Установим новое значение поля "price"
            updateItems.set("price", 42);
            // Обновим запрошенные объекты
            return Items.update(updateItems)
        })
        // Обработчик успешного выполнения запроса
        .then((updated) => {
            // Выведем результат  в консоль.
            console.log(updated);
        }) 
        // Обработчик ошибки
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });

```

**Возвращает**: <code>Promise.{error: Boolean, result: {count: Number, docs: Array}}</code> - Возвращает promise, который возвращает объект с результатом выполнения запроса.

- "error" - <code>Boolean</code> - Флаг ошибки
- "result" - <code>Object</code>  - Результат выполнения запроса
    - "count" - <code>Number</code>  - Количество измененных объектов
    - "docs" - <code>Array</code>  - Массив _id измененных объектов.

```
{ error: false,
  result:
   { count: 8,
     docs:[ 
        'CrT49joIxn',
        '8Qcfll2GwE',
        'dMSYsK8jld',
        '6TFVG5UqV6',
        'gNxzwAfvDj',
        'eoVWeg9oeY',
        'vRf58kEDpo',
        'abOkjQAnYE' 
        ] 
    } 
}
```

<a name="Scorocode.Query+remove"></a>

#### query.remove(options) ⇒ <code>Promise.{ecount: Number, docs: Array}</code> - Возвращает promise, который возвращает объект с результатом выполнения запроса.

Метод для удаления запрошенных объектов.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**
```js
Items.exists("arrayField")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((finded) => {
            // Удалим запрошенные объекты
            Items.remove(finded)
                // Обработчик успешного выполнения запроса
                .then((result) => {
                    // Выведем результат в консоль.
                    console.log(result);
                })  
                // Обработчик ошибки
                .catch((error) => {
                    console.log("Что-то пошло не так: \n", error)
                });
        })
        .catch((error) => {
                console.log("Что-то пошло не так: \n", error)
        });
```

**Возвращает**: <code>Promise.{ecount: Number, docs: Array}</code> - Возвращает promise, который возвращает объект с результатом выполнения запроса.
- "count" - <code>Number</code>  - Количество измененных объектов
- "docs" - <code>Array</code>  - Массив _id измененных объектов.
```
{ 
    count: 4, 
    docs:[ 
        'CrT49joIxn', 
        'eoVWeg9oeY', 
        'vRf58kEDpo', 
        'abOkjQAnYE'
        ] 
}
```

<a name="Scorocode.Query+reset"></a>

#### query.reset() ⇒ <code>Object</code>
Сброс условий выборки

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  
<a name="Scorocode.Query+equalTo"></a>

#### query.equalTo(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, со значением поля, соответствующим запрошенному.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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
Метод для установления условия выборки: найти все объекты, кроме объектов значение поля которых равно указанному в условии.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Имя поля, которому задается условие |
| value | <code>string</code> | Значение поля |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var getObjects = new Scorocode.Query("items");
// Установим условие выборки - запросить все объекты, значение поля price которых не равно 42.
getObjects.notEqualTo("price", 42)
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) // { error: false, result: 5 }
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```
<a name="Scorocode.Query+containedIn"></a>

#### query.containedIn(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов, значение поля которых содержит указанные в запросе элементы массива.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
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

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  
**Пример**  
```js
var getObjects = new Scorocode.Query("content");
getObjects.select("fileField").find()
```
<a name="Scorocode.Query+raw"></a>

#### query.raw(filter) ⇒ <code>Object</code>
Прямой запрос к БД приложения

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| filter | <code>Object</code> | The filter |