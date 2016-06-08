<a name="SCObject"></a>

### SCObject
SCObject
**Тип**: Класс <code>SC</code>  
**Содержание**
* [SCObject](#SCObject)
   * [init Object(collection: String, id: String?)](#SCObject+init)
    * [.set(dic: [String: SCValue])](#SCObject+set)
    * [.save(callback: (Bool, SCError?, [String: AnyObject]?)](#SCObject+save)  
    * [.getById(id, collection, callback)](#SCObject+getById)
    * [.get(name: String)](#SCObject+get)
    * [.upload(field: String, filename: String, data: NSData, callback: (Bool, SCError?)](#SCObject+upload)
    * [.getFileLink(fieldName: String, callback: (Bool, SCError?, NSURL?) -> Void)](#SCObject+getFileLink)
    * [.getFile (field: String, filename: String, callback: (Bool, SCError?)](#SCObject+getFile)
    * [.deleteFile (field: String, filename: String, callback: (Bool, SCError?)](#SCObject+deleteFile)  
    * [.remove(callback: (Bool, SCError?, [String: AnyObject]?)](#SCObject+remove) 
    * [.push(name: String, _ value: SCValue)](#SCObject+push)
    * [.pushEach(name: String, _ value: SCValue)](#SCObject+pushEach)  
    * [.pull(name: String, _ value: SCPullable)](#SCObject+pull) 
    * [.pullAll(name: String, _ value: SCValue)](#SCObject+pullAll) 
    * [.addToSet(name: String, _ value: SCValue)](#SCObject+addToSet)
    * [.addToSetEach(name: String, _ value: SCValue)](#SCObject+addToSetEach) 
    * [.pop(name: String, _ value: Int)](#SCObject+pop) 
    * [.inc(name: String, _ value: SCValue)](#SCObject+inc)
    * [.currentDate(name: String, typeSpec: String)](#SCObject+currentDate)
    * [.mul(name: String, _ value: SCValue)](#SCObject+mul)
    * [.min(name: String, _ value: SCValue)](#SCObject+min)
    * [.max(name: String, _ value: SCValue)](#SCObject+max)


---------------------------------------------------------------------------------------------



<a name="SCObject+init"></a>

#### init Object(collection, id)
SCObject представляет объект данных приложения и включает методы для работы с этими данными. Конструктор формирует минимальную базовую "обёртку" для пользовательских данных.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| collection | <code>String</code> | Обязательное | Имя коллекции в которую добавляется объект | "testcoll" | 
| id | <code>String</code> |   | _id объекта | "huNr3L7QDh" |

**Пример** 
```SWIFT
// Создадим новый экземпляр объекта коллекции items.
let obj1 = SCObject(collection: "items", id: "huNr3L7QDh")
let obj2 = SCObject(collection: "items")
```
<a name="SCObject+set"></a>

----------------------------------------------------------------------------------------------

#### SCObject.set(dic: [String: SCValue])
Метод для передачи данных объекту

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип              | Свойства     | Описание                             | Пример значения                       |
|------------|------------------|--------------|--------------------------------------|---------------------------------------|
| dic        |[String: SCValue] |              |Объект с данными для передачи объекту | ["fieldString": SCString("NewValue")] |

**Пример**  
```SWIFT
let newItem = SCObject(collection: "items")
newItem.set([
    "fieldString": SCString("Some test string"),
    "readACL": SCArray([SCString("*"), SCString("0123456789")])
    ])
newItem.save() {
    success, error, result in
    if success {
        // ... 
    } else {
        if let error = error {
            // ...
        }
    }
}
```
----------------------------------------------------------------------------------------------

<a name="SCObject+save"></a>

#### SCObject.save(callback)
Метод сохраняет объект в хранилище данных приложения или обновляет уже имеющийся там объект

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип              | Свойства     | Описание                             | Пример значения |
|------------|------------------|--------------|--------------------------------------|-----------------|
| callback | (Bool, SCError?) |              | Коллбэки для выполняемого запроса.   |                 |

**Пример**  
```SWIFT
let newItem = SCObject(collection: "items")
newItem.set(["fieldName": SCString("Value")])
newItem.save() {
    success, error, result in
    if success {
        // ... 
    } else {
        if let error = error {
            // ...
        }
    }
}
```
----------------------------------------------------------------------------------------------

<a name="SCObject+getById"></a>

#### SCObject.getById(id, collection, callback)
Метод для для получения объекта коллекции из БД по его _id. 

**Тип**: метод <code>[SCObject](#SCObject)</code>  

**Параметры**

| Параметр     | Тип                                                         | Свойства     | Описание                           | Пример значения |
|--------------|-------------------------------------------------------------|--------------|------------------------------------|-----------------|
| id           | <code>String</code>                                         | Обязательный | Идентификатор объекта              | "huNr3L7QDh"    |
| collection   | <code>String</code>                                         | Обязательный | Имя коллекции                      | "items"         |
| callback   | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |              | Коллбэки для выполняемого запроса. |                 |

**Пример**  
```SWIFT
SCObject.getById("p3OtsLXw8p", collection: "items") {
    success, error, result in
    if success {
        // ... 
    } else {
        if let error = error {
            // ...
        }
    }
}
```
----------------------------------------------------------------------------------------------

<a name="SCObject+get"></a>

#### SCObject.get(name)
Метод для получения данных указанного поля объекта.

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр     | Тип                                                         | Свойства     | Описание                           | Пример значения |
|--------------|-------------------------------------------------------------|--------------|------------------------------------|-----------------|
| name         | <code>String</code>                                         | Обязательный | Имя поля                           | "price"         |

**Пример**  
```SWIFT
let dataItem = SCObject(collection: "items", id: "huNr3L7QDh")
dataItem.get("price")
```
----------------------------------------------------------------------------------------------

<a name="SCObject+upload"></a>

#### SCObject.upload(field: String, filename: String, data: NSData, callback: (Bool, SCError?)
Метод для загрузки файлов

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип                           | Свойства     | Описание                             | Пример значения |
|------------|-------------------------------|--------------|--------------------------------------|-----------------|
| field      | <code>String</code>           | Обязательный | Имя поля, в которое загружается файл | "attachments"   |
| filename   | <code>String</code>           | Обязательный | Имя файла                            | "docname.pdf"   |
| data       | <code>NSData</code>           | Обязательный |                                      |                 |
| callback | <code>(Bool, SCError?)</code> |              | Коллбэки для выполняемого запроса.   |                 |

**Пример**  
```SWIFT
let newItem = SCObject(collection: "items")
let image = UIImage(named:"forupload")
newItem.set([
    "description": SCString("Example upload")
    ])
newItem.save() {
    success, error, result in
    if success {
        newItem.upload("attachment", "swiftDocs.pdf", data: image) {
            success, error, result in
            if success {
                NSLog("Success")
            } else {
            if let error = error {
                    NSLog("Error")
                }
            }
        }   
    } else {
        if let error = error {
             NSLog("Error")
        }
    }
}
```
----------------------------------------------------------------------------------------------

<a name="SCObject+getFileLink"></a>

#### Object.getFileLink(fieldName: String, callback: (Bool, SCError?, NSURL?) -> Void)
Метод для получения ссылки на файл.

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип              | Свойства     | Описание                             | Пример значения |
|------------|------------------|--------------|--------------------------------------|-----------------|
| fieldName  | String           | Обязательный | Имя файла                            | "attachments"   |
| callback | (Bool, SCError?) |              | Коллбэки для выполняемого запроса.   |                 |

**Пример**
```SWIFT
let item = SCObject(collection: "items", id: "huNr3L7QDh")
item.getFileLink("attachment")
    if success {
        NSLog("Success")
    } else {
    if let error = error {
            NSLog("Error")
        }
    }
}

```

----------------------------------------------------------------------------------------------

<a name="SCObject+getFile"></a>

#### SCObject.getFile(field, filename, callback)
Метод для получения содержания файла

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип                                    | Свойства     | Описание                             | Пример значения |
|------------|----------------------------------------|--------------|--------------------------------------|-----------------|
| field      | <code>String</code>                    | Обязательный | Имя поля                             | "attachments"   |
| filename   | <code>String</code>                    | Обязательный | Имя файла                            | "docname.pdf"   |
| callback   | <code>(Bool, SCError?)  -> Void</code> |              | Коллбэки для выполняемого запроса.   |                 |

**Пример**  
```SWIFT
let item = SCObject(collection: "items", id: "huNr3L7QDh")
item.getFile("attachment", "swiftDocs.pdf")
    if success {
        NSLog("Success")
    } else {
    if let error = error {
            NSLog("Error")
        }
    }
}
```
----------------------------------------------------------------------------------------------

<a name="SCObject+deleteFile"></a>

#### SCObject.deleteFile(field, filename, callback)
Метод для удаления файла

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип                                    | Свойства     | Описание                             | Пример значения |
|------------|----------------------------------------|--------------|--------------------------------------|-----------------|
| field      | <code>String</code>                    | Обязательный | Имя поля                             | "attachments"   |
| filename   | <code>String</code>                    | Обязательный | Имя файла                            | "docname.pdf"   |
| callback   | <code>(Bool, SCError?)  -> Void</code> |              | Коллбэки для выполняемого запроса.   |                 |

**Пример**  
```SWIFT
let item = SCObject(collection: "items", id: "huNr3L7QDh")
item.delete("attachment", "swiftDocs.pdf")
    if success {
        NSLog("Success")
    } else {
    if let error = error {
            NSLog("Error")
        }
    }
}
```

----------------------------------------------------------------------------------------------

<a name="SCObject+remove"></a>

#### SCObject.remove(Bool, SCError?, [String: AnyObject]?)
Метод для удаления указанного объекта

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип              | Свойства     | Описание                             | Пример значения |
|------------|------------------|--------------|--------------------------------------|-----------------|
| callback   | (Bool, SCError?) |              | Коллбэки для выполняемого запроса.   |                 |


**Пример**  
```SWIFT
let item = SCObject(collection: "items", id: "huNr3L7QDh")
obj.remove() {
    success, error, result in
 if success {
        NSLog("Success")
    } else {
        if let error = error {
            NSLog("Error")
        }
    }
}
```

**Исключение**

"Id не заполнен" - <code>String</code>

----------------------------------------------------------------------------------------------

<a name="SCObject+push"></a>

#### Object.push(name: String, _ value: SCValue))
Метод для добавления элемента в массив.

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип              | Свойства     | Описание                             | Пример значения                       |
|------------|------------------|--------------|--------------------------------------|---------------------------------------|
| name           |<code>String</code>         | Обязательный |  Имя поля, значение которого нужно изменить  | "tags" |
| _ value        | SCValue      | Обязательный |  Значение нового элемента массива            | 42     |


**Пример**
```SWIFT
let editItem = SCObject(collection: "items")
editItem.push("location", SCString("Sierra Army Depot"))
```

----------------------------------------------------------------------------------------------

<a name="SCObject+pushEach"></a>

#### SCObject.pushEach(name: String, _ value: SCValue))
Метод для добавления нескольких элементов в массив.

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип              | Свойства     | Описание                             | Пример значения                       |
|------------|------------------|--------------|--------------------------------------|---------------------------------------|
| name           | <code>String</code>       | Обязательный |  Имя поля, значение которого нужно изменить  | "tags" |
| _ value        | SCValue      | Обязательный |  Значения новых элементов массива            | 42, [43,43], 44     |


**Пример**
```SWIFT
let editItem = SCObject(collection: collection)
editItem.pushEach("location", SCArray([SCString("Sierra Army Depot"), SCString("Navarro")]))
```

----------------------------------------------------------------------------------------------

<a name="SCObject+pull"></a>

#### SCObject.pull(name: String, _ value: SCPullable)
Метод для удаления всех элементов массива, значение которых равно указанному.

**Тип**: Метод <code>[Object](#SCObject)</code>  
  
| Параметр   | Тип              | Свойства     | Описание                             | Пример значения                       |
|------------|------------------|--------------|--------------------------------------|---------------------------------------|
| name           | <code>String</code>       | Обязательный |  Имя поля, значение которого нужно изменить  | "tags" |
| _ value        | SCPullable      | Обязательный | Удаляемое значение            | 42     |

----------------------------------------------------------------------------------------------

<a name="SCObject+pullAll"></a>

#### SCObject.pullAll(name: String, _ value: SCValue)

Метод для удаления всех элементов массива, значения которых равны одному из указанных значений.

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип              | Свойства     | Описание                             | Пример значения                       |
|------------|------------------|--------------|--------------------------------------|---------------------------------------|
| name           | <code>String</code> | Обязательный |  Имя поля, значение которого нужно изменить  | "tags" |
| _ value        | <code>SCValue</code>| Обязательный |  Массив удаляемых значений            | [42, 44]     |

----------------------------------------------------------------------------------------------

<a name="SCObject+addToSet"></a>

#### SCObject.addToSet(name: String, _ value: SCValue)
Метод для добавления элемента в массив только в том случае, если в массиве отсутствуют элементы с таким значением.

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип              | Свойства     | Описание                             | Пример значения                       |
|------------|------------------|--------------|--------------------------------------|---------------------------------------|
| name           |<code>String</code>         | Обязательный |  Имя поля, значение которого нужно изменить  | "tags" |
| _ value        | <code>SCValue</code>      | Обязательный |  Значение нового элемента массива            | 42     |

**Пример**
```SWIFT
let editItem = SCObject(collection: "items")
editItem.addToSet("location", SCString("A"))

```

----------------------------------------------------------------------------------------------

<a name="SCObject+addToSetEach"></a>

#### SCObject.addToSetEach(name: String, _ value: SCValue)
Метод для добавления элементов в массив только в том случае, если в массиве отсутствуют элементы с таким значением.

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип              | Свойства     | Описание                             | Пример значения                       |
|------------|------------------|--------------|--------------------------------------|---------------------------------------|
| name           |<code>String</code>         | Обязательный |  Имя поля, значение которого нужно изменить  | "tags" |
| _ value        | <code>SCValue</code>      | Обязательный |  Массив значений новых элементов массива            | [42, 43]     |

**Пример**
```SWIFT
let editItem = SCObject(collection: "items")
editItem.addToSetEach("location", SCArray([SCString("Sierra Army Depot"), SCString("Navarro")]))

```

----------------------------------------------------------------------------------------------

<a name="SCObject+pop"></a>

#### SCSCObject.pop(name: String, _ value: Int)
Метод для удаления первого или последнего элемента массива

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип              | Свойства     | Описание                             | Пример значения                       |
|------------|------------------|--------------|--------------------------------------|---------------------------------------|
| name           |<code>String</code>         | Обязательный |  Имя поля, значение которого нужно изменить  | "tags" |
| _ value        | <code>Int</code>      | Обязательный | Позиция удаляемого элемента в массиве: -1 для первого элемента и 1 для последнего | -1     |

```SWIFT
let editItem = SCObject(collection: "items")
editItem.pop("location", 1)
```



----------------------------------------------------------------------------------------------

<a name="SCObject+inc"></a>

#### SCObject.inc(name: String, _ value: SCValue)
Метод увеличивает значение числового поля на заданное число

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип              | Свойства     | Описание                             | Пример значения                       |
|------------|------------------|--------------|--------------------------------------|---------------------------------------|
| name           |<code>String</code>         | Обязательный |  Имя поля, значение которого нужно изменить  | "price" |
| _ value        | <code>SCValue</code>      | Обязательный |  Шаг изменения | 5     |


**Пример** 
```SWIFT 
let editItem = SCObject(collection: "items")
editItem.inc("amount", SCInt(-14))
```

----------------------------------------------------------------------------------------------

<a name="SCObject+currentDate"></a>

#### SCObject.currentDate(name: String, typeSpec: String)
Устанавливает текущее время в качестве значения поля

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип                 | Свойства     | Описание                                                   |Пример значения|
|------------|---------------------|--------------|------------------------------------------------------------|---------------|
| name       |<code>String</code>  | Обязательный |  Имя поля, значение которого нужно изменить                | "price"       |
| typeSpec   | <code>SCValue</code>| Обязательный | Тип даты. Принимает значения: true, 'date' или 'timestamp' | "timestamp"   |

**Пример**:
```SWIFT
let editItem = SCObject(collection: "items")
editItem.currentDate("someDate", typeSpec: "date")

```


----------------------------------------------------------------------------------------------

<a name="SCObject+mul"></a>

#### SCObject.mul(name: String, _ value: SCValue)
Метод умножает значение числового поля на заданное число

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип              | Свойства     | Описание                             | Пример значения                       |
|------------|------------------|--------------|--------------------------------------|---------------------------------------|
| name           |<code>String</code>         | Обязательный |  Имя поля, значение которого нужно изменить  | "price" |
| _ value        | <code>SCValue</code>      | Обязательный | Мультипликатор | 2.5    |

**Пример**  
```SWIFT
let editItem = SCObject(collection: "items")
editItem.min("price", SCDouble(42.42))
```

----------------------------------------------------------------------------------------------

<a name="SCObject+min"></a>

#### SCObject.min(name: String, _ value: SCValue)
Метод обновляет значение числового поля только в случае, если новое значение меньше текущего значения поля

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип              | Свойства     | Описание                             | Пример значения                       |
|------------|------------------|--------------|--------------------------------------|---------------------------------------|
| name           |<code>String</code>         | Обязательный |  Имя поля, значение которого нужно изменить  | "price" |
| _ value        | <code>SCValue</code>      | Обязательный | Новое значение | 42    |


**Пример**  
```SWIFT
let editItem = SCObject(collection: "items")
editItem.min("price", SCInt(42))
```

----------------------------------------------------------------------------------------------


<a name="SCObject+max"></a>

#### SCObject.max(name: String, _ value: SCValue)
Метод обновляет значение числового поля только в случае, если новое значение больше текущего значения поля

**Тип**: Метод <code>[SCObject](#SCObject)</code>  

| Параметр   | Тип              | Свойства     | Описание                             | Пример значения                       |
|------------|------------------|--------------|--------------------------------------|---------------------------------------|
| name           |<code>String</code>         | Обязательный |  Имя поля, значение которого нужно изменить  | "price" |
| _ value        | <code>SCValue</code>      | Обязательный | Новое значение | 43    |

**Пример**  
```SWIFT
let editItem = SCObject(collection: "items")

```

