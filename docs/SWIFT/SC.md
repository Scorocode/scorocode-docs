<a name="Scorocode"></a>

## SС 

Базовый класс для работы с SDK

* [SC](#Scorocode)
    * [.initWith(opt)](#Scorocode+initWith)
    * [.getStat(callback -> Void)](#Scorocode+getStat)
    * [.getInfo(callback -> Void)](#Scorocode+getInfo)
    * [.getCollections(callback -> Void)](#Scorocode+getCollections)
    * [.getBotsList(callback)](#Scorocode+getBotsList)
    * [.getFoldersAndScriptsList(path,callback)](#Scorocode+getFoldersAndScriptsList)

----------------------------------------------------------------------------------------------

<a name="Scorocode+initWith"></a>

## .initWith(applicationId, clientId, accessKey, fileKey, messageKey)

Инициализация SDK. Значения параметров определяются в AppDelegate.swift

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| applicationId | <code>String</code> | Обязательный | Идентификатор приложения | "db8a1b41b8543397a798a181d9891b4c" |
| clientId      | <code>String</code> | Обязательный | Клиентский ключ для платформы iOs | "563452bbc611d8106d5da767365897de" |
| accessKey     | <code>String</code> | Обязательный | Ключ авторизации (master key, script key) | "28f06b89b62165c33de55265166d8781"  |
| fileKey       | <code>String</code> |  | Ключ авторизации для доступа к файлам | "6305ee7ac8023191a333d9267f1a07e8" |
| messageKey    | <code>String</code> |  | Ключ авторизации для отправки сообщений |  "9d774f6fa704f192e6aef53933f44e4f" |


!!! tip "Пример"
    В `AppDelegate.swift`, в метод `didFinishLaunchingWithOptions`, указать значения параметров инициализации:


    ```SWIFT
    let applicationId = "98bc4baccdedeb747cfb8fae25f71b59"
    let clientId = "39169707deawdfc06135c995aa4cdefe"
    let accessKey = "61afdr3bd71bd4f45sea53a3c996d53a"
    let fileKey = "351cb3d71sfef69e3d6fc5657dd16c1c"
    let messageKey = "35d5a173a0391a283g60a6m756a44051" 
    ```

    Инициализация SDK

    ```SWIFT
    SC.initWith(applicationId: applicationId, clientId: clientId, accessKey: accessKey, fileKey: fileKey, messageKey: messageKey)
    ```

----------------------------------------------------------------------------------------------


<a name="Scorocode+getStat"></a>

## .getStat(callback)

Получение статистики по приложению.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |  | Коллбэк для выполняемого запроса. |  |


!!! tip "Пример"
    ```SWIFT
    SC.getStat() {
        success, error, result in
        print(result)
    }
    ```

<a name="Scorocode+getInfo"></a>

----------------------------------------------------------------------------------------------

## .getInfo(callback)

Получение полной информации о приложении


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |  | Коллбэк для выполняемого запроса. |  |


!!! tip "Пример"
    ```SWIFT
    SC.getInfo() {
        succes, error, result in
        print(result)
    }
    ```

----------------------------------------------------------------------------------------------

<a name="Scorocode+getCollections"></a>

## .getCollections(callback)

Получение списка коллекций приложения и их настроек

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?, [String: AnyObject]?, [SCCollection]) -> Void</code> |  | Коллбэк для выполняемого запроса. |  |


!!! tip "Пример"
    ```SWIFT
    SC.getCollections() {
        success, error, result, collectionsArray in
        for collection in collectionsArray {
            print(collection.name)
        }
    }
    ```

----------------------------------------------------------------------------------------------

<a name="Scorocode+getBotsList"></a>

## .getBotsList(callback)
Получение списка ботов приложения

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?, [Any]?) -> Void</code> |  | Коллбэк для выполняемого запроса.| |

!!! tip "Пример"
    ```SWIFT
    SC.getBotsList { (success, error, botsList) in
        if error == nil {
            for bot in botsList {
                print(bot.name)
            }
        }
    }
    ```

----------------------------------------------------------------------------------------------

<a name="Scorocode+getFoldersAndScriptsList"></a>

## .getFoldersAndScriptsList(path, callback)
Получение списка папок и скриптов директории

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| path    | <code>String</code> | Обязательный | путь до директории  | "/"          | 
| callback | <code>(Bool, SCError?, [Any]?) -> Void</code> |  | Коллбэк для выполняемого запроса.|    |

!!! tip "Пример"
    ```SWIFT
    let folders = SCFolder()
    folders.getFoldersAndScriptsList(path: "/") { (success, error, result) in
        print(result)
    }
    ```


