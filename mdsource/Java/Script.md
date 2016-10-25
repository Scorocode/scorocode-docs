<a name="Script"></a>

### Script
Класс для работы с серверными скриптами.

**Содержание**
* [Script](#Script)
    * [new Script()](#Script_new)
    * [.runScript(scriptId, dataPoolForScript, callbackRunScript)](#Script+runScript1)
    * [.runScript(scriptId, callbackRunScript)](#Script+runScript1)



----------------------------------------------------------------------------------------------

<a name="Script_new"></a>

Конструктор Script

```Java
Script script = new Script();
```
----------------------------------------------------------------------------------------------
<a name="Script+runScript1"></a>
### Script.runScript(scriptId, dataPoolForScript, callbackRunScript)
Метод для запуска серверного скрипта 

| Параметр  | Тип                              | Свойства | Описание                         | Пример значения |
| --------- | -------------------------------- | -------- | -------------------------------- | --------------- |
| scriptId	        | String	            | Обязательный	 | Идентификатор скрипта	                             | "57e1503b48e5f54441189790" |
| dataPoolForScript	| Object	            | Необязательный | Объект, содержащий параметры скрипта для выполнени    | см.пример ниже |
| callback	        | callbackRunScript 	| Обязательный	 | Callback, который будет вызван после выполнения запроса.	| см.пример ниже |

**Примечание**
* объект dataPoolForScript будет сериализован в json при помощи парсера Google Gson. Если у вас возникли вопросы по передаче параметров в скрипт обратитесь к официальной документации https://github.com/google/gson

**Пример**
```Java
Script script = new Script();
HashMap<String, Object> dataPool = new HashMap<>();
dataPool.put(“collname”,”items”);
dataPool.put(“key”,”exampleField”);
dataPool.put(“val”,”anyInfo”);
	
script.runScript("57e1503b48e5f54441189790", dataPool, new CallbackSendScript() {
            @Override
            public void onScriptSended() {
                //script sended and  runed
            }

            @Override
            public void onScriptSendFailed(String errorCode, String errorMessage) {
                //error during script send
            }
        });
```



----------------------------------------------------------------------------------------------
<a name="Script+runScript2"></a>
### Script.runScript(scriptId, callbackRunScript)
Метод для запуска серверного скрипта 

| Параметр  | Тип                              | Свойства | Описание                         | Пример значения |
| --------- | -------------------------------- | -------- | -------------------------------- | --------------- |
| scriptId	        | String	            | Обязательный	 | Идентификатор скрипта	                             | "57e1503b48e5f54441189790" |
| callback	        | callbackRunScript 	| Обязательный	 | Callback, который будет вызван после выполнения запроса.	| см.пример ниже |

**Примечание**
* объект dataPoolForScript будет сериализован в json при помощи парсера Google Gson. Если у вас возникли вопросы по передаче параметров в скрипт обратитесь к официальной документации https://github.com/google/gson

**Пример**
```Java
Script script = new Script();
script.runScript("57e1503b48e5f54441189790", new CallbackSendScript() {
            @Override
            public void onScriptSended() {
                //script sended and  runed
            }

            @Override
            public void onScriptSendFailed(String errorCode, String errorMessage) {
                //error during script send
            }
        });
```
