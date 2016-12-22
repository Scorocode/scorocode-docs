## Получение полной информации о приложении

**https://api.scorocode.ru/api/v1/app**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",     // идентификатор приложения, обязательный
    "cli": "",     // клиентский ключ, обязательный
    "acc": ""      // ключ доступа, обязательный, только masterKey
}
```

**Ответы:**

*Выполнено*

```
{
  "app": {
    "_id": "584e64f8982fd55332741516",
    "appId": "48f172923acd719b42c73ac3a492cfc8",
    "name": "HTTPApp",
    "description": "",
    "userId": "5745b2123evlfh062612e3f",
    "serverId": "5745a5e63ef62fs0626ftgeb",
    "limits": {
      "rps": 20,
      "store": 10737418240,
      "pushValue": 0,
      "pushUsed": 0,
      "developers": 1,
      "ws": 200,
      "scriptTimeout": 3
    },
    "schemas": {
      "devices": {
        "id": "584e64f8982fd55332741515",
        "name": "devices",
        "useDocsACL": false,
        "ACL": {
          "create": [
            "*"
          ],
          "read": [
            "*"
          ],
          "remove": [
            "*"
          ],
          "update": [
            "*"
          ]
        },
        "triggers": {
          "afterFind": {
            "code": "",
            "isActive": false
          },
          "afterInsert": {
            "code": "",
            "isActive": false
          },
          "afterRemove": {
            "code": "",
            "isActive": false
          },
          "afterUpdate": {
            "code": "",
            "isActive": false
          },
          "beforeInsert": {
            "code": "",
            "isActive": false
          },
          "beforeRemove": {
            "code": "",
            "isActive": false
          },
          "beforeUpdate": {
            "code": "",
            "isActive": false
          }
        },
        "fields": [
          {
            "name": "readACL",
            "type": "ACL",
            "target": "",
            "system": true,
            "readonly": false,
            "required": false
          },
          {
            "name": "updateACL",
            "type": "ACL",
            "target": "",
            "system": true,
            "readonly": false,
            "required": false
          },
          {
            "name": "removeACL",
            "type": "ACL",
            "target": "",
            "system": true,
            "readonly": false,
            "required": false
          },
          {
            "name": "createdAt",
            "type": "Date",
            "target": "",
            "system": true,
            "readonly": true,
            "required": false
          },
          {
            "name": "updatedAt",
            "type": "Date",
            "target": "",
            "system": true,
            "readonly": true,
            "required": false
          },
          {
            "name": "userId",
            "type": "String",
            "target": "",
            "system": true,
            "readonly": false,
            "required": false
          },
          {
            "name": "deviceId",
            "type": "String",
            "target": "",
            "system": true,
            "readonly": true,
            "required": true
          },
          {
            "name": "deviceType",
            "type": "String",
            "target": "",
            "system": true,
            "readonly": true,
            "required": true
          }
        ],
        "system": true,
        "indexes": []
      },
      "roles": {
        "id": "584e64f8982fd55332741513",
        "name": "roles",
        "useDocsACL": false,
        "ACL": {
          "create": [
            "*"
          ],
          "read": [
            "*"
          ],
          "remove": [
            "*"
          ],
          "update": [
            "*"
          ]
        },
        "triggers": {
          "afterFind": {
            "code": "",
            "isActive": false
          },
          "afterInsert": {
            "code": "",
            "isActive": false
          },
          "afterRemove": {
            "code": "",
            "isActive": false
          },
          "afterUpdate": {
            "code": "",
            "isActive": false
          },
          "beforeInsert": {
            "code": "",
            "isActive": false
          },
          "beforeRemove": {
            "code": "",
            "isActive": false
          },
          "beforeUpdate": {
            "code": "",
            "isActive": false
          }
        },
        "fields": [
          {
            "name": "name",
            "type": "String",
            "target": "",
            "system": true,
            "readonly": false,
            "required": true
          },
          {
            "name": "readACL",
            "type": "ACL",
            "target": "",
            "system": true,
            "readonly": false,
            "required": false
          },
          {
            "name": "updateACL",
            "type": "ACL",
            "target": "",
            "system": true,
            "readonly": false,
            "required": false
          },
          {
            "name": "removeACL",
            "type": "ACL",
            "target": "",
            "system": true,
            "readonly": false,
            "required": false
          },
          {
            "name": "createdAt",
            "type": "Date",
            "target": "",
            "system": true,
            "readonly": true,
            "required": false
          },
          {
            "name": "updatedAt",
            "type": "Date",
            "target": "",
            "system": true,
            "readonly": true,
            "required": false
          }
        ],
        "system": true,
        "indexes": []
      },
      "users": {
        "id": "584e64f8982fd55332741514",
        "name": "users",
        "useDocsACL": false,
        "ACL": {
          "create": [
            "*"
          ],
          "read": [
            "*"
          ],
          "remove": [
            "*"
          ],
          "update": [
            "*"
          ]
        },
        "triggers": {
          "afterFind": {
            "code": "",
            "isActive": false
          },
          "afterInsert": {
            "code": "",
            "isActive": false
          },
          "afterRemove": {
            "code": "",
            "isActive": false
          },
          "afterUpdate": {
            "code": "",
            "isActive": false
          },
          "beforeInsert": {
            "code": "",
            "isActive": false
          },
          "beforeRemove": {
            "code": "",
            "isActive": false
          },
          "beforeUpdate": {
            "code": "",
            "isActive": false
          }
        },
        "fields": [
          {
            "name": "email",
            "type": "String",
            "target": "",
            "system": true,
            "readonly": true,
            "required": true
          },
          {
            "name": "phone",
            "type": "String",
            "target": "",
            "system": true,
            "readonly": false,
            "required": false
          },
          {
            "name": "readACL",
            "type": "ACL",
            "target": "",
            "system": true,
            "readonly": false,
            "required": false
          },
          {
            "name": "updateACL",
            "type": "ACL",
            "target": "",
            "system": true,
            "readonly": false,
            "required": false
          },
          {
            "name": "removeACL",
            "type": "ACL",
            "target": "",
            "system": true,
            "readonly": false,
            "required": false
          },
          {
            "name": "createdAt",
            "type": "Date",
            "target": "",
            "system": true,
            "readonly": true,
            "required": false
          },
          {
            "name": "updatedAt",
            "type": "Date",
            "target": "",
            "system": true,
            "readonly": true,
            "required": false
          },
          {
            "name": "username",
            "type": "String",
            "target": "",
            "system": true,
            "readonly": false,
            "required": true
          },
          {
            "name": "password",
            "type": "Password",
            "target": "",
            "system": true,
            "readonly": false,
            "required": true
          },
          {
            "name": "emailVerified",
            "type": "Boolean",
            "target": "",
            "system": true,
            "readonly": true,
            "required": false
          },
          {
            "name": "roles",
            "type": "Array",
            "target": "",
            "system": true,
            "readonly": false,
            "required": false
          },
          {
            "name": "token",
            "type": "String",
            "target": "",
            "system": true,
            "readonly": true,
            "required": false
          }
        ],
        "system": true,
        "indexes": []
      }
    },
    "accessKeys": {
      "fileKey": "31adc32bac245299cfad0d7b1912bc2a",
      "masterKey": "ffe86fefg25fbklacsdee8cd4c59644a",
      "messageKey": "605a1248a2d27424ec43f6bdf435b0a7",
      "scriptKey": "333efb738b82c3096a3fgdbabd27f702",
      "websocketKey": "9627612736b1129d2ea9d615fb482a41"
    },
    "clientKeys": {
      "android": "db993776551ed6267fbe256ef0296cb8",
      "ios": "840ff61458ec11bf411859dbbf46d46a",
      "javascript": "d6859f41223c9997ff78c6b4vb3a96bb",
      "winphone": "3fbce82fafba9dccc60036f92b971654"
    },
    "readonly": true,
    "ACLPublic": {
      "create": false,
      "read": false,
      "remove": false,
      "update": false
    },
    "settings": {
      "emailVerified": false,
      "sessionTimeout": 72,
      "androidApiKey": "",
      "gcmSenderId": "",
      "mailTemplates": {
        "forgot": {
          "subject": "",
          "body": ""
        },
        "reg": {
          "subject": "",
          "body": ""
        }
      },
      "smtp": null
    },
    "storage": {
      "user": "",
      "password": ""
    },
    "npm": "{\"dependencies\":{}}",
    "stringId": "584e64f8982fd55332741516"
  },
  "error": false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
        "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
        "app": "48f172923acd719b42c73ac3a492cfc8",
        "cli": "d6859f41223c9997ff78c6b4vb3a96bb"
}' "https://api.scorocode.ru/api/v1/app"
```

-------------------------------------------------------------------------------------

## Получение списка коллекций приложения и их настроек

**https://api.scorocode.ru/api/v1/app/collections**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",     // идентификатор приложения, обязательный
    "cli": "",     // клиентский ключ, обязательный
    "acc": ""      // ключ доступа, обязательный, только masterKey
}
```
**Ответы:**

