<a name="Scorocode"></a>

## Scorocode - Базовый класс для работы с SDK
* [Scorocode](#Scorocode)
	* [Подключение SDK](#Подключение SDK)
    * [.Init(opt) - Инициализация SDK](#Scorocode+Init)

<a name="Подключение SDK"></a>

### Подключение SDK

Для использования SDK на стороне браузера, скачайте библиотеку [lib/browser/scorocode.min.js](https://github.com/Scorocode/scorocode-SDK-JS/blob/master/lib/browser/scorocode.min.js) и подключите ее в проекте: 
```js
<script src="js/scorocode.min.js"></script>
```
 
Для использования SDK на стороне сервера (NodeJS) установите модуль SDK `npm install scorocode` и подключите его в проекте:
```js
var Scorocode = require('scorocode');
```
<a name="Scorocode+Init"></a>

### Scorocode.Init(opt) - Инициализация SDK

**Тип**: Метод <code>[Scorocode](#Scorocode)</code>  

| Параметр | Тип | Описание |
| --- | --- | --- |
| opt | <code>Object</code> | Ключи для инциализации: идентификатор приложения, клиентский ключ вашей платформы и необходимые вам ключи доступа. |

**Свойства**

| Имя | Тип | Описание |
| --- | --- | --- |
| ApplicationID | <code>String</code> | Идентификатор приложения |
| JavaScriptKey | <code>String</code> | Клиентский ключ для платформы JavaScript |
| AndroidKey | <code>String</code> | Клиентский ключ для платформы Android |
| iOsKey | <code>String</code> | Клиентский ключ для платформы iOs |
| WinPhoneKey | <code>String</code> | Клиентский ключ для платформы WindowsPhone |
| FileKey | <code>String</code> | Ключ авторизации для доступа к файлам |
| ScriptKey | <code>String</code> | Ключ авторизации для запуска серверных скриптов |
| MessageKey | <code>String</code> | Ключ авторизации для отправки сообщений |
| MasterKey | <code>String</code> | Мастер-ключ приложения|

**Пример**  
```js
Scorocode.Init({
    ApplicationID: "a3d04e75e157b2f7ae20c2fce02f63d6",
    JavaScriptKey: "ad6a8fe72ef7dfb9c46958aacb15196a",
    FileKey: "2aceceec7d2e96b1487ec399f5afa101",
    MessageKey: "e215ed465646775b42d65cca2d2f5db9"
});
```