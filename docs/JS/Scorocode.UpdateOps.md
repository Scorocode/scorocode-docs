<a name="sc.UpdateOps"></a>

Содержание

* [.UpdateOps](#sc.UpdateOps)
    * [.set(data)](#sc.UpdateOps+set)
    * [.push(key, value)](#sc.UpdateOps+push) 
    * [.pull(key, value)](#sc.UpdateOps+pull) 
    * [.pullAll(key, value)](#sc.UpdateOps+pullAll) 
    * [.addToSet(key, value)](#sc.UpdateOps+addToSet) 
    * [.pop(key, pos)](#sc.UpdateOps+pop) 
    * [.inc(key, amount)](#sc.UpdateOps+inc)
    * [.currentDate()](#sc.UpdateOps+currentDate)
    * [.mul(key, number)](#sc.UpdateOps+mul)
    * [.min()](#sc.UpdateOps+min)
    * [.max()](#sc.UpdateOps+max)

<a name="new_sc.UpdateOps_new"></a>

## new UpdateOps()
Класс для осуществления операций множественного обновления объектов

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

**Возвращает**: <code>[UpdateOps](#sc.UpdateOps)</code> - Возвращает экземпляр sc.UpdateOps  

----------------------------------------------------------------------------------------------

<a name="sc.UpdateOps+set"></a>

## .set(data)
Метод для передачи данных объекту


| Параметр | Тип | Описание |
| --- | --- | --- |
| data | <code>Object</code> | Данные в формате {"key", "value"}, где key - имя поля коллекции. |


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

см.

* [new Object(collName)](#new_sc.Object_new)
* [.save(options)](#sc.UpdateOps+save) ⇒ <code>[sc.UpdateOps](#sc.UpdateOps)</code>

----------------------------------------------------------------------------------------------

<a name="sc.UpdateOps+push"></a>

## .push(key, value)
Метод для добавления элемента в массив.


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| value | <code>String</code> | Изменение, которое нужно внести |

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

<a name="sc.UpdateOps+pull"></a>

## .pull(key, value)
Метод для удаления всех элементов массива, значение которых равно указанному.

  
| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| value | <code>String / Number / Boolean / Date / Array / Object</code> | Удаляемое значение  |

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

<a name="sc.UpdateOps+pullAll"></a>

## .pullAll(key, value)

Метод для удаления всех элементов массива, значения которых равны одному из указанных значений.


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| value | <code>Array</code> | Массив удаляемых значений |

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

<a name="sc.UpdateOps+addToSet"></a>

## .addToSet(key, value)
Метод для добавления элемента в массив только в том случае, если в массиве отсутствуют элементы с таким значением.


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| value | <code>Array</code> | Значение добавляемого элемента |

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

<a name="sc.UpdateOps+pop"></a>

## .pop(key, pos)
Метод для удаления первого или последнего элемента массива


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| pos | <code>Number</code> | Позиция удаляемого элемента в массиве: -1 для первого элемента и 1 для последнего |

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

<a name="sc.UpdateOps+inc"></a>

## .inc(key, amount)
Метод увеличивает значение числового поля на заданное число


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| amount | <code>Number</code> | Шаг изменения |

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

<a name="sc.UpdateOps+currentDate"></a>

## .currentDate()
Устанавливает текущее время в качестве значения поля


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| type | <code>String / Boolean</code> | Тип даты. Принимает значения: true, 'date' или 'timestamp' |

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

<a name="sc.UpdateOps+mul"></a>

## .mul(key, number)
Метод умножает значение числового поля на заданное число


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| number | <code>Number</code> | Мультипликатор |

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

<a name="sc.UpdateOps+min"></a>

## .min()
Метод обновляет значение числового поля только в случае, если новое значение меньше текущего значения поля


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| number | <code>Number</code> | Новое значение |


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


<a name="sc.UpdateOps+max"></a>

## .max()
Метод обновляет значение числового поля только в случае, если новое значение больше текущего значения поля


| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| number | <code>Number</code> | Новое значение |

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