*Выполнено*

```
{
  "collections": {
    "devices": {
      "id": "584e64f8982fd55332741515",
      "name": "devices",
      "useDocsACL": false,
      "ACL": {
        "create": [
          "*"
        ],
        "read": [
          "*"
        ],
        "remove": [
          "*"
        ],
        "update": [
          "*"
        ]
      },
      "triggers": {
        "afterFind": {
          "code": "",
          "isActive": false
        },
        "afterInsert": {
          "code": "",
          "isActive": false
        },
        "afterRemove": {
          "code": "",
          "isActive": false
        },
        "afterUpdate": {
          "code": "",
          "isActive": false
        },
        "beforeInsert": {
          "code": "",
          "isActive": false
        },
        "beforeRemove": {
          "code": "",
          "isActive": false
        },
        "beforeUpdate": {
          "code": "",
          "isActive": false
        }
      },
      "fields": [
        {
          "name": "readACL",
          "type": "ACL",
          "target": "",
          "system": true,
          "readonly": false,
          "required": false
        },
        {
          "name": "updateACL",
          "type": "ACL",
          "target": "",
          "system": true,
          "readonly": false,
          "required": false
        },
        {
          "name": "removeACL",
          "type": "ACL",
          "target": "",
          "system": true,
          "readonly": false,
          "required": false
        },
        {
          "name": "createdAt",
          "type": "Date",
          "target": "",
          "system": true,
          "readonly": true,
          "required": false
        },
        {
          "name": "updatedAt",
          "type": "Date",
          "target": "",
          "system": true,
          "readonly": true,
          "required": false
        },
        {
          "name": "userId",
          "type": "String",
          "target": "",
          "system": true,
          "readonly": false,
          "required": false
        },
        {
          "name": "deviceId",
          "type": "String",
          "target": "",
          "system": true,
          "readonly": true,
          "required": true
        },
        {
          "name": "deviceType",
          "type": "String",
          "target": "",
          "system": true,
          "readonly": true,
          "required": true
        }
      ],
      "system": true,
      "indexes": []
    },
    "roles": {
      "id": "584e64f8982fd55332741513",
      "name": "roles",
      "useDocsACL": false,
      "ACL": {
        "create": [
          "*"
        ],
        "read": [
          "*"
        ],
        "remove": [
          "*"
        ],
        "update": [
          "*"
        ]
      },
      "triggers": {
        "afterFind": {
          "code": "",
          "isActive": false
        },
        "afterInsert": {
          "code": "",
          "isActive": false
        },
        "afterRemove": {
          "code": "",
          "isActive": false
        },
        "afterUpdate": {
          "code": "",
          "isActive": false
        },
        "beforeInsert": {
          "code": "",
          "isActive": false
        },
        "beforeRemove": {
          "code": "",
          "isActive": false
        },
        "beforeUpdate": {
          "code": "",
          "isActive": false
        }
      },
      "fields": [
        {
          "name": "name",
          "type": "String",
          "target": "",
          "system": true,
          "readonly": false,
          "required": true
        },
        {
          "name": "readACL",
          "type": "ACL",
          "target": "",
          "system": true,
          "readonly": false,
          "required": false
        },
        {
          "name": "updateACL",
          "type": "ACL",
          "target": "",
          "system": true,
          "readonly": false,
          "required": false
        },
        {
          "name": "removeACL",
          "type": "ACL",
          "target": "",
          "system": true,
          "readonly": false,
          "required": false
        },
        {
          "name": "createdAt",
          "type": "Date",
          "target": "",
          "system": true,
          "readonly": true,
          "required": false
        },
        {
          "name": "updatedAt",
          "type": "Date",
          "target": "",
          "system": true,
          "readonly": true,
          "required": false
        }
      ],
      "system": true,
      "indexes": []
    },
    "users": {
      "id": "584e64f8982fd55332741514",
      "name": "users",
      "useDocsACL": false,
      "ACL": {
        "create": [
          "*"
        ],
        "read": [
          "*"
        ],
        "remove": [
          "*"
        ],
        "update": [
          "*"
        ]
      },
      "triggers": {
        "afterFind": {
          "code": "",
          "isActive": false
        },
        "afterInsert": {
          "code": "",
          "isActive": false
        },
        "afterRemove": {
          "code": "",
          "isActive": false
        },
        "afterUpdate": {
          "code": "",
          "isActive": false
        },
        "beforeInsert": {
          "code": "",
          "isActive": false
        },
        "beforeRemove": {
          "code": "",
          "isActive": false
        },
        "beforeUpdate": {
          "code": "",
          "isActive": false
        }
      },
      "fields": [
        {
          "name": "email",
          "type": "String",
          "target": "",
          "system": true,
          "readonly": true,
          "required": true
        },
        {
          "name": "phone",
          "type": "String",
          "target": "",
          "system": true,
          "readonly": false,
          "required": false
        },
        {
          "name": "readACL",
          "type": "ACL",
          "target": "",
          "system": true,
          "readonly": false,
          "required": false
        },
        {
          "name": "updateACL",
          "type": "ACL",
          "target": "",
          "system": true,
          "readonly": false,
          "required": false
        },
        {
          "name": "removeACL",
          "type": "ACL",
          "target": "",
          "system": true,
          "readonly": false,
          "required": false
        },
        {
          "name": "createdAt",
          "type": "Date",
          "target": "",
          "system": true,
          "readonly": true,
          "required": false
        },
        {
          "name": "updatedAt",
          "type": "Date",
          "target": "",
          "system": true,
          "readonly": true,
          "required": false
        },
        {
          "name": "username",
          "type": "String",
          "target": "",
          "system": true,
          "readonly": false,
          "required": true
        },
        {
          "name": "password",
          "type": "Password",
          "target": "",
          "system": true,
          "readonly": false,
          "required": true
        },
        {
          "name": "emailVerified",
          "type": "Boolean",
          "target": "",
          "system": true,
          "readonly": true,
          "required": false
        },
        {
          "name": "roles",
          "type": "Array",
          "target": "",
          "system": true,
          "readonly": false,
          "required": false
        },
        {
          "name": "token",
          "type": "String",
          "target": "",
          "system": true,
          "readonly": true,
          "required": false
        }
      ],
      "system": true,
      "indexes": []
    }
  },
  "error": false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
        "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
        "app": "48f172923acd719b42c73ac3a492cfc8",
        "cli": "d6859f41223c9997ff78c6b4vb3a96bb"
}' "https://api.scorocode.ru/api/v1/app/collections"
```

