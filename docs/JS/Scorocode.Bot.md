<a name="Scorocode.Bot"></a>

Содержание

* [.Bot](#Scorocode.Bot)
    * [new Bot(botId)](#new_Scorocode.Bot)
    * [.send(data)](#Scorocode.Bot+send) 

----------------------------------------------------------------------------------------------

<a name="new_Scorocode.Bot"></a>

## new Bot(botId)

Конструктор Scorocode.Bot

**Возвращает**: <code>[Scorocode.Bot](#Scorocode.Bot)</code> - Возвращает новый экземпляр Scorocode.Bot

| Параметр | Тип | Описание |
| --- | --- | --- |
| botId | <code>String</code> | Telegram id бота, полученный от '@BotFather' |

**Пример**

```js
var Scorocode = require('scorocode');

Scorocode.Init({
    ApplicationID: "xxx", // <- заменить xxx на ключ appId приложения
    JavaScriptKey: "xxx", // <- заменить xxx на ключ javascript приложения
    MasterKey: "xxx" // <- заменить xxx на ключ masterKey приложения
});

var bot = new Scorocode.Bot("321196098:AAEDbOYD6iLWsHD7w28vqf3a9oBeJAPXXpg");

var data = {
    "method": "methodname", //название метода Telegram bot API 
    "method_params": {
        // параметры метода Telegram Bot API
    }};

bot.send(data)
```
--------------------------------------------------------------------------

<a name="Scorocode.Bot+send"></a>

## .send(pool, callbacks) 

Метод для запуска серверного кода

| Параметр | Тип | Описание |
| --- | --- | --- |
| data | <code>Object</code> | Объект, содержащий данные для передачи Telegram Bot API |

Свойства параметра `data`

| Имя | Тип | Описание |
| --- | --- | --- |
| method | <code>String</code> | Название метода Telegram bot API  |
| method_params | <code>Object</code> | Объект с параметрами для указанного метода |

**Пример**

```js
var Scorocode = require('scorocode');

Scorocode.Init({
    ApplicationID: "xxx", // <- заменить xxx на ключ appId приложения
    JavaScriptKey: "xxx", // <- заменить xxx на ключ javascript приложения
    MasterKey: "xxx" // <- заменить xxx на ключ masterKey приложения
});

var bot = new Scorocode.Bot("321196098:AAEDbOYD6iLWsHD7w28vqf3a9oBeJAPXXpg");

var data = {
    "method": "methodname", //название метода Telegram bot API 
    "method_params": {
        // параметры метода Telegram Bot API
    }};

bot.send(data);
```