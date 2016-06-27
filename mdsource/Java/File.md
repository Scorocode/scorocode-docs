<a name="File"></a>

## File
File

**Содержание**
* [File](#File)
    * [.save(callback, acc, sess, coll, doc, field, contentStream)](#File+save)
    * [.convertStreamToString(is)](#File+convertStreamToString)

----------------------------------------------------------------------------------------------
<a name="File+save"></a>
### File.save(callback, acc, sess, coll, doc, field, contentStream)
Метод для сохранения файла.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback    | <code>SCCallback<String></code> | | Коллбэк для выполняемого запроса |  |
| acc  | <code>String</code>                    | | Ключ доступа    |  |
| sess     | <code>String</code>                | | Идентификатор сессии    |  |
| coll | <code>String</code>                    | | Имя коллекции    |  |
| doc | <code>String</code>                     | | Идлентификатор документа    |  |
| field | <code>String</code>                   | | Имя поля   |  |
| contentStream | <code>InputStream</code>      | | Stram файла   |  |

**Пример**   
```Java
SC.init("appId", "clientKey", "masterKey", "fileKey");

InputStream contentStream = getClass().getResourceAsStream("/example.pdf");

File attachment = new File();
attachment.save(
    new SCCallback<String>() {
        @Override
        public void onSuccess(String result) {
            Log.d(TAG, "Файл успешно загружен");
        }

        @Override
        public void onError(String message) {
            Log.d(TAG, "Что-то пошло не так");
        }
    }, 
    SC.getMasterKey(), null, "items", "vud3QlK00v", "attachments", contentStream);
```
----------------------------------------------------------------------------------------------
<a name="File+convertStreamToString"></a>
### File.convertStreamToString(is)
Метод для преобразования стрима в строку.

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| is    | <code>InputStream</code> |  |  |  | 

```Java
SC.init("appId", "clientKey", "masterKey", "fileKey");

InputStream contentStream = getClass().getResourceAsStream("/example.pdf");
String content = convertStreamToString(contentStream);

Object attachment = new Object("example");
attachment.upload(
    new SCCallback<String>() {
        @Override
        public void onSuccess(String result) {
            Log.d(TAG, "Файл успешно загружен");
        }

        @Override
        public void onError(String message) {
            Log.d(TAG, "Что-то пошло не так");
        }
    }, 
    SC.getMasterKey(), null, "items", "vud3QlK00v", "attachments", content);
```

