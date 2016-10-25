<a name="Query"></a>

## Query
Класс для вборки документов коллекции.

**Содержание**
* [Query](#Query)
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




findDocuments
countDocuments
updateDocument
removeDocument
setLimit
setSkip
setPage
equalTo
notEqualTo
containedIn
containsAll
notContainedIn
greaterThan
greaterThenOrEqualTo
lessThan
lessThanOrEqualTo
exists
doesNotExist
contains
startsWith
endsWith
and
or
raw
reset
ascending
descending
setFieldsForSearch
getQueryInfo

---------------------------------------------------------------------------------------------
<a name="#Query_new"></a>

###Query(name)

Экземпляр запроса к данным коллекции

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
|  name  | <code>String</code>  |    | Имя экземпляра Query  |    |

```Java
Query query = new Query("name");
```
---------------------------------------------------------------------------------------------

<a name="#Query+findDocuments"></a>
### Query.findDocuments(callback)
Метод для поиска документа на основании сформированной выборки.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>CallbackFindDocument</code> |    Обязательный | Callback, который будет вызван после выполнения запроса.|    |

**Примечание**
* Если вы хотите чтобы вместе с id найденных документов возвращались их поля, задайте название необходимых полей с помощью функции setFieldsForSearch(fields)

**Пример** 
```JavaQuery query = new Query(“mycollection”)
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

<a name="#Query+countDocuments"></a>
### Query.countDocuments(callback)
Метод для подсчета документов из сформированной выборки.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>CallbackCountDocument </code> |                                            Обязательный | Callback, который будет вызван после выполнения запроса.|    |


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

<a name="#Query+updateDocument"></a>
### Query.updateDocument(update, callback)
Метод для обновления документов из сформированной выборки.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| update | <code>Update</code> | Обязательный | Объект Update  |   |
| callback | <code>CallbackUpdateDocument</code> | Обязательный |  Callback, который будет вызван после выполнения запроса.  |  |

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

<a name="#Query+removeDocument"></a>
### Query.removeDocument(callback)
Метод для удаления документов на основании сформированной выборки.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>CallbackRemoveDocument</code> | Обязательный |  Callback, который будет вызван после выполнения запроса.  |  |

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

<a name="#Query+setLimit"></a>
### Query.setLimit(limit)
Метод для установки лимита на количество удаляемых, обновляемых и искомых документов.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| limit | <code>Integer</code> |    Обязательный | Лимит для установки | 15  |

**Пример** 
```Java
Query query = new Query(“mycollection”);
query.setLimit(15);
//query.findDocuments(…);

```
---------------------------------------------------------------------------------------------

<a name="#Query+setSkip"></a>
### Query.setSkip(skip)
Метод для пропуска части объектов перед возвратом результата совершенной выборки

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| skip | <code>Integer</code> |                                            Обязательный | Количество пропускаемых документов | 100  |

**Пример** 
```Java
Query query = new Query(“mycollection”);
query.setSkip(12);
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="#Query+setPage"></a>
### Query.setPage(page)
Метод для постраничного вывода результатов выборки

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| page | <code>Integer</code> |  Обязательный | Номер страницы | 2  |

**Пример** 
```Java
Query query = new Query(“mycollection”);
//query.setLimit(15);
query.setPage(1);
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="#Query+equalTo"></a>
### Query.equalTo(field, value)
Метод для добавления условия выборки: только документы для которых значение поля равно значению в условии выборки.


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "orderNumber"   |
| value | <code>String / Integer / Double / Boolean / Date / List / Object</code> | Обязательный |  Значение для сравнения                   |  22 |

**Пример** 
```Java
Query query = new Query(“mycollection”);
query.equalTo(“orderNumber”, 22);
//query.findDocuments(…);
```
**Примечание**
* если вы пытаетесь задать данное условие для поля id документа, помните, что поскольку id – первичный ключ для документа, вам нужно добавить “_” перед именем поля.

```Java
Query query = new Query(“mycollection”);
query.equalTo(“_id”, “dasds12dskm”);
//query.findDocuments(…);
```

---------------------------------------------------------------------------------------------

<a name="#Query+notEqualTo"></a>
### Query.notEqualTo(field, value)
Метод для добавления условия выборки: только документы для которых значение поля не равно значению в условии выборки.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "orderNumber"   |
| value | <code>String / Integer / Double / Boolean / Date / List / Object</code> | Обязательный | Значение для сравнения                   |  22 |


**Пример** 
```Java
Query query = new Query(“mycollection”);
query.notEqualTo(“orderNumber”, 22);
//query.findDocuments(…);
```

**Примечание**
* если вы пытаетесь задать данное условие для поля id документа, помните, что поскольку id – первичный ключ для документа, вам нужно добавить “_” перед именем поля.

```Java
Query query = new Query(“mycollection”);
query.equalTo(“_id”, “dasds12dskm”);
//query.findDocuments(…);
```

---------------------------------------------------------------------------------------------

<a name="#Query+containedIn"></a>
### Query.containedIn(field, values)
Метод для добавления условия выборки: только документы у которых значение поля совпадает с одним из значений заданного массива.


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "orderNumbers"   |
| value | <code>List<тип поля></code> | Обязательный |  Массив элементов                  |  см.пример |

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

<a name="#Query+containsAll"></a>
### Query.containsAll(field, values)
Метод для добавления условия выборки:только документы у которых поле (типа массив) содержит все элементы заданного массива

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "orderNumbers"   |
| value | <code>List<тип поля></code> | Обязательный |  Массив элементов                  |  см.пример |

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

<a name="#Query+notContainedIn"></a>
### Query.notContainedIn(field, values)
Метод для добавления условия выборки: только документы у которых
* значение поля не совпадает ни с одним из значений заданного массива.
* значение поля не задано (not exist).


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "orderNumbers"   |
| value | <code>List<тип поля></code> | Обязательный |  Массив элементов                  |  см.пример |


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

<a name="#Query+greaterThan"></a>
### Query.greaterThan(field, value)
Метод для добавления условия выборки: только документы у которых значение поля больше указанного в value значения

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |
| value | <code>Integer / Double / Date</code> | Обязательный |  Значение для сравнения                  |  22 |

**Пример** 
```Java
Query query = new Query(“mycollection”).greaterThan("number", 22)
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="#Query+greaterThenOrEqualTo"></a>
### Query.greaterThenOrEqualTo(field, value)
Метод для добавления условия выборки: только документы у которых значение поля больше или равно указанного в value значения

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |
| value | <code>Integer / Double / Date</code> | Обязательный |  Значение для сравнения                  |  22 |

**Пример** 
```Java
Query query = new Query(“mycollection”).greaterThenOrEqualTo ("number", 22)
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="#Query+lessThan"></a>
### Query.lessThan(field, value)
Метод для добавления условия выборки: только документы у которых значение поля меньше указанного в value значения

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |
| value | <code>Integer / Double / Date</code> | Обязательный |  Значение для сравнения                  |  22 |

**Пример** 
```Java
Query query = new Query(“mycollection”). lessThan("number", 22)
//query.findDocuments(…);

```
---------------------------------------------------------------------------------------------

<a name="#Query+lessThanOrEqualTo"></a>
### Query.lessThanOrEqualTo(field, value)
Метод для добавления условия выборки: только документы у которых значение поля меньше или равно указанного в value значения

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |
| value | <code>Integer / Double / Date</code> | Обязательный |  Значение для сравнения                  |  22 |

**Пример** 
```Java
Query query = new Query(“mycollection”).lessThanOrEqualTo ("number", 22)
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="#Query+exists"></a>
### Query.exists(field)
Метод для добавления условия выборки: только документы у которых задано значение поля, т.е поле существует и не является пустым.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |

**Пример** 
```JavaQuery query = new Query(“mycollection”). exists("phoneNumber")
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="#Query+doesNotExist"></a>
### Query.doesNotExist(field)
Метод для добавления условия выборки: только документы у которых не задано значение поля, т.е поле не существует или является пустым.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |

**Пример** 
```Java
Query query = new Query(“mycollection”).doesNotExist("phoneNumber")
//query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="#Query+contains"></a>
### Query.contains(field, regEx, options)
Метод для добавления условия выборки: только документы у которых значение поля соответствуют заданному регулярному выражению.


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |
| regEx | <code>String</code> |                                            Обязательный | Регулярное выражение | “aB”   |
| options | <code>RegexOptions</code> |                                            Необязательный | Опции регулярного выражения | см.пример ниже  |

**Пример** 
```Java
 RegexOptions regexOptions = new RegexOptions();
 regexOptions.setRegexCaseInsenssitive();

 Query query = new Query(“mycollection”).contains("exampleField", "BC", regexOptions)
 //query.findDocuments(…);         
```
---------------------------------------------------------------------------------------------

<a name="#Query+startsWith"></a>
### Query.startsWith(field, regEx, options)
Метод для добавления условия выборки: только документы у которых значение поля начинается с заданной строки

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |
| regEx | <code>String</code> |                                            Обязательный | Строка с которой должно начинаться значение поля | “aB”   |
| options | <code>RegexOptions</code> |                                            Необязательный | Опции регулярного выражения | см.пример ниже  |

**Примечание**
* Параметр options позволяет, к примеру, искать все документы начинающиеся с “aB” не зависимо от регистра, т.е искать документы, начинающиеся на ab, aB, Ab, AB.

**Пример** 
```Java
 RegexOptions regexOptions = new RegexOptions();
 regexOptions.setRegexCaseInsenssitive();

 Query query = new Query(“mycollection”).startsWith ("exampleField", "a", regexOptions)
 //query.findDocuments(…);

```
---------------------------------------------------------------------------------------------

<a name="#Query+endsWith"></a>
### Query.endsWith(field, regEx, options)
Метод для добавления условия выборки: только документы у которых значение поля заканчивается с заданной строки


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |
| regEx | <code>String</code> |                                            Обязательный | Строка, на которую должно заканчиваться значение поля | “aaB”   |
| options | <code>RegexOptions</code> |                                            Необязательный | Опции регулярного выражения | см.пример ниже  |

**Примечание**
* Параметр options позволяет, к примеру, искать все документы начинающиеся с “aB” не зависимо от регистра, т.е искать документы, начинающиеся на ab, aB, Ab, AB.

**Пример** 
```Java
 RegexOptions regexOptions = new RegexOptions();
 regexOptions.setRegexCaseInsenssitive();

 Query query = new Query(“mycollection”).startsWith ("exampleField", "a", regexOptions)
 //query.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="#Query+and"></a>
### Query.and(field, query)
Метод логического умножения нескольких условий выборки по одному полю

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |
| query | <code>Query</code> | Обязательный |  Объект класса Query, содержащий данные для выборки                   |  см.пример ниже |

**Пример** 
```Java
Query query1 = new Query(COLLECTION_NAME).greaterThan("raiting", 50);
Query query2 = new Query(COLLECTION_NAME).lessThan("raiting", 100);

query1.and("number3", query2);
//query1.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="#Query+or"></a>
### Query.or(field, query)
Метод логического сложения нескольких условий выборки по одному полю

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |
| query | <code>Query</code> | Обязательный |  Объект класса Query, содержащий данные для выборки                   |  см.пример ниже |

**Пример** 
```Java
Query query1 = new Query(“mycollection”).greaterThan("raiting", 50);
Query query2 = new Query(“mycollection”).equalTo("status", 0);

query1.or("number3", query2);
//query1.findDocuments(…);
```
---------------------------------------------------------------------------------------------

<a name="#Query+raw"></a>
### Query.raw(json)
Метод для задания условий выборки в формате json.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| json | <code>String</code> |                                            Обязательный | Условия выборки в формате json | "{\"_id\": {\"$eq\": \"W9vrMS9SuW\"}}"  |

**Пример** 
```Java
  Query query = new Query(“mycollection”);
  query.raw("{\"_id\": {\"$eq\": \"W9vrMS9SuW\"}}");
  //query.findDocuments(…)
```
---------------------------------------------------------------------------------------------

<a name="#Query+reset"></a>
### Query.reset()
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

<a name="#Query+ascending"></a>
### Query.ascending(field)
Метод для сортировки данных указанного поля в порядке возрастания перед совершением выборки.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |

**Пример** 
```Java

```
---------------------------------------------------------------------------------------------

<a name="#Query+descending"></a>
### Query.descending(field)
Метод для сортировки данных указанного поля в порядке убывания перед совершением выборки.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | <code>String</code> |                                            Обязательный | Имя поля, которому задается условие | "fieldname"   |

**Пример** 
```Java

```
---------------------------------------------------------------------------------------------

<a name="#Query+setFieldsForSearch"></a>
### Query.setFieldsForSearch(fields)
Метод для задания списка возвращаемых полей.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| fields | <code>List<String></code> |                                            Обязательный | Имена полей | см.пример ниже   |

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

<a name="#Query+getQueryInfo"></a>
### Query.getQueryInfo()
Метод для получения информации о условиях выборки

**Пример** 
```Java
Query query = new Query(“mycollection”);
query.equalTo(“_id”, “dsads123sd”);

QueryInfo queryInfo = query.getQueryInfo();
```