-------------------------------------------------------------------------------------

## Просмотр структуры и настроек конкретной коллекции.

**https://api.scorocode.ru/api/v1/app/collections/get**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",     // идентификатор приложения, обязательный
    "cli": "",     // клиентский ключ, обязательный
    "acc": "",     // ключ доступа, обязательный, только masterKey
    "coll": ""     // имя коллекции, обязательный
}
```

**Ответы:**

*Выполнено*

```
{
  "collection": {
    "id": "584e64f8982fd55332741515",
    "name": "devices",
    "useDocsACL": false,
    "ACL": {
      "create": [
        "*"
      ],
      "read": [
        "*"
      ],
      "remove": [
        "*"
      ],
      "update": [
        "*"
      ]
    },
    "triggers": {
      "afterFind": {
        "code": "",
        "isActive": false
      },
      "afterInsert": {
        "code": "",
        "isActive": false
      },
      "afterRemove": {
        "code": "",
        "isActive": false
      },
      "afterUpdate": {
        "code": "",
        "isActive": false
      },
      "beforeInsert": {
        "code": "",
        "isActive": false
      },
      "beforeRemove": {
        "code": "",
        "isActive": false
      },
      "beforeUpdate": {
        "code": "",
        "isActive": false
      }
    },
    "fields": [
      {
        "name": "readACL",
        "type": "ACL",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "updateACL",
        "type": "ACL",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "removeACL",
        "type": "ACL",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "createdAt",
        "type": "Date",
        "target": "",
        "system": true,
        "readonly": true,
        "required": false
      },
      {
        "name": "updatedAt",
        "type": "Date",
        "target": "",
        "system": true,
        "readonly": true,
        "required": false
      },
      {
        "name": "userId",
        "type": "String",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "deviceId",
        "type": "String",
        "target": "",
        "system": true,
        "readonly": true,
        "required": true
      },
      {
        "name": "deviceType",
        "type": "String",
        "target": "",
        "system": true,
        "readonly": true,
        "required": true
      }
    ],
    "system": true,
    "indexes": []
  },
  "error": false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
        "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
        "app": "48f172923acd719b42c73ac3a492cfc8",
        "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
        "coll": "devices"
}' "https://api.scorocode.ru/api/v1/app/collections/get"
```

-------------------------------------------------------------------------------------

## Создание новой коллекции

**https://api.scorocode.ru/api/v1/app/collections/create**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",               // идентификатор приложения, обязательный
    "cli": "",               // клиентский ключ, обязательный
    "acc": "",               // ключ доступа, обязательный, только masterKey
    "collection": {          
        "name": "",          // имя коллекции, обязательный  
        "useDocsACL": bool,  // флаг "использовать ACL документов", необязательный
        "ACL": {}            // настройки ACL коллекции, необязательный
    }
}
```
**Ответы:**

