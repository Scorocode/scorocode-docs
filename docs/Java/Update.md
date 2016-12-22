<a name="Update"></a>

## Update
Класс для обновления полей документа из БД

**Содержание**

* [Update](#Update)
    * [new Update()](#Update_new)
	* [.set(field,value)](#Update+set)
	* [.push(field, value)](#Update+push)
	* [.popFirst(field)](#Update+popFirst)
	* [.popLast(field)](#Update+popLast)
	* [.pull(field, value)](#Update+pull)
	* [.pullAll(field, value)](#Update+pullAll)
	* [.addToSet(field, value)](#Update+addToSet)
	* [.inc(field,  increaseValue)](#Update+inc)
	* [.setCurrentDate(field)](#Update+setCurrentDate)
	* [.mul(field, value)](#Update+mul)
	* [.min(field, valueToCompare)](#Update+min)
	* [.max(field, valueToCompare)](#Update+max)
	* [.getUpdateInfo()](#Update+getUpdateInfo)


---------------------------------------------------------------------------------------------
<a name="Update_new"></a>

### new Update()
Конструктор Update()

```Java
Update  = new Update();
```

Работа с методами данного класса возможна также через метод .updateDocument класса Document

```Java
Document document = new Document("ordersCollection");
//document.getDocumentById(...);
//document.updateDocument();
```

---------------------------------------------------------------------------------------------

<a name="Update+set"></a>
### .set(field,value)
Метод для установки нового значения поля документа БД.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля для изменения  | "orderNumber"   |
| value | `Object` | Обязательный |  Новое значение поля |  22 |


**Пример**
```Java
final Document document = new Document(“ordersCollection”);
document.getDocumentById("KH3JCojAyT", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
                //document found, we can update it
 
                document.updateDocument()
                        .set("exampleField", "random Any1")
                        .set("anotherExampleField", "random Any2");


                document.saveDocument(new CallbackDocumentSaved() {
                    @Override
                    public void onDocumentSaved() {
                        //document updated successfull
                    }


                    @Override
                    public void onDocumentSaveFailed(String errorCode, String errorMessage) {
                        //document update failed
				//check update info
				//see errorCode and errorMessage
                    }
                });
            }


            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document not found
            }
        });
```

---------------------------------------------------------------------------------------------

<a name="Update+push"></a>
### .push(field, value)
Метод для добавления элемента в поле (типа массив) документа БД

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля типа Array  | "orderNumber"   |
| value | `Object` | Обязательный | Элемент для добавления в массив | -42.42 |

**Пример**
```Java
final Document document = new Document(“ordersCollection”);
document.getDocumentById("KH3JCojAyT", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
                //document found, we can update it
 
                document.updateDocument().push("array1", 1);


                document.saveDocument(new CallbackDocumentSaved() {
                    @Override
                    public void onDocumentSaved() {
                        //document updated successful
                    }

                    @Override
                    public void onDocumentSaveFailed(String errorCode, String errorMessage) {
                        //document update failed
				//check update info
				//see errorCode and errorMessage
                    }
                });
            }


            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document not found
            }
        });
```


---------------------------------------------------------------------------------------------

<a name="Update+popFirst"></a>
### .popFirst(field)
Метод для удаления первого элемента из поля (типа массив) документа БД.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля типа Array  | "orderNumber"   |

**Пример**
```Java
final Document document = new Document(“ordersCollection”);
document.getDocumentById("KH3JCojAyT", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
                //document found, we can update it
 
                document.updateDocument().popFirst("array1");


                document.saveDocument(new CallbackDocumentSaved() {
                    @Override
                    public void onDocumentSaved() {
                        //document updated successful
                    }


                    @Override
                    public void onDocumentSaveFailed(String errorCode, String errorMessage) {
                        //document update failed
				//check update info
				//see errorCode and errorMessage
                    }
                });
            }


            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document not found
            }
        });
```

---------------------------------------------------------------------------------------------

<a name="Update+popLast"></a>
### .popLast(field)
Метод для удаления последнего элемента из поля (типа массив) документа БД.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля типа Array  | "orderNumber"   |


**Пример**
```Java
final Document document = new Document(“ordersCollection”);
document.getDocumentById("KH3JCojAyT", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
                //document found, we can update it
 
                document.updateDocument().popLast("array1");


                document.saveDocument(new CallbackDocumentSaved() {
                    @Override
                    public void onDocumentSaved() {
                        //document updated successful
                    }


                    @Override
                    public void onDocumentSaveFailed(String errorCode, String errorMessage) {
                        //document update failed
				//check update info
				//see errorCode and errorMessage
                    }
                });
            }


            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document not found
            }
        });
```

---------------------------------------------------------------------------------------------

<a name="Update+pull"></a>
### .pull(field, value)
Метод для удаления заданного элемента из поля (типа массив) документа БД.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля типа Array  | "orderNumber"   |
| value | `Object` | Обязательный | Элемент для удаления из массива | "delete me" |

!!! note "Примечание"
    Если в массиве несколько элементов со значением, соответствующим значению value, данный метод удалит все эти элементы.

**Пример**
```Java
final Document document = new Document(“ordersCollection”);
document.getDocumentById("KH3JCojAyT", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
                //document found, we can update it
 
                document.updateDocument().pull("array2", 3);

                document.saveDocument(new CallbackDocumentSaved() {
                    @Override
                    public void onDocumentSaved() {
                        //document updated successful
                    }

                    @Override
                    public void onDocumentSaveFailed(String errorCode, String errorMessage) {
                        //document update failed
				//check update info
				//see errorCode and errorMessage
                    }
                });
            }

            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document not found
            }
        });
```
---------------------------------------------------------------------------------------------

<a name="Update+pullAll"></a>
### .pullAll(field, value)
Метод для удаления всех переданных (в качестве параметра values) элементов из поля (типа массив) документа БД.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля типа Array  | "orderNumber"   |
| value | `List<Object>` | Обязательный | Элементы для удаления из массива | см. пример ниже |


**Пример**
```Java
final Document document = new Document(“ordersCollection”);
document.getDocumentById("KH3JCojAyT", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
                //document found, we can update it
 		
                //create array of elements to delete from array
		    List<Object> objects = new ArrayList<>();
                objects.add(1);
                objects.add(2);
		    objects.add(3);

                document.updateDocument().pullAll("array2", objects);

                document.saveDocument(new CallbackDocumentSaved() {
                    @Override
                    public void onDocumentSaved() {
                        //document updated successful
                    }

                    @Override
                    public void onDocumentSaveFailed(String errorCode, String errorMessage) {
                        //document update failed
				//check update info
				//see errorCode and errorMessage
                    }
                });
            }

            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document not found
            }
        });
```

---------------------------------------------------------------------------------------------

<a name="Update+addToSet"></a>
### .addToSet(field, value)
Метод для для добавления элемента в поле (типа массив) документа БД если он еще не присутствует в нем.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля типа Array  | "orderNumber"   |
| value | `List<Object>` | Обязательный | Элементы для добавления в массив | см. пример ниже |


**Пример**
```Java
final Document document = new Document(“ordersCollection”);
document.getDocumentById("KH3JCojAyT", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
                //document found, we can update it
 
                document.updateDocument().addToSet("array4", 7);

                document.saveDocument(new CallbackDocumentSaved() {
                    @Override
                    public void onDocumentSaved() {
                        //document updated successful
                    }

                    @Override
                    public void onDocumentSaveFailed(String errorCode, String errorMessage) {
                        //document update failed
				//check update info
				//see errorCode and errorMessage
                    }
                });
            }

            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document not found
            }
        });
```
---------------------------------------------------------------------------------------------

<a name="Update+inc"></a>
### .inc(field,  increaseValue)
Метод для увеличения значения поля документа БД на заданное значение. Примечание: число может иметь отрицательное значение

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля  | "counter"   |
| value | `Integer / Double / Date` | Обязательный | Шаг изменения | -2.2 |

**Пример**
```Java
final Document document = new Document(“ordersCollection”);
document.getDocumentById("KH3JCojAyT", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
                //document found, we can update it
 
                document.updateDocument().inc("numberField", 2);
		    document.updateDocument().inc("anotherNumberField", -10);

                document.saveDocument(new CallbackDocumentSaved() {
                    @Override
                    public void onDocumentSaved() {
                        //document updated successful
                    }

                    @Override
                    public void onDocumentSaveFailed(String errorCode, String errorMessage) {
                        //document update failed
				//check update info
				//see errorCode and errorMessage
                    }
                });
            }

            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document not found
            }
        });
```

---------------------------------------------------------------------------------------------

<a name="Update+setCurrentDate"></a>
### .setCurrentDate(field)
Метод для установки текущей даты в поле (типа Date) документа БД.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля типа Date  | "registerDate"   |


**Пример**
```Java
final Document document = new Document(“ordersCollection”);
document.getDocumentById("KH3JCojAyT", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
                //document found, we can update it
 
                document.updateDocument().setCurrentDate("date1");

                document.saveDocument(new CallbackDocumentSaved() {
                    @Override
                    public void onDocumentSaved() {
                        //document updated successful
                    }

                    @Override
                    public void onDocumentSaveFailed(String errorCode, String errorMessage) {
                        //document update failed
				//check update info
				//see errorCode and errorMessage
                    }
                });
            }

            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document not found
            }
        });
```


---------------------------------------------------------------------------------------------

<a name="Update+mul"></a>
### .mul(field, value)
Метод для умножения поля документа БД на заданное значение.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` |                                            Обязательный | Имя поля  | "counter"   |
| value | `Integer / Double` | Обязательный | Мультипликатор | -2.2 |


**Пример**
```Java
final Document document = new Document(“ordersCollection”);
document.getDocumentById("KH3JCojAyT", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
                //document found, we can update it
 
                document.updateDocument().mul("numberForMulTest", 3);

                document.saveDocument(new CallbackDocumentSaved() {
                    @Override
                    public void onDocumentSaved() {
                        //document updated successful
                    }

                    @Override
                    public void onDocumentSaveFailed(String errorCode, String errorMessage) {
                        //document update failed
				//check update info
				//see errorCode and errorMessage
                    }
                });
            }

            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document not found
            }
        });
```

---------------------------------------------------------------------------------------------

<a name="Update+min"></a>
### .min(field, valueToCompare)
Метод обновляет значение числового поля только в случае, если новое значение меньше текущего значения поля

| Параметр   | Тип              | Свойства     | Описание                             | Пример значения                       |
|------------|------------------|--------------|--------------------------------------|---------------------------------------|
| field           |`String`         | Обязательный |  Имя поля, значение которого нужно изменить  | "price" |
| valueToCompare        | `Integer / Double`      | Обязательный | значение для сравнения с текущим значением поля | 43    |

**Пример**
```Java
final Document document = new Document(“ordersCollection”);
document.getDocumentById("KH3JCojAyT", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
                //document found, we can update it
 
                document.updateDocument().min("number2", 10);

                document.saveDocument(new CallbackDocumentSaved() {
                    @Override
                    public void onDocumentSaved() {
                        //document updated successfull
                    }

                    @Override
                    public void onDocumentSaveFailed(String errorCode, String errorMessage) {
                        //document update failed
				//check update info
				//see errorCode and errorMessage
                    }
                });
            }

            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document not found
            }
        });
```

---------------------------------------------------------------------------------------------

<a name="Update+max"></a>
### .max(field, valueToCompare)
Метод обновляет значение числового поля только в случае, если новое значение больше текущего значения поля

| Параметр   | Тип              | Свойства     | Описание                             | Пример значения                       |
|------------|------------------|--------------|--------------------------------------|---------------------------------------|
| field           |`String`         | Обязательный |  Имя поля, значение которого нужно изменить  | "price" |
| valueToCompare        | `Integer / Double`      | Обязательный | значение для сравнения с текущим значением поля | 43    |

**Пример**
```Java
final Document document = new Document(“ordersCollection”);
document.getDocumentById("KH3JCojAyT", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
                //document found, we can update it
 
                document.updateDocument().max("number2", 10);

                document.saveDocument(new CallbackDocumentSaved() {
                    @Override
                    public void onDocumentSaved() {
                        //document updated successfull
                    }

                    @Override
                    public void onDocumentSaveFailed(String errorCode, String errorMessage) {
                        //document update failed
				//check update info
				//see errorCode and errorMessage
                    }
                });
            }

            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document not found
            }
        });
```


---------------------------------------------------------------------------------------------

<a name="Update+getUpdateInfo"></a>
### .getUpdateInfo()
Метод для получения информации, необходимой методам для обновления документа.