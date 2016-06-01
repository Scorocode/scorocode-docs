## Scorocode JS SDK: 

* [Scorocode](#Scorocode)
        * [.Init(opt) Инициализация SDK](#Scorocode+Init)
        * [.Object](#Scorocode.Object)
            * [new Object(collName)](#new_Scorocode.Object_new) ⇒ <code>Scorocode.Object</code>
            * [.getById(_id, options)](#Scorocode.Object+getById) ⇒ <code>[promise.&lt;Scorocode.Object&gt;](#Scorocode.Object)</code>
            * [.get(key)](#Scorocode.Object+get)
            * [.getFileLink(field)](#Scorocode.Object+getFileLink) ⇒ <code>String</code>
            * [.uploadFile(field, filename, file, options)](#Scorocode.Object+uploadFile) ⇒ <code>promise.&lt;String&gt;</code>
            * [.save(options)](#Scorocode.Object+save) ⇒ <code>[Scorocode.Object](#Scorocode.Object)</code>
            * [.remove(options)](#Scorocode.Object+remove) ⇒ <code>{count: Number, docs: Array}</code>
            * [.extend(collName, childObject)](#Scorocode.Object+extend) ⇒ <code>[\[Scorocode.Object\]](#Scorocode.Object)</code>
            * [.set(data)](#Scorocode.Object+set)
            * [.push(key, value)](#Scorocode.Object+push) 
            * [.pull(key, value)](#Scorocode.Object+pull) 
            * [.pullAll(key, value)](#Scorocode.Object+pullAll) 
            * [.addToSet(key, value)](#Scorocode.Object+addToSet) 
            * [.pop(key, pos)](#Scorocode.Object+pop) 
            * [.inc(key, amount)](#Scorocode.Object+inc)
            * [.currentDate()](#Scorocode.Object+currentDate)
            * [.mul(key, number)](#Scorocode.Object+mul)
            * [.min()](#Scorocode.Object+min)
            * [.max()](#Scorocode.Object+max)
        * [.User](#Scorocode.User)
            * [new User()](#new_Scorocode.User_new)
            * [.signup(options)](#Scorocode.User+signup) ⇒ <code>[promise.&lt;Scorocode.User&gt;](#Scorocode.User)</code>
            * [.logout(options)](#Scorocode.User+logout)
            * [.login(email, password, options)](#Scorocode.User+login)
        * [.Query](#Scorocode.Query)
            * [new Query(collName)](#new_Scorocode.Query_new) ⇒ <code>Scorocode.Query</code>
            * [.find(options)](#Scorocode.Query+find) ⇒ <code>promise.{error: Boolean, limit: Number, skip: Number, result: [{Scorocode.Object}]}</code>
            * [.count(options)](#Scorocode.Query+count) ⇒ <code>promise.{error: Boolean, result: Number}</code>
            * [.update(Object, options)](#Scorocode.Query+update) ⇒ <code>promise.{error: Boolean, result: {count: Number, docs: Array}}</code>
            * [.remove(options)](#Scorocode.Query+remove) ⇒ <code>promise.{count: Number, docs: Array}</code>
            * [.reset()](#Scorocode.Query+reset) 
            * [.equalTo(field, value)](#Scorocode.Query+equalTo) 
            * [.notEqualTo(field, value)](#Scorocode.Query+notEqualTo) 
            * [.containedIn(field, value)](#Scorocode.Query+containedIn) 
            * [.containsAll(field, value)](#Scorocode.Query+containsAll) 
            * [.notContainedIn(field, value)](#Scorocode.Query+notContainedIn) 
            * [.greaterThan(field, value)](#Scorocode.Query+greaterThan) 
            * [.greaterThanOrEqualTo(field, value)](#Scorocode.Query+greaterThanOrEqualTo) 
            * [.lessThan(field, value)](#Scorocode.Query+lessThan) 
            * [.lessThanOrEqualTo(field, value)](#Scorocode.Query+lessThanOrEqualTo) 
            * [.exists(field)](#Scorocode.Query+exists) 
            * [.doesNotExist(field)](#Scorocode.Query+doesNotExist) 
            * [.contains(field, value)](#Scorocode.Query+contains) 
            * [.startsWith(field, value)](#Scorocode.Query+startsWith) 
            * [.endsWith(field, value)](#Scorocode.Query+endsWith) 
            * [.limit(Limit)](#Scorocode.Query+limit) 
            * [.skip(skip)](#Scorocode.Query+skip)
            * [.page(page)](#Scorocode.Query+page) 
            * [.ascending(field)](#Scorocode.Query+ascending)
            * [.descending(field)](#Scorocode.Query+descending) 
            * [.or(query)](#Scorocode.Query+or)
            * [.and(query)](#Scorocode.Query+and) 
            * [.select()](#Scorocode.Query+select) 
            * [.raw(filter)](#Scorocode.Query+raw) 
        * [.CloudCode](#Scorocode.CloudCode)
            * [new CloudCode(id)](#new_Scorocode.CloudCode_new) ⇒ [Scorocode.CloudCode](#Scorocode.CloudCode)
            * [.run(pool, callbacks)](#Scorocode.CloudCode+run) ⇒ <code>promise.{error: Boolean}</code>
        * [.Messenger](#Scorocode.Messenger)
            * [new Messenger()](#new_Scorocode.Messenger_new)
            * [.sendEmail(options, callbacks)](#Scorocode.Messenger+sendEmail) ⇒ <code>promise.{error: Boolean, count: Number}</code>
            * [.sendPush(options, callbacks)](#Scorocode.Messenger+sendPush) ⇒ <code>promise.{error: Boolean, count: Number}</code>
            * [.sendSms(options, callbacks)](#Scorocode.Messenger+sendSms) ⇒ <code>promise.{error: Boolean, count: Number}</code>
        * [.UpdateOps](#Scorocode.UpdateOps)
            * [.set(data)](#Scorocode.UpdateOps+set)
            * [.push(key, value)](#Scorocode.UpdateOps+push) 
            * [.pull(key, value)](#Scorocode.UpdateOps+pull) 
            * [.pullAll(key, value)](d#Scorocode.UpdateOps+pullAll) 
            * [.addToSet(key, value)](#Scorocode.UpdateOps+addToSet) 
            * [.pop(key, pos)](#Scorocode.UpdateOps+pop) 
            * [.inc(key, amount)](#Scorocode.UpdateOps+inc)
            * [.currentDate()](d#Scorocode.UpdateOps+currentDate)
            * [.mul(key, number)](#Scorocode.UpdateOps+mul)
            * [.min()](#Scorocode.UpdateOps+min)
            * [.max()](#Scorocode.UpdateOps+max)