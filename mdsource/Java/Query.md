<a name="Query"></a>

### Query
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



Query(name)

|  callback  | SCCallback<String>  |    |    |    |
|  sess      | String              |    |    |    |
|  coll      | String              |    |    |    |
   
|  callback  | SCCallback<Integer> |    |    |    |
|  sess      | String              |    |    |    |
|  coll      | String              |    |    |    |

|  callback | SCCallback<UpdateDataResponseEntity> |    |    |    |
|  sess     | String                               |    |    |    |
|  acc      | String                               |    |    |    |
|  coll     | String                               |    |    |    | 
|  doc      | Object                               |    |    |    |

|  callback  | SCCallback<UpdateDataResponseEntity> |    |    |    |
|  sess      | String                               |    |    |    |
|  coll      | String                               |    |    |    |


| limit | int | | | |

| skip  | int | | | |

| pageNumber | int | | | |


| name  |  String | Обязательный | Имя поля | "" | 
| value | String  | Обязательный | Имя поля | "" |

| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

| name  |  String | Обязательный | Имя поля | "" |   
| value | String  | Обязательный | Имя поля | "" |

options JSONObject

asc String
dsc String
fields String[] 
---------------------------------------------------------------------------------------------