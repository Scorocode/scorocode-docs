<a name="SCFolder"></a>

## SCFolder

Класс для работы с файлами и папками на сервере.

* [SCFolder](#SCFolder)
    * [.createFolder(path,callback)](#SCFolder+createFolder)
    * [.deleteFolder(path,callback)](#SCFolder+deleteFolder)

----------------------------------------------------------------------------------------------

<a name="SCFolder+createFolder"></a>
### createFolder(path, callback)
Создание новой директории

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| path    | <code>String</code> | Обязательный | полный путь до директории          | "/folder1/newfolder"          | 
| callback | <code>(Bool, SCError?, [String: Any]?) -> Void</code> |         | Коллбэк для выполняемого запроса.|                             |

**Пример**
```SWIFT
let folders = SCFolder()
folders.createFolder(path: "/newFolder") { (success, error, result) in
    print(result)
}
```

----------------------------------------------------------------------------------------------

<a name="SCFolder+deleteFolder"></a>
### deleteFolder(path, callback)
Удаление папки со всем содержимым

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| path    | <code>String</code> | Обязательный | полный путь до директории          | "/folder1/newfolder"          | 
| callback | <code>(Bool, SCError?, [String: Any]?) -> Void</code> |         | Коллбэк для выполняемого запроса.|                             |

**Пример**
```SWIFT
let folders = SCFolder()
folders.deleteFolder(path: "/newFolder") { (success, error, result) in
    print(result)
}
```
