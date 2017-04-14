Содержание

* [.Query](#sc.Query)
    * [new Query(collName)](#new_sc.Query_new) ⇒ <code>sc.Object</code>
    * [.find(options)](#sc.Query+find) ⇒ <code>promise.{error: Boolean, limit: Number, skip: Number, result: [{sc.Object}]}</code>
    * [.findAll(options)](#sc.Query+findAll) ⇒ <code>promise.{[{sc.Object}]}</code>
    * [.count(options)](#sc.Query+count) ⇒ <code>promise.{error: Boolean, result: Number}</code>
    * [.update(Object, options)](#sc.Query+update) ⇒ <code>promise.{error: Boolean, result: {count: Number, docs: Array}}</code>
    * [.remove(options)](#sc.Query+remove) ⇒ <code>promise.{count: Number, docs: Array}</code> 
    * [.reset()](#sc.Query+reset) 
    * [.equalTo(field, value)](#sc.Query+equalTo) 
    * [.notEqualTo(field, value)](#sc.Query+notEqualTo) 
    * [.containedIn(field, value)](#sc.Query+containedIn) 
    * [.containsAll(field, value)](#sc.Query+containsAll) 
    * [.notContainedIn(field, value)](#sc.Query+notContainedIn) 
    * [.greaterThan(field, value)](#sc.Query+greaterThan) 
    * [.greaterThanOrEqualTo(field, value)](#sc.Query+greaterThanOrEqualTo) 
    * [.lessThan(field, value)](#sc.Query+lessThan) 
    * [.lessThanOrEqualTo(field, value)](#sc.Query+lessThanOrEqualTo) 
    * [.exists(field)](#sc.Query+exists) 
    * [.doesNotExist(field)](#sc.Query+doesNotExist) 
    * [.contains(field, value)](#sc.Query+contains) 
    * [.startsWith(field, value)](#sc.Query+startsWith) 
    * [.endsWith(field, value)](#sc.Query+endsWith) 
    * [.limit(limit)](#sc.Query+limit) 
    * [.skip(skip)](#sc.Query+skip)
    * [.page(page)](#sc.Query+page) 
    * [.ascending(field)](#sc.Query+ascending)
    * [.descending(field)](#sc.Query+descending) 
    * [.or(query)](#sc.Query+or)
    * [.and(query)](#sc.Query+and) 
    * [.select()](#sc.Query+select) 
    * [.raw(filter)](#sc.Query+raw) 

----------------------------------------------------------------------------------------------

<a name="new_sc.Query_new"></a>

## new Query(collName)
Экземпляр запроса к данным коллекции


| Параметр | Тип | Описание |
| --- | --- | --- |
| collName | <code>String</code> | Название коллекции |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var data = new sc.Query("items");
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

**Возвращает**: <code>[sc.Query](#sc.Query)</code> - Возвращает экземпляр sc.Query  
**Исключение**:

- <code>String</code> 'Collection name must be a type of string'

----------------------------------------------------------------------------------------------

<a name="sc.Query+find"></a>

## .find(options)

Метод для запроса документов из коллекции. Возвращает данные объектов, которые соответствуют условиям выборки. Если условия не заданы, по-умолчанию возвращает первые 50 объектов коллекции.


| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var data = new sc.Query("items");
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

**Возвращает**: <code>promise.{error: Boolean, limit: Number, skip: Number, result: [{sc.Object}]}</code> - Возвращает promise, который возвращает объект с результатом выполнения запроса. 

- "error" - <code>Boolean</code> - Флаг ошибки
- "limit" - <code>Number</code>  - лимит размера выборки
- "skip" - <code>Number</code>  - количество документов, которое было пропущено при выборке
- "result" - <code>Array</code>  - массив полученных данных

```js
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

<a name="sc.Query+findAll"></a>

## .findAll(options)

Метод для запроса всех документов коллекции, которые соответствуют условиям выборки.

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var data = new sc.Query("items");
    // Запросим все объекты коллекции
    data.findAll()
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

**Возвращает**: <code>promise.{[{sc.Object}]}</code> - Возвращает promise, который возвращает массив объектов с данными документов. 


```js
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
```

----------------------------------------------------------------------------------------------

<a name="sc.Query+count"></a>

## .count(options)

Метод для подсчета количества объектов, которые удовлетворяют условиям запроса.


| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var countItems = new sc.Query("items");
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

**Возвращает**: <code>promise.{error: Boolean, result: Number}</code> - Возвращает promise, который возвращает объект с результатом выполнения запроса.

- "error" - <code>Boolean</code> - Флаг ошибки
- "result" - <code>Number</code>  - Количество объектов, подходящих под условие выборки.

----------------------------------------------------------------------------------------------

<a name="sc.Query+update"></a>

## .update(Object, options) 

Метод для обновления запрошенных объектов.


| Параметр | Тип | Описание |
| --- | --- | --- |
| Object | <code>sc.UpdateOps</code> | Объект sc.UpdateOps в который переданы обновляемые данные. |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |


!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items и объект обновления.
    var Items = new sc.Query("items");
    var updateItems = new sc.UpdateOps("items");

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

**Возвращает**: `promise.{error: Boolean, result: {count: Number, docs: Array}}` - Возвращает promise, который возвращает объект с результатом выполнения запроса.

- "error" - `Boolean` - Флаг ошибки
- "result" - `Object`  - Результат выполнения запроса
    - "count" - `Number` - Количество измененных объектов
    - "docs" - `Array`  - Массив _id измененных объектов

```
{
    error: false,
    result:
        { 
            count: 8,
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

<a name="sc.Query+remove"></a>

## .remove(options)

Метод для удаления запрошенных объектов.


| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
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

**Возвращает**: <code>promise.{ecount: Number, docs: Array}</code> - Возвращает promise, который возвращает объект с результатом выполнения запроса.

- "count" - <code>Number</code>  - Количество измененных объектов
- "docs" - <code>Array</code>  - Массив _id измененных объектов.

```js
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

<a name="sc.Query+reset"></a>

## .reset() 

Метод для сброса условий выборки


!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+equalTo"></a>

## .equalTo(field, value)

Метод для получения всех объектов c указанным в условии значением поля.


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>String / Number / Boolean / Date / Array / Object</code> | Значение поля |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+notEqualTo"></a>

## .notEqualTo(field, value)
Метод для получения всех объектов, за исключением объектов с указанным в условии значением поля.


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>String / Number / Boolean / Date / Array / Object </code> | Значение поля |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+containedIn"></a>

## .containedIn(field, value)
Метод для получения всех объектов, значение поля которых содержит указанные в запросе элементы массива.


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Array</code> | Массив значений |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+containsAll"></a>

## .containsAll(field, value)
Метод для получения всех объектов, значение поля которых содержит все указанные в запросе элементы массива.


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Array</code> | Массив значений |


!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+notContainedIn"></a>

## .notContainedIn(field, value)
Метод для получения всех объектов, значение поля которых не содержит указанные в запросе элементы массива.



| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Array</code> | Массив значений |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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
            });
    ```

**Исключения**:

- <code>String</code> 'Value must be of Тип: Array'

----------------------------------------------------------------------------------------------

<a name="sc.Query+greaterThan"></a>

## .greaterThan(field, value)
Метод для получения всех объектов, значение поля которых больше, чем указанное в запросе число.

**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Number / Date</code> | Значение условия |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+greaterThanOrEqualTo"></a>

## .greaterThanOrEqualTo(field, value)
Метод для получения всех объектов, значение поля которых не меньше, чем указанное в запросе число.


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Number / Date</code> | Значение условия |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+lessThan"></a>

## .lessThan(field, value)
Метод для получения всех объектов, значение поля которых меньше, чем указанное в запросе число.


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Number / Date</code> | Значение условия |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+lessThanOrEqualTo"></a>

## .lessThanOrEqualTo(field, value) 
Метод для получения всех объектов, значение поля которых не больше, чем указанное в запросе число.


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>Number / Date</code> | Значение условия |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+exists"></a>

## .exists(field
Метод для получения всех объектов с существующим значением заданного поля


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var Items = new sc.Query("items");
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

<a name="sc.Query+doesNotExist"></a>

## .doesNotExist(field)
Метод для получения всех объектов с отсутствующим значением в заданном поле

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var Items = new sc.Query("items");
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

<a name="sc.Query+contains"></a>

## .contains(field, value)
Метод для получения всех объектов со значением заданного поля, соответствующим заданному регулярному выражению.



| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>String</code> | Регулярное выражение |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+startsWith"></a>

## .startsWith(field, value) 
Метод для получения всех объектов со значением заданного поля, начинающимся с указанной строки.


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля, которому задается условие |
| value | <code>String</code> | Значение условия |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+endsWith"></a>

## .endsWith(field, value)
Метод для получения всех объектов со значением заданного поля, заканчивающимся на указанную строку.


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Идентификатор поля |
| value | <code>String</code> | Значение условия |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+limit"></a>

## .limit(limit) 
Метод для указания лимита количества объектов выборки


| Параметр | Тип | Описание |
| --- | --- | --- |
| limit | <code>Number</code> | Лимит выборки |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+skip"></a>

## .skip(skip)
Метод для пропуска части объектов перед совершением выборки



| Параметр | Тип | Описание |
| --- | --- | --- |
| skip | <code>Number</code> | Количество пропускаемых объектов |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+page"></a>

## .page(page)
Метод для постраничного вывода результатов выборки


| Параметр | Тип | Описание |
| --- | --- | --- |
| page | <code>Number</code> | Номер страницы |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+ascending"></a>

## .ascending(field)
Метод для сортировки данных указанного поля в порядке возрастания перед совершением выборки.



| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Идентификатор поля |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+descending"></a>

## .descending(field)
Метод для сортировки данных указанного поля в порядке убывания перед совершением выборки.

**Возвращает**: <code>Object</code> - Запрошенные данные  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Идентификатор поля |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
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

<a name="sc.Query+or"></a>

## .or(query)

Метод для логического сложения условий нескольких выборок



| Параметр | Тип | Описание |
| --- | --- | --- |
| query | <code>sc.Query</code> | Запрос, который включается в дизъюнкцию |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
    var range1 = new sc.Query("items");
    var range2 = new sc.Query("items");

    var getItems = new sc.Query("items");
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

<a name="sc.Query+and"></a>

## .and(query) 
Метод для логического умножения условий нескольких выборок


| Параметр | Тип | Описание |
| --- | --- | --- |
| query | <code>sc.Query</code> | Запрос, который включается в конъюнкцию |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var getItems = new sc.Query("items");
    var range = new sc.Query("items");
    var price = new sc.Query("items");

    var getItems = new sc.Query("items");
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

<a name="sc.Query+select"></a>

## .select() 
Метод для указания списка возвращаемых полей. 


!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });

    // Создадим новый экземпляр запроса к коллекции items.
    var data = new sc.Query("items");
    // Запросим все объекты коллекции и получим значение их поля "price" и "reward".
    data.select("price", "reward").find()
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

<a name="sc.Query+raw"></a>

## .raw(filter) 
Прямой запрос к БД приложения


| Параметр | Тип | Описание |
| --- | --- | --- |
| filter | <code>Object</code> | Применяемый фильтр в формате языка запросов MongoDB |

!!! tip "Пример"
    ```js
    // Подключим SDK и инициализируем его. 
    var sc = require('scorocode');
    sc.Init({
        ApplicationID: "applicationId_приложения",
        JavaScriptKey: "javascriptKey_приложения"
    });


    var query = sc.Query("items");
    query.raw("{ \"fieldString\" : \"Строка\" }");
    query.find()
        .then((finded) =>{
            //Выведем полученные данные в консоль. 
            console.log(finded);
        })
        // Обработка ошибки 
        .catch((err)=>{
            console.log(err)
        });    
    ```