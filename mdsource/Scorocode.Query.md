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
Экземпляр запроса к данным коллекции


| Параметр | Тип | Описание |
| --- | --- | --- |
| collName | <code>String</code> | Название коллекции |

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

#### query.remove(options) ⇒ <code>Promise.{count: Number, docs: Array}</code> - Возвращает promise, который возвращает объект с результатом выполнения запроса.

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

#### query.equalTo(field, value)

Метод для получения всех объектов c указанным в условии значением поля.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>String | Number | Boolean | Date | Array | Object</code> | Значение поля |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
// Установим условие выборки - запросить все объекты со значением 42 в полe "price"
getItems.equalTo("price", 42)
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

<a name="Scorocode.Query+notEqualTo"></a>

#### query.notEqualTo(field, value)
Метод для получения всех объектов, за исключением объектов с указанным в условии значением поля.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>String | Number | Boolean | Date | Array | Object </code> | Значение поля |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
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


<a name="Scorocode.Query+containedIn"></a>

#### query.containedIn(field, value)
Метод для получения всех объектов, значение поля которых содержит указанные в запросе элементы массива.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Array</code> | Массив значений |

**Пример**
```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
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


<a name="Scorocode.Query+containsAll"></a>

#### query.containsAll(field, value)
Метод для получения всех объектов, значение поля которых содержит все указанные в запросе элементы массива.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Array</code> | Массив значений |

```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
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



<a name="Scorocode.Query+notContainedIn"></a>

#### query.notContainedIn(field, value)
Метод для получения всех объектов, значение поля которых не содержит указанные в запросе элементы массива.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>string</code> | Имя поля, которому задается условие |
| value | <code>array</code> | Массив значений |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
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



<a name="Scorocode.Query+greaterThan"></a>

#### query.greaterThan(field, value)
Метод для получения всех объектов, значение поля которых больше, чем указанное в запросе число.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Number | Date</code> | Значение условия |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
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

<a name="Scorocode.Query+greaterThanOrEqualTo"></a>

#### query.greaterThanOrEqualTo(field, value)
Метод для получения всех объектов, значение поля которых не меньше, чем указанное в запросе число.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Number | Date</code> | Значение условия |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
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
<a name="Scorocode.Query+lessThan"></a>

#### query.lessThan(field, value)
Метод для получения всех объектов, значение поля которых меньше, чем указанное в запросе число.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Number | Date</code> | Значение условия |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
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

<a name="Scorocode.Query+lessThanOrEqualTo"></a>

#### query.lessThanOrEqualTo(field, value) 
Метод для получения всех объектов, значение поля которых не больше, чем указанное в запросе число.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Number | Date</code> | Значение условия |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
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

<a name="Scorocode.Query+exists"></a>

#### query.exists(field
Метод для получения всех объектов с существующим значением заданного поля

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var Items = new Scorocode.Query("items");
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


<a name="Scorocode.Query+doesNotExist"></a>

#### query.doesNotExist(field)
Метод для получения всех объектов с отсутствующим значением в заданном поле

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |


**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  
```js
// Создадим новый экземпляр запроса к коллекции items.
var Items = new Scorocode.Query("items");
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


<a name="Scorocode.Query+contains"></a>

#### query.contains(field, value)
Метод для получения всех объектов со значением заданного поля, соответствующим заданному регулярному выражению.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>String</code> | Регулярное выражение |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
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


<a name="Scorocode.Query+startsWith"></a>

#### query.startsWith(field, value) 
Метод для получения всех объектов со значением заданного поля, начинающимся с указанной строки.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>String</code> | Значение условия |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
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

<a name="Scorocode.Query+endsWith"></a>

#### query.endsWith(field, value) ⇒ <code>Object</code>
Метод для получения всех объектов со значением заданного поля, заканчивающимся на указанную строку.

**Тип**: Метод <code>[Query](#Scorocode.Query)</code> 

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Идентификатор поля |
| value | <code>String</code> | Значение условия |

```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
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


<a name="Scorocode.Query+limit"></a>

#### query.limit(Limit) 
Метод для указания лимита выборки

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| Limit | <code>Number</code> | Лимит выборки |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
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

<a name="Scorocode.Query+skip"></a>

#### query.skip(skip)
Метод для пропуска части объектов

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  


| Параметр | Тип | Описание |
| --- | --- | --- |
| skip | <code>number</code> | Количество пропускаемых объектов |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
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


<a name="Scorocode.Query+page"></a>

#### query.page(page)
Метод для постраничного вывода результатов

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| page | <code>Number</code> | Номер страницы |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
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


<a name="Scorocode.Query+ascending"></a>

#### query.ascending(field)


**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Идентификатор поля |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
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
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
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
<a name="Scorocode.Query+or"></a>

#### query.or(query)

Метод для логического сложения условий нескольких выборок

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  


| Параметр | Тип | Описание |
| --- | --- | --- |
| query | <code>Scorocode.Query</code> | Запрос, который включается в дизъюнкцию |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
var range1 = new Scorocode.Query("items");
var range2 = new Scorocode.Query("items");

var getItems = new Scorocode.Query("items");
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

<a name="Scorocode.Query+and"></a>

#### query.and(query) 
Метод для логического умножения условий нескольких выборок

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| query | <code>Scorocode.Query</code> | Запрос, который включается в конъюнкцию |

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var getItems = new Scorocode.Query("items");
var range = new Scorocode.Query("items");
var price = new Scorocode.Query("items");

var getItems = new Scorocode.Query("items");
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

<a name="Scorocode.Query+select"></a>

#### query.select() 
Метод для указания списка возвращаемых полей. 

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

**Пример**  
```js
// Создадим новый экземпляр запроса к коллекции items.
var data = new Scorocode.Query("items");
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

<a name="Scorocode.Query+raw"></a>

#### query.raw(filter) 
Прямой запрос к БД приложения

**Тип**: Метод <code>[Query](#Scorocode.Query)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| filter | <code>Object</code> | Применяемый фильтр |