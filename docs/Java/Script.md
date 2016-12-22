<a name="Script"></a>

## Script
Класс для работы с серверными скриптами.

**Содержание**

* [Script](#Script)
    * [new Script()](#Script_new)
    * [.runScript(scriptId, dataPoolForScript, callback)](#Script+runScript1)
    * [.runScript(scriptId, callback)](#Script+runScript1)

----------------------------------------------------------------------------------------------

<a name="Script_new"></a>
### new Script()
Конструктор Script

```Java
Script script = new Script();
```
----------------------------------------------------------------------------------------------
<a name="Script+runScript1"></a>
### .runScript(scriptId, dataPoolForScript, callback)
Метод для запуска серверного скрипта 

| Параметр  | Тип                              | Свойства | Описание                         | Пример значения |
| --------- | -------------------------------- | -------- | -------------------------------- | --------------- |
| scriptId	        | `String`	            | Обязательный	 | Идентификатор скрипта	                             | "57e1503b48e5f54441189790" |
| dataPoolForScript	| `Object`	            | Необязательный | Объект, содержащий параметры скрипта для выполнени    | см.пример ниже |
| callback	        | `CallbackRunScript` 	| Обязательный	 | Callback, который будет вызван после выполнения запроса.	| см.пример ниже |

!!! note "Примечание"
    Объект `dataPoolForScript` будет сериализован в JSON при помощи парсера Google Gson. Если у вас возникли проблемы при передаче параметров в скрипт - обратитесь к официальной документации <https://github.com/google/gson>


**Пример**
```Java
Script script = new Script();
HashMap<String, Object> dataPool = new HashMap<>();
dataPool.put(“collname”,”items”);
dataPool.put(“key”,”exampleField”);
dataPool.put(“val”,”anyInfo”);
	
script.runScript("57e1503b48e5f54441189790", dataPool, new CallbackRunScript() {
            @Override
            public void onScriptSended() {
                //script sended and runned
            }

            @Override
            public void onScriptSendFailed(String errorCode, String errorMessage) {
                //error during script run
            }
        });
```



----------------------------------------------------------------------------------------------
<a name="Script+runScript2"></a>
### .runScript(scriptId, callback)
Метод для запуска серверного скрипта 

| Параметр  | Тип                              | Свойства | Описание                         | Пример значения |
| --------- | -------------------------------- | -------- | -------------------------------- | --------------- |
| scriptId	        | `String`	            | Обязательный	 | Идентификатор скрипта	                             | "57e1503b48e5f54441189790" |
| callback	        | `CallbackRunScript` 	| Обязательный	 | Callback, который будет вызван после выполнения запроса.	| см.пример ниже |

!!! note "Примечание"
    Объект `dataPoolForScript` будет сериализован в JSON при помощи парсера Google Gson. Если у вас возникли проблемы при передаче параметров в скрипт - обратитесь к официальной документации <https://github.com/google/gson>

**Пример**
```Java
Script script = new Script();
script.runScript("57e1503b48e5f54441189790", new CallbackRunScript() {
            @Override
            public void onScriptSended() {
                //script sended and runned
            }

            @Override
            public void onScriptSendFailed(String errorCode, String errorMessage) {
                //error during script run
            }
        });
```
