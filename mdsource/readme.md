## Scorocode JS SDK: 

* [Scorocode](Scorocode.md#Scorocode)
    * 
        * [.Init(opt) Инициализация SDK](Scorocode.md#Scorocode+Init)
    * 
        * [.Object](Scorocode.Object.md#Scorocode.Object)
            * [new Object(collName)](Scorocode.Object.md#new_Scorocode.Object_new)
            * [.getById(_id, options)](Scorocode.Object.md#Scorocode.Object+getById) ⇒ <code>[Promise.&lt;Scorocode.Object&gt;](#Scorocode.Object)</code>
            * [.get(key)](Scorocode.Object.md#Scorocode.Object+get) ⇒ <code>promise.&lt;Значение поля&gt;</code>
            * [.getFileLink(field)](Scorocode.Object.md#Scorocode.Object+getFileLink) ⇒ <code>String</code>
            * [.uploadFile(field, filename, file, options)](Scorocode.Object.md#Scorocode.Object+uploadFile) ⇒ <code>promise.&lt;String&gt;</code>
            * [.save(options)](Scorocode.Object.md#Scorocode.Object+save) ⇒ <code>[Scorocode.Object](#Scorocode.Object)</code>
            * [.remove(options)](Scorocode.Object.md#Scorocode.Object+remove) ⇒ <code>{count: Number, docs: Array}</code>
            * [.extend(collName, childObject)](Scorocode.Object.md#Scorocode.Object+extend) ⇒ <code>dragons</code>
            * [.set(data)](Scorocode.Object.md#Scorocode.Object+set)
            * [.push(key, value)](Scorocode.Object.md#Scorocode.Object+push) ⇒ <code>Object</code>
            * [.pull(key, value)](Scorocode.Object.md#Scorocode.Object+pull) ⇒ <code>Object</code>
            * [.pullAll(key, value)](Scorocode.Object.md#Scorocode.Object+pullAll) ⇒ <code>Object</code>
            * [.addToSet(key, value)](Scorocode.Object.md#Scorocode.Object+addToSet) ⇒ <code>Object</code>
            * [.pop(key, pos)](Scorocode.Object.md#Scorocode.Object+pop) ⇒ <code>Object</code>
            * [.inc(key, amount)](Scorocode.Object.md#Scorocode.Object+inc)
            * [.currentDate()](Scorocode.Object.md#Scorocode.Object+currentDate)
            * [.mul(key, number)](Scorocode.Object.md#Scorocode.Object+mul)
            * [.min()](Scorocode.Object.md#Scorocode.Object+min)
            * [.max()](Scorocode.Object.md#Scorocode.Object+max)
        * [.User](Scorocode.User.md#Scorocode.User)
            * [new User()](Scorocode.User.md#new_Scorocode.User_new)
            * [.signup(options)](Scorocode.User.md#Scorocode.User+signup) ⇒ <code>Response</code>
            * [.logout(options)](Scorocode.User.md#Scorocode.User+logout) ⇒ <code>Response</code>
            * [.login(email, password, options)](Scorocode.User.md#Scorocode.User+login) ⇒ <code>Response</code>
        * [.Query](Scorocode.Query.md#Scorocode.Query)
            * [new Query(collName)](Scorocode.Query.md#new_Scorocode.Query_new)
            * [.find(options)](Scorocode.Query.md#Scorocode.Query+find) ⇒ <code>Object</code>
            * [.count(options)](Scorocode.Query.md#Scorocode.Query+count) ⇒ <code>Object</code>
            * [.update(Object, options)](Scorocode.Query.md#Scorocode.Query+update) ⇒ <code>Object</code>
            * [.remove(options)](Scorocode.Query.md#Scorocode.Query+remove) ⇒ <code>Object</code>
            * [.reset()](Scorocode.Query.md#Scorocode.Query+reset) ⇒ <code>Object</code>
            * [.equalTo(field, value)](Scorocode.Query.md#Scorocode.Query+equalTo) ⇒ <code>Object</code>
            * [.notEqualTo(field, value)](Scorocode.Query.md#Scorocode.Query+notEqualTo) ⇒ <code>Object</code>
            * [.containedIn(field, value)](Scorocode.Query.md#Scorocode.Query+containedIn) ⇒ <code>Object</code>
            * [.containsAll(field, value)](Scorocode.Query.md#Scorocode.Query+containsAll) ⇒ <code>Object</code>
            * [.notContainedIn(field, value)](Scorocode.Query.md#Scorocode.Query+notContainedIn) ⇒ <code>Object</code>
            * [.greaterThan(field, value)](Scorocode.Query.md#Scorocode.Query+greaterThan) ⇒ <code>Object</code>
            * [.greaterThanOrEqualTo(field, value)](Scorocode.Query.md#Scorocode.Query+greaterThanOrEqualTo) ⇒ <code>Object</code>
            * [.lessThan(field, value)](Scorocode.Query.md#Scorocode.Query+lessThan) ⇒ <code>Object</code>
            * [.lessThanOrEqualTo(field, value)](Scorocode.Query.md#Scorocode.Query+lessThanOrEqualTo) ⇒ <code>Object</code>
            * [.exists(field)](Scorocode.Query.md#Scorocode.Query+exists) ⇒ <code>Object</code>
            * [.doesNotExist(field)](Scorocode.Query.md#Scorocode.Query+doesNotExist) ⇒ <code>Object</code>
            * [.contains(field, value)](Scorocode.Query.md#Scorocode.Query+contains) ⇒ <code>Object</code>
            * [.startsWith(field, value)](Scorocode.Query.md#Scorocode.Query+startsWith) ⇒ <code>Object</code>
            * [.endsWith(field, value)](Scorocode.Query.md#Scorocode.Query+endsWith) ⇒ <code>Object</code>
            * [.limit(Limit)](Scorocode.Query.md#Scorocode.Query+limit) ⇒ <code>Object</code>
            * [.skip(skip)](Scorocode.Query.md#Scorocode.Query+skip) ⇒ <code>Object</code>
            * [.page(page)](Scorocode.Query.md#Scorocode.Query+page) ⇒ <code>Object</code>
            * [.ascending(field)](Scorocode.Query.md#Scorocode.Query+ascending) ⇒ <code>Object</code>
            * [.descending(field)](Scorocode.Query.md#Scorocode.Query+descending) ⇒ <code>Object</code>
            * [.or(query)](Scorocode.Query.md#Scorocode.Query+or) ⇒ <code>Object</code>
            * [.and(query)](Scorocode.Query.md#Scorocode.Query+and) ⇒ <code>Object</code>
            * [.select()](Scorocode.Query.md#Scorocode.Query+select) ⇒ <code>Object</code>
            * [.raw(filter)](Scorocode.Query.md#Scorocode.Query+raw) ⇒ <code>Object</code>
        * [.CloudCode](Scorocode.CloudCode.md#Scorocode.CloudCode)
            * [new CloudCode(id)](Scorocode.CloudCode.md#new_Scorocode.CloudCode_new)
            * [.run(pool, callbacks)](Scorocode.CloudCode.md#Scorocode.CloudCode+run) ⇒ <code>promise</code>
        * [.Messenger](Scorocode.Messenger.md#Scorocode.Messenger)
            * [new Messenger()](Scorocode.Messenger.md#new_Scorocode.Messenger_new)
            * [.sendEmail(options, callbacks)](Scorocode.Messenger.md#Scorocode.Messenger+sendEmail) ⇒ <code>Object</code>
            * [.sendPush(options, callbacks)](Scorocode.Messenger.md#Scorocode.Messenger+sendPush) ⇒ <code>Object</code>
            * [.sendSms(options, callbacks)](Scorocode.Messenger.md#Scorocode.Messenger+sendSms) ⇒ <code>Object</code>
        * [.UpdateOps](Scorocode.UpdateOps.md#Scorocode.UpdateOps)
            * [new UpdateOps()](Scorocode.UpdateOps.md#new_Scorocode.UpdateOps_new)

