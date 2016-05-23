<a name="Scorocode.Object"></a>

### Scorocode.Object
Scorocode.Object

**Тип**: Класс <code>[Scorocode](Scorocode.md#Scorocode)</code>  
**Содержание**
* [.Object](#Scorocode.Object)
    * [new Object(collName)](#new_Scorocode.Object_new)
    * [.getById(_id, options)](#Scorocode.Object+getById) ⇒ <code>[Promise.&lt;Scorocode.Object&gt;](#Scorocode.Object)</code>
    * [.get(key)](#Scorocode.Object+get) ⇒ <code>promise.&lt;Значение поля&gt;</code>
    * [.getFileLink(field)](#Scorocode.Object+getFileLink) ⇒ <code>String</code>
    * [.uploadFile(field, filename, file, options)](#Scorocode.Object+uploadFile) ⇒ <code>promise.&lt;Object&gt;</code>
    * [.save(options)](#Scorocode.Object+save) ⇒ <code>[Scorocode.Object](#Scorocode.Object)</code>
    * [.remove(options)](#Scorocode.Object+remove) ⇒ <code>{count: Number, docs: Array}</code>
    * [.extend(collName, childObject)](#Scorocode.Object+extend) ⇒ <code>dragons</code>
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

| Параметр | Тип | Описание |
| --- | --- | --- |
| collName | <code>String</code> | Имя коллекции в которую добавляется объект |

**Пример** 
```js
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
См.
* [.set(data)](#Scorocode.Object+set)
* [.save(options)](#Scorocode.Object+save) ⇒ <code>[Scorocode.Object](#Scorocode.Object)</code>

**Исключения**:

- <code>String</code> "Invalid collection name" - некорректно указано имя коллекции
<a name="Scorocode.Object+getById"></a>
```
Что-то пошло не так:
{ 
    errCode: 404,
    errMsg: 'Invalid collection: \'items\'',
    error: true 
}
```

#### object.getById(_id, options) ⇒ <code>[Promise.&lt;Scorocode.Object&gt;](#Scorocode.Object)</code>
Метод для для получения объекта коллекции из БД по его _id. 

**Тип**: метод <code>[Scorocode.Object](#Scorocode.Object)</code>  

**Параметры**

| Параметр | Тип | Описание |
| --- | --- | --- |
| _id | <code>String</code> | Идентификатор объекта |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**  
```js
// Создадим новый экземпляр объекта коллекции items.
var getItem = new Scorocode.Object("items");
// Запросим интересующий нас объект по его _id
getItem.getById("NseSaqqd5v")
    // Обработчик успешного выполнения запроса
    .then((success) => {
         console.log("Вот ваш объект: \n", success);
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
Вот ваш объект:
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
- <code>String</code> "Document not found" - Объект не найден
```
Что-то пошло не так:
 [Error: Document not found]
```


<a name="Scorocode.Object+get"></a>

#### object.get(key) ⇒ <code>promise.&lt;value&gt;</code>
Метод для получения данных указанного поля объекта.

**Тип**: Метод <code>[Scorocode.Object](#Scorocode.Object)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно получить |

**Пример**  
```js
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
**Возвращает**: <code>promise.&lt;value&gt;</code> - Возвращает promise вернуть значение поля  
```
Вот значение интересующего вас поля:
 Водяной чип
```

<a name="Scorocode.Object+uploadFile"></a>

#### object.uploadFile(field, filename, file, options) ⇒ <code>promise.&lt;String&gt;</code>
Метод для загрузки файлов

**Тип**: Метод <code>[Scorocode.Object](#Scorocode.Object)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Имя поля коллекции |
| filename | <code>String</code> | Имя файла |
| file | <code>String</code> | Файл в формате base64 |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**  
```js
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
**Возвращает**: <code>promise.&lt;String&gt;</code> - Возвращает название загруженного файла
```
Этот файл был успешно загружен: waterchip.txt
```

**Исключения**:

- <code>String</code> 'You must first create a document' -Dragons
<a name="Scorocode.Object+getFileLink"></a>


#### object.getFileLink(field) ⇒ <code>String</code>
Метод для получения ссылки на файл.

**Тип**: Метод <code>[Scorocode.Object](#Scorocode.Object)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Название поля коллекции |

**Пример**
```js
// Создадим новый экземпляр объекта коллекции items.
var attachToItem = new Scorocode.Object("items");
// Запросим интересующий нас объект по его _id
attachToItem.getById("xL0uOFtiJx")
    // Обработчик успешного выполнения запроса
    .then((success)=>{
        // Получим ссылку на файл, хранящийся в поле "attachment" объекта
        console.log("Вот ссылка на файл:", getObjects.getFileLink("attachment"));
    })
        // Обработчик ошибки
    .catch((error) => {
            console.log("Что-то пошло не так: \n", error)
    });
```
**Возвращает**: <code>String</code> - Возвращает ссылку на запрошенный файл
```
Вот ссылка на файл: https://api.scorocode.ru/api/v1/getfile/e1afa40259773b4f9af4306b545d4165/items/attachment/NseSaqqd5v/waterchip.txt
```
**Исключения**:

- <code>String</code> 'You must first create a document and upload file' - Объект коллекции, к которому обращается метод, должен быть создан и сохранен.
- <code>String</code> 'Unknown field' - Поле не существует
- <code>String</code> 'Field is empty' - Поле пустое

<a name="Scorocode.Object+save"></a>

#### object.save(options) ⇒ <code>[Object](#Scorocode.Object)</code>
Метод сохраняет объект в хранилище данных приложения или обновляет уже имеющийся там объект

**Тип**: Метод <code>[Scorocode.Object](#Scorocode.Object)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**  
```js
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

<a name="Scorocode.Object+remove"></a>

#### object.remove(options) ⇒ <code>dragons</code>
Метод для удаления указанного объекта

**Тип**: Метод <code>[Scorocode.Object](#Scorocode.Object)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**  
```js
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
**Возвращает**: <code>Promise.&lt;Object&gt;</code> - Возвращает promise, который возвращает объект:
- "count" - <code>Number</code>  - количество удаленных объектов
- "doc" - <code>Array</code>  - массив ID удаленных объектов
```
{ count: 1, docs: [ 'hejJU4BEGP' ] }
``` 
<a name="Scorocode.Object+extend"></a>

#### object.extend(collName, childObject) ⇒ <code>Dragons</code>

Метод Extend

**Todo**
- [ ] Дописать

**Тип**: Метод <code>[Scorocode.Object](#Scorocode.Object)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| collName | <code>String</code> | Название коллекции |
| childObject | <code>Object</code> | Дочерний объект |

<a name="Scorocode.Object+set"></a>

#### object.set(data)
Метод для передачи данных объекту

**Тип**: Метод <code>[Scorocode.Object](#Scorocode.Object)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| data | <code>Object</code> | Данные в формате {"key", "value"}, где key - идентификатор поля коллекции. |

**Пример**  
```js
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
<a name="Scorocode.Object+push"></a>

#### object.push(key, value) ⇒ <code>Object</code>
Метод для добавления элемента в массив.

**Тип**: Метод <code>[Scorocode.Object](#Scorocode.Object)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| value | <code>String</code> | Изменение, которое нужно внести |

<a name="Scorocode.Object+pull"></a>

#### object.pull(key, value) ⇒ <code>Object</code>
Метод для удаления всех элементов массива, подходящих под условия запроса

**Тип**: Метод <code>[Object](#Scorocode.Object)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| value | <code>String</code> | Изменение, которое нужно внести |

<a name="Scorocode.Object+pullAll"></a>

#### object.pullAll(key, value) ⇒ <code>Object</code>

**Тип**: Метод <code>[Scorocode.Object](#Scorocode.Object)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| value | <code>Array</code> | Изменение, которое нужно внести |

<a name="Scorocode.Object+addToSet"></a>

#### object.addToSet(key, value) ⇒ <code>Object</code>
Метод для добавления элемента в массив, если он откутствует в выборке

**Тип**: Метод <code>[Scorocode.Object](#Scorocode.Object)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| value | <code>Array</code> | Изменение, которое нужно внести |

<a name="Scorocode.Object+pop"></a>

#### object.pop(key, pos) ⇒ <code>Object</code>
Метод для 

**Тип**: Метод <code>[Scorocode.Object](#Scorocode.Object)</code>  
**Возвращает**: <code>Object</code> -   

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно изменить |
| pos | <code>number</code> | The pos |

<a name="Scorocode.Object+inc"></a>

#### object.inc(key, amount)
Метод увеличивает значение числового поля на заданное число

**Тип**: Метод <code>[Scorocode.Object](#Scorocode.Object)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Идентификатор поля |
| amount | <code>Number</code> | Шаг увеличения |

**Пример**  
```js
// Dragons
```
<a name="Scorocode.Object+currentDate"></a>

#### object.currentDate()
Устанавливает текущее время в качестве значения поля

**Тип**: Метод <code>[Scorocode.Object](#Scorocode.Object)</code>  
<a name="Scorocode.Object+mul"></a>

#### object.mul(key, number)
Метод умножает значение числового поля на заданное число

**Тип**: Метод <code>[Scorocode.Object](#Scorocode.Object)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Идентификатор поля |
| number | <code>Number</code> | Мультипликатор |

**Пример**  
```js
// Dragons
```
<a name="Scorocode.Object+min"></a>

#### object.min()
Метод обновляет значение поля только в случае, если указанное значение меньше текущего значения поля

**Тип**: Метод <code>[Scorocode.Object](#Scorocode.Object)</code>  
**Пример**  
```js
// Dragons
```
<a name="Scorocode.Object+max"></a>

#### object.max()
Метод обновляет значение поля только в случае, если указанное значение больше текущего значения поля

**Тип**: Метод <code>[Scorocode.Object](#Scorocode.Object)</code>  
**Пример**  
```js
// Dragons
```