*Выполнено*

```
{
  "collection": {
    "id": "584e849e7e0b4e222480a282",
    "name": "apicoll",
    "useDocsACL": false,
    "ACL": {
        "create": [
            "R5VGMes94p"
        ],
        "read": [
            "*",
            "R5VGMes94p"
        ],
        "remove": [
            "R5VGMes94p"
        ],
        "update": [
            "R5VGMes94p"
        ]
    },
    "triggers": {
      "afterInsert": {
        "code": "",
        "isActive": false
      },
      "afterRemove": {
        "code": "",
        "isActive": false
      },
      "afterUpdate": {
        "code": "",
        "isActive": false
      },
      "beforeInsert": {
        "code": "",
        "isActive": false
      },
      "beforeRemove": {
        "code": "",
        "isActive": false
      },
      "beforeUpdate": {
        "code": "",
        "isActive": false
      }
    },
    "fields": [
      {
        "name": "readACL",
        "type": "ACL",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "updateACL",
        "type": "ACL",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "removeACL",
        "type": "ACL",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "createdAt",
        "type": "Date",
        "target": "",
        "system": true,
        "readonly": true,
        "required": false
      },
      {
        "name": "updatedAt",
        "type": "Date",
        "target": "",
        "system": true,
        "readonly": true,
        "required": false
      }
    ],
    "system": false,
    "indexes": []
  },
  "error": false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
        "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
        "app": "48f172923acd719b42c73ac3a492cfc8",
        "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
        "collection": {
            "name": "apicoll",
            "useDocsACL": false,
            "ACL": {
                "create": [
                    "R5VGMes94p"
                ],
                "read": [
                    "*",
                    "R5VGMes94p"
                ],
                "remove": [
                    "R5VGMes94p"
                ],
                "update": [
                    "R5VGMes94p"
                ]
            }
        }
}' "https://api.scorocode.ru/api/v1/app/collections/create"
```

-------------------------------------------------------------------------------------

## Изменение настроек коллекции

**https://api.scorocode.ru/api/v1/app/collections/update**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",               // идентификатор приложения, обязательный
    "cli": "",               // клиентский ключ, обязательный
    "acc": "",               // ключ доступа, обязательный, только masterKey
    "collection": {
        "id": "",            // id коллекции, обязательный           
        "name": "",          // имя коллекции, необязательный  
        "useDocsACL": bool,  // флаг "использовать ACL документов", необязательный
        "ACL": {}            // настройки ACL коллекции, необязательный
    }
}
```
**Ответы:**

*Выполнено*

```
{
  "collection": {
    "id": "584e849e7e0b4e222480a282",
    "name": "apicoll",
    "useDocsACL": true,
    "ACL": {
        "create": [
            "R5VGMes94p"
        ],
        "read": [
            "*",
            "R5VGMes94p"
        ],
        "remove": [
            "R5VGMes94p"
        ],
        "update": [
            "R5VGMes94p"
        ]
    },
    "triggers": {
      "afterInsert": {
        "code": "",
        "isActive": false
      },
      "afterRemove": {
        "code": "",
        "isActive": false
      },
      "afterUpdate": {
        "code": "",
        "isActive": false
      },
      "beforeInsert": {
        "code": "",
        "isActive": false
      },
      "beforeRemove": {
        "code": "",
        "isActive": false
      },
      "beforeUpdate": {
        "code": "",
        "isActive": false
      }
    },
    "fields": [
      {
        "name": "readACL",
        "type": "ACL",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "updateACL",
        "type": "ACL",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "removeACL",
        "type": "ACL",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "createdAt",
        "type": "Date",
        "target": "",
        "system": true,
        "readonly": true,
        "required": false
      },
      {
        "name": "updatedAt",
        "type": "Date",
        "target": "",
        "system": true,
        "readonly": true,
        "required": false
      }
    ],
    "system": false,
    "indexes": []
  },
  "error": false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
        "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
        "app": "48f172923acd719b42c73ac3a492cfc8",
        "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
        "collection": {
            "id": "584e849e7e0b4e222480a282",
            "useDocsACL": true
}' "https://api.scorocode.ru/api/v1/app/collections/create"
```

-------------------------------------------------------------------------------------

## Удаление коллекции

**https://api.scorocode.ru/api/v1/app/collections/delete**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",               // идентификатор приложения, обязательный
    "cli": "",               // клиентский ключ, обязательный
    "acc": "",               // ключ доступа, обязательный, только masterKey
    "collection": {
        "id": ""             // id коллекции, обязательный           
    }
}
```

**Ответы:**

*Выполнено*

```
{
  "error": false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
        "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
        "app": "48f172923acd719b42c73ac3a492cfc8",
        "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
        "collection": {
            "id": "584e849e7e0b4e222480a282",
}' "https://api.scorocode.ru/api/v1/app/collections/delete"
```

-------------------------------------------------------------------------------------

## Создание дубликата коллекции

**https://api.scorocode.ru/api/v1/app/collections/clone**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",               // идентификатор приложения, обязательный
    "cli": "",               // клиентский ключ, обязательный
    "acc": "",               // ключ доступа, обязательный, только masterKey
    "collection": {
        "id": "",            // id дублируемой коллекции, обязательный           
        "name": ""           // имя новой коллекции, обязательный
    }
}
```

**Ответы:**

*Выполнено*

```
{
  "collection": {
    "id": "584e91e70c62722cf9fe2191",
    "name": "clonedcoll",
    "useDocsACL": false,
    "ACL": {},
    "triggers": {
      "afterInsert": {
        "code": "",
        "isActive": false
      },
      "afterRemove": {
        "code": "",
        "isActive": false
      },
      "afterUpdate": {
        "code": "",
        "isActive": false
      },
      "beforeInsert": {
        "code": "",
        "isActive": false
      },
      "beforeRemove": {
        "code": "",
        "isActive": false
      },
      "beforeUpdate": {
        "code": "",
        "isActive": false
      }
    },
    "fields": [
      {
        "name": "readACL",
        "type": "ACL",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "updateACL",
        "type": "ACL",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "removeACL",
        "type": "ACL",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "createdAt",
        "type": "Date",
        "target": "",
        "system": true,
        "readonly": true,
        "required": false
      },
      {
        "name": "updatedAt",
        "type": "Date",
        "target": "",
        "system": true,
        "readonly": true,
        "required": false
      }
    ],
    "system": false,
    "indexes": []
  },
  "error": false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
        "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
        "app": "48f172923acd719b42c73ac3a492cfc8",
        "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
        "collection": {
            "id": "584e91b77e0b4e222480a316",
            "name": "clonedcoll"           
        }
}' "https://api.scorocode.ru/api/v1/app/collections/clone"
```

-------------------------------------------------------------------------------------

## Создание индекса коллекции

**https://api.scorocode.ru/api/v1/app/collections/index/create**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",                         // идентификатор приложения, обязательный
    "cli": "",                         // клиентский ключ, обязательный
    "acc": "",                         // ключ доступа, обязательный, только masterKey
    "coll": "",                        // имя коллекции, обязательный
    "index": {
        "name": "",                    // название индекса, обязательный
        "fields": [
            {
                "name": "",            // имя поля коллекции, обязательный
                "order": 1 || -1       // сортировка, обязательный
            }
        ]
    }
}
```

