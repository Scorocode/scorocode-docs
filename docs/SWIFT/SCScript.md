<a name="SCScript"></a>

## SCScript

SCScript

Класс для работы с серверными скриптами приложения

* [SCScript](#SCScript)
	* [.init(id,path)](#SCSript+init)
    * [.run(scriptId,pool,callback)](#SCScript+run)
    * [.create(callback)](#SCScript+create)
    * [.load(callback)](#SCScript+load)
    * [.save(callback)](#SCScript+save)
    * [.delete(callback)](#SCScript+delete)


----------------------------------------------------------------------------------------------

<a name="SCScript+init"></a>

## .init(id, path)
Инициализация скрипта


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| id | <code>String</code> | Обязательный, если не задан path | Идентификатор серверного скрипта | "57484fb91c5666544db25675" | 
| path | <code>String</code> |  Обязательный, если не задан id | Полный путь до скрипта вместе с именем | "/newScript.js" |

!!! tip "Пример"
    ```SWIFT
    let script = SCScript(path: "/newScript.js")
    let script2 = SCScript(id: "57484fb91c5666544db25675")
    ```

----------------------------------------------------------------------------------------------

<a name="SCScript+run"></a>

## .run(scriptID, pool, callback)
Метод для запуска серверного скрипта


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| scriptID | <code>String</code> | Обязательный | Идентификатор серверного скрипта | "57484fb91c5666544db25675" | 
| pool | <code>[String: AnyObject]</code> |  | Пул данных, которые будут переданы серверному скрипту | ["data": {"array": [0,1,2,3,"строка"], "logic": false}, "weekday": "friday"] |
| callback | <code>(Bool, SCError?) -> Void</code> | | Коллбэк для выполняемого запроса | |


!!! tip "Пример"
    ```SWIFT
    SCScript.run("57484fb91c5666544db25675", ["collname": "items", "key": "relToQuests", "val": ["CF4Gk9WP6L", "MwORD9llTM", "Jw4INX328A"]]) {
        success, error in
    }
    ```

----------------------------------------------------------------------------------------------

<a name="SCScript+create"></a>

## .create(callback)
Метод для создания серверного скрипта

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?,[String:Any]?) -> Void</code> | | Коллбэк для выполняемого запроса | |

!!! tip "Пример"
    ```SWIFT
    // инициализируем скрит
    let script = SCScript(path: "/newScript.js")
    // Дадим права на запуск пользователю с id = HCP8lrIAsV
    script.ACL = ["HCP8lrIAsV"]
    // Запишем код скрипта
    script.code = "console.log(\"test\")"
    // Добавим описание
    script.description = "test script"
    // Вкл или Откл запуск по расписанию
    script.isActiveJob = true
    // дата запуска
    let dateString = "21 Oct 2017 07:45"
    let dateFormatter = DateFormatter()
    dateFormatter.dateFormat = "dd MMM yyyy hh:mm"
    dateFormatter.timeZone = TimeZone.current
    let date = dateFormatter.date(from: dateString)
    script.jobStartAt = SCDate(date!)
    // Запускать ежедневно
    script.jobType = .daily
    // в 10 часов 45 минут
    script.repeatTimer.daily.hours = 10
    script.repeatTimer.daily.minutes = 45
    // По понедельникам и средам
    script.repeatTimer.daily.on = [1,3]
    // Создадим скрипт на сервере
    script.create { (success, error, result) in
        print(result)
    }
    ```

----------------------------------------------------------------------------------------------

<a name="SCScript+load"></a>

## .load(callback)
Метод для загрузки настроек серверного скрипта

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?,[String:Any]?) -> Void</code> | | Коллбэк для выполняемого запроса | |

!!! tip "Пример"
    ```SWIFT
    let script = SCScript(id: "5909ac0176e5e712788c9b66")
    script.load { (success, error, result) in
        print(script.code)
    }
    ```

----------------------------------------------------------------------------------------------
<a name="SCScript+save"></a>

## .save(callback)
Метод для сохранения настроек серверного скрипта

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?,[String:Any]?) -> Void</code> | | Коллбэк для выполняемого запроса | |

!!! tip "Пример"
    ```SWIFT
    // Инициализируем существующий скрипт
    let script = SCScript(id: "5909ac0176e5e712788c9b66")
    // Загрузим настройки скрипта
    script.load { (success, error, result) in
        if error == nil {
        	// Если все ок, добавим права на запуск пользователю с id = HCP8lrIAsV
            script.ACL.append("HCP8lrIAsV")
            // Изменим код срипта
            script.code = "console.log(\"this is new code\")"
            // Сохраним изменения на сервер
            script.save(callback: { (success, error, result) in
                print(result)
            })
        }
    }
    ```

----------------------------------------------------------------------------------------------
<a name="SCScript+delete"></a>

## .delete(callback)
Метод для удаления серверного скрипта

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?,[String:Any]?) -> Void</code> | | Коллбэк для выполняемого запроса | |

!!! tip "Пример"
    ```SWIFT
    let script = SCScript(id: "5909ac0176e5e712788c9b66")
    script.delete { (success, error, result) in
        if error == nil {
            print("Скрипт удален")
        }
    }
    ```

