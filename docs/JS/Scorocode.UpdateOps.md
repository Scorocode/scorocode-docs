<a name="Scorocode.UpdateOps"></a>

Содержание

* [.UpdateOps](#Scorocode.UpdateOps)
    * [.set(data)](#Scorocode.UpdateOps+set)
    * [.push(key, value)](#Scorocode.UpdateOps+push) 
    * [.pull(key, value)](#Scorocode.UpdateOps+pull) 
    * [.pullAll(key, value)](#Scorocode.UpdateOps+pullAll) 
    * [.addToSet(key, value)](#Scorocode.UpdateOps+addToSet) 
    * [.pop(key, pos)](#Scorocode.UpdateOps+pop) 
    * [.inc(key, amount)](#Scorocode.UpdateOps+inc)
    * [.currentDate()](#Scorocode.UpdateOps+currentDate)
    * [.mul(key, number)](#Scorocode.UpdateOps+mul)
    * [.min()](#Scorocode.UpdateOps+min)
    * [.max()](#Scorocode.UpdateOps+max)

<a name="new_Scorocode.UpdateOps_new"></a>

## new UpdateOps()
Класс для осуществления операций множественного обновления объектов

**Пример**
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

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

**Возвращает**: <code>[UpdateOps](#Scorocode.UpdateOps)</code> - Возвращает экземпляр Scorocode.UpdateOps  

----------------------------------------------------------------------------------------------

<a name="Scorocode.UpdateOps+set"></a>

## .set(data)
Метод для передачи данных объекту


| Параметр | Тип | Описание |
| --- | --- | --- |
| data | <code>Object</code> | Данные в формате {"key", "value"}, где key - имя поля коллекции. |


**Пример**
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

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

см.

* [new Object(collName)](#new_Scorocode.Object_new)
* [.save(options)](#Scorocode.UpdateOps+save) ⇒ <code>[Scorocode.UpdateOps](#Scorocode.UpdateOps)</code>

----------------------------------------------------------------------------------------------

<a name="Scorocode.UpdateOps+push"></a>

## .push(key, value)
Метод для добавления элемента в массив.


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| value | <code>String</code> | Изменение, которое нужно внести |

**Пример**
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items и объект обновления.
var Items = new Scorocode.Query("items");
var updateItems = new Scorocode.UpdateOps("items");

// Установим условие выборки - запросить все объекты с существующим значением поля "arrayField".
Items.exists("arrayField")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Добавим новый элемент в массивы, хранящиеся в "arrayField" объектов выборки
            updateItems.push("arrayField", "Новый элемент массива");
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

----------------------------------------------------------------------------------------------

<a name="Scorocode.UpdateOps+pull"></a>

## .pull(key, value)
Метод для удаления всех элементов массива, значение которых равно указанному.

  
| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| value | <code>String / Number / Boolean / Date / Array / Object</code> | Удаляемое значение  |

**Пример**
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items и объект обновления.
var Items = new Scorocode.Query("items");
var updateItems = new Scorocode.UpdateOps("items");

// Установим условие выборки - запросить все объекты с существующим значением поля "arrayField".
Items.exists("arrayField")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
        	// Из значений массивов "arrayField" удалим все элементы со значением, равным {"Удалить этот объект": true}.
            updateItems.pull("arrayField", {"Удалить этот объект": true});
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

**Исключения**:

- <code>Error</code> "For a new document use the method Set"
- <code>Error</code> 'Field must by a type of array'

----------------------------------------------------------------------------------------------

<a name="Scorocode.UpdateOps+pullAll"></a>

## .pullAll(key, value)

Метод для удаления всех элементов массива, значения которых равны одному из указанных значений.


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| value | <code>Array</code> | Массив удаляемых значений |

**Пример**
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items и объект обновления.
var Items = new Scorocode.Query("items");
var updateItems = new Scorocode.UpdateOps("items");

// Установим условие выборки - запросить все объекты с существующим значением поля "arrayField".
Items.exists("arrayField")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
        	// Из значений массивов "arrayField" удалим все элементы со значениями, равными "Удалить", 42 или {"Не удалять": false}.
            updateItems.pullAll("arrayField", ["Удалить", 42, {"Не удалять": false}]);
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

**Исключения**:

- <code>Error</code> 'For a new document use the method Set'
- <code>Error</code> 'Field must by a type of array'
- <code>Error</code> 'Value must by a type of array'

----------------------------------------------------------------------------------------------

<a name="Scorocode.UpdateOps+addToSet"></a>

## .addToSet(key, value)
Метод для добавления элемента в массив только в том случае, если в массиве отсутствуют элементы с таким значением.


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| value | <code>Array</code> | Значение добавляемого элемента |

**Пример**
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items и объект обновления.
var Items = new Scorocode.Query("items");
var updateItems = new Scorocode.UpdateOps("items");

// Установим условие выборки - запросить все объекты с существующим значением поля "arrayField".
Items.exists("arrayField")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
        	// Добавим в массивы, хранящиеся в поле "arrayField", новый элемент ["Первый элемент нового элемента", {"Второй?": true}], если такого элемента ещё нет в значении "arrayField" объектов.
        	updateItems.addToSet("arrayField", ["Первый элемент нового элемента", {"Второй?": true}]);
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

**Исключения**:

- <code>Error</code> 'For a new document use the method Set'
- <code>Error</code> 'Field must by a type of array'

----------------------------------------------------------------------------------------------

<a name="Scorocode.UpdateOps+pop"></a>

## .pop(key, pos)
Метод для удаления первого или последнего элемента массива


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| pos | <code>Number</code> | Позиция удаляемого элемента в массиве: -1 для первого элемента и 1 для последнего |

**Пример**
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items и объект обновления.
var Items = new Scorocode.Query("items");
var updateItems = new Scorocode.UpdateOps("items");

// Установим условие выборки - запросить все объекты с существующим значением поля "arrayField".
Items.exists("arrayField")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
        	// Удалим последний элемент из значений массивов полей "arrayField".
        	updateItems.pop("arrayField", 1);
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

**Исключения**:

- <code>Error</code> 'For a new document use the method Set'
- <code>Error</code> 'Field must by a type of array'

----------------------------------------------------------------------------------------------

<a name="Scorocode.UpdateOps+inc"></a>

## .inc(key, amount)
Метод увеличивает значение числового поля на заданное число


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| amount | <code>Number</code> | Шаг изменения |

**Пример** 
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items и объект обновления.
var Items = new Scorocode.Query("items");
var updateItems = new Scorocode.UpdateOps("items");

// Установим условие выборки - запросить все объекты с существующим значением поля "price".
Items.exists("price")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
        	// Уменьшим значения полей "price" на 2.42
        	updateItems.inc("price", -2.42);
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
**Исключения**:

- <code>Error</code> 'For a new document use the method Set'
- <code>Error</code> 'Field must by a type of number'

----------------------------------------------------------------------------------------------

<a name="Scorocode.UpdateOps+currentDate"></a>

## .currentDate()
Устанавливает текущее время в качестве значения поля


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| type | <code>String / Boolean</code> | Тип даты. Принимает значения: true, 'date' или 'timestamp' |

**Пример**:
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items и объект обновления.
var Items = new Scorocode.Query("items");
var updateItems = new Scorocode.UpdateOps("items");

// Запросим все объекты коллекции "items"
Items.find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
			// Запишем текущую дату в поле "someDate" всех объектов
			updateItems.currentDate("someDate", "timestamp");
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

**Исключения**:

- <code>Error</code> 'For a new document use the method Set'
- <code>Error</code> 'Invalid type'

----------------------------------------------------------------------------------------------

<a name="Scorocode.UpdateOps+mul"></a>

## .mul(key, number)
Метод умножает значение числового поля на заданное число


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| number | <code>Number</code> | Мультипликатор |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items и объект обновления.
var Items = new Scorocode.Query("items");
var updateItems = new Scorocode.UpdateOps("items");

// Установим условие выборки - запросить все объекты с существующим значением поля "price".
Items.exists("price")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
        	// Умножим значения полей "price" на 0.5
        	updateItems.mul("price", 0.5);
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

**Исключения**:

- <code>Error</code> 'For a new document use the method Set'
- <code>Error</code> 'Field must by a type of number'
- <code>Error</code> 'Value must by a type of number'

----------------------------------------------------------------------------------------------

<a name="Scorocode.UpdateOps+min"></a>

## .min()
Метод обновляет значение числового поля только в случае, если новое значение меньше текущего значения поля


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| number | <code>Number</code> | Новое значение |


**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items и объект обновления.
var Items = new Scorocode.Query("items");
var updateItems = new Scorocode.UpdateOps("items");

// Установим условие выборки - запросить все объекты с существующим значением поля "price".
Items.exists("price")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
        	// Изменим значение поля "price" объектов на новое значение 42 в случае, если новое значение поля меньше текущего.
        	updateItems.min("price", 42);
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

**Исключения**:

- <code>Error</code> 'For a new document use the method Set'
- <code>Error</code> 'Field must by a type of number'
- <code>Error</code> 'Value must by a type of number'


----------------------------------------------------------------------------------------------


<a name="Scorocode.UpdateOps+max"></a>

## .max()
Метод обновляет значение числового поля только в случае, если новое значение больше текущего значения поля


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| number | <code>Number</code> | Новое значение |

**Пример**  
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр запроса к коллекции items и объект обновления.
var Items = new Scorocode.Query("items");
var updateItems = new Scorocode.UpdateOps("items");

// Установим условие выборки - запросить все объекты с существующим значением поля "price".
Items.exists("price")
    // Выполним запрос к данным коллекции
    .find()
        // Обработчик успешного выполнения запроса
        .then((result) => {
	        // Изменим значение поля "price" объектов на новое значение 42 в случае, если новое значение поля меньше текущего.
	        updateItems.max("price", 42);
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

**Исключения**:

- <code>Error</code> 'For a new document use the method Set'
- <code>Error</code> 'Field must by a type of number'
- <code>Error</code> 'Value must by a type of number'