**Ответы:**

*Выполнено*

```
{
  "error": false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
        "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
        "app": "48f172923acd719b42c73ac3a492cfc8",
        "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
        "coll": "users",
        "index": {
            "name": "emailIndex",                    
            "fields": [
                {
                    "name": "email",            
                    "order": 1       
                }
            ]
        }
}' "https://api.scorocode.ru/api/v1/app/collections/index/create"
```

-------------------------------------------------------------------------------------

## Удаление индекса коллекции

**https://api.scorocode.ru/api/v1/app/collections/index/delete**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",                        // идентификатор приложения, обязательный
    "cli": "",                        // клиентский ключ, обязательный
    "acc": "",                        // ключ доступа, обязательный, только masterKey
    "coll": "",                       // имя коллекции, обязательный
    "index": {
        "name": ""                    // название индекса, обязательный
    }
}
```

**Ответы:**

*Выполнено*

```
{
  "error": false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
        "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
        "app": "48f172923acd719b42c73ac3a492cfc8",
        "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
        "coll": "users",
        "index": {
            "name": "emailIndex"                    
        }
}' "https://api.scorocode.ru/api/v1/app/collections/index/delete"
```

-------------------------------------------------------------------------------------

## Создание поля коллекции

**https://api.scorocode.ru/api/v1/app/collections/fields/create**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",         // идентификатор приложения, обязательный
    "cli": "",         // клиентский ключ, обязательный
    "acc": "",         // ключ доступа, обязательный, только masterKey
    "coll": "",        // имя коллекции, обязательный
    "collField": {     
        "name": "",    // имя поля, обязательный
        "type": "",    // тип данных поля, обязательный
        "target": ""   // имя целевой коллекции, обязательный для полей типа Pointer || Relation
    }
}
```

**Ответы:**

*Выполнено*

```
{
  "error": false,
  "field": {
    "name": "pointer",
    "type": "Pointer",
    "target": "devices",
    "system": false,
    "readonly": false,
    "required": false
  }
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
    "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
    "app": "48f172923acd719b42c73ac3a492cfc8",
    "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
    "coll": "users",                       
    "collField": {
        "name": "pointer",         
        "type": "Pointer",         
        "target": "devices"          
    }
}' "https://api.scorocode.ru/api/v1/app/collections/fields/create"
```

-------------------------------------------------------------------------------------

## Удаление поля коллекции

