<a name="Scorocode.WebSocket"></a>

Класс для работы с WebSocket-соединениями. 

Пример реализации чат-приложения с использованием Scorocode.WebSocket - [Scorochat](https://niksmith.github.io/). Исходный код приложения опубликован на GitHub в репозитории [NikSmith/niksmith.github.io](https://github.com/NikSmith/niksmith.github.io)


Содержание

* [.WebSocket](#Scorocode.WebSocket)
    * [new WebSocket(channame)](#new_Scorocode.WebSocket_new)
    * [.on(event, callback)](#Scorocode.WebSocket+on) 
    * [.send(message)](#Scorocode.WebSocket+send) 

----------------------------------------------------------------------------------------------

<a name="new_Scorocode.WebSocket_new"></a>

## new WebSocket(channame)

Открытие канала WebSocket. 

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| channame | <code>String</code> | Обязательный | Имя канала | "chatroom" |

**Пример**

```js
var WS = new Scorocode.WebSocket('chatroom');
```

----------------------------------------------------------------------------------------------

<a name="Scorocode.WebSocket+on"></a>

## .on(event, callback)
Метод для установления коллбэка на одно из событий:

* open - Соединение установлено
* close - Соединение закрыто
* error - Ошибка
* message - Получены данные

**Тип**: Метод <code>[WebSocket](#Scorocode.WebSocket)</code>  

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| event | <code>String</code> | Обязательный, значение из списка | Событие, на которое устанавливается коллбэк | "open", "message", "error", "close"  |
| callback | <code>Object</code> |  | Коллбэк на событие | |

**Пример**  

```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');

Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения",
    WebSocketKey: "webSocketKey_приложения"
});


var WS = new Scorocode.WebSocket('Helloworld');


WS.on("open", onOpen () {});
WS.on("close", onClose () {});
WS.on("error", onError () {});
WS.on("message", onMessage(data) {
    console.log(data)
    });


var data = "Wello Horld";
WS.send(data);
```
----------------------------------------------------------------------------------------------

<a name="Scorocode.WebSocket+send"></a>

## .send(message)
Метод для отправки сообщения в канал

**Тип**: Метод <code>[WebSocket](#Scorocode.WebSocket)</code>

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| message | <code>String</code> | Обязательный | Сообщение, которое нужно отправить в канал | "Wello Horld" |

**Пример**  

```js
// Подключим SDK и инициализируем его. 
var Scorocode = require('scorocode');
Scorocode.Init({
    ApplicationID: "applicationId_приложения",
    JavaScriptKey: "javascriptKey_приложения",
    WebSocketKey: "webSocketKey_приложения"
});

var WS = new Scorocode.WebSocket('Helloworld');
var data = "Wello Horld";

WS.on('open', function(){
    WS.send(data);
});
```