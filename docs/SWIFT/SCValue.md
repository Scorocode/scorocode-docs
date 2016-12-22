<a name="SCValue"></a>

## SCValue

Протокол для работы с данными.

**Содержание**

* [SCValue](#SCValue)
    * [SCBool(value)](#SCBool)
    * [SCString(value)](#SCString) 
    * [SCInt(value)](#SCInt)
    * [SCDouble(value)](#SCDouble)  
    * [SCDate(value)](#SCDate) 
    * [SCArray(value)](#SCArray) 
    * [SCDictionary(value)](#SCDictionary)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<a name="SCBool"></a> 

### SCBool(value)

Хранение логических значений

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| value | <code>Bool</code> | Обязательное | Логическое значение | `true` или `false` | 


```SWIFT
let dataBool = SCBool(true)
```

----------------------------------------------------------------------------------------------

<a name="SCString"></a> 

### SCString(value)

Хранение строковых значений


**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| value | <code>String</code> | Обязательное | Cтрока | "Это строка" | 


```SWIFT
let dataString = SCString("AbCdE")
```

----------------------------------------------------------------------------------------------

<a name="SCInt"></a> 

### SCInt(value)

Хранение целочисленных значений

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| value | <code>Int</code> | Обязательное | целочисленное | 42 | 


```SWIFT
let dataInt = SCInt(5)
```

----------------------------------------------------------------------------------------------

<a name="SCDouble"></a> 

### SCDouble(value)

Хранение дробных значений

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| value | <code>Double</code> | Обязательное | Дробное | 3.1415926 | 


```SWIFT
let dataDouble = SCDouble(3.1415926)
```

----------------------------------------------------------------------------------------------

<a name="SCDate"></a> 

### SCDate(value)

Хранение даты/времени

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| value | <code>NSDate</code> | Обязательное | Дата | 2016-05-31 | 


```SWIFT
let dataDate = SCDate(dateFormatter.dateFromString("2016-05-31")!)
```



----------------------------------------------------------------------------------------------

<a name="SCArray"></a> 

### SCArray(value)

Хранение массива

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| value | <code>[SCValue]</code> | Обязательное | Массив | <code>[SCInt(4), SCInt(8), SCInt(15), SCInt(16), SCInt(23), SCInt(42)]</code> | 


```SWIFT
let dataBool = SCBool(true)
let dataString = SCString("AbCdE")
let dataInt = SCInt(5)
let dataDouble = SCDouble(3.1415926)
let dataDate = SCDate(dateFormatter.dateFromString("2016-05-31")!)
let dataDictionary = SCDictionary(["name" : dataString, "date" : dataDate])

let dataArray = SCArray([dataBool, dataString, dataInt, dataDouble, dataDate, dataDictionary])
```

----------------------------------------------------------------------------------------------

<a name="SCDictionary"></a>

### SCDictionary(value)

Хранение объекта "ключ"-"значение"

**Параметры**

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| value | <code>[String: SCValue]</code> | Обязательное | Объект с данными типа "ключ": "значение" | ["key1" : SCString("A"), "key2" : SCString("B")] | 

```SWIFT
let dataDictionary = SCDictionary(["key1" : SCString("A"), "key2" : SCString("B")])
```
