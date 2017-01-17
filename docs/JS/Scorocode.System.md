<a name="sc.System"></a>

Содержание

* [.System](#sc.System)
    * [new System()](#new_sc.System)
    * [.getDataStats()](#sc.System+getDataStats) 
    * [.getApp()](#sc.System+getApp) 
    * []

--------------------------------------------------------------------------------

<a name="new_sc.System"></a>

## new System()

Конструктор Scorocode.Systemю 

```js
var sys = new sc.System();
```

!!! Note "Примечание"
    Для использования системных методов необходима инициализация SDK с указанием MasterKey.

------------------------------------------------------------------------

<a name="sc.System+getDataStats"></a>

## .getDataStats(callbacks)

Метод для получения статистики приложения.

| Параметр | Тип | 	Свойства	| Описание |	Пример значения |
| --- | --- | --- | --- | --- |
| callback | `CallbackGetApplicationInfo` | Обязательный | Callback, который будет вызван после выполнения запроса. | см. пример ниже |

```js
var sc = require('scorocode');

sc.Init({
    ApplicationID: "5c46ec2f6f94aa92sdfef83122ff1gc",
    JavaScriptKey: "86df1sd52d81dbhskn32f1d6a8e15936",
    MasterKey: "e9c6vf5b9d6acd5tyu3aav1405c1e6dc3"
});

var sys = new sc.System();

sys.getDataStats()
   .then((stats)=>{
   		console.log(stats);
    })
    .catch((error)=>{
        console.log(error)
    });

**Возвращает**: <code>promise.{dataSize: int, filesSize: int, indexSize: int, store: int}
</code> - Возвращает promise, который возвращает объект со статистикой приложения:

* dataSize - объем данных приложения;
* fileSize - объем данных, занятый файлами приложения;
* indexSixe - объем данных, занятый индексами приложения;
* store - объем данных, доступных приложению.

