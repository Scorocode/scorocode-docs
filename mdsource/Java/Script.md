<a name="Script"></a>

### Script
Script

**Содержание**
* [Script](#Script)
    * [.run()](#Script+run)
    * [.stat(callback, accessKey)](#Script+stat)


----------------------------------------------------------------------------------------------
<a name="Script+run"></a>

### Script.run(callback, sessionId, accessKey, scriptId, pool) ⇒ void

Метод для запуска выполнения серверного скрипта.

| Параметр  | Тип                              | Свойства | Описание                         | Пример значения |
| --------- | -------------------------------- | -------- | -------------------------------- | --------------- |
| callback  | <code>SCCallback<Boolean></code> |          | Коллбэк для выполняемого запроса |                 | 
| sessionId | <code>String</code>              |          | Идентификатор сессии             |                 |
| accessKey | <code>String</code>              |          | Ключ авторизации для запуска серверного кода |   "28f06b89b62165c33de55265166d8781" | 
| scriptId  | <code>String</code>              |          | Идентификатор скрипта                        |    "57484fb91c5666544db25675"    |
| pool      | <code>String[]</code>            |          |                   | Пул данных, которые будут переданы серверному скрипту | ["data": {"array": [0,1,2,3,"строка"], "logic": false}, "weekday": "friday"] | 

**Пример** 
```Java
Script serverSide = new Script();
serverside.run(callback, "AECDakkw8vdnugan", "28f06b89b62165c33de55265166d8781", "57484fb91c5666544db25675", ["data": {"array": [0,1,2,3,"строка"], "logic": false}, "weekday": "friday"]);
```

----------------------------------------------------------------------------------------------
<a name="Script+stat"></a>

### Script.stat(callback, accessKey) ⇒ void

Метод для получения информации о работе скрипта.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback  | <code>SCCallback<Boolean></code> |          | Коллбэк для выполняемого запроса |                 | 
| accessKey | <code>String</code>              |          | Ключ авторизации для запуска серверного кода |   "28f06b89b62165c33de55265166d8781" | 

**Пример** 
```Java
Script serverSide = new Script();
serverSide.run(callback, "AECDakkw8vdnugan", "28f06b89b62165c33de55265166d8781", "57484fb91c5666544db25675", ["data": {"array": [0,1,2,3,"строка"], "logic": false}, "weekday": "friday"]);
serverSide.stat(callback, "28f06b89b62165c33de55265166d8781");
```