**https://api.scorocode.ru/api/v1/app/collections/fields/delete**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",       // идентификатор приложения, обязательный
    "cli": "",       // клиентский ключ, обязательный
    "acc": "",       // ключ доступа, обязательный, только masterKey
    "coll": "",      // имя коллекции, обязательный
    "collField": {   
        "name": ""   // имя поля, обязательный
    }
}
```

**Ответы:**

*Выполнено*

```
{
  "collection": {
    "id": "584e64f8982fd55332741514",
    "name": "users",
    "useDocsACL": false,
    "ACL": {
      "create": [
        "*"
      ],
      "read": [
        "*"
      ],
      "remove": [
        "*"
      ],
      "update": [
        "*"
      ]
    },
    "triggers": {
      "afterFind": {
        "code": "",
        "isActive": false
      },
      "afterInsert": {
        "code": "",
        "isActive": false
      },
      "afterRemove": {
        "code": "",
        "isActive": false
      },
      "afterUpdate": {
        "code": "",
        "isActive": false
      },
      "beforeInsert": {
        "code": "",
        "isActive": false
      },
      "beforeRemove": {
        "code": "",
        "isActive": false
      },
      "beforeUpdate": {
        "code": "",
        "isActive": false
      }
    },
    "fields": [
      {
        "name": "email",
        "type": "String",
        "target": "",
        "system": true,
        "readonly": true,
        "required": true
      },
      {
        "name": "phone",
        "type": "String",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "readACL",
        "type": "ACL",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "updateACL",
        "type": "ACL",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "removeACL",
        "type": "ACL",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "createdAt",
        "type": "Date",
        "target": "",
        "system": true,
        "readonly": true,
        "required": false
      },
      {
        "name": "updatedAt",
        "type": "Date",
        "target": "",
        "system": true,
        "readonly": true,
        "required": false
      },
      {
        "name": "username",
        "type": "String",
        "target": "",
        "system": true,
        "readonly": false,
        "required": true
      },
      {
        "name": "password",
        "type": "Password",
        "target": "",
        "system": true,
        "readonly": false,
        "required": true
      },
      {
        "name": "emailVerified",
        "type": "Boolean",
        "target": "",
        "system": true,
        "readonly": true,
        "required": false
      },
      {
        "name": "roles",
        "type": "Array",
        "target": "",
        "system": true,
        "readonly": false,
        "required": false
      },
      {
        "name": "token",
        "type": "String",
        "target": "",
        "system": true,
        "readonly": true,
        "required": false
      }
    ],
    "system": true,
    "indexes": []
  },
  "error": false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
    "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
    "app": "48f172923acd719b42c73ac3a492cfc8",
    "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
    "coll": "users",                       
    "collField": {
        "name": "pointer"
    }
}' "https://api.scorocode.ru/api/v1/app/collections/fields/delete"
```

-------------------------------------------------------------------------------------

## Изменение триггеров коллекции

**https://api.scorocode.ru/api/v1/app/collections/triggers**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",                // идентификатор приложения, обязательный
    "cli": "",                // клиентский ключ, обязательный
    "acc": "",                // ключ доступа, обязательный, только masterKey
    "coll": "",               // имя коллекции, обязательный
    "triggers": {
        "beforeInsert": {      
            "code": "",       // код триггера
            "isActive": bool  // флаг активности триггера
        },
        "afterInsert": {
            "code": "",       // код триггера
            "isActive": bool  // флаг активности триггера        
        },
        "beforeUpdate": {
            "code": "",       // код триггера
            "isActive": bool  // флаг активности триггера        
        },
        "afterUpdate": {
            "code": "",       // код триггера
            "isActive": bool  // флаг активности триггера       
        },
        "beforeRemove": {
            "code": "",       // код триггера
            "isActive": bool  // флаг активности триггера        
        },
        "afterRemove": {
            "code": "",       // код триггера
            "isActive": bool  // флаг активности триггера       
        }
    }
}
```

**Ответы:**

*Выполнено*

```
{
  "error": false,
  "triggers": {
    "afterFind": {
      "code": "",
      "isActive": false
    },
    "afterInsert": {
      "code": "DataManager.Insert({\n  coll:'logs', \n  doc: {\n    'docId': pool.newDoc._id,\n    'collection': 'users',\n    'operation': 'register',\n    'data': pool.newDoc\n    }\n  });",
      "isActive": true
    },
    "afterRemove": {
      "code": "",
      "isActive": false
    },
    "afterUpdate": {
      "code": "",
      "isActive": false
    },
    "beforeInsert": {
      "code": "",
      "isActive": false
    },
    "beforeRemove": {
      "code": "",
      "isActive": false
    },
    "beforeUpdate": {
      "code": "",
      "isActive": false
    }
  }
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
    "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
    "app": "48f172923acd719b42c73ac3a492cfc8",
    "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
    "coll": "users",                       
    "triggers": {
         "afterInsert": {
            "code": "DataManager.Insert({\n  coll:'logs', \n  doc: {\n    'docId': pool.newDoc._id,\n    'collection': 'users',\n    'operation': 'register',\n    'data': pool.newDoc\n    }\n  });",       
            "isActive": true
        }
    }
}
' "https://api.scorocode.ru/api/v1/app/collections/triggers"
```

-------------------------------------------------------------------------------------

## Получение списка папок и скриптов директории

**https://api.scorocode.ru/api/v1/app/scripts/folders**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",               // идентификатор приложения, обязательный
    "cli": "",               // клиентский ключ, обязательный
    "acc": "",               // ключ доступа, обязательный, только masterKey
    "path": ""               // путь до директории, обязательный
}
```

**Ответы:**

*Выполнено*

```
{
  "error": false,
  "items": [
    {
      "_id": "",
      "name": "folder1",
      "path": "/folder1",
      "isScript": false
    },
    {
      "_id": "",
      "name": "folder2",
      "path": "/folder2",
      "isScript": false
    },
    {
      "_id": "584eb26a42d52f1ba275fdb2",
      "name": "somescript.js",
      "path": "/somescript.js",
      "isScript": true
    }
  ]
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
    "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
    "app": "48f172923acd719b42c73ac3a492cfc8",
    "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
    "path": "/"
}' "https://api.scorocode.ru/api/v1/app/scripts/folders"
```

-------------------------------------------------------------------------------------

## Создание новой папки

**https://api.scorocode.ru/api/v1/app/scripts/folders/create**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",               // идентификатор приложения, обязательный
    "cli": "",               // клиентский ключ, обязательный
    "acc": "",               // ключ доступа, обязательный, только masterKey
    "path": ""               // полный путь до папки, обязательный
}
```

**Ответы:**

*Выполнено*

```
{
  "error": false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
    "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
    "app": "48f172923acd719b42c73ac3a492cfc8",
    "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
    "path": "/folder1/newfolder"
}' "https://api.scorocode.ru/api/v1/app/scripts/folders/create"
```

-------------------------------------------------------------------------------------

## Удаление папки со всем содержимым

**https://api.scorocode.ru/api/v1/app/scripts/folders/delete**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",               // идентификатор приложения, обязательный
    "cli": "",               // клиентский ключ, обязательный
    "acc": "",               // ключ доступа, обязательный, только masterKey
    "path": ""               // полный путь до папки, обязательный
}
```

**Ответы:**

*Выполнено*

```
{
  "error": false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
    "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
    "app": "48f172923acd719b42c73ac3a492cfc8",
    "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
    "path": "/folder1/newfolder"
}' "https://api.scorocode.ru/api/v1/app/scripts/folders/delete"
```

-------------------------------------------------------------------------------------

## Получение скрипта

**https://api.scorocode.ru/api/v1/app/scripts/get**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",     // идентификатор приложения, обязательный
    "cli": "",     // клиентский ключ, обязательный
    "acc": "",     // ключ доступа, обязательный, только masterKey
    "script": ""   // id скрипта, обязательный
}
```

