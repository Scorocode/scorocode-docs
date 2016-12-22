<a name="Scorocode.Object"></a>

**Содержание**

* [.Object](#Scorocode.Object)
    * [new Object(collName)](#new_Scorocode.Object_new) ⇒ <code>[Scorocode.Object](#Scorocode.Object)</code>
    * [.getById(_id, options)](#Scorocode.Object+getById) ⇒ <code>promise.[Scorocode.Object](#Scorocode.Object)</code>
    * [.get(key)](#Scorocode.Object+get)
    * [.getFileLink(field)](#Scorocode.Object+getFileLink) ⇒ <code>String</code>
    * [.uploadFile(field, filename, file, options)](#Scorocode.Object+uploadFile) ⇒ <code>promise.&lt;String&gt;</code>
    * [.save(options)](#Scorocode.Object+save) ⇒ <code>promise.[Scorocode.Object](#Scorocode.Object)</code>
    * [.remove(options)](#Scorocode.Object+remove) ⇒ <code>promise.{count: Number, docs: Array}</code>
    * [.extend(collName, childObject)](#Scorocode.Object+extend) ⇒ <code>[\[Scorocode.Object\]](#Scorocode.Object)</code>
    * [.set(data)](#Scorocode.Object+set)
    * [.push(key, value)](#Scorocode.Object+push) 
    * [.pull(key, value)](#Scorocode.Object+pull) 
    * [.pullAll(key, value)](#Scorocode.Object+pullAll) 
    * [.addToSet(key, value)](#Scorocode.Object+addToSet) 
    * [.pop(key, pos)](#Scorocode.Object+pop) 
    * [.inc(key, amount)](#Scorocode.Object+inc)
    * [.currentDate()](#Scorocode.Object+currentDate)
    * [.mul(key, number)](#Scorocode.Object+mul)
    * [.min()](#Scorocode.Object+min)
    * [.max()](#Scorocode.Object+max)

----------------------------------------------------------------------------------------------

<a name="new_Scorocode.Object_new"></a>

## new Object(collName)
Scorocode.Object представляет объект данных приложения и включает методы для работы с этими данными. Конструктор формирует минимальную базовую "обёртку" для пользовательских данных.

| Параметр | Тип | Описание |
| --- | --- | --- |
| collName | <code>String</code> | Имя коллекции в которую добавляется объект |

**Пример** 
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр объекта коллекции items.
var questItem = new Scorocode.Object("items"); 
// Используем метод set() для передачи объекту данных в поля "name" и "relatedquests".
questItem.set("name", "Водяной чип").set("relatedquests", ["huNr3L7QDh"]); 
// Используем метод save() для записи данных объекта в базу данных приложения
questItem.save()
    // Обработчик успешного выполнения запроса
    .then((saved) => {
         console.log("Запрос успешно выполнен: \n", saved);
     })
    // Обработчик ошибки
    .catch((error) => {
         console.log("Что-то пошло не так: \n", error)
    });
```
См.

* [.set(data)](#Scorocode.Object+set)
* [.save(options)](#Scorocode.Object+save) ⇒ <code>[Scorocode.Object](#Scorocode.Object)</code>

**Исключения**:

- <code>Error</code> "Invalid collection name" - некорректно указано имя коллекции
<a name="Scorocode.Object+getById"></a>
```
Что-то пошло не так:
{ 
    errCode: 404,
    errMsg: 'Invalid collection: \'items\'',
    error: true 
}
```

----------------------------------------------------------------------------------------------

<a name="Scorocode.Object+getById"></a>

## .getById(_id, options)
Метод для для получения объекта коллекции из БД по его _id. 

**Параметры**

| Параметр | Тип | Описание |
| --- | --- | --- |
| _id | <code>String</code> | Идентификатор объекта |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**
```js
// Подключим и инициализируем SDK
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр объекта коллекции items.
var getItem = new Scorocode.Object("items");
// Запросим интересующий нас объект по его _id
getItem.getById("NseSaqqd5v")
    // Обработчик успешного выполнения запроса
    .then((success) => {
         console.log("Запрос успешно выполнен: \n", success);
     })
    // Обработчик ошибки
    .catch((error) => {
         console.log("Что-то пошло не так: \n", error)
    });
```
См.

* [new Object(collName)](#new_Scorocode.Object_new)
* [.getById(_id, options)](#Scorocode.Object+getById) ⇒ <code>[Promise.&lt;Scorocode.Object&gt;](#Scorocode.Object)</code>

**Возвращает**: <code>[Promise.&lt;Scorocode.Object&gt;](#Scorocode.Object)</code> - Возвращает promise, который возвращает запрошенный объект.

```
{
    _id: 'NseSaqqd5v',
    name: 'Водяной чип',
    relatedquests: [ 'huNr3L7QDh' ],
    createdAt: Mon May 23 2016 19:37:04 GMT+0300 (RTZ 2 (зима)),
    updatedAt: Mon May 23 2016 19:37:04 GMT+0300 (RTZ 2 (зима)),
    readACL: [],
    updateACL: [],
    removeACL: [] 
}
```
См.

* [new Object(collName)](#new_Scorocode.Object_new)

**Исключения**:

- <code>Error</code> "Document not found" - Объект не найден
```
 [Error: Document not found]
```

----------------------------------------------------------------------------------------------

<a name="Scorocode.Object+get"></a>

## .get(key)
Метод для получения данных указанного поля объекта.

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно получить |

**Пример** 
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр объекта коллекции items.
var getItem = new Scorocode.Object("items");
// Запросим интересующий нас объект по его _id
getItem.getById("NseSaqqd5v")
    // Обработчик успешного выполнения запроса
    .then((success) => {
        //Выведем в консоль только значение поля "name".
        console.log("Вот значение интересующего вас поля: \n", getItem.get("name"));
     })
    // Обработчик ошибки
    .catch((error) => {
         console.log("Что-то пошло не так: \n", error)
    });
```
См.

* [new Object(collName)](#new_Scorocode.Object_new)    
* [.getById(_id, options)](#Scorocode.Object+getById) ⇒ <code>[Promise.&lt;Scorocode.Object&gt;](#Scorocode.Object)</code>

**Возвращает**: <code>value</code> - Возвращает значение поля  
```
Вот значение интересующего вас поля:
 Водяной чип
```

----------------------------------------------------------------------------------------------

<a name="Scorocode.Object+uploadFile"></a>

## .uploadFile(field, filename, file, options)
Метод для загрузки файлов

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля коллекции |
| filename | <code>String</code> | Имя файла |
| file | <code>String</code> | Файл в формате base64 |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |


**Пример**
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения",
    FileKey: "fileKey_приложения"
});

// Создадим новый экземпляр объекта коллекции items.
var attachToItem = new Scorocode.Object("items");
// Запросим интересующий нас объект по его _id
attachToItem.getById("xL0uOFtiJx")
    // Обработчик успешного выполнения запроса
    .then((success)=>{
        //Загрузим файл в поле "attachment"
        attachToItem.uploadFile("attachment", "file.txt", "VEhJUyBJUyBGSUxFLUUtRS1FLUUtRS1FIQ==")
        // Обработчик успешного выполнения запроса
        .then((uploaded)=>{
            console.log("Этот файл был успешно загружен:", uploaded);
        })
        // Обработчик ошибки
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
    })
    // Обработчик ошибки
    .catch((error) => {
        console.log("Что-то пошло не так: \n", error)
    });
    
```

* [new Object(collName)](#new_Scorocode.Object_new)
* [.getById(_id, options)](#Scorocode.Object+getById) ⇒ <code>[Promise.&lt;Scorocode.Object&gt;](#Scorocode.Object)</code>

**Возвращает**: <code>promise.&lt;String&gt;</code> - Возвращает название загруженного файла
```
Этот файл был успешно загружен: waterchip.txt
```

**Исключения**:

- <code>String</code> 'You must first create a document' 

----------------------------------------------------------------------------------------------

<a name="Scorocode.Object+getFileLink"></a>

## .getFileLink(field)
Метод для получения ссылки на файл.

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Название поля коллекции |

**Пример** 
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения",
    FileKey: "fileKey_приложения"
});

// Создадим новый экземпляр объекта коллекции items.
var attachToItem = new Scorocode.Object("items");
// Запросим интересующий нас объект по его _id
attachToItem.getById("xL0uOFtiJx")
    // Обработчик успешного выполнения запроса
    .then((success)=>{
        // Получим ссылку на файл, хранящийся в поле "attachment" объекта
        console.log("Вот ссылка на файл:", attachToItem.getFileLink("attachment"));
    })
        // Обработчик ошибки
    .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
    });
```
см.

* [new Object(collName)](#new_Scorocode.Object_new)
* [.getById(_id, options)](#Scorocode.Object+getById) ⇒ <code>[Promise.&lt;Scorocode.Object&gt;](#Scorocode.Object)</code>

**Возвращает**: <code>String</code> - Возвращает ссылку на запрошенный файл
```
Вот ссылка на файл: https://api.scorocode.ru/api/v1/getfile/e1afa40259773b4f9af4306b545d4165/items/attachment/NseSaqqd5v/waterchip.txt
```
**Исключения**:

- <code>Error</code> 'You must first create a document and upload file' - Объект коллекции, к которому обращается метод, должен быть создан и сохранен.
- <code>Error</code> 'Unknown field' - Поле не существует
- <code>Error</code> 'Field is empty' - Поле пустое

----------------------------------------------------------------------------------------------

<a name="Scorocode.Object+save"></a>

## .save(options)
Метод сохраняет объект в хранилище данных приложения или обновляет уже имеющийся там объект

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

// Создадим новый экземпляр объекта коллекции items.
var questItem = new Scorocode.Object("items"); 
// Используем метод set() для передачи объекту данных в поля "name" и "relatedquests".
questItem.set("name", "Водяной чип").set("relatedquests", ["huNr3L7QDh"]); 
// Используем метод save() для записи данных объекта в базу данных приложения
questItem.save()
    // Обработчик успешного выполнения запроса
    .then((saved) => {
         console.log("Вот что мы сохранили: \n", saved);
     })
    // Обработчик ошибки
    .catch((error) => {
         console.log("Что-то пошло не так: \n", error)
    });
```
см.

* [new Object(collName)](#new_Scorocode.Object_new)
* [.set(data)](#Scorocode.Object+set)

**Возвращает**: <code>[Promise.&lt;Scorocode.Object&gt;](#Scorocode.Object)</code> - Возвращает promise, который возвращает сохраненный объект 
```
Вот ваш объект:
 { _id: 'NseSaqqd5v',
  name: 'Водяной чип',
  relatedquests: [ 'huNr3L7QDh' ],
  createdAt: Mon May 23 2016 19:37:04 GMT+0300 (RTZ 2 (зима)),
  updatedAt: Mon May 23 2016 19:37:04 GMT+0300 (RTZ 2 (зима)),
  readACL: [],
  updateACL: [],
  removeACL: [] }
```

----------------------------------------------------------------------------------------------

<a name="Scorocode.Object+remove"></a>

## .remove(options)
Метод для удаления указанного объекта

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

// Создадим новый экземпляр объекта коллекции items.
var getItem = new Scorocode.Object("items");
// Запросим интересующий нас объект по его _id
getItem.getById("hejJU4BEGP")
    // Обработчик успешного выполнения запроса
    .then((success)=>{
        // Удалим полученный файл
        getItem.remove(success)
        // Обработчик успешного выполнения запроса
        .then((removed)=>{
            // Выведем в консоль результат запроса
            console.log(removed);
        })
        // Обработчик ошибки
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
    })
    // Обработчик ошибки
    .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
    });
```
см.

* [new Object(collName)](#new_Scorocode.Object_new)
* [.getById(_id, options)](#Scorocode.Object+getById) ⇒ <code>[Promise.&lt;Scorocode.Object&gt;](#Scorocode.Object)</code>

**Возвращает**: <code>Promise.{count: Number, docs: Array}</code> - Возвращает promise, который возвращает объект:

- "count" - <code>Number</code>  - количество удаленных объектов
- "doc" - <code>Array</code>  - массив ID удаленных объектов
```
{ 
    count: 1, 
    docs: [ 'hejJU4BEGP' ] 
}
```

----------------------------------------------------------------------------------------------

<a name="Scorocode.Object+extend"></a>

## .extend(collName, childObject)

Метод для преобразования данных выборки Scorocode.Query в отдельные экземпляры Scorocode.Object

| Параметр | Тип | Описание |
| --- | --- | --- |
| collName | <code>String</code> | Название коллекции |
| childObject | <code>Object</code> | Данные, которые необходимо преобразовать |

**Пример** 
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр  коллекции items.
var data = new Scorocode.Query("items");
// Запросим все объекты коллекции
data.find()
    // Обработчик успешного выполнения запроса
    .then((finded) =>{
        // Преобразуем полученный массив сырых данных в массив Scorocode.Object и передадим их экземпляры переменной objects.
        var objects = finded.result.map((data)=>{
            return Scorocode.Object.extend("items", data)
        });
        return objects;
    })
    // Обработчик успешного выполнения запроса
    .then((result) => {
        //Выведем результат в консоль
        console.log(result);
    })
    // Обработчик ошибки
    .catch((err)=>{
        console.log(err)
    });    
```
см.

* [new Object(collName)](#new_Scorocode.Object_new)
* [.find(options)](Scorocode.Query.md#Scorocode.Query+find) ⇒ <code>Promise.{error: Boolean, limit: Number, skip: Number, result: [{Scorocode.Object}]}</code>

**Возвращает**: <code>Scorocode.Object</code> - Возвращает Scorocode.Object

----------------------------------------------------------------------------------------------

<a name="Scorocode.Object+set"></a>

## .set(data)
Метод для передачи данных объекту

| Параметр | Тип | Описание |
| --- | --- | --- |
| data | <code>Object</code> | Данные в формате {"key", "value"}, где key - идентификатор поля коллекции. |

**Пример** 
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр объекта коллекции items.
var questItem = new Scorocode.Object("items"); 
// Используем метод set() для передачи объекту обновленных данных поля "name".
questItem.set("_id", "NseSaqqd5v").set("name", "Water chip"); 
// Используем метод save() для записи данных объекта в базу данных приложения
questItem.save()
    // Обработчик успешного выполнения запроса
    .then((success) => {
         console.log(success);
     })
    // Обработчик ошибки
    .catch((error) => {
         console.log(error)
    });
```

см.

* [new Object(collName)](#new_Scorocode.Object_new)
* [.save(options)](#Scorocode.Object+save) ⇒ <code>[Scorocode.Object](#Scorocode.Object)</code>

----------------------------------------------------------------------------------------------

<a name="Scorocode.Object+push"></a>

## .push(key, value)
Метод для добавления элемента в массив.

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| value | <code>String / Number / Boolean / Date / Array / Object </code> | Значение нового элемента массива |

**Пример** 
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр объекта коллекции items.
var Item = new Scorocode.Object("items"); 
// Запросим интересующий нас объект по его _id
Item.getById("NseSaqqd5v")
    // Обработчик успешного выполнения запроса
    .then((success)=>{
        console.log(success);
        // Добавим новый элемент в массив поля "arrayField"
        Item.push("arrayField", "Новый элемент массива");
        Item.save()
        // Обработчик успешного выполнения запроса
        .then((saved)=>{
            // Выведем в консоль результат запроса
            console.log(saved);
        })
        // Обработчик ошибки
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error);
        })
    })
    // Обработчик ошибки
    .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
    });
```

----------------------------------------------------------------------------------------------

<a name="Scorocode.Object+pull"></a>

## .pull(key, value)
Метод для удаления всех элементов массива, значение которых равно указанному.

 
| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| value | <code>String / Number / Boolean / Date / Array / Object </code> | Удаляемое значение  |

**Пример** 
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый объект коллекции items.
var Item = new Scorocode.Object("items"); 
// Запросим интересующий нас объект по его _id
Item.getById("MgYs9BEQUM")
// Обработчик успешного выполнения запроса
    .then((getted) => {
        // Из хранящегося в поле "arrayField" массива удалим все элементы со значением, равным {"Удалить": true}.
        Item.pull("arrayField", {"Удалить": true});
        // Сохраним внесенные изменения
        Item.save()
            // Обработчик успешного выполнения запроса
            .then((result) => {
                // Выведем результат в консоль
                console.log(result);
            })
            // Обработчик ошибки
            .catch((error) => {
                console.log("Что-то пошло не так: \n", error)
            });
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

<a name="Scorocode.Object+pullAll"></a>

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

// Создадим новый объект коллекции items.
var Item = new Scorocode.Object("items"); 
// Запросим интересующий нас объект по его _id
Item.getById("CrT49joIxn")
// Обработчик успешного выполнения запроса
    .then((getted) => {
        // Из хранящегося в поле "arrayField" массива удалим все элементы со значениями, равными "Удалить", 42 или {"Не удалять": false}.
        Item.pullAll("arrayField", ["Удалить", 42, {"Не удалять": false}]);
        // Сохраним внесенные изменения
        Item.save()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль
            console.log(result);
        })
        // Обработчик ошибки
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
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

<a name="Scorocode.Object+addToSet"></a>

## .addToSet(key, value)
Метод для добавления элемента в массив только в том случае, если в массиве отсутствуют элементы с таким значением.

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| value | <code>String / Number / Boolean / Date / Array / Object</code> | Значение добавляемого элемента |

**Пример** 
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый объект коллекции items.
var Item = new Scorocode.Object("items"); 
// Запросим интересующий нас объект по его _id
Item.getById("CrT49joIxn")
// Обработчик успешного выполнения запроса
    .then((getted) => {
        // Добавим в массив, хранящийся в поле "arrayField", новый элемент ["Первый элемент нового элемента", {"Второй?": true}], если такого элемента ещё нет в значении "arrayField".
        Item.addToSet("arrayField", ["Первый элемент нового элемента", {"Второй?": true}]);
        // Сохраним внесенные изменения
        Item.save()
        // Обработчик успешного выполнения запроса
        .then((result) => {
            // Выведем результат в консоль
            console.log(result);
        })
        // Обработчик ошибки
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
        });
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

<a name="Scorocode.Object+pop"></a>

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

// Создадим новый экземпляр объекта коллекции items.
var getItem = new Scorocode.Object("items"); 
// Запросим интересующий нас объект по его _id
getItem.getById("NseSaqqd5v")
    // Обработчик успешного выполнения запроса
    .then((success)=>{
        console.log(success);
        // Удалим последний элемент из массива в поле "arrayField"
        getItem.pop("arrayField", 1);
        // Используем метод save() для записи данных объекта в базу данных приложения
        getItem.save()
        // Обработчик успешного выполнения запроса
        .then((saved)=>{
            // Выведем в консоль результат запроса
            console.log(saved);
        })
        // Обработчик ошибки
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error);
        })
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

<a name="Scorocode.Object+inc"></a>

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

// Создадим новый экземпляр объекта коллекции items.
var Item = new Scorocode.Object("items"); 
// Запросим интересующий нас объект по его _id
Item.getById("gNxzwAfvDj")
    // Обработчик успешного выполнения запроса
    .then((success)=>{
        // Выведем в консоль значение поля price
        console.log(Item.get("price")); //44.42
        // Уменьшим значение поля "price" на 2.42
        Item.inc("price", -2.42);
        // Используем метод save() для записи данных объекта в базу данных приложения
        Item.save()
        // Обработчик успешного выполнения запроса
        .then((incremented)=>{
            // Выведем в консоль новое значение поля price
            console.log(Item.get("price")); // 42
        })
        // Обработчик ошибки
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error);
        })
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

<a name="Scorocode.Object+currentDate"></a>

## .currentDate()
Устанавливает текущее время в качестве значения поля

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| type | <code>String / Boolean</code> | Тип даты. Принимает значения: true, 'date' или 'timestamp' |

**Пример** 
```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения"
});

// Создадим новый экземпляр объекта коллекции items
var Item = new Scorocode.Object("items");
// Запишем текущую дату в поле "someDate" в созданный ранее объект "gNxzwAfvDj"
Item.set("_id", "gNxzwAfvDj").currentDate("someDate", true);
// Используем метод save() для записи данных объекта в базу данных приложения
Item.save()
    // Обработчик успешного выполнения запроса
    .then((success)=>{
        // Выведем в консоль значение поля somedate
        console.log(Item.get("someDate")); // 2016-05-27T14:10:00.013+03:00
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

<a name="Scorocode.Object+mul"></a>

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

// Создадим новый экземпляр объекта коллекции items.
var Item = new Scorocode.Object("items"); 
// Запросим интересующий нас объект по его _id
Item.getById("8Qcfll2GwE")
    // Обработчик успешного выполнения запроса
    .then((success)=>{
        // Выведем в консоль значение поля price
        console.log(Item.get("price")); // 42
        // Умножим значение на -1
        Item.mul("price", -1);
        // Используем метод save() для записи данных объекта в базу данных приложения
        Item.save()
        // Обработчик успешного выполнения запроса
        .then((incremented)=>{
            // Выведем в консоль новое значение поля price
            console.log(Item.get("price")); // -42
        })
        // Обработчик ошибки
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error);
        })
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

<a name="Scorocode.Object+min"></a>

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

// Создадим новый экземпляр объекта коллекции items.
var Item = new Scorocode.Object("items"); 
// Запросим интересующий нас объект по его _id
Item.getById("CrT49joIxn")
    // Обработчик успешного выполнения запроса
    .then((success)=>{
        // Выведем в консоль значение поля price
        console.log(Item.get("price")); // 42
        // Изменим значение поля "price" на новое значение 41.999
        Item.min("price", 41.999);
        Item.save()
        // Обработчик успешного выполнения запроса
        .then((changed)=>{
            // Выведем в консоль новое значение поля price
            console.log(Item.get("price")); // 41.999
        })
        // Обработчик ошибки
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error);
        })
    })
    // Обработчик ошибки
    .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
    });
```

----------------------------------------------------------------------------------------------


<a name="Scorocode.Object+max"></a>

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

// Создадим новый экземпляр объекта коллекции items.
var Item = new Scorocode.Object("items"); 
// Запросим интересующий нас объект по его _id
Item.getById("CrT49joIxn")
    // Обработчик успешного выполнения запроса
    .then((success)=>{
        // Выведем в консоль значение поля price
        console.log(Item.get("price")); // 41.999
        // Попытаемся изменить значение поля "price" на новое значение 40
        Item.max("price", 40);
        Item.save()
        // Обработчик успешного выполнения запроса
        .then((changed)=>{
            // Выведем в консоль значение поля price
            console.log(Item.get("price")); // 41.999
        })
        // Обработчик ошибки
        .catch((error) => {
            console.log("Что-то пошло не так: \n", error);
        })
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