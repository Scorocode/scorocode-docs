<a name="SCQuery"></a>

### SCQuery
SCQuery

* [.Query](#SCQuery)
    * [init(collection: String)](#SCQuery+init)
    * [SCQuery.find(callback: (Bool, SCError?, [String: AnyObject]?) -> Void)](#SCQuery+find) 
    * [SCQuery.count(callback: (Bool, SCError?, Int?) -> Void)](#SCQuery+count)
    * [SCQuery.update(update: SCUpdate, callback: (Bool, SCError?, [String: AnyObject]?) -> Void)](#SCQuery+update) 
    * [SCQuery.remove(callback: (Bool, SCError?, [String: AnyObject]?)](#SCQuery+remove) 
    * [SCQuery.limit(limit: Int)](#SCQuery+limit)
    * [SCQuery.skip(skip: Int)](#SCQuery+skip)
    * [SCQuery.page(page: Int)](#SCQuery+page)
    * [SCQuery.raw(json: String)](#SCQuery+raw)
    * [SCQuery.reset()](#SCQuery+reset)
    * [SCQuery.ascending(name: String)](#SCQuery+ascending)
    * [SCQuery.descending(name: String)](#SCQuery+descending) 
    * [SCQuery.fields(names: [String])](#SCQuery+fields) 
    * [SCQuery.addOperator(name: String, oper: SCOperator)](#SCQuery+addOperator) 
    * [SCQuery.equalTo(name: String, _ value: SCValue)](#SCQuery+equalTo) 
    * [SCQuery.notEqualTo(name: String, _ value: SCValue)](#SCQuery+notEqualTo)
    * [SCQuery.containedIn(name: String, _ value: SCArray)](#SCQuery+containedIn) 
    * [SCQuery.containsAll(name: String, _ value: SCArray)](#SCQuery+containsAll) 
    * [SCQuery.notContainedIn(name: String, _ value: SCArray)](#SCQuery+notContainedIn)
    * [SCQuery.greaterThan(name: String, _ value: SCValue)](#SCQuery+greaterThan)
    * [SCQuery.greaterThanOrEqualTo(name: String, _ value: SCValue)](#SCQuery+greaterThanOrEqualTo)
    * [SCQuery.lessThan(name: String, _ value: SCValue)](#SCQuery+lessThan)
    * [SCQuery.lessThanOrEqualTo(name: String, _ value: SCValue)](#SCQuery+lessThanOrEqualTo)
    * [SCQuery.exists(name: String)](#SCQuery+exists)
    * [SCQuery.doesNotExist(name: String)](#SCQuery+doesNotExist)
    * [SCQuery.contains(name: String, _ pattern: String)](#SCQuery+contains)
    * [SCQuery.startsWith(name: String, _ pattern: String)](#SCQuery+startsWith)
    * [SCQuery.endsWith(name: String, _ pattern: String)](#SCQuery+endsWith)
    * [SCQuery.and(operators: [SCOperator])](#SCQuery+and)
    * [SCQuery.or(operators: [SCOperator])](#SCQuery+or)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


<a name="SCQuery+init"></a>
## init(collection)

Инициализация запроса к данным коллекции. 

**Тип**: метод <code>[SCObject](#SCObject)</code>

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| collection | <code>String</code> | Обязательное | Имя коллекции в которую добавляется объект | "items" | 

```SWIFT
var query = SCQuery(collection: "users")
```

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<a name="SCQuery+find"></a> 
## SCQuery.find(callback) 

Метод для поиска документов, на основе сформированного условия выборки. Возвращает ошибку или массив документов.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback  | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |        | Коллбэки для выполняемого запроса. |                 |

```SWIFT
var query = SCQuery(collection: "users")
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<a name="SCQuery+count"></a> 

## SCQuery.count(callback()) 

Метод для подсчета количества объектов, которые удовлетворяют условиям запроса.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback()   | <code>(Bool, SCError?, Int?) -> Void</code> |        | Коллбэки для выполняемого запроса. |                 |

```SWIFT
var query = SCQuery(collection: "users")
query.count() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+update"></a> 

## SCQuery.update(update, callback())

Метод для обновления документов соответствующих условиям выборки.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| update | <code>SCUpdate</code> | Обязательное | Объект SCUpdate в который переданы обновляемые данные |                                    | 
| callback()   | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |        | Коллбэки для выполняемого запроса. |                 |

```SWIFT
var userArrivalTime = SCUpdate()
let currentDate = SCUpdateOperator.currentDate("fieldName", typeSpec: "timestamp")
logArrivalTime.addOperator(currentDate)

var arrivedUsers = SCQuery(collection: "users")
arrivedUsers.equalTo("flightRace", SCString("AF4926"))
arrivedUsers.update(userArrivalTime) {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+remove"></a>

## SCQuery.remove(callback()) 

Метод для удаления документов соответствующих условиям выборки.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback()   | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |        | Коллбэки для выполняемого запроса. |                 |

```SWIFT
var oldStuff = SCQuery(collection: "Stuff")
oldStuff.lessThan("createdAt", SCDate("2016-06-54T17:24:23.091+03:00"))
oldStuff.remove() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+limit"></a> 

## SCQuery.limit(limit)

Метод для установки лимита выборки.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| limit | <code>Int</code> | Обязательное | Лимит выборки  | 100 | 

```SWIFT
var query = SCQuery(collection: "items")
query.limit(25)
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+skip"></a>

## SCQuery.skip(skip) 

Метод для установки количества пропускаемых перед совершением выборки документов

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| limit | <code>Int</code> | Обязательное | Количество пропускаемых документов  | 1000 | 

```SWIFT
var query = SCQuery(collection: "items")
query.skip(1000)
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+page"></a>

## SCQuery.page(page: Int)

Метод для "постраничного" вывода результатов выборки, в соответствуии с указанным limit.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| page | <code>Int</code> | Обязательное | Номер страницы | 4 | 

```SWIFT
var query = SCQuery(collection: "items")
query.limit(25)
query.page(4)
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+raw"></a> 

## SCQuery.raw(json: String) 

Метод для установки условий выборки в виде JSON-структуры для формирования запроса к БД на языке MongoDB.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| json| <code>String</code> | Обязательное | Условия выборки в  | {location: {$in: ['New California Republic', 'Vault City']}}| 

```SWIFT
var query = SCQuery(collection: "items")
query.raw("{ \"fieldString\" : \"Строка\" }")
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+reset"></a> 

## SCQuery.reset() 

Метод для очистки условий выборки


```SWIFT
var query = SCQuery(collection: "items")

query.equalTo("fieldName", SCString("John Doe"))
query.raw("{ \"fieldString\" : \"Строка\" }")
query.ascending("field1")
query.descending("field2")
query.fields(["field1", "field2"])
let and1 = SCOperator.EqualTo("fieldString", SCString("Строка"))
let and2 = SCOperator.EqualTo("fieldNumber", SCInt(33))
query.and([and1, and2])

query.reset()

```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+ascending"></a> 

## SCQuery.ascending(name: String) 

Метод для сортировки данных в порядке возрастания значений указанного поля перед совершением выборки.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name | <code>String</code> | Обязательное | Имя поля | "price" | 

```SWIFT
var sortByPrice = SCQuery(collection: "items")
sortByPrice.ascending("price")
sortByPrice.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+descending"></a>

## SCQuery.descending(name) 

Метод для сортировки данных в порядке убывания значений указанного поля перед совершением выборки.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name | <code>String</code> | Обязательное | Имя поля | "reward" | 

```SWIFT
var sortByReward = SCQuery(collection: "items")
sortByReward.descending("reward")
sortByReward.find() {
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

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+fields"></a>

## SCQuery.fields(names)

Метод для указания списка возвращаемых полей. 

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| names | <code>[String]</code> | Обязательное | Массив имен запрашиваемых полей | ["price", "reward"] | 

```SWIFT
var getPriceAndReward = SCQuery(collection: "items")
getPriceAndReward.fields(["price", "reward"])
getPriceAndReward.find() {
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

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+addOperator"></a> 

## SCQuery.addOperator(name, oper)

Метод для передачи SCQuery условия выборки 

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name | <code>String</code> | Обязательное | Имя поля, на которое накладывается условие | "testcoll" | 
| oper | <code>SCOperator</code> | Обязательное | Условие, которое накладывается |  | 


```SWIFT
let lessNorEqual = SCOperator.LessThanOrEqualTo("price", 42)
SCQuery.addOperator(name, oper: lessNorEqual)
```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+equalTo"></a> 

## SCQuery.equalTo(name: String, _ value: SCValue)

Метод для получения всех документов c указанным в условии значением поля.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
|----------------|---------------------------|------------|------------------------------------------------|--------|
| name           | <code>String</code>       | Обязательный | Имя поля, на которое накладывается условие   | "tags" |
| _ value        | <code>SCValue</code>      | Обязательный | Значение поля                                | 42     |

```SWIFT
var query = SCQuery(collection: "items")
query.equalTo("equality", SCString("yep"))
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+notEqualTo"></a>

## SCQuery.notEqualTo(name: String, _ value: SCValue) 

Метод для получения всех документов, за исключением объектов с указанным в условии значением поля.


**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
|----------------|---------------------------|------------|------------------------------------------------|--------|
| name           | <code>String</code>       | Обязательный | Имя поля, на которое накладывается условие   | "tags" |
| _ value        | <code>SCValue</code>      | Обязательный | Значение поля                                | 43     |

```SWIFT
var query = SCQuery(collection: "items")
query.notEqualTo("unequality", SCString("nope"))
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+containedIn"></a> 

## SCQuery.containedIn(name: String, _ value: SCArray)

Метод для получения всех объектов, значение поля которых содержит указанные в запросе элементы массива.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
|----------------|---------------------------|--------------|----------------------------------------------|---------|
| name           | <code>String</code>       | Обязательный | Имя поля, на которое накладывается условие   | "price" |
| _ value        | <code>SCArray</code>      | Обязательный | Массив значений                              | [-42, 41.999, 42]     |

```SWIFT
var query = SCQuery(collection: "items")
query.containedIn("someField", SCArray([SCString("A"), SCString("B")]))
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+containsAll"></a> 

## SCQuery.containsAll(name: String, _ value: SCArray)

Метод для получения всех объектов, значение поля которых содержит все указанные в запросе элементы массива.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
|----------------|---------------------------|------------|------------------------------------------------|--------|
| name           | <code>String</code>       | Обязательный | Имя поля, на которое накладывается условие  | "strangeNumbers" |
| _ value        | <code>SCArray</code>      | Обязательный | Массив значений                           | [4, 8, 15, 16, 23, 42]     |

```SWIFT
var query = SCQuery(collection: "items")
query.containsAll("someField", SCArray([SCString("A"), SCString("B")]))
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+notContainedIn"></a>

## SCQuery.notContainedIn(name: String, _ value: SCArray)

Метод для получения всех объектов, значение поля которых не содержит указанные в запросе элементы массива.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
|----------------|---------------------------|------------|------------------------------------------------|--------|
| name           | <code>String</code>       | Обязательный |   Имя поля, на которое накладывается условие  | "tags" |
| _ value        | <code>SCArray</code>      | Обязательный | Массив значений                           | 42     |

```SWIFT
var query = SCQuery(collection: "items")
query.notContainedIn("someField", SCArray([SCString("A"), SCString("B")]))
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+greaterThan"></a>

## SCQuery.greaterThan(name: String, _ value: SCValue)

Метод для получения всех объектов, значение поля которых больше, чем указанное в запросе число.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
|----------------|---------------------------|------------|------------------------------------------------|--------|
| name           | <code>String</code>       | Обязательный |   Имя поля, на которое накладывается условие | "reward" |
| _ value        | <code>SCValue</code>      | Обязательный |  Значение условия                           | 42     |

```SWIFT
var query = SCQuery(collection: "items")
query.greaterThan("reward", SCInt(100))
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+greaterThanOrEqualTo"></a>

## SCQuery.greaterThanOrEqualTo(name: String, _ value: SCValue)

Метод для получения всех объектов, значение поля которых не меньше, чем указанное в запросе число.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
|----------------|---------------------------|------------|------------------------------------------------|--------|
| name           | <code>String</code>       | Обязательный |   Имя поля, на которое накладывается условие |"reward"|
| _ value        | <code>SCValue</code>      | Обязательный |  Значение условия                            | 42     |

```SWIFT
var query = SCQuery(collection: "items")
query.greaterThanOrEqualTo("createdAt", SCDate("2016-06-04T17:24:23.091+03:00"))
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+lessThan"></a>

## SCQuery.lessThan(name: String, _ value: SCValue)

Метод для получения всех объектов, значение поля которых меньше, чем указанное в запросе число.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
|----------------|---------------------------|------------|------------------------------------------------|--------|
| name           | <code>String</code>       | Обязательный |  Имя поля, значение которого нужно изменить  | "price"|
| _ value        | <code>SCValue</code>      | Обязательный |  Значение условия                            | 42     |

```SWIFT
var query = SCQuery(collection: "items")
query.lessThan("price", SCInt(42))
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+lessThanOrEqualTo"></a>

## SCQuery.lessThanOrEqualTo(name: String, _ value: SCValue)

Метод для получения всех объектов, значение поля которых не больше, чем указанное в запросе число.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
|----------------|---------------------------|------------|------------------------------------------------|--------|
| name           | <code>String</code>       | Обязательный |  Имя поля, значение которого нужно изменить  | "price"|
| _ value        | <code>SCValue</code>      | Обязательный |  Значение условия                            | 42     |

```SWIFT
var query = SCQuery(collection: "items")
query.lessThanOrEqualTo("price", SCInt(42))
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+exists"></a>

## SCQuery.exists(name: String)

Метод для получения всех объектов с существующим значением заданного поля

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name | <code>String</code> | Обязательное | Имя поля, которому задается условие | "price" | 

```SWIFT
var query = SCQuery(collection: "items")
query.exists("reward")
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+doesNotExist"></a>

## SCQuery.doesNotExist(name: String)](#SCQuery+doesNotExist)

Метод для получения всех объектов с отсутствующим значением в заданном поле

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name | <code>String</code> | Обязательное |  Имя поля, которому задается условие | "price" | 

```SWIFT
var query = SCQuery(collection: "items")
query.doesNotExist("price")
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+contains"></a>

## SCQuery.contains(name: String, _ pattern: String)

Метод для получения всех объектов со значением заданного поля, соответствующим заданному регулярному выражению.


**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
|----------------|---------------------------|------------|------------------------------------------------|----------------------|
| name           | <code>String</code>       | Обязательный |  Имя поля, которому задается условие         | "stringsWithNumbers" |
| _ pattern      | <code>String</code>       | Обязательный | Регулярное выражение                         | [0-9]                |

```SWIFT
var query = SCQuery(collection: "items")
query.contains("description", "[a-zA-Z0-9]")
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+startsWith"></a>

## SCQuery.startsWith(name: String, _ pattern: String)

Метод для получения всех объектов со значением заданного поля, начинающимся с указанной строки.


**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
|----------------|---------------------------|------------|------------------------------------------------|--------|
| name           | <code>String</code>       | Обязательный | Имя поля, которому задается условие          | "labels" |
| _ pattern        | <code>String</code>      | Обязательный | Значение условия                            | "neverendi"     |

```SWIFT
var query = SCQuery(collection: "items")
query.startsWith("fieldString", "[A-Z]")
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+endsWith"></a>

## SCQuery.endsWith(name: String, _ pattern: String)]

Метод для получения всех объектов со значением заданного поля, заканчивающимся на указанную строку.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
|----------------|---------------------------|------------|------------------------------------------------|-------------------|
| name           | <code>String</code>       | Обязательный |  Имя поля, значение которого нужно изменить  | "labels"          |
| _ pattern        | <code>String</code>      | Обязательный | Удаляемое значение                          | "ngdocuments"     |

```SWIFT
var query = SCQuery(collection: "items")
query.endsWith("fieldString", "ing")
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+and"></a>

## SCQuery.and(operators: [SCOperator])

Метод для логического умножения условий нескольких выборок

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| operators | <code>[SCOperator]</code> | Обязательное | Условие выборки, которое включается в конъюнкцию |  | 

```SWIFT
var query = SCQuery(collection: "items")
query.notEqualTo("unequality", SCString("nope"))
query.find() {
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCQuery+or"></a>

## SCQuery.or(operators: [SCOperator])

Метод для логического сложения условий нескольких выборок

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| operators | <code>[SCOperator]</code> | Обязательное | Условие выборки, которое включается в дизъюнкцию |  | 

```SWIFT
var query = SCQuery(collection: "items")
query.notEqualTo("unequality", SCString("nope"))
query.find() {
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






