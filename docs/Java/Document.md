<a name="Document"></a>

## Document
Класс для работы с документами коллекций.

**Содержание**

* [Document](#Document)
    * [new Document(collection_name)](#new_Scorocode.Document_new)
    * [.setField(field, value)](#Document+setField)
    * [.saveDocument(callback)](#Document+saveDocument)  
    * [.getDocumentById(documentId, callback)](#Document+getDocumentById)
    * [.getField(field)](#Document+getField)
    * [.updateDocument()](#Document+updateDocument)
    * [.uploadFile(fieldName, fileName, contentToUploadInBase64, callback)](#Document+uploadFile)
    * [.getFileLink(fieldName, fileName)](#Document+getFileLink)
    * [.removeFile( fieldName,  fileName,  callback)](#Document+removeFile)
    * [.removeDocument(callback)](#Document+removeDocument)  

----------------------------------------------------------------------------------------------
<a name="new_Scorocode.Document_new"></a>

### new Document(collection_name)

Инициализация экземпляра класса Document

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| collection_name | `String` | Обязательное | имя коллекции в которой будет идти работа с документом | "Things" |

**Пример** 
```Java
ScorocodeSdk.initWith("db8a1b41b8543397a798a181d9891b4c", "563452bbc611d8106d5da767365897de", "28f06b89b62165c33de55265166d8781", null, null, null);

Document exampleItem = new Document("Items");
```

----------------------------------------------------------------------------------------------
<a name="Document+setField"></a>

### .setField(field, value)

Метод для передачи данных полю документа.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| field | `String` | Обязательный | Название поля | "testcoll" |
| value | `Object` | Обязательный  | Данные поля | "huNr3L7QDh" |

**Пример** 
```Java
ScorocodeSdk.initWith("db8a1b41b8543397a798a181d9891b4c", "563452bbc611d8106d5da767365897de", "28f06b89b62165c33de55265166d8781", null, null, null);

final Document order = new Document(“orders”);
order.setField(“orderId”, “Ku128A439ads”);
```

----------------------------------------------------------------------------------------------
<a name="Document+saveDocument"></a>
### .saveDocument(callback)

Метод сохраняет документ в хранилище данных приложения или обновляет уже имеющийся там документ

| Параметр | Тип                     | Свойства | Описание                         | Пример значения |
| -------- | ----------------------- | -------- | -------------------------------- | --------------- |
| callback | `CallbackDocumentSaved` | Обязательный | Callback, который будет вызван после выполнения запроса. |                 | 

**Примеры** 

Пример создания нового документа коллекции

```Java
ScorocodeSdk.initWith("db8a1b41b8543397a798a181d9891b4c", "563452bbc611d8106d5da767365897de", "28f06b89b62165c33de55265166d8781", null, null, null);


Document newDocument = new Document(“orderInfo”);
newDocument.setField("isOrderSend", false);
newDocument.setField("buyerName", “Any username”);


newDocument.saveDocument(new CallbackDocumentSaved() {
            @Override
            public void onDocumentSaved() {
                //document saved successful (New document uploaded on server).
            }


            @Override
            public void onDocumentSaveFailed(String errorCode, String errorMessage) {
                //document save failed.
            }
        });
```

Пример обновления уже имеющегося в БД документа коллекции

```Java
 final Document document = new Document(“orderInfo”);
 document.getDocumentById("KH3JCojAyT", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
            //we found document and we can make changes in it and save it
            //...change document fields...
            //save  
                document.saveDocument(new CallbackDocumentSaved() {
                    @Override
                    public void onDocumentSaved() {
                        //document save succeed. Document updated on server
                    }

                    @Override
                    public void onDocumentSaveFailed(String errorCode, String errorMessage) {
                        //document save failed.
                    }
                });
            }

            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
            //document not found. If we try to save document here
            //new document will be upload to server as in example 2.1
            }
        });
```

----------------------------------------------------------------------------------------------
<a name="Document+getDocumentById"></a>
### .getDocumentById(documentId, callback)

Метод для для получения документа коллекции из БД по его id. 


| Параметр | Тип                     | Свойства     | Описание                                                 | Пример значения |
| -------- | ----------------------- | ------------ | -------------------------------------------------------- | --------------- |
| documentId | `String`   | Обязательный | Значение поля id документа коллекции                     | "nV0p50CDKq"    | 
| callback | `CallbackGetDocumentById` | Обязательный | Callback, который будет вызван после выполнения запроса. |                 | 

**Пример** 

```Java
ScorocodeSdk.initWith("db8a1b41b8543397a798a181d9891b4c", "563452bbc611d8106d5da767365897de", "28f06b89b62165c33de55265166d8781", null, null, null);

final Document document = new Document("ordersCollection");
document.getDocumentById("nV0p50CDKq", new CallbackGetDocumentById() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
                //document found
            }


            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document not found or error occured
            }
        });
```

----------------------------------------------------------------------------------------------
<a name="Document+getField"></a>
### .getField(field)

Метод для получения данных указанного поля документа.

| Параметр | Тип                     | Свойства     | Описание                                                 | Пример значения |
| -------- | ----------------------- | ------------ | -------------------------------------------------------- | --------------- |
| field | `String`   | Обязательный | Имя поля документа                   | "name"    | 

**Пример** 
```Java
final Document document = new Document(“ordersCollection”);
String orderId = document.getField(“orderId”);
```
----------------------------------------------------------------------------------------------
<a name="Document+updateDocument"></a>
### .updateDocument()

Метод для обновления документа при помощи класса Update (см. документацию к классу Update)

----------------------------------------------------------------------------------------------
<a name="Document+uploadFile"></a>
### .uploadFile(fieldName, fileName, contentToUploadInBase64, callback)

Метод для загрузки файла в поле документа.

| Параметр | Тип                     | Свойства     | Описание                                                 | Пример значения |
| -------- | ----------------------- | ------------ | -------------------------------------------------------- | --------------- |
| fieldName| `String`     | Обязательный | Имя поля документа типа File                    | "attachment"    | 
| fileName | `String`   | Обязательный | Имя файла с раширением                     | "file.txt"    | 
| contentToUploadInBase64 | `String`   | Обязательный | Контент файла в формате base64                     | "VEhJUyBJUyBGSUxFLUUtRS1FLUUtRS1FIQ=="    | 
| callback | `CallbackUploadFile` | Обязательный | Callback, который будет вызван после выполнения запроса. |                 | 

**Пример** 
```Java
final Document document = new Document(“ordersCollection”);
document.getDocumentById("nV0p50CDKq", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
            //document found and we can upload document in this file

                document.uploadFile("file_field", "any_filename.txt", 
            Base64.encodeToString("hello world".getBytes(), Base64.DEFAULT), new CallbackUploadFile() {

              @Override
                    public void onDocumentUploaded() {
                        //document upload succeed
                    }


                    @Override
                    public void onDocumentUploadFailed(String errorCode, String errorMessage) {
                        //document upload failed
                    }
                });
            }


            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document not found
            }
        });
```

----------------------------------------------------------------------------------------------
<a name="Document+getFileLink"></a>
### .getFileLink(fieldName, fileName)

Метод для получения ссылки на файл.

| Параметр | Тип                     | Свойства     | Описание                                                 | Пример значения |
| -------- | ----------------------- | ------------ | -------------------------------------------------------- | --------------- |
| fieldName| `String`     | Обязательный | Имя поля документа типа File                    | "attachment"    | 
| fileName | `String`   | Обязательный | Имя файла с раширением                     | "file.txt"    | 

**Пример** 
```Java
final Document documentWithFile = new Document(“ordersCollection”);
documentWithFile.getDocumentById("nV0p50CDKq", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
                    //document found. We can try to get link on file in this document
            String fileLink = documentWithFile.getFileLink("test", "file.txt");
            }


            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document not found
            }
        });
```

----------------------------------------------------------------------------------------------
<a name="Document+removeFile"></a>
### .removeFile(fieldName, fileName, callback)

Метод для удаления файла из поля документа

| Параметр | Тип                     | Свойства     | Описание                                                 | Пример значения |
| -------- | ----------------------- | ------------ | -------------------------------------------------------- | --------------- |
| fieldName| `String`     | Обязательный | Имя поля документа типа File                    | "attachment"    | 
| fileName | `String`   | Обязательный | Имя файла с раширением                     | "file.txt"    | 
| callback | `CallbackDeleteFile` | Обязательный | Callback, который будет вызван после выполнения запроса. |                 | 

**Пример** 
```Java
final Document document = new Document(“ordersCollection”);
document.getDocumentById("nV0p50CDKq", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
            //document found we can try to delete file from this doc


                document.removeFile("file", "anyname", new CallbackDeleteFile() {
                    @Override
                    public void onDocumentDeleted() {
                        //file deletion succeed
                    }


                    @Override
                    public void onDetelionFailed(String errorCodes, String errorMessage) {
                        //file deletion failed
                    }
                });
            }


            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document not found
            }
        });
```

----------------------------------------------------------------------------------------------
<a name="Document+removeDocument"></a>
### .removeDocument(callback)

Метод для удаления документа из коллекции

| Параметр | Тип                     | Свойства     | Описание                                                 | Пример значения |
| -------- | ----------------------- | ------------ | -------------------------------------------------------- | --------------- |
| callback | `CallbackRemoveDocument` | Обязательный | Callback, который будет вызван после выполнения запроса. |                 | 

**Пример** 
```Java
final Document document = new Document(“ordersCollection”);
document.getDocumentById("7BOlVr1Acp", new CallbackFindDocument() {
            @Override
            public void onDocumentFound(DocumentInfo documentInfo) {
                //we found document in collection and can remove it
                document.removeDocument(new CallbackRemoveDocument() {
                    @Override
                    public void onRemoveSucceed(ResponseRemove responseRemove) {
                        //document removed
                    }


                    @Override
                    public void onRemoveFailed(String errorCode, String errorMessage) {
                        //remove operation failed
                    }
                });
            }


            @Override
            public void onDocumentNotFound(String errorCode, String errorMessage) {
                //document wasn’t found
            }
        });
```
