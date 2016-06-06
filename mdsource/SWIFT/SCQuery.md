<a name="SCQuery"></a>

### SCQuery
SCQuery

**Тип**: Класс <code>Scorocode</code>  

* [.Query](#SCQuery)
    * [new Query(collName)](#new_SCQuery_new) ⇒ <code>Scorocode.Object</code>
    * [.find(options)](#SCQuery+find) ⇒ <code>Promise.{error: Boolean, limit: Number, skip: Number, result: [{Scorocode.Object}]}</code>
    * [.count(options)](#SCQuery+count) ⇒ <code>Promise.{error: Boolean, result: Number}</code>
    * [.update(Object, options)](#SCQuery+update) ⇒ <code>Promise.{error: Boolean, result: {count: Number, docs: Array}}</code>
    * [.remove(options)](#SCQuery+remove) ⇒ <code>Promise.{count: Number, docs: Array}</code> 
    * [.reset()](#SCQuery+reset) 
    * [.equalTo(field, value)](#SCQuery+equalTo) 
    * [.notEqualTo(field, value)](#SCQuery+notEqualTo) 
    * [.containedIn(field, value)](#SCQuery+containedIn) 
    * [.containsAll(field, value)](#SCQuery+containsAll) 
    * [.notContainedIn(field, value)](#SCQuery+notContainedIn) 
    * [.greaterThan(field, value)](#SCQuery+greaterThan) 
    * [.greaterThanOrEqualTo(field, value)](#SCQuery+greaterThanOrEqualTo) 
    * [.lessThan(field, value)](#SCQuery+lessThan) 
    * [.lessThanOrEqualTo(field, value)](#SCQuery+lessThanOrEqualTo) 
    * [.exists(field)](#SCQuery+exists) 
    * [.doesNotExist(field)](#SCQuery+doesNotExist) 
    * [.contains(field, value)](#SCQuery+contains) 
    * [.startsWith(field, value)](#SCQuery+startsWith) 
    * [.endsWith(field, value)](#SCQuery+endsWith) 
    * [.limit(Limit)](#SCQuery+limit) 
    * [.skip(skip)](#SCQuery+skip)
    * [.page(page)](#SCQuery+page) 
    * [.ascending(field)](#SCQuery+ascending)
    * [.descending(field)](#SCQuery+descending) 
    * [.or(query)](#SCQuery+or)
    * [.and(query)](#SCQuery+and) 
    * [.select()](#SCQuery+select) 
    * [.raw(filter)](#SCQuery+raw) 

----------------------------------------------------------------------------------------------

<a name="new_SCQuery_new"></a>

#### new Query(collName)
Экземпляр запроса к данным коллекции


| Параметр | Тип | Описание |
| --- | --- | --- |
| collName | <code>String</code> | Название коллекции |

**Пример**
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var data = new SCQuery("items");
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
**Возвращает**: <code>[SCQuery](#SCQuery)</code> - Возвращает экземпляр SCQuery  
**Исключение**:
- <code>String</code> 'Collection name must be a type of string'

----------------------------------------------------------------------------------------------

<a name="SCQuery+find"></a>

#### Query.find(options) ⇒ <code>Promise.{error: Boolean, limit: Number, skip: Number, result: [{Scorocode.Object}]}</code>

Метод для запроса документов из коллекции. Возвращает данные объектов, которые соответствуют условиям выборки. Если условия не заданы, по-умолчанию возвращает первые 100 объектов коллекции.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var data = new SCQuery("items");
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

----------------------------------------------------------------------------------------------

<a name="SCQuery+count"></a>

#### Query.count(options) ⇒ <code>Promise.{error: Boolean, result: Number}</code>

Метод для подсчета количества объектов, которые удовлетворяют условиям запроса.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var countItems = new SCQuery("items");
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

----------------------------------------------------------------------------------------------

<a name="SCQuery+update"></a>

#### Query.update(Object, options) ⇒ <code>Promise.{error: Boolean, result: {count: Number, docs: Array}}</code>

Метод для обновления запрошенных объектов.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| Object | <code>Scorocode.UpdateOps</code> | Объект Scorocode.UpdateOps в который переданы обновляемые данные. |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |


**Пример**
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items и объект обновления.
var Items = new SCQuery("items");
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
----------------------------------------------------------------------------------------------

<a name="SCQuery+remove"></a>

#### Query.remove(options) ⇒ <code>Promise.{count: Number, docs: Array}</code> 

Метод для удаления запрошенных объектов.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

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

----------------------------------------------------------------------------------------------

<a name="SCQuery+reset"></a>

#### Query.reset() 

Метод для сброса условий выборки

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим условие выборки - запросить все объекты со значением 42 в полe "price"
getItems.equalTo("price", 42)
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            console.log(result)
        })
        // Обработчик ошибки
        .catch((error) => {
            // Сбросим условия выборки
            getItems.reset()
            console.log("Что-то пошло не так: \n", error)
        });
```
----------------------------------------------------------------------------------------------

<a name="SCQuery+equalTo"></a>

#### Query.equalTo(field, value)

Метод для получения всех объектов c указанным в условии значением поля.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>String | Number | Boolean | Date | Array | Object</code> | Значение поля |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим условие выборки - запросить все объекты со значением 42 в полe "price"
getItems.equalTo("price", 42)
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            console.log(result) 
            getItems.reset()
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

----------------------------------------------------------------------------------------------

<a name="SCQuery+notEqualTo"></a>

#### Query.notEqualTo(field, value)
Метод для получения всех объектов, за исключением объектов с указанным в условии значением поля.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>String | Number | Boolean | Date | Array | Object </code> | Значение поля |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим условие выборки - запросить все объекты, значение поля price которых не равно 42.
getItems.notEqualTo("price", 42)
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

----------------------------------------------------------------------------------------------

<a name="SCQuery+containedIn"></a>

#### Query.containedIn(field, value)
Метод для получения всех объектов, значение поля которых содержит указанные в запросе элементы массива.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Array</code> | Массив значений |

**Пример**
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим условие выборки - запросить все объекты со значением -42, 41.999 или 42 в полe "price"
getItems.containedIn("price",[-42, 41.999, 42])
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

**Исключения**

- <code>String</code> 'Value must be of Тип: Array'

----------------------------------------------------------------------------------------------

<a name="SCQuery+containsAll"></a>

#### Query.containsAll(field, value)
Метод для получения всех объектов, значение поля которых содержит все указанные в запросе элементы массива.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Array</code> | Массив значений |

```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим условие выборки - запросить все объекты, содержащие числа 4, 8, 15, 16, 23, 42 в полe "arrayField"
getItems.containsAll("arrayField",[4, 8, 15, 16, 23, 42])
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

**Исключение**:

- <code>String</code> 'Value must be of Тип: Array'

----------------------------------------------------------------------------------------------

<a name="SCQuery+notContainedIn"></a>

#### Query.notContainedIn(field, value)
Метод для получения всех объектов, значение поля которых не содержит указанные в запросе элементы массива.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Имя поля, которому задается условие |
| value | <code>array</code> | Массив значений |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим условие выборки - запросить все объекты, значения поля которых не указано в массиве [41.999 или 42]
getItems.notContainedIn("price",[41.999, 42])
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });```

**Исключения**:

- <code>String</code> 'Value must be of Тип: Array'

----------------------------------------------------------------------------------------------

<a name="SCQuery+greaterThan"></a>

#### Query.greaterThan(field, value)
Метод для получения всех объектов, значение поля которых больше, чем указанное в запросе число.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Number | Date</code> | Значение условия |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим условие выборки - запросить все объекты, созданные позже 2016-05-19T15:35:16.000Z
getItems.greaterThan("createdAt", "2016-05-19T15:35:16.000Z")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

----------------------------------------------------------------------------------------------

<a name="SCQuery+greaterThanOrEqualTo"></a>

#### Query.greaterThanOrEqualTo(field, value)
Метод для получения всех объектов, значение поля которых не меньше, чем указанное в запросе число.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Number | Date</code> | Значение условия |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим условие выборки - запросить все объекты со значением больше, либо равным 41.999 
getItems.greaterThanOrEqualTo("price", 41.999)
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

----------------------------------------------------------------------------------------------

<a name="SCQuery+lessThan"></a>

#### Query.lessThan(field, value)
Метод для получения всех объектов, значение поля которых меньше, чем указанное в запросе число.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Number | Date</code> | Значение условия |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим условие выборки - запросить все объекты со значением поля price меньшe 41
getItems.lessThan("price", 41)
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

----------------------------------------------------------------------------------------------

<a name="SCQuery+lessThanOrEqualTo"></a>

#### Query.lessThanOrEqualTo(field, value) 
Метод для получения всех объектов, значение поля которых не больше, чем указанное в запросе число.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Number | Date</code> | Значение условия |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим условие выборки - запросить все объекты, обновленные не позже 2016-05-19T15:35:16.000Z
getItems.lessThanOrEqualTo("updatedAt", "2016-05-19T15:35:16.000Z")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

----------------------------------------------------------------------------------------------

<a name="SCQuery+exists"></a>

#### Query.exists(field
Метод для получения всех объектов с существующим значением заданного поля

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var Items = new SCQuery("items");
// Подсчитаем количество объектов с существующим значением поля "price".
Items.exists("price")
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result)
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

----------------------------------------------------------------------------------------------

<a name="SCQuery+doesNotExist"></a>

#### Query.doesNotExist(field)
Метод для получения всех объектов с отсутствующим значением в заданном поле

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |


**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var Items = new SCQuery("items");
// Подсчитаем количество объектов с отсутствующим значением поля "price".
Items.doesNotExist("price")
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result)
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```  

----------------------------------------------------------------------------------------------

<a name="SCQuery+contains"></a>

#### Query.contains(field, value)
Метод для получения всех объектов со значением заданного поля, соответствующим заданному регулярному выражению.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>String</code> | Регулярное выражение |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим условие выборки - запросить все объекты, значение поля "someString" которых содержит цифры.
getItems.contains("someString","[0-9]")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

**Исключение**:

- <code>String</code> '"Value must be a string"'

----------------------------------------------------------------------------------------------

<a name="SCQuery+startsWith"></a>

#### Query.startsWith(field, value) 
Метод для получения всех объектов со значением заданного поля, начинающимся с указанной строки.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>String</code> | Значение условия |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим условие выборки - запросить все объекты, значение поля "name" которых начинается с "Предм"
getItems.startsWith("name", "Предм");
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

**Исключение**:

- <code>String</code> "Value must be a string"

----------------------------------------------------------------------------------------------

<a name="SCQuery+endsWith"></a>

#### Query.endsWith(field, value)
Метод для получения всех объектов со значением заданного поля, заканчивающимся на указанную строку.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code> 

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Идентификатор поля |
| value | <code>String</code> | Значение условия |

```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим условие выборки - запросить все объекты, значение поля "name" которых заканчивается на "чип"
getItems.endsWith("name", "чип");
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

**Исключение**:

- <code>String</code> "Value must be a string"

----------------------------------------------------------------------------------------------

<a name="SCQuery+limit"></a>

#### Query.limit(Limit) 
Метод для указания лимита количества объектов выборки

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| Limit | <code>Number</code> | Лимит выборки |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим лимит выборки - не более 1000 объектов.
// Установим условие выборки - запросить все объекты, значение поля "someString" которых содержит цифры и символы латиницы.
getItems.limit(1000).contains("someString","[a-zA-Z-0-9]")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

**Исключение**:
- <code>String</code> "Limit must be a positive number"

----------------------------------------------------------------------------------------------

<a name="SCQuery+skip"></a>

#### Query.skip(skip)
Метод для пропуска части объектов перед совершением выборки

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  


| Параметр | Тип | Описание |
| --- | --- | --- |
| skip | <code>number</code> | Количество пропускаемых объектов |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим лимит выборки - не более 1000 объектов.
// Пропустим первые 1000 объектов и получим вторую тысячу.
// Установим условие выборки - запросить все объекты, значение поля "someString" которых содержит цифры и символы латиницы.
getItems.limit(1000).skip(1000).contains("someString","[a-zA-Z-0-9]")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

**Исключение**

- <code>String</code> "Skip must be a positive number"

----------------------------------------------------------------------------------------------

<a name="SCQuery+page"></a>

#### Query.page(page)
Метод для постраничного вывода результатов выборки

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| page | <code>Number</code> | Номер страницы |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим лимит выборки - не более 30 объектов.
// Запросим вторую страницу выборки
// Установим условие выборки - запросить все объекты, значение поля "someString" которых содержит цифры и символы латиницы.
getItems.limit(30).page(2).contains("someString","[a-zA-Z-0-9]")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

**Исключение**:

- <code>String</code> "Page must be a positive number"

----------------------------------------------------------------------------------------------

<a name="SCQuery+ascending"></a>

#### Query.ascending(field)
Метод для сортировки данных указанного поля в порядке возрастания перед совершением выборки.


**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Идентификатор поля |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим лимит выборки - не более 30 объектов.
// Отсортируем объекты в порядке возрастания даты изменения
// Запросим первую страницу выборки
// Установим условие выборки - запросить все объекты, значение поля "someString" которых содержит цифры и символы латиницы.
getItems.limit(30).ascending("updatedAt").page(1).contains("someString","[a-zA-Z-0-9]")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

----------------------------------------------------------------------------------------------

<a name="SCQuery+descending"></a>

#### Query.descending(field)
Метод для сортировки данных указанного поля в порядке убывания перед совершением выборки.

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Идентификатор поля |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
// Установим лимит выборки - не более 30 объектов.
// Отсортируем объекты в порядке убывания значения поля "price"
// Запросим первую страницу выборки
// Установим условие выборки - запросить все объекты, значение поля "someString" которых содержит цифры и символы латиницы.
getItems.limit(30).descending("price").page(1).contains("someString","[a-zA-Z-0-9]")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

----------------------------------------------------------------------------------------------

<a name="SCQuery+or"></a>

#### Query.or(query)

Метод для логического сложения условий нескольких выборок

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  


| Параметр | Тип | Описание |
| --- | --- | --- |
| query | <code>SCQuery</code> | Запрос, который включается в дизъюнкцию |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
var range1 = new SCQuery("items");
var range2 = new SCQuery("items");

var getItems = new SCQuery("items");
// Установим условие выборки - запросить все объекты, созданные не позже 2016-05-18T10:00:00.000Z
range1.lessThanOrEqualTo("createdAt", "2016-05-19T10:00:00.000Z");
// Установим условие выборки - запросить все объекты, созданные не раньше 2016-05-20T10:00:00.000Z
range2.greaterThanOrEqualTo("createdAt", "2016-05-21T15:00:00.000Z");
// Логически сложим запросы 
getItems.or(range1).or(range2)
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

**Исключение**:

- <code>String</code> "Invalid Тип of Query"

----------------------------------------------------------------------------------------------

<a name="SCQuery+and"></a>

#### Query.and(query) 
Метод для логического умножения условий нескольких выборок

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| query | <code>SCQuery</code> | Запрос, который включается в конъюнкцию |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var getItems = new SCQuery("items");
var range = new SCQuery("items");
var price = new SCQuery("items");

var getItems = new SCQuery("items");
// Установим условие выборки - запросить все объекты, созданные не раньше 2016-05-18T10:00:00.000Z
range.greaterThanOrEqualTo("createdAt", "2016-05-19T10:00:00.000Z");
// Установим условие выборки - запросить все объекты, значение поля "price" которых отсутствует
price.doesNotExists("price");
// Логически умножим запросы 
getItems.and(range).and(price)
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль.
            console.log(result) 
        })
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
```

----------------------------------------------------------------------------------------------

<a name="SCQuery+select"></a>

#### Query.select() 
Метод для указания списка возвращаемых полей. 

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items.
var data = new SCQuery("items");
// Запросим все объекты коллекции и получим значение их поля "price".
data.select("price").find()
    // Обработка успешного выполнения запроса
    .then((finded) =>{
        //Выведем полученные данные в консоль. 
        console.log(finded);
    })
    // Обработка ошибки 
    .catch((err)=>{
        console.log(err)
    });    

```

----------------------------------------------------------------------------------------------

#### TODO

<a name="SCQuery+raw"></a>

#### Query.raw(filter) 
Прямой запрос к БД приложения

**Тип**: Метод <code>[SCQuery](#SCQuery)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| filter | <code>Object</code> | Применяемый фильтр |

