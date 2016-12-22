<a name="SCScript"></a>

## SCScript

SCScript

Класс для работы с серверными скриптами приложения

* [SCScript](#SCScript)
    * [.run(scriptId, pool, callback)](#SCScript+run)


----------------------------------------------------------------------------------------------

<a name="SCScript+run"></a>

## .run(scriptID, pool, callback)
Метод для запуска серверного скрипта


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| scriptID | <code>String</code> | Обязательный | Идентификатор серверного скрипта | "57484fb91c5666544db25675" | 
| pool | <code>[String: AnyObject]</code> |  | Пул данных, которые будут переданы серверному скрипту | ["data": {"array": [0,1,2,3,"строка"], "logic": false}, "weekday": "friday"] |
| callback | <code>(Bool, SCError?) -> Void</code> | | Коллбэк для выполняемого запроса | |


**Пример**   
```SWIFT
SCScript.run("57484fb91c5666544db25675", ["collname": "items", "key": "relToQuests", "val": ["CF4Gk9WP6L", "MwORD9llTM", "Jw4INX328A"]]) {
    success, error in
}
```

