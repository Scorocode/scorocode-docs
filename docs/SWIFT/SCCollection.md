<a name="SCCollection"></a>

## SCCollection

Класс для работы с коллекциями приложения

* [SCCollection](#SCCollection)
    * [init(id, name)](#SCCollection+init)
    * [.create(callback)](#SCCollection+create)
    * [.save(callback)](#SCCollection+save)
    * [.delete(callback)](#SCCollection+delete)
    * [.clone(name,callback)](#SCCollection+clone)
    * [.load(callback)](#SCCollection+load)
    * [.createIndex(indexName,fieldName,order,callback)](#SCCollection+createIndex)
    * [.deleteIndex(indexName,callback)](#SCCollection+deleteIndex)
    * [.createField(fieldName,fieldType,targetCollectionName,callback)](#SCCollection+createField)
    * [.deleteField(fieldName,callback)](#SCCollection+deleteField)
    * [.saveTriggers(callback)](#SCCollection+saveTriggers)

----------------------------------------------------------------------------------------------

<a name="SCUser+init"></a>
### init(id, name)
Инициализация SCСollection

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| id    | <code>String</code> | Необязательный | id коллекции          | "98bc4bacb5edea727cfb8fae25f71b59"          | 
| name | <code>String</code>  | Обязательный  | Имя коллекции        | "Books" |

!!! tip "Пример"
    ```SWIFT
    let collection = SCCollection(name: "Books")
    ```

----------------------------------------------------------------------------------------------
<a name="SCCollection+create"></a>
### .create(callback)
Метод для создания новой коллекции

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |         | Коллбэк для выполняемого запроса.|                             |

!!! tip "Пример"
    ```SWIFT
    // Инициализуем коллекцию
    let collection = SCCollection(name: "Books")
    // Дадим права на удаление записей коллекции двум пользователям с id = axCBar6eJI и 2lk8PTaVjH
    collection.useDocsACL = true
    collection.acl.remove = SCArray(stringArray: ["axCBar6eJI", "2lk8PTaVjH"])

    collection.create() {
        (success, error, result) in
        print(result)
    }
    ```

----------------------------------------------------------------------------------------------
<a name="SCCollection+save"></a>
### .save(callback)
Метод сохранения параметров коллекции

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |         | Коллбэк для выполняемого запроса.|                             |

!!! tip "Пример"
    ```SWIFT
    // Инициализируем коллекцию
    let collection = SCCollection(name: "books")
    // Загрузим параметры существующей коллекции
    collection.load {
        (success, error, result) in
        if error == nil {
            // дополним список пользователей, которым разрешено удалять записи коллекции, пользователем с id = snvrEKS1hs
            collection.acl.remove.append("snvrEKS1hs")
            // сохраним параметры коллекции
            collection.save {
                (success, error, result) in
                print(result)
            }
        }
    }
    ```

----------------------------------------------------------------------------------------------
<a name="SCCollection+delete"></a>
### .delete(callback)
Метод для удаления коллекции

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |         | Коллбэк для выполняемого запроса.|                             |

!!! tip "Пример"
    ```SWIFT
    // Инициализируем коллекцию
    let collection = SCCollection(name: "books")
    // Удалим коллекцию
    collection.delete(callback: { (success, error, result) in
        print(result)
    })
    ```

----------------------------------------------------------------------------------------------
<a name="SCCollection+clone"></a>
### .clone(name, callback)
Метод для создания копии существующей коллекции

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name | <code>String</code> | Обязательный | Имя новой коллекции | "BooksCopy"                            |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |         | Коллбэк для выполняемого запроса.|                             |

!!! tip "Пример"
    ```SWIFT
    // Инициализируем коллекцию
    let collection = SCCollection(name: "books")
    // Зададим настройки коллекции
    collection.acl.remove = ["3TB1tL5v7m", "HCP8lrIAsV"]
    collection.useDocsACL = true
    // Создадим коллекцию
    collection.create {(success, error, result) in
        if error == nil {
            // Если коллекция создалась успешно, то создадим копию коллекции с новым именем "books_copy"
            collection.clone(name: "books_copy", callback: { (success, error, result) in
                print(result)
            })
        }
    }
    ```

----------------------------------------------------------------------------------------------
<a name="SCCollection+load"></a>
### .load(callback)
Загрузка триггеров и настроек конкретной коллекции

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |         | Коллбэк для выполняемого запроса.|                             |

!!! tip "Пример"
    ```SWIFT
    // Инициализируем коллекцию
    let collection = SCCollection(name: "books")
    // Загрузим настройки и триггеры коллекции
    collection.load { (success, error, result) in
        if error == nil {
            print(collection.acl.remove)
            print(collection.triggers.afterUpdate.code)
        }
    }
    ```

----------------------------------------------------------------------------------------------
<a name="SCCollection+createIndex"></a>
### .createIndex(indexName,fieldName,order,callback)
Создание индекса коллекции

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| indexName | <code>String</code> | Обязательный | Название индекса | "UserNameIndex" |
| fieldName | <code>String</code> | Обязательный | Имя поля коллекции | "Name" |
| order | <code>IndexSortOrder</code> | Обязательный | Сортировка | .descending |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |         | Коллбэк для выполняемого запроса.|                             |

!!! tip "Пример"
    ```SWIFT
    // Инициализируем коллекцию
    let collection = SCCollection(name: "users")
    // Создадим индекс с именем "UserNameIndex" для поля "name" с сортировкой по убыванию
    collection.createIndex(indexName: "UserNameIndex", fieldName: "name", order: .descending) {
        (success, error, result) in
        print(result)
    }
    ```

----------------------------------------------------------------------------------------------
<a name="SCCollection+deleteIndex"></a>
### .deleteIndex(indexName,callback)
Удаление индекса коллекции

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| indexName | <code>String</code> | Обязательный | Название индекса | "UserNameIndex" |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |         | Коллбэк для выполняемого запроса.|                             |

!!! tip "Пример"
    ```SWIFT
    // Инициализируем коллекцию
    let collection = SCCollection(name: "users")
    // Удалим индекс "UserNameIndex"
    collection.deleteIndex(indexName: "UserNameIndex") {
        (succes, error, result) in
        print(result)
    }
    ```

----------------------------------------------------------------------------------------------
<a name="SCCollection+createField"></a>
### .createField(fieldName,fieldType,targetCollectionName,callback)
Создание поля коллекции

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| fieldName | <code>String</code> | Обязательный | Имя поля | "town" |
| fieldType | <code>FieldType</code> | Обязательный | Тип Поля | .Pointer |
| targetCollectionName | <code>String</code> | Обязательный для полей с типом .Pointer или .Relation | Имя целевой коллекции | "towns" |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |         | Коллбэк для выполняемого запроса.|                             |

!!! tip "Пример"
    ```SWIFT
    // Инициализируем коллекцию
    let collection = SCCollection(name: "users")
    // добавим пользователям поле "town" и свяжем это поле с коллекцией "towns"
    collection.createField(fieldName: "town", fieldType: .Pointer, targetCollectionName: "towns") { (success, error, result) in
        print(result)
    }
    ```

----------------------------------------------------------------------------------------------
<a name="SCCollection+deleteField"></a>
### .deleteField(fieldName,callback)
Удаление поля коллекции

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| fieldName | <code>String</code> | Обязательный | Имя поля | "town" |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |         | Коллбэк для выполняемого запроса.|                             |

!!! tip "Пример"
    ```SWIFT
    // Инициализируем коллекцию
    let collection = SCCollection(name: "users")
    // Удалим поле "town"
    collection.deleteField(fieldName: "town") { (success, error, result) in
        print(result)
    }
    ```

----------------------------------------------------------------------------------------------
<a name="SCCollection+saveTriggers"></a>
### .saveTriggers(callback)
Сохранение триггеров коллекции

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |         | Коллбэк для выполняемого запроса.|                             |

!!! tip "Пример"
    ```SWIFT
    // Инициализируем коллекцию
    let collection = SCCollection(name: "users")
    // Загрузим триггеры коллекции
    collection.load { (success, error, result) in
        if error == nil {
            // если все ок, то изменим некоторые триггеры
            collection.triggers.afterUpdate.isActive = true
            collection.triggers.afterUpdate.code = "console.log(\"after update trigger\")"
            
            let isActive = collection.triggers.beforeRemove.isActive
            collection.triggers.beforeRemove.isActive = !isActive
            // запишем изменения
            collection.saveTriggers(callback: { (success, error, result) in
                print(result)
            })
        }
    }
    ```