<a name="Scorocode.Object"></a>

### Scorocode.Object
Scorocode.Object

**Тип**: Класс <code>[Scorocode](#Scorocode)</code>  
**Содержание**
* [.Object](#Scorocode.Object)
    * [new Object(collName)](#new_Scorocode.Object_new)
    * [.getById(_id, options)](#Scorocode.Object+getById) ⇒ <code>[Promise.&lt;Object&gt;](#Scorocode.Object)</code>
    * [.get(key)](#Scorocode.Object+get) ⇒ <code>promise.&lt;value&gt;</code>
    * [.getFileLink(field)](#Scorocode.Object+getFileLink) ⇒ <code>String</code>
    * [.uploadFile(field, filename, file, options)](#Scorocode.Object+uploadFile) ⇒ <code>promise.&lt;Object&gt;</code>
    * [.save(options)](#Scorocode.Object+save) ⇒ <code>[Object](#Scorocode.Object)</code>
    * [.remove(options)](#Scorocode.Object+remove) ⇒ <code>dragons</code>
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

**Исключения**:

- <code>String</code> "Invalid collection name" - некорректно указано имя коллекции


| Параметр | Тип | Описание |
| --- | --- | --- |
| collName | <code>String</code> | Имя коллекции в которую добавляется объект |

**Пример**  
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

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Возвращает**: <code>[Promise.&lt;Object&gt;](#Scorocode.Object)</code> - Возвращает promise, который возвращает запрошенный объект.  
**Исключения**:

- <code>String</code> "Document not found" - объект не найден

**См.**: [Object](#Scorocode.Object)  

| Параметр | Тип | Описание |
| --- | --- | --- |
| _id | <code>String</code> | Идентификатор объекта |
| options | <code>Object</code> | Коллбэки success и error для выполняемого запроса. |

**Пример**  
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

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Возвращает**: <code>promise.&lt;value&gt;</code> - Возвращает promise вернуть значение поля  

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | Имя поля, значение которого нужно получить |

**Пример**  
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

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Возвращает**: <code>String</code> - Возвращает ссылку на запрошенный файл  
**Исключения**:

- <code>String</code> 'You must first create a document and upload file' - Должен быть создан объект коллекции и сохранен [Scorocode.Object.save()](Scorocode.Object.save())
- <code>String</code> 'Unknown field' - Поле не существует
- <code>String</code> 'Field is empty' - Поле пустое

**Todo**

- [ ] Пример, исключения


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Название поля коллекции |

<a name="Scorocode.Object+uploadFile"></a>

#### object.uploadFile(field, filename, file, options) ⇒ <code>promise.&lt;Object&gt;</code>
Метод для загрузки файлов

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Возвращает**: <code>promise.&lt;Object&gt;</code> - Ссылка на файл  
**Исключения**:

- <code>String</code> 'You must first create a document' -Dragons


| Параметр | Тип | Описание |
| --- | --- | --- |
| field | <code>String</code> | Название поля коллекции |
| filename | <code>String</code> | Имя файла |
| file | <code>String</code> | Файл в формате base64 |
| options | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

**Пример**  
```js
var getItem = new Scorocode.Object("Items");
getItem.getById("xL0uOFtiJx")
.then(()=>{
   getItem.uploadFile("attachment", "file.txt", "VEhJUyBJUyBGSUxFLUUtRS1FLUUtRS1FIQ==")
   .then((uploaded)=>{
       console.log("Вот так мы назвали файл:", uploaded);
       console.log("А вот ссылка на файл:", getItem.getFileLink("attachment"))
   })
   .catch((error) => {console.log("Что-то пошло не так: \n", error)});
})
.catch((error) => {console.log("Что-то пошло не так: \n", error)});
    
```
<a name="Scorocode.Object+save"></a>

#### object.save(options) ⇒ <code>[Object](#Scorocode.Object)</code>
Метод сохраняет объект в хранилище данных приложения или обновляет уже имеющийся там объект

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Возвращает**: <code>[Object](#Scorocode.Object)</code> - Возвращает сохраненный объект  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

**Пример**  
```js
* // Создадим новый объект коллекции items.
var questItem = new Scorocode.Object("items"); 
// Используем метод set() для передачи объекту данных name и 
questItem.set("name", "Водяной чип").set("quest", "Sd4OyACUy2"); 
// Используем метод save() для записи объекта в базу данных приложения
questItem.save();
```
<a name="Scorocode.Object+remove"></a>

#### object.remove(options) ⇒ <code>dragons</code>
Метод для удаления указанного объекта

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Возвращает**: <code>dragons</code> - Here be dragons  

| Параметр | Тип | Описание |
| --- | --- | --- |
| options | <code>Object</code> | Действия, которые будут выполнены при обратном вызове в случае успешного или ошибочного выполнения |

**Пример**  
```js
// Dragons  
```
<a name="Scorocode.Object+extend"></a>

#### object.extend(collName, childObject) ⇒ <code>Object</code>
Extend

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Возвращает**: <code>Object</code> - Результат  
**Todo**

- [ ] Дописать


| Параметр | Тип | Описание |
| --- | --- | --- |
| collName | <code>String</code> | Название коллекции |
| childObject | <code>Object</code> | Дочерний объект |

<a name="Scorocode.Object+set"></a>

#### object.set(data)
Метод для передачи данных объекту

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| data | <code>Object</code> | Данные в формате {"key", "value"}, где key - идентификатор поля коллекции. |

**Пример**  
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

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Возвращает**: <code>Object</code> - { Описание_of_the_return_value }  

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | The key |
| value | <code>String</code> | The value |

<a name="Scorocode.Object+pull"></a>

#### object.pull(key, value) ⇒ <code>Object</code>
Метод для удаления всех элементов массива, подходящих под условия запроса

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Возвращает**: <code>Object</code> - { Описание_of_the_return_value }  

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | The key |
| value | <code>String</code> | The value |

<a name="Scorocode.Object+pullAll"></a>

#### object.pullAll(key, value) ⇒ <code>Object</code>
{ function_Описание }

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Возвращает**: <code>Object</code> - { Описание_of_the_return_value }  

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | The key |
| value | <code>Array</code> | The value |

<a name="Scorocode.Object+addToSet"></a>

#### object.addToSet(key, value) ⇒ <code>Object</code>
Метод для добавления элемента в массив, если он откутствует в выборке

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Возвращает**: <code>Object</code> - { Описание_of_the_return_value }  

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | The key |
| value | <code>Array</code> | The value |

<a name="Scorocode.Object+pop"></a>

#### object.pop(key, pos) ⇒ <code>Object</code>
{ function_Описание }

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Возвращает**: <code>Object</code> - { Описание_of_the_return_value }  

| Параметр | Тип | Описание |
| --- | --- | --- |
| key | <code>String</code> | The key |
| pos | <code>number</code> | The pos |

<a name="Scorocode.Object+inc"></a>

#### object.inc(key, amount)
Метод увеличивает значение числового поля на заданное число

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  

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

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  
<a name="Scorocode.Object+mul"></a>

#### object.mul(key, number)
Метод умножает значение числового поля на заданное число

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  

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

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Пример**  
```js
// Dragons
```
<a name="Scorocode.Object+max"></a>

#### object.max()
Метод обновляет значение поля только в случае, если указанное значение больше текущего значения поля

**Тип**: instance method of <code>[Object](#Scorocode.Object)</code>  
**Пример**  
```js
// Dragons
```