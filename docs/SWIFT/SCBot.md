<a name="SCBot"></a>

## SCBot

SCBot

Класс для работы с ботами

* [SCBot](#SCBot)
	* [.init(id,name)](#SCBot+init)
    * [.create(callback)](#SCBot+create)
 	* [.save(callback)](#SCBot+save)
 	* [.delete(callback)](#SCBot+delete)

----------------------------------------------------------------------------------------------

<a name="SCBot+init"></a>

## .init(id, name)
Инициализация бота

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| id | <code>String</code> | Нобязательный | Идентификатор бота | "57484fb91c5666544db25675" | 
| name | <code>String</code> |  Обязательный | Имя бота | "botobot" |

**Пример**   
```SWIFT
let bot = SCBot(name: "botobot")
```

----------------------------------------------------------------------------------------------

<a name="SCBot+create"></a>

## .create(callback)
Создание бота

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?, [Any]?) -> Void</code> |         | Коллбэк для выполняемого запроса.|                             |

**Пример**   
```SWIFT
// Инициализируем бота
let bot = SCBot(name: "botobot")
// Бот активен
bot.isActive = true
// ИД серверного скрипта
bot.scriptId = "58b5295f22a5480e865bd30b"
// токен 
bot.telegramBotId = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew12"
// Создадим бота на сервере
bot.create { (success, error, result) in
    print(result)
}
```

----------------------------------------------------------------------------------------------

<a name="SCBot+save"></a>

## .save(callback)
Сохранение параметров бота

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?, [Any]?) -> Void</code> |  | Коллбэк для выполняемого запроса.| |

**Пример**   
```SWIFT
// Инициализируем бота
let bot = SCBot(name: "botobot")
// Бот активен
bot.isActive = true
// ИД серверного скрипта
bot.scriptId = "58b5295f22a5480e865bd30b"
// токен 
bot.telegramBotId = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew12"
// Создадим бота на сервере
bot.create { (success, error, result) in
    print(result)
}
```

----------------------------------------------------------------------------------------------

<a name="SCBot+delete"></a>

## .delete(callback)
Удаление бота

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?, [Any]?) -> Void</code> |  | Коллбэк для выполняемого запроса.| |

**Пример**   
```SWIFT
// Имя бота для удаления
let botNameForDetele = "botobot"
// Получим список ботов с сервера
SC.getBotsList { (success, error, bots) in
	// Найдем id бота
    for bot in bots {
        if bot.name == botNameForDetele {
        	// Удалим бота
            bot.delete { (success, error, result) in
                print(result)
            }
            break
        }
    }
}
```
