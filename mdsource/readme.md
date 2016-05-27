## Scorocode JS SDK: 

* [Scorocode](Scorocode.md#Scorocode)
    * 
        * [.Init(opt) Инициализация SDK](Scorocode.md#Scorocode+Init)
    * 
        * [.Object](Scorocode.Object.md#Scorocode.Object)
            * [new Object(collName)](Scorocode.Object.md#new_Scorocode.Object_new) ⇒ <code>Scorocode.Object</code>
            * [.getById(_id, options)](Scorocode.Object.md#Scorocode.Object+getById) ⇒ <code>[Promise.&lt;Scorocode.Object&gt;](#Scorocode.Object)</code>
            * [.get(key)](Scorocode.Object.md#Scorocode.Object+get)
            * [.getFileLink(field)](Scorocode.Object.md#Scorocode.Object+getFileLink) ⇒ <code>String</code>
            * [.uploadFile(field, filename, file, options)](Scorocode.Object.md#Scorocode.Object+uploadFile) ⇒ <code>promise.&lt;String&gt;</code>
            * [.save(options)](Scorocode.Object.md#Scorocode.Object+save) ⇒ <code>[Scorocode.Object](#Scorocode.Object)</code>
            * [.remove(options)](Scorocode.Object.md#Scorocode.Object+remove) ⇒ <code>{count: Number, docs: Array}</code>
            * [.extend(collName, childObject)](Scorocode.Object.md#Scorocode.Object+extend) ⇒ <code>[\[Scorocode.Object\]](#Scorocode.Object)</code>
            * [.set(data)](Scorocode.Object.md#Scorocode.Object+set)
            * [.push(key, value)](Scorocode.Object.md#Scorocode.Object+push) 
            * [.pull(key, value)](Scorocode.Object.md#Scorocode.Object+pull) 
            * [.pullAll(key, value)](Scorocode.Object.md#Scorocode.Object+pullAll) 
            * [.addToSet(key, value)](Scorocode.Object.md#Scorocode.Object+addToSet) 
            * [.pop(key, pos)](Scorocode.Object.md#Scorocode.Object+pop) 
            * [.inc(key, amount)](Scorocode.Object.md#Scorocode.Object+inc)
            * [.currentDate()](Scorocode.Object.md#Scorocode.Object+currentDate)
            * [.mul(key, number)](Scorocode.Object.md#Scorocode.Object+mul)
            * [.min()](Scorocode.Object.md#Scorocode.Object+min)
            * [.max()](Scorocode.Object.md#Scorocode.Object+max)
        * [.User](Scorocode.User.md#Scorocode.User)
            * [new User()](Scorocode.User.md#new_Scorocode.User_new)
            * [.signup(options)](Scorocode.User.md#Scorocode.User+signup) ⇒ <code>HereBeDragons</code>
            * [.logout(options)](Scorocode.User.md#Scorocode.User+logout) ⇒ <code>HereBeDragons</code>
            * [.login(email, password, options)](Scorocode.User.md#Scorocode.User+login) ⇒ <code>HereBeDragons</code>
        * [.Query](Scorocode.Query.md#Scorocode.Query)
            * [new Query(collName)](Scorocode.Query.md#new_Scorocode.Query_new) ⇒ <code>Scorocode.Query</code>
            * [.find(options)](Scorocode.Query.md#Scorocode.Query+find) ⇒ <code>Promise.{error: Boolean, limit: Number, skip: Number, result: [{Scorocode.Object}]}</code>
            * [.count(options)](Scorocode.Query.md#Scorocode.Query+count) ⇒ <code>Promise.{error: Boolean, result: Number}</code>
            * [.update(Object, options)](Scorocode.Query.md#Scorocode.Query+update) ⇒ <code>Promise.{error: Boolean, result: {count: Number, docs: Array}}</code>
            * [.remove(options)](Scorocode.Query.md#Scorocode.Query+remove) ⇒ <code>Promise.{count: Number, docs: Array}</code>
            * [.reset()](Scorocode.Query.md#Scorocode.Query+reset) 
            * [.equalTo(field, value)](Scorocode.Query.md#Scorocode.Query+equalTo) 
            * [.notEqualTo(field, value)](Scorocode.Query.md#Scorocode.Query+notEqualTo) 
            * [.containedIn(field, value)](Scorocode.Query.md#Scorocode.Query+containedIn) 
            * [.containsAll(field, value)](Scorocode.Query.md#Scorocode.Query+containsAll) 
            * [.notContainedIn(field, value)](Scorocode.Query.md#Scorocode.Query+notContainedIn) 
            * [.greaterThan(field, value)](Scorocode.Query.md#Scorocode.Query+greaterThan) 
            * [.greaterThanOrEqualTo(field, value)](Scorocode.Query.md#Scorocode.Query+greaterThanOrEqualTo) 
            * [.lessThan(field, value)](Scorocode.Query.md#Scorocode.Query+lessThan) 
            * [.lessThanOrEqualTo(field, value)](Scorocode.Query.md#Scorocode.Query+lessThanOrEqualTo) 
            * [.exists(field)](Scorocode.Query.md#Scorocode.Query+exists) 
            * [.doesNotExist(field)](Scorocode.Query.md#Scorocode.Query+doesNotExist) 
            * [.contains(field, value)](Scorocode.Query.md#Scorocode.Query+contains) 
            * [.startsWith(field, value)](Scorocode.Query.md#Scorocode.Query+startsWith) 
            * [.endsWith(field, value)](Scorocode.Query.md#Scorocode.Query+endsWith) 
            * [.limit(Limit)](Scorocode.Query.md#Scorocode.Query+limit) 
            * [.skip(skip)](Scorocode.Query.md#Scorocode.Query+skip)
            * [.page(page)](Scorocode.Query.md#Scorocode.Query+page) 
            * [.ascending(field)](Scorocode.Query.md#Scorocode.Query+ascending)
            * [.descending(field)](Scorocode.Query.md#Scorocode.Query+descending) 
            * [.or(query)](Scorocode.Query.md#Scorocode.Query+or)
            * [.and(query)](Scorocode.Query.md#Scorocode.Query+and) 
            * [.select()](Scorocode.Query.md#Scorocode.Query+select) 
            * [.raw(filter)](Scorocode.Query.md#Scorocode.Query+raw) 
        * [.CloudCode](Scorocode.CloudCode.md#Scorocode.CloudCode)
            * [new CloudCode(id)](Scorocode.CloudCode.md#new_Scorocode.CloudCode_new) ⇒ [Scorocode.CloudCode](Scorocode.CloudCode.md#Scorocode.CloudCode)
            * [.run(pool, callbacks)](Scorocode.CloudCode.md#Scorocode.CloudCode+run) ⇒ <code>promise</code>
        * [.Messenger](Scorocode.Messenger.md#Scorocode.Messenger)
            * [new Messenger()](Scorocode.Messenger.md#new_Scorocode.Messenger_new)
            * [.sendEmail(options, callbacks)](Scorocode.Messenger.md#Scorocode.Messenger+sendEmail) ⇒ <code>HereBeDragons</code>
            * [.sendPush(options, callbacks)](Scorocode.Messenger.md#Scorocode.Messenger+sendPush) ⇒ <code>HereBeDragons</code>
            * [.sendSms(options, callbacks)](Scorocode.Messenger.md#Scorocode.Messenger+sendSms) ⇒ <code>HereBeDragons</code>
        * [.UpdateOps](Scorocode.UpdateOps.md#Scorocode.UpdateOps)
            * [new UpdateOps()](Scorocode.UpdateOps.md#new_Scorocode.UpdateOps_new)
            * [.set(data)](Scorocode.UpdateOps.md#Scorocode.UpdateOps+set)
            * [.push(key, value)](Scorocode.UpdateOps.md#Scorocode.UpdateOps+push) 
            * [.pull(key, value)](Scorocode.UpdateOps.md#Scorocode.UpdateOps+pull) 
            * [.pullAll(key, value)](Scorocode.UpdateOps.mdd#Scorocode.UpdateOps+pullAll) 
            * [.addToSet(key, value)](Scorocode.UpdateOps.md#Scorocode.UpdateOps+addToSet) 
            * [.pop(key, pos)](Scorocode.UpdateOps.md#Scorocode.UpdateOps+pop) 
            * [.inc(key, amount)](Scorocode.UpdateOps.md#Scorocode.UpdateOps+inc)
            * [.currentDate()](Scorocode.UpdateOps.mdd#Scorocode.UpdateOps+currentDate)
            * [.mul(key, number)](Scorocode.UpdateOps.md#Scorocode.UpdateOps+mul)
            * [.min()](Scorocode.UpdateOps.md#Scorocode.UpdateOps+min)
            * [.max()](Scorocode.UpdateOps.md#Scorocode.UpdateOps+max)