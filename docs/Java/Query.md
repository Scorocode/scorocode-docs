<a name="Query"></a>

## Query
Класс для вборки документов коллекции.

**Содержание**

* [Query](#Query)
    * [new Query(name)](#Query_new)
    * [.findDocuments(callback)](#Query+findDocuments)
    * [.countDocuments(callback)](#Query+countDocuments)
    * [.updateDocument(update, callback)](#Query+updateDocument)
    * [.removeDocument(callback)](#Query+removeDocument)
    * [.setLimit(limit)](#Query+setLimit)
    * [.setSkip(skip)](#Query+setSkip)
    * [.setPage(page)](#Query+setPage)
    * [.equalTo(field, value)](#Query+equalTo)
    * [.notEqualTo(field, value)](#Query+notEqualTo)
    * [.containedIn(field, values)](#Query+containedIn)
    * [.containsAll(field, values)](#Query+containsAll)
    * [.notContainedIn(field, values)](#Query+notContainedIn)
    * [.greaterThan(field, value)](#Query+greaterThan)
    * [.greaterThenOrEqualTo(field, value)](#Query+greaterThenOrEqualTo)
    * [.lessThan(field,  value)](#Query+lessThan)
    * [.lessThanOrEqualTo(field, value)](#Query+lessThanOrEqualTo)
    * [.exists(field)](#Query+exists)
    * [.doesNotExist(field)](#Query+doesNotExist)
    * [.contains(field, regEx, options)](#Query+contains)
    * [.startsWith(field, regEx, options)](#Query+startsWith)
    * [.endsWith(field, regEx, options)](#Query+endsWith)
    * [.and(field, query)](#Query+and)
    * [.or(field, query)](#Query+or)
    * [.raw(json)](#Query+raw)
    * [.reset()](#Query+reset)
    * [.ascending(field)](#Query+ascending)
    * [.descending(field)](#Query+descending)
    * [.setFieldsForSearch(fields)](#Query+setFieldsForSearch)
    * [.getQueryInfo()](#Query+getQueryInfo)

---------------------------------------------------------------------------------------------
<a name="Query_new"></a>

### new Query()

Экземпляр запроса к данным коллекции

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
|  collection_name  | `String`  |    | Имя коллекции |  "things"  |

```Java
Query query = new Query("name");
```
---------------------------------------------------------------------------------------------

<a name="Query+findDocuments"></a>
### .findDocuments(callback)
Метод для поиска документа на основании сформированной выборки.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | `CallbackFindDocument` |    Обязательный | Callback, который будет вызван после выполнения запроса.|    |


!!! note "Примечание"
    Если вы хотите чтобы вместе с id найденных документов возвращались их поля, задайте название необходимых полей с помощью функции `setFieldsForSearch(fields)`

!!! note "Примечание"
    Данный метод по-умолчанию возвращает не более 50 документов коллекции.

**Пример** 
```Java
Query query = new Query(“mycollection”)
                .equalTo("number3", 10)
                .exists("number2");

query.findDocuments(new CallbackFindDocument() {
            @Override
            public void onDocumentFound(List<DocumentInfo> documentInfos) {
                //found. See document list what match query
            }

            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //no documents what match query
            }
        });
```
---------------------------------------------------------------------------------------------

<a name="Query+countDocuments"></a>
### .countDocuments(callback)
Метод для подсчета документов из сформированной выборки.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | `CallbackCountDocument ` |                                            Обязательный | Callback, который будет вызван после выполнения запроса.|    |


**Пример** 
```Java
Query query = new Query(“mycollection”);
        query.greaterThan("rating", 10);

        query.countDocuments(new CallbackCountDocument() {
            @Override
            public void onDocumentsCounted(ResponseCount responseCount) {
                //see responseCount.getResult() to find how many documents was found.
            }

            @Override
            public void onCountFailed(String errorCode, String errorMessage) {
                //error during count
            }
        });
```
---------------------------------------------------------------------------------------------

<a name="Query+updateDocument"></a>
### .updateDocument(update, callback)
Метод для обновления документов из сформированной выборки.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| update | `Update` | Обязательный | Объект Update  |   |
| callback | `CallbackUpdateDocument` | Обязательный |  Callback, который будет вызван после выполнения запроса.  |  |

!!! note "Примечание"
    Данный метод обновляет не более 1000 документов

**Пример** 
```Java
 Query query = new Query(“mycollection”);
        query.equalTo("number3", 10);

        Update update = new Update()
                .set("number2", 199)
                .set("numberField", 111)
                .addToSet("array1", 900);

        query.updateDocument(update, new CallbackUpdateDocument() {
            @Override
            public void onUpdateSucceed(ResponseUpdate responseUpdate) {
                //documents updated successful
            }

            @Override
            public void onUpdateFailed(String errorCode, String errorMessage) {
                //error during update
            }
        });
```
---------------------------------------------------------------------------------------------

<a name="Query+removeDocument"></a>
### .removeDocument(callback)
Метод для удаления документов на основании сформированной выборки.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | `CallbackRemoveDocument` | Обязательный |  Callback, который будет вызван после выполнения запроса.  |  |

!!! note "Примечание"
    Данный метод удаляет не более 1000 документов

**Пример** 
```Java
Query query = new Query(“mycollection”);
        query.equalTo("_id", "aJfkipJags");

        query.removeDocument(new CallbackRemoveDocument() {
            @Override
            public void onRemoveSucceed(ResponseRemove responseRemove) {
                //succeed. See responseRemove to findout how many documents was removed
            //and get list of removed documents
            }

            @Override
            public void onRemoveFailed(String errorCode, String errorMessage) {
                //error during remove operation
            }
        });

```
---------------------------------------------------------------------------------------------

<a name="Query+setLimit"></a>
### .setLimit(limit)
Метод для установки лимита на количество удаляемых, обновляемых и искомых документов.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| limit | `Integer` |    Обязательный | Лимит для установки | 15  |

!!! note "Примечание"
    Данный метод принимает 100 в качестве максимального значения limit

**Пример** 
```Java
Query query = new Query(“mycollection”);
query.setLimit(15);
//query.findDocuments(…);

```
---------------------------------------------------------------------------------------------

<a name="Query+setSkip"></a>
### .setSkip(skip)
Метод для пропуска части объектов перед возвратом результата совершенной выборки

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| skip | `Integer` |                                            Обязательный | Количество пропускаемых документов | 100  |

**Пример** 
```Java
Query query = new Query(“mycollection”);
query.setSkip(12);
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="Query+setPage"></a>
### .setPage(page)
Метод для постраничного вывода результатов выборки

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| page | `Integer` |  Обязательный | Номер страницы | 2  |

**Пример** 

```Java
Query query = new Query(“mycollection”);
//query.setLimit(15);
query.setPage(1);
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="Query+equalTo"></a>
### .equalTo(field, value)
Метод для добавления условия выборки: только документы для которых значение поля равно значению в условии выборки.


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля, которому задается условие | "orderNumber"   |
| value | `Object` | Обязательный |  Значение для сравнения                   |  22 |

**Пример** 
```Java
Query query = new Query(“mycollection”);
query.equalTo(“orderNumber”, 22);
//query.findDocuments(…);
```

!!! note "Примечание"
    Если вы пытаетесь задать данное условие для поля id документа, помните, что, поскольку id – первичный ключ для документа, вам нужно добавить “_” перед именем поля.

```Java
Query query = new Query(“mycollection”);
query.equalTo(“_id”, “dasds12dskm”);
//query.findDocuments(…);
```

---------------------------------------------------------------------------------------------

<a name="Query+notEqualTo"></a>
### .notEqualTo(field, value)
Метод для добавления условия выборки: только документы для которых значение поля не равно значению в условии выборки.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля, которому задается условие | "orderNumber"   |
| value | `Object` | Обязательный | Значение для сравнения                   |  22 |


**Пример** 
```Java
Query query = new Query(“mycollection”);
query.notEqualTo(“orderNumber”, 22);
//query.findDocuments(…);
```

!!! note "Примечание"
    Если вы пытаетесь задать данное условие для поля id документа, помните, что, поскольку id – первичный ключ для документа, вам нужно добавить “_” перед именем поля.

```Java
Query query = new Query(“mycollection”);
query.equalTo(“_id”, “dasds12dskm”);
//query.findDocuments(…);
```

---------------------------------------------------------------------------------------------

<a name="Query+containedIn"></a>
### .containedIn(field, values)
Метод для добавления условия выборки: только документы у которых значение поля совпадает с одним из значений заданного массива.


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля, которому задается условие | "orderNumbers"   |
| value | `List<тип поля>` | Обязательный |  Массив элементов                  |  см.пример ниже |

**Пример** 
```Java
List<Object> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(5);
        numbers.add(10);
        numbers.add(15);

Query query = new Query(“mycollection”).containedIn("number3", numbers);
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="Query+containsAll"></a>
### .containsAll(field, values)
Метод для добавления условия выборки:только документы у которых поле (типа массив) содержит все элементы заданного массива

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля, которому задается условие | "orderNumbers"   |
| value | `List<тип поля>` | Обязательный |  Массив элементов                  |  см.пример ниже |

**Пример** 
```Java
List<Object> containsAllNumbers = new ArrayList<>();
        containsAllNumbers.add(1);
        containsAllNumbers.add(2);
        containsAllNumbers.add(3);
        containsAllNumbers.add(900);
Query query = new Query(“mycollection”).containsAll("array1", containsAllNumbers);
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="Query+notContainedIn"></a>
### .notContainedIn(field, values)
Метод для добавления условия выборки: только документы у которых

* значение поля не совпадает ни с одним из значений заданного массива.
* значение поля не задано (not exist).


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля, которому задается условие | "orderNumbers"   |
| value | `List<тип поля>` | Обязательный |  Массив элементов                  |  см.пример ниже |


**Пример** 
```Java
List<Object> notContainsInList = new ArrayList<>();
        notContainsInList.add(1);
        notContainsInList.add(111);
        notContainsInList.add(11);
        notContainsInList.add(50);
Query query = new Query(“mycollection”).notContainedIn("orderNumbers", notContainsInList)
//query.findDocuments(…);

```
---------------------------------------------------------------------------------------------

<a name="Query+greaterThan"></a>
### .greaterThan(field, value)
Метод для добавления условия выборки: только документы у которых значение поля больше указанного в value значения

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |
| value | `Integer / Double / Date` | Обязательный |  Значение для сравнения                  |  22 |

**Пример** 
```Java
Query query = new Query(“mycollection”).greaterThan("number", 22)
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="Query+greaterThenOrEqualTo"></a>
### .greaterThenOrEqualTo(field, value)
Метод для добавления условия выборки: только документы у которых значение поля больше или равно указанного в value значения

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |
| value | `Integer / Double / Date` | Обязательный |  Значение для сравнения                  |  22 |

**Пример** 
```Java
Query query = new Query(“mycollection”).greaterThenOrEqualTo ("number", 22)
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="Query+lessThan"></a>
### .lessThan(field, value)
Метод для добавления условия выборки: только документы у которых значение поля меньше указанного в value значения

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |
| value | `Integer / Double / Date` | Обязательный |  Значение для сравнения                  |  22 |

**Пример** 
```Java
Query query = new Query(“mycollection”). lessThan("number", 22)
//query.findDocuments(…);

```
---------------------------------------------------------------------------------------------

<a name="Query+lessThanOrEqualTo"></a>
### .lessThanOrEqualTo(field, value)
Метод для добавления условия выборки: только документы у которых значение поля меньше или равно указанного в value значения

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |
| value | `Integer / Double / Date` | Обязательный |  Значение для сравнения                  |  22 |

**Пример** 
```Java
Query query = new Query(“mycollection”).lessThanOrEqualTo ("number", 22)
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="Query+exists"></a>
### .exists(field)
Метод для добавления условия выборки: только документы у которых задано значение поля, т.е поле существует и не является пустым.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |

**Пример** 
```Java
Query query = new Query(“mycollection”).exists("phoneNumber")
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="Query+doesNotExist"></a>
### .doesNotExist(field)
Метод для добавления условия выборки: только документы у которых не задано значение поля, т.е поле не существует или является пустым.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |

**Пример** 
```Java
Query query = new Query(“mycollection”).doesNotExist("phoneNumber")
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="Query+contains"></a>
### .contains(field, regEx, options)
Метод для добавления условия выборки: только документы у которых значение поля соответствуют заданному регулярному выражению.


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |
| regEx | `String` |                                            Обязательный | Регулярное выражение | “aB”   |
| options | `RegexOptions` |                                            Необязательный | Опции регулярного выражения | см.пример ниже  |

**Пример** 
```Java
 RegexOptions regexOptions = new RegexOptions();
 regexOptions.setRegexCaseInsenssitive();

 Query query = new Query(“mycollection”).contains("exampleField", "BC", regexOptions)
 //query.findDocuments(…);         
```
---------------------------------------------------------------------------------------------

<a name="Query+startsWith"></a>
### .startsWith(field, regEx, options)
Метод для добавления условия выборки: только документы у которых значение поля начинается с заданной строки

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |
| regEx | `String` |                                            Обязательный | Строка с которой должно начинаться значение поля | “aB”   |
| options | `RegexOptions` |                                            Необязательный | Опции регулярного выражения | см.пример ниже  |

!!! note "Примечание"
    Параметр options позволяет, к примеру, искать все документы начинающиеся с “aB” не зависимо от регистра, т.е искать документы, начинающиеся на ab, aB, Ab, AB.

**Пример** 
```Java
 RegexOptions regexOptions = new RegexOptions();
 regexOptions.setRegexCaseInsenssitive();

 Query query = new Query(“mycollection”).startsWith ("exampleField", "a", regexOptions)
 //query.findDocuments(…);

```
---------------------------------------------------------------------------------------------

<a name="Query+endsWith"></a>
### .endsWith(field, regEx, options)
Метод для добавления условия выборки: только документы у которых значение поля заканчивается с заданной строки


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |  Обязательный | Имя поля, которому задается условие | "fieldname"   |
| regEx | `String` |  Обязательный | Строка, на которую должно заканчиваться значение поля | “aaB”   |
| options | `RegexOptions` |                                            Необязательный | Опции регулярного выражения | см.пример ниже  |

!!! note "Примечание"
    Параметр options позволяет, к примеру, искать все документы начинающиеся с “aB” не зависимо от регистра, т.е искать документы, начинающиеся на ab, aB, Ab, AB.

**Пример** 
```Java
 RegexOptions regexOptions = new RegexOptions();
 regexOptions.setRegexCaseInsenssitive();

 Query query = new Query(“mycollection”).startsWith ("exampleField", "a", regexOptions)
 //query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="Query+and"></a>
### .and(field, query)
Метод логического умножения нескольких условий выборки по одному полю

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` | Обязательный | Имя поля, которому задается условие | "fieldname"   |
| query | `Query` | Обязательный |  Объект класса Query, содержащий данные для выборки                   |  см.пример ниже |

**Пример** 
```Java
Query query1 = new Query(COLLECTION_NAME).greaterThan("raiting", 50);
Query query2 = new Query(COLLECTION_NAME).lessThan("raiting", 100);

query1.and("number3", query2);
//query1.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="Query+or"></a>
### .or(field, query)
Метод логического сложения нескольких условий выборки по одному полю

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` | Обязательный | Имя поля, которому задается условие | "fieldname"   |
| query | `Query` | Обязательный |  Объект класса Query, содержащий данные для выборки                   |  см.пример ниже |

**Пример** 
```Java
Query query1 = new Query(“mycollection”).greaterThan("raiting", 50);
Query query2 = new Query(“mycollection”).equalTo("status", 0);

query1.or("number3", query2);
//query1.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="Query+raw"></a>
### .raw(json)
Метод для задания условий выборки в формате json.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| json | `String` |  Обязательный | Условия выборки в формате json | "{\"_id\": {\"$eq\": \"W9vrMS9SuW\"}}"  |

**Пример** 
```Java
  Query query = new Query(“mycollection”);
  query.raw("{\"_id\": {\"$eq\": \"W9vrMS9SuW\"}}");
  //query.findDocuments(…)
```
---------------------------------------------------------------------------------------------

<a name="Query+reset"></a>
### .reset()
Метод для очистки условия выборки.

**Пример** 
```Java
Query query = new Query(“mycollection”);
query.equalTo(“_id”, “dsads123sd”);
query.reset();
query.equalTo(“_id”, “ds54522sd”);
//query.findDocuments(…)
```
---------------------------------------------------------------------------------------------

<a name="Query+ascending"></a>
### .ascending(field)
Метод для сортировки данных указанного поля в порядке возрастания перед совершением выборки.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` | Обязательный | Имя поля, которому задается условие | "fieldname"   |

**Пример** 
```Java
Query query = new Query("ordersCollection");
query.ascending("itemId");
//query.findDocuments(...)
```
---------------------------------------------------------------------------------------------

<a name="Query+descending"></a>
### .descending(field)
Метод для сортировки данных указанного поля в порядке убывания перед совершением выборки.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` | Обязательный | Имя поля, которому задается условие | "fieldname"   |

**Пример** 
```Java
Query query = new Query("ordersCollection");
query.descending("itemId");
//query.findDocuments(...)
```
---------------------------------------------------------------------------------------------

<a name="Query+setFieldsForSearch"></a>
### .setFieldsForSearch(fields)
Метод для задания списка возвращаемых полей.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| fields | `List<String>` | Обязательный | Имена полей | см.пример ниже   |

**Пример** 
```Java
List<Strings> fieldNames = new ArrayList<>();
fieldNames.add(“orderId”);
fieldNames.add(“buyerName”);
fieldNames.add(“phoneNumber”);

Query query = new Query(“mycollection”).setFieldsForSearch(fieldNames);
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="Query+getQueryInfo"></a>
### .getQueryInfo()
Метод для получения информации о условиях выборки

**Пример** 
```Java
Query query = new Query(“mycollection”);
query.equalTo(“_id”, “dsads123sd”);

QueryInfo queryInfo = query.getQueryInfo();
```