**Ответы:**

*Выполнено*

```
{
  "error": false,
  "script": {
    "_id": "584eb54142d52f1ba275fdb3",
    "appId": "584e64f8982fd55332741516",
    "name": "AYBABTU.js",
    "path": "/AYBABTU.js",
    "description": "",
    "code": "console.log(\"QWxsIHlvdXIgYmFzZSBhcmUgYmVsb25nIHRvIHVz\");",
    "jobStartAt": "2016-12-12T17:33:00+03:00",
    "isActiveJob": false,
    "jobType": "once",
    "repeat": {
      "custom": {
        "days": 0,
        "hours": 0,
        "minutes": 0
      },
      "daily": {
        "on": [],
        "hours": 0,
        "minutes": 0
      },
      "monthly": {
        "on": [],
        "days": [],
        "lastDate": false,
        "hours": 0,
        "minutes": 0
      }
    },
    "nextRun": "2016-12-12T17:33:00+03:00",
    "ACL": [
      "*"
    ]
  }
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
    "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
    "app": "48f172923acd719b42c73ac3a492cfc8",
    "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
    "script": "584eb54142d52f1ba275fdb3"
}' "https://api.scorocode.ru/api/v1/app/scripts/get"
```

-------------------------------------------------------------------------------------

## Создание нового скрипта

**https://api.scorocode.ru/api/v1/app/scripts/create**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",                    // идентификатор приложения, обязательный
    "cli": "",                    // клиентский ключ, обязательный
    "acc": "",                    // ключ доступа, обязательный, только masterKey
    "cloudCode": {
        "path": ""                // полный путь и название скрипта, обязательный
        "description": "",        // описание, необязательный
        "code": "",               // код скрипта, необязательный
        "jobStartAt": "datetime", // время начала работы таймера, необязательный
        "isActiveJob": bool,      // флаг активности таймера, необязательный
        "jobType": "",            // тип таймера, необязательный, custom || daily || monthly
        "repeat": {               // настройки таймера, необязательный
            "custom": {
                "days": int,
                "hours": int,
                "minutes": int
            },
            "daily": {
                "on": [int],
                "hours": int,
                "minutes": int
            }
            "monthly": {
                "on": [int],
                "days": [int],
                "lastDate": bool,
                "hours": int,
                "minutes": int
            }
        }
        "ACL": []                 // настройки ACL скрипта, необязательный, массив id пользователей или "*" для разрешения анонимного доступа
    }
}
```

**Ответы:**

*Выполнено*

```
{
  "error": false,
  "script": {
    "_id": "584fad1422a5482feb5b31ab",
    "appId": "584e64f8982fd55332741516",
    "name": "AYBABTU.js",
    "path": "/AYBABTU.js",
    "description": "All your base",
    "code": "console.log(\"QWxsIHlvdXIgYmFzZSBhcmUgYmVsb25nIHRvIHVz\");",
    "jobStartAt": "2016-12-13T17:33:00+03:00",
    "isActiveJob": false,
    "jobType": "custom",
    "repeat": {
      "custom": {
        "days": 0,
        "hours": 0,
        "minutes": 5
      },
      "daily": null,
      "monthly": null
    },
    "nextRun": "0001-01-01T00:00:00Z",
    "ACL": [
      "*"
    ]
  }
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
    "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
    "app": "48f172923acd719b42c73ac3a492cfc8",
    "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
    "cloudCode": {
        "path": "/AYBABTU.js",
        "description": "All your base",      
        "code": "console.log(\"QWxsIHlvdXIgYmFzZSBhcmUgYmVsb25nIHRvIHVz\");",             
        "jobStartAt": "2016-12-13T17:33:00+03:00", 
        "isActiveJob": false,    
        "jobType": "custom",           
        "repeat": {             
            "custom": {
                "days": 0,
                "hours": 0,
                "minutes": 5
            }
        },
        "ACL": ["*"]
    }
}' "https://api.scorocode.ru/api/v1/app/scripts/create"
```

-------------------------------------------------------------------------------------

## Изменение скрипта

**https://api.scorocode.ru/api/v1/app/scripts/update**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{

    {
    "app": "",                  // идентификатор приложения, обязательный
    "cli": "",                  // клиентский ключ, обязательный
    "acc": "",                  // ключ доступа, обязательный, только masterKey
    "script": "",               // идентификатор скрипта, обязательный
    "cloudCode": {
        "path": ""              // полный путь и название скрипта, необязательный
        "description": "",      // описание, необязательный
        "code": "",             // код скрипта, необязательный
        "jobStartAt": datetime, // время начала работы таймера, необязательный
        "isActiveJob": bool,    // флаг активности таймера, необязательный
        "jobType": ""           // тип таймера, необязательный, custom || daily || monthly
        "repeat": {             // настройки таймера, необязательный
            "custom": {
                "days": int,
                "hours": int,
                "minutes": int
            },
            "daily": {
                "on": [int],
                "hours": int,
                "minutes": int
            }
            "monthly": {
                "on": [int],
                "days": [int],
                "lastDate": bool,
                "hours": int,
                "minutes": int
            }
        },
        "ACL": []               // настройки ACL скрипта, необязательный, массив id пользователей или "*" для разрешения анонимного доступа
    }
}
```

**Ответы:**

*Выполнено*

```
{
  "error": false,
  "script": {
    "_id": "584fad1422a5482feb5b31ab",
    "appId": "584e64f8982fd55332741516",
    "name": "AYBABTU.js",
    "path": "/AYBABTU.js",
    "description": "All your base",
    "code": "console.log(\"QWxsIHlvdXIgYmFzZSBhcmUgYmVsb25nIHRvIHVz\");",
    "jobStartAt": "2016-12-13T17:33:00+03:00",
    "isActiveJob": true,
    "jobType": "custom",
    "repeat": {
      "custom": {
        "days": 0,
        "hours": 0,
        "minutes": 5
      },
      "daily": null,
      "monthly": null
    },
    "nextRun": "0001-01-01T00:00:00Z",
    "ACL": [
      "*"
    ]
  }
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
    "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
    "app": "48f172923acd719b42c73ac3a492cfc8",
    "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
    "script": "584fad1422a5482feb5b31ab",
    "cloudCode": {
        "isActiveJob": true    
    }
}' "https://api.scorocode.ru/api/v1/app/scripts/update"
```

-------------------------------------------------------------------------------------

## Удаление скрипта

**https://api.scorocode.ru/api/v1/app/scripts/delete**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",               // идентификатор приложения, обязательный
    "cli": "",               // клиентский ключ, обязательный
    "acc": "",               // ключ доступа, обязательный, только masterKey
    "script": ""             // идентификатор скрипта, обязательный
}
```

**Ответы:**

*Выполнено*

```
{
  "error": false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
    "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
    "app": "48f172923acd719b42c73ac3a492cfc8",
    "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
    "script": "584fad1422a5482feb5b31ab"
}' "https://api.scorocode.ru/api/v1/app/scripts/delete"
```

-------------------------------------------------------------------------------------

## Получение списка ботов приложения

**https://api.scorocode.ru/api/v1/bots**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",               // идентификатор приложения, обязательный
    "cli": "",               // клиентский ключ, обязательный
    "acc": ""               // ключ доступа, обязательный, только masterKey
}
```

**Ответы:**

*Выполнено*

```
{
  "error": false,
  "items": [
    {
      "_id": "584fb8710c62722cf9fe2617",
      "name": "botobot",
      "botId": "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11",
      "appId": "584e64f8982fd55332741516",
      "scriptId": "584fb52f0c62722cf9fe2604",
      "isActive": false
    }
  ]
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
    "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
    "app": "48f172923acd719b42c73ac3a492cfc8",
    "cli": "d6859f41223c9997ff78c6b4vb3a96bb"
}' "https://api.scorocode.ru/api/v1/bots"
```

-------------------------------------------------------------------------------------

## Создание бота

**https://api.scorocode.ru/api/v1/bots/create**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",               // идентификатор приложения, обязательный
    "cli": "",               // клиентский ключ, обязательный
    "acc": "",               // ключ доступа, обязательный, только masterKey
    "bot": {
        "name": "",          // имя бота, обязательный
        "botId": "",         // телеграм-токен бота, полученный от Botfather, обязательный 
        "scriptId": "",      // идентификатор серверного скрипта, обязательный
        "isActive": bool     // флаг активности бота, необязательный
    }
}
```

**Ответы:**

*Выполнено*

```
{
  "bot": {
    "_id": "584fb8710c62722cf9fe2617",
    "name": "botobot",
    "botId": "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11",
    "appId": "584e64f8982fd55332741516",
    "scriptId": "584fb52f0c62722cf9fe2604",
    "isActive": false
  },
  "error": false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
    "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
    "app": "48f172923acd719b42c73ac3a492cfc8",
    "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
    "bot":{
        "name":"botobot",
        "isActive":false,
        "botId":"123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11",
        "scriptId":"584fb52f0c62722cf9fe2604"
    }
}' "https://api.scorocode.ru/api/v1/bots/create"
```

-------------------------------------------------------------------------------------

## Изменение бота

**https://api.scorocode.ru/api/v1/bots/update**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",               // идентификатор приложения, обязательный
    "cli": "",               // клиентский ключ, обязательный
    "acc": "",               // ключ доступа, обязательный, только masterKey
    "bot": {
        "_id": "",           // идентификатор бота, обязательный
        "name": "",          // имя бота, необязательный
        "botId": "",         // телеграм-токен бота, полученный от Botfather, необязательный 
        "scriptId": "",      // идентификатор серверного скрипта, необязательный
        "isActive": bool     // флаг активности бота, необязательный
    }
}
```

**Ответы:**

*Выполнено*

```
{
  "bot": {
    "_id": "584fbd067e0b4e222480a7e4",
    "name": "botobot",
    "botId": "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew12",
    "appId": "584e64f8982fd55332741516",
    "scriptId": "584fb52f0c62722cf9fe2604",
    "isActive": false
  },
  "error": false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
    "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
    "app": "48f172923acd719b42c73ac3a492cfc8",
    "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
    "bot": {
        "_id": "584fbd067e0b4e222480a7e4",
        "name": "botobot",
        "botId": "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew12",
        "appId": "584e64f8982fd55332741516",
        "scriptId": "584fb52f0c62722cf9fe2604",
        "isActive": false
    }
}' "https://api.scorocode.ru/api/v1/bots/update"
```

-------------------------------------------------------------------------------------

## Удаление бота

**https://api.scorocode.ru/api/v1/bots/delete**

Метод: `POST`

Заголовки:

`Content-Type: application/json`

```
{
    "app": "",               // идентификатор приложения, обязательный
    "cli": "",               // клиентский ключ, обязательный
    "acc": "",               // ключ доступа, обязательный, только masterKey
    "bot": {
        "_id": ""            // идентификатор бота, обязательный
    }
}
```

**Ответы:**

*Выполнено*

```
{
  "error": false
}
```

*Ошибка*

```
{
    "error"       : true,
    "errCode"     : 4XX/5XX, // Код ошибки
    "errMsg"      : "Текст ошибки"
}
```

**Пример cURL**

```
curl -X POST -H "Content-Type: application/json" -d '{
    "acc": "ffe86fefg25fbklacsdee8cd4c59644a",
    "app": "48f172923acd719b42c73ac3a492cfc8",
    "cli": "d6859f41223c9997ff78c6b4vb3a96bb",
    "bot": {
        "_id": "584fbd067e0b4e222480a7e4"
    }
}' "https://api.scorocode.ru/api/v1/bots/delete"
```
