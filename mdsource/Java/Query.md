<a name="Query"></a>

## Query
Query

**Содержание**
* [Query](#Query)
    * [new Query(name)](#Query_new)
    * [.find(SCCallback<String> callback, String sess, String coll)](#Query+find)
    * [.count(SCCallback<Integer> callback, String sess, String coll)](#Query+count)
    * [.update(SCCallback<UpdateDataResponseEntity> callback, String sess, String acc, String coll, Object doc)](#Query+update)
    * [.remove(SCCallback<UpdateDataResponseEntity> callback, String sess, String coll)](#Query+remove)
    * [.limit(int limit)](#Query+limit)
    * [.skip(int skip)](#Query+skip)
    * [.page(int pageNumber)](#Query+page)
    * [.equalTo(String name String value)](#Query+equalTo)
    * [.notEqualTo(String name String value)](#Query+notEqualTo)
    * [.containedIn(String name String value)](#Query+containedIn)
    * [.containsAll(String name String value)](#Query+containsAll)
    * [.notContainedIn(String name String value)](#Query+notContainedIn)
    * [.greaterThan(String name String value)](#Query+greaterThan)
    * [.lessThan(String name String value)](#Query+lessThan)
    * [.lessThanOrEqualTo(String name String value)](#Query+lessThanOrEqualTo)
    * [.exists(String name String value)](#Query+exists)
    * [.doesNotExist(String name String value)](#Query+doesNotExist)
    * [.contains(String name String value)](#Query+contains)
    * [.startsWith(String name String value)](#Query+startsWith)
    * [.endsWith(String name String value)](#Query+endsWith)
    * [.or(String name String value)](#Query+or)
    * [.and(String name String value)](#Query+and)
    * [.raw(JSONObject options)](#Query+raw)
    * [.reset()](#Query+reset)
    * [.ascending(String asc)](#Query+ascending)
    * [.descending(String dsc)](#Query+descending)
    * [.fields(String[] fields)](#Query+fields)


<a name="#Query_new"></a>

Query(name)

---------------------------------------------------------------------------------------------
<a name="#Query+find"></a>

### Query.find


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
|  callback  | SCCallback<String>  |    |    |    |
|  sess      | String              |    |    |    |
|  coll      | String              |    |    |    |
   
---------------------------------------------------------------------------------------------
<a name="#Query+count"></a>

### Query.count


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
|  callback  | SCCallback<Integer> |    |    |    |
|  sess      | String              |    |    |    |
|  coll      | String              |    |    |    |

---------------------------------------------------------------------------------------------
<a name="#Query+update"></a>

### Query.update


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
|  callback | SCCallback<UpdateDataResponseEntity> |    |    |    |
|  sess     | String                               |    |    |    |
|  acc      | String                               |    |    |    |
|  coll     | String                               |    |    |    | 
|  doc      | Object                               |    |    |    |

---------------------------------------------------------------------------------------------
<a name="#Query+remove"></a>

### Query.remove


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
|  callback  | SCCallback<UpdateDataResponseEntity> |    |    |    |
|  sess      | String                               |    |    |    |
|  coll      | String                               |    |    |    |

---------------------------------------------------------------------------------------------
<a name="#Query+limit"></a>

### Query.limit


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| limit | int | | | |

---------------------------------------------------------------------------------------------
<a name="#Query+skip"></a>

### Query.skip


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| skip  | int | | | |

---------------------------------------------------------------------------------------------
<a name="#Query+page"></a>

### Query.page


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| pageNumber | int | | | |

---------------------------------------------------------------------------------------------
<a name="#Query+equalTo"></a>

### Query.equalTo


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name  |  String | Обязательный | Имя поля | "" | 
| value | String  | Обязательный | Имя поля | "" |

---------------------------------------------------------------------------------------------
<a name="#Query+notEqualTo"></a>

### Query.notEqualTo


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

---------------------------------------------------------------------------------------------
<a name="#Query+containedIn"></a>

### Query.containedIn


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

---------------------------------------------------------------------------------------------
<a name="#Query+containsAll"></a>

### Query.containsAll


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

---------------------------------------------------------------------------------------------
<a name="#Query+notContainedIn"></a>

### Query.notContainedIn


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

---------------------------------------------------------------------------------------------
<a name="#Query+greaterThan"></a>

### Query.greaterThan


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

---------------------------------------------------------------------------------------------
<a name="#Query+lessThan"></a>"></a>

### Query.lessThan


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

---------------------------------------------------------------------------------------------
<a name="#Query+lessThanOrEqualTo"></a>

### Query.lessThanOrEqualTo


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

---------------------------------------------------------------------------------------------
<a name="#Query+exists"></a>

### Query.exists


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

---------------------------------------------------------------------------------------------
<a name="#Query+doesNotExist"></a>

### Query.doesNotExist


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

---------------------------------------------------------------------------------------------
<a name="#Query+contains"></a>

### Query.contains


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

---------------------------------------------------------------------------------------------
<a name="#Query+startsWith"></a>

### Query.startsWith


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

---------------------------------------------------------------------------------------------
<a name="#Query+endsWith"></a>

### Query.endsWith


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

---------------------------------------------------------------------------------------------
<a name="#Query+or"></a>

### Query.or


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

---------------------------------------------------------------------------------------------
<a name="#Query+and"></a>

### Query.and


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

---------------------------------------------------------------------------------------------
<a name="#Query+raw"></a>

### Query.raw


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| options | JSONObject | | | |

---------------------------------------------------------------------------------------------
<a name="#Query+reset"></a>

### Query.reset


---------------------------------------------------------------------------------------------
<a name="#Query+ascending"></a>

### Query.ascending


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| asc | String | | | |
---------------------------------------------------------------------------------------------
<a name="#Query+descending"></a>

### Query.descending


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| dsc | String | | | |
---------------------------------------------------------------------------------------------
<a name="#Query+fields"></a>

### Query.fields


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| fields | String[] | | | |

---------------------------------------------------------------------------------------------