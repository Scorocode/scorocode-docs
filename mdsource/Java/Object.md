<a name="Object"></a>

## Object
Object

**Тип**: Класс <code>Scorocode</code>  
**Содержание**
* [Object](#Object)
    * [new Object(name)](#new_Scorocode.Object_new)
    * [.set(name, value)](#Object+set)
    * [.save(callback, sess, coll, doc)](#Object+save)  
    * [.getById(callback, sess, coll, query)](#Object+getById)
    * [.get(name)](#Object+get)
    * [.insert(callback, sess, coll, doc)](#Object+insert)
    * [.updateById(callback, sess, acc, coll, query, doc, limit)](#Object+updateById)
    * [.remove(collback, sess, coll, query)](#Object+remove)
    * [.getFile(callback, app, coll, field, file)](#Object+getFile)
    * [.getFileLink(callback, coll, doc, field, file)](#Object+getFileLink)
    * [.deleteFile(callback, coll, doc, field, file)](#Object+deleteFile)  
    * [.update(callbacl, sess, acc, coll, query, doc, limit)](#Object+upload)
    * [.count(callback, sess, coll, query)](#Object+count)
    * [.upload(callback, acc, sess, coll, doc, field, content)](#Object+upload)
    * [.getId()](#Object+getId)
    * [.setId(id)](#Object+setId)
    * [.getCreatedAt()](#Object+getCreatedAt)
    * [.setCreatedAt(createdAt)](#Object+setCreatedAt)
    * [.getUpdatedAt()](#Object+getUpdatedAt)
    * [.setUpdatedAt(updatedAt)](#Object+setUpdatedAt)
    * [.getReadACL()](#Object+getReadACL)
    * [.setReadACL(readACL)](#Object+setReadACL)
    * [.getRemoveACL()](#Object+getRemoveACL)
    * [.setRemoveACL(removeACL)](#Object+setRemoveACL)
    * [.getUpdateACL()](#Object+getUpdateACL)
    * [.setUpdateACL(updateACL)](#Object+setUpdateACL)
    * [.setUpdate(update)](#Object+setUpdate)

----------------------------------------------------------------------------------------------
<a name="new_Scorocode.Object_new"></a>

### new Object(name)

Object представляет объект данных приложения. Конструктор формирует минимальную базовую "обёртку" для пользовательских данных.


| Параметр | Тип | Описание |
| --- | --- | --- |
| name | <code>String</code> | Имя коллекции в которую добавляется объект |

**Пример** 
```Java
Object item = new Object("items");
```

----------------------------------------------------------------------------------------------
<a name="Object+set"></a>

### Object.set(name, value) ⇒ void

Метод для передачи данных объекту

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name | <code>String</code> | Обязательное | Имя поля | "testcoll" | 
| value | <code>ValueType</code> |   | Данные поля | "huNr3L7QDh" |

**Пример** 
```Java
Object item = new Object("items");
item.set("name", "Водяной чип");
```

----------------------------------------------------------------------------------------------
<a name="Object+save"></a>
### Object.save(callback, sess, acc, coll, query, limit) ⇒ void

Метод сохраняет объект в хранилище данных приложения или обновляет уже имеющийся там объект

| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| callback | <code>SCCallback</code> |          | Коллбэк для выполняемого запроса |                 | 
| sess     | <code>String</code>     |          | Идентификатор сессии             |                 |
| acc      | <code>String</code>     |          | Ключ доступа                     |                 | 
| coll     | <code>String</code>     |          | Имя коллекции                    |    "items"      |
| query    | <code>Query</code>      |          | Условия выборки                  |                 | 
| limit    | <code>int</code>        |          | Лимит выборки                    |                 |

----------------------------------------------------------------------------------------------
<a name="Object+getById"></a>
### Object.getById(callback, sess, coll, query) ⇒ void

Метод для для получения объекта коллекции из БД по его _id. 

| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| callback | <code>SCCallback<String></code> |          | Коллбэк для выполняемого запроса |                 | 
| sess     | <code>String</code>     |          | Идентификатор сессии             |                 |
| coll     | <code>String</code>     |          | Имя коллекции                    |    "items"      |
| query    | <code>Query</code>      |          | Условия выборки                  |                 | 

----------------------------------------------------------------------------------------------
<a name="Object+get"></a>
### Object.get(String name) ⇒ ValueType

Метод для получения данных указанного поля объекта.

| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| name     | <code>String</code>     |          | Имя поля                         |    "someField"  |

----------------------------------------------------------------------------------------------
<a name="Object+insert"></a>
### Object.insert(callback, sess, coll, doc) ⇒ void

Метод сохраняет новый объект в хранилище данных приложения

| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| callback | <code>SCCallback<DataResponseEntity></code> |          | Коллбэк для выполняемого запроса |                 | 
| sess     | <code>String</code>     |          | Идентификатор сессии             |                 |
| coll     | <code>String</code>     |          | Имя коллекции                    |    "items"      |
| doc      | <code>Object</code>     |          | Объект с данными для обновления  |                 |  


----------------------------------------------------------------------------------------------
<a name="Object+updateById"></a>
### Object.updateById(callback, sess, acc, coll, query, doc, limit) ⇒ void

Метод обновляет уже имеющийся в хранилище данных приложения объект по его идентификатору


| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| callback | <code>SCCallback<UpdateDataResponseEntity></code> |          | Коллбэк для выполняемого запроса |                 | 
| sess     | <code>String</code>     |          | Идентификатор сессии             |                 |
| acc      | <code>String</code>     |          | Ключ доступа                     |                 | 
| coll     | <code>String</code>     |          | Имя коллекции                    |    "items"      |
| query    | <code>Query</code>      |          | Условия выборки                  |                 |
| doc      | <code>Object</code>     |          |                                  |                 |  
| limit    | <code>int</code>        |          | Лимит выборки                    |                 |


----------------------------------------------------------------------------------------------
<a name="Object+remove"></a>
### Object.remove(callback, sess, coll, query) ⇒ void

Метод для удаления указанного объекта


| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| callback | <code>SCCallback<UpdateDataResponseEntity></code> |          | Коллбэк для выполняемого запроса |                 | 
| sess     | <code>String</code>     |          | Идентификатор сессии             |                 |
| coll     | <code>String</code>     |          | Имя коллекции                    |    "items"      |
| query    | <code>Query</code>      |          | Условия выборки                  |                 |

----------------------------------------------------------------------------------------------
<a name="Object+getFile"></a>
### Object.getFile(callback, app, coll, field, file) ⇒ void

Метод для получения содержания файла


| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| callback | <code>SCCallback<InputStream></code> |          | Коллбэк для выполняемого запроса |                 | 
| sess     | <code>String</code>     |          | Идентификатор сессии             |                 |
| app      | <code>String</code>     |          | Ключ доступа                     |                 | 
| coll     | <code>String</code>     |          | Имя коллекции                    |    "items"      |
| field    | <code>String</code>     |          | Имя поля                         |                 |
| file     | <code>String</code>     |          | Имя файла                        |                 |  


----------------------------------------------------------------------------------------------
<a name="Object+getFileLink"></a>
### Object.getFileLink(callback, coll, doc, field, file) ⇒ void

Метод для получения ссылки на файл.


| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| callback | <code>SCCallback<String></code> |          | Коллбэк для выполняемого запроса |                 | 
| coll     | <code>String</code>     |          | Имя коллекции                    |    "items"      |
| doc      | <code>String</code>     |          | Идентификатор документа          |                 |  
| field    | <code>String</code>     |          | Имя поля                         |                 |
| file     | <code>String</code>     |          | Имя файла                        |                 |  


----------------------------------------------------------------------------------------------
<a name="Object+deleteFile"></a>
### Object.deleteFile(callback, coll, doc, field, file) ⇒ void

Метод для удаления файла


| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| callback | <code>SCCallback<String></code> |          | Коллбэк для выполняемого запроса |                 | 
| coll     | <code>String</code>     |          | Имя коллекции                    |    "items"      |
| doc      | <code>String</code>     |          | Идентификатор документа          |                 |  
| field    | <code>String</code>     |          | Имя поля                         |                 |
| file     | <code>String</code>     |          | Имя файла                        |                 |  


----------------------------------------------------------------------------------------------
<a name="Object+update"></a>
### Object.update(callback, sess, acc, coll, query, doc, limit) ⇒ void

| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| callback | <code>SCCallback<UpdateDataResponseEntity></code> |          | Коллбэк для выполняемого запроса |                 | 
| sess     | <code>String</code>     |          | Идентификатор сессии             |                 |
| acc      | <code>String</code>     |          | Ключ доступа                     |                 | 
| coll     | <code>String</code>     |          | Имя коллекции                    |    "items"      |
| query    | <code>Query</code>      |          | Условия выборки                  |                 |
| doc      | <code>Object</code>     |          | Объект с данными для обновления  |                 |  
| limit    | <code>int</code>        |          | Лимит выборки                    |                 |


----------------------------------------------------------------------------------------------
<a name="Object+count"></a>
### Object.count(callback, sess, coll, query) ⇒ void

Метод для подсчета количества объектов, которые удовлетворяют условиям запроса.

| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| callback | <code>SCCallback<Integer></code> |          | Коллбэк для выполняемого запроса |                 | 
| sess     | <code>String</code>     |          |                                  |                 |
| coll     | <code>String</code>     |          | Имя коллекции                    |    "items"      |
| query    | <code>Query</code>      |          | Условия выборки                  |                 |

----------------------------------------------------------------------------------------------
<a name="Object+upload"></a>
### Object.upload(callback, acc, sess, coll, doc, field, content) ⇒ void

Метод для загрузки файлов

| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| callback | <code>SCCallback<String></code> |          | Коллбэк для выполняемого запроса |                 | 
| acc      | <code>String</code>     |          |                                  |                 | 
| sess     | <code>String</code>     |          |                                  |                 |
| coll     | <code>String</code>     |          | Имя коллекции                    |    "items"      |
| doc      | <code>String</code>     |          | Идентификатор документа          |                 |  
| field    | <code>String</code>     |          | Имя поля                         |                 |
| content  | <code>String</code>     |          | Контент файла в формате Base64   |                 |  

----------------------------------------------------------------------------------------------
<a name="Object+getId"></a>
### Object.getId() ⇒ String

Метод для получения идентификатора объекта.


----------------------------------------------------------------------------------------------
<a name="Object+setId"></a>
### Object.setId(String id) ⇒ void

Метод для установления идентификатора объекта.


| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| id       | <code>String</code>     |          |                                  |                 |
 
----------------------------------------------------------------------------------------------
<a name="Object+getCreatedAt"></a>
### Object.getCreatedAt() ⇒ String

Метод для получения даты создания объекта.


----------------------------------------------------------------------------------------------
<a name="Object+setCreatedAt"></a>
### Object.setCreatedAt(createdAt) ⇒ void

Метод для установления даты создания объекта.


| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| createdAt     | <code>String</code>     |          |                                  |                 |

----------------------------------------------------------------------------------------------
<a name="Object+getUpdatedAt"></a>
### Object.getUpdatedAt() ⇒ String

Метод для получения даты обновления объекта.


----------------------------------------------------------------------------------------------
<a name="Object+setUpdatedAt"></a>
### Object.setUpdatedAt(updatedAt) ⇒ void

Метод для установления даты обновления объекта.


| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| updatedAt     | <code>String</code>     |          |                             |            |

----------------------------------------------------------------------------------------------
<a name="Object+getReadACL"></a>
### Object.getReadACL() ⇒ String[]

Метод для получения readACL объекта.


----------------------------------------------------------------------------------------------
<a name="Object+setReadACL"></a>
### Object.setReadACL(readACL) ⇒ void

Метод для установления readACL объекта.


| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| readACL     | <code>String[]</code>     |          |                             |            |



----------------------------------------------------------------------------------------------
<a name="Object+getRemoveACL"></a>
### Object.getRemoveACL() ⇒ String[]

Метод для получения removeACL объекта.

----------------------------------------------------------------------------------------------
<a name="Object+setRemoveACL"></a>
### Object.setRemoveACL(removeACL) ⇒ void

Метод для установления removeACL объекта.


| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| removeACL     | <code>String[]</code>     |          |                           |          |

----------------------------------------------------------------------------------------------
<a name="Object+getUpdateACL"></a>
### Object.getUpdateACL() ⇒ String[]

Метод для получения updateACL объекта.


----------------------------------------------------------------------------------------------
<a name="Object+setUpdateACL"></a>
### Object.setUpdateACL(updateACL) ⇒ void

Метод для установления updateACL объекта.


| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| updateACL     | <code>String[]</code>   |          |                             |                 |

----------------------------------------------------------------------------------------------
<a name="Object+getUpdate"></a>
### Object.getUpdate() ⇒ Update

Метод для получения update объекта.


----------------------------------------------------------------------------------------------
<a name="Object+setUpdate"></a>
### Object.setUpdate(update) ⇒ void

Метод для установления update объекта.


| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| update   | <code>Update</code>     |          |                                  |                 |