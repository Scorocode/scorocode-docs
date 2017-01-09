## Scorocode JS SDK: 

* [Scorocode](sc.md#Scorocode)
    * 
        * [.Init(opt) Инициализация SDK](sc.md#Scorocode+Init)
    * 
        * [.Object](sc.Object.md#sc.Object)
            * [new Object(collName)](sc.Object.md#new_sc.Object_new) ⇒ <code>sc.Object</code>
            * [.getById(_id, options)](sc.Object.md#sc.Object+getById) ⇒ <code>[promise.&lt;sc.Object&gt;](sc.Object.md#sc.Object)</code>
            * [.get(key)](sc.Object.md#sc.Object+get)
            * [.getFileLink(field)](sc.Object.md#sc.Object+getFileLink) ⇒ <code>String</code>
            * [.uploadFile(field, filename, file, options)](sc.Object.md#sc.Object+uploadFile) ⇒ <code>promise.&lt;String&gt;</code>
            * [.save(options)](sc.Object.md#sc.Object+save) ⇒ <code>[sc.Object](sc.Object.md#sc.Object)</code>
            * [.remove(options)](sc.Object.md#sc.Object+remove) ⇒ <code>{count: Number, docs: Array}</code>
            * [.extend(collName, childObject)](sc.Object.md#sc.Object+extend) ⇒ <code>[\[sc.Object\]](sc.Object.md#sc.Object)</code>
            * [.set(data)](sc.Object.md#sc.Object+set)
            * [.push(key, value)](sc.Object.md#sc.Object+push) 
            * [.pull(key, value)](sc.Object.md#sc.Object+pull) 
            * [.pullAll(key, value)](sc.Object.md#sc.Object+pullAll) 
            * [.addToSet(key, value)](sc.Object.md#sc.Object+addToSet) 
            * [.pop(key, pos)](sc.Object.md#sc.Object+pop) 
            * [.inc(key, amount)](sc.Object.md#sc.Object+inc)
            * [.currentDate()](sc.Object.md#sc.Object+currentDate)
            * [.mul(key, number)](sc.Object.md#sc.Object+mul)
            * [.min()](sc.Object.md#sc.Object+min)
            * [.max()](sc.Object.md#sc.Object+max)
        * [.User](sc.User.md#sc.User)
            * [new User()](sc.User.md#new_sc.User_new)
            * [.signup(options)](sc.User.md#sc.User+signup) ⇒ <code>[promise.&lt;sc.User&gt;](sc.User.md#sc.User)</code>
            * [.login(email, password, options)](sc.User.md#sc.User+login) ⇒ <code>[promise.&lt;sc.User&gt;](sc.User.md#sc.User)</code>
            * [.logout(options)](sc.User.md#sc.User+logout)
        * [.Query](sc.Query.md#sc.Query)
            * [new Query(collName)](sc.Query.md#new_sc.Query_new) ⇒ <code>sc.Query</code>
            * [.find(options)](sc.Query.md#sc.Query+find) ⇒ <code>promise.{error: Boolean, limit: Number, skip: Number, result: [{sc.Object}]}</code>
            * [.count(options)](sc.Query.md#sc.Query+count) ⇒ <code>promise.{error: Boolean, result: Number}</code>
            * [.update(Object, options)](sc.Query.md#sc.Query+update) ⇒ <code>promise.{error: Boolean, result: {count: Number, docs: Array}}</code>
            * [.remove(options)](sc.Query.md#sc.Query+remove) ⇒ <code>promise.{count: Number, docs: Array}</code>
            * [.reset()](sc.Query.md#sc.Query+reset) 
            * [.equalTo(field, value)](sc.Query.md#sc.Query+equalTo) 
            * [.notEqualTo(field, value)](sc.Query.md#sc.Query+notEqualTo) 
            * [.containedIn(field, value)](sc.Query.md#sc.Query+containedIn) 
            * [.containsAll(field, value)](sc.Query.md#sc.Query+containsAll) 
            * [.notContainedIn(field, value)](sc.Query.md#sc.Query+notContainedIn) 
            * [.greaterThan(field, value)](sc.Query.md#sc.Query+greaterThan) 
            * [.greaterThanOrEqualTo(field, value)](sc.Query.md#sc.Query+greaterThanOrEqualTo) 
            * [.lessThan(field, value)](sc.Query.md#sc.Query+lessThan) 
            * [.lessThanOrEqualTo(field, value)](sc.Query.md#sc.Query+lessThanOrEqualTo) 
            * [.exists(field)](sc.Query.md#sc.Query+exists) 
            * [.doesNotExist(field)](sc.Query.md#sc.Query+doesNotExist) 
            * [.contains(field, value)](sc.Query.md#sc.Query+contains) 
            * [.startsWith(field, value)](sc.Query.md#sc.Query+startsWith) 
            * [.endsWith(field, value)](sc.Query.md#sc.Query+endsWith) 
            * [.limit(Limit)](sc.Query.md#sc.Query+limit) 
            * [.skip(skip)](sc.Query.md#sc.Query+skip)
            * [.page(page)](sc.Query.md#sc.Query+page) 
            * [.ascending(field)](sc.Query.md#sc.Query+ascending)
            * [.descending(field)](sc.Query.md#sc.Query+descending) 
            * [.or(query)](sc.Query.md#sc.Query+or)
            * [.and(query)](sc.Query.md#sc.Query+and) 
            * [.select()](sc.Query.md#sc.Query+select) 
            * [.raw(filter)](sc.Query.md#sc.Query+raw) 
        * [.CloudCode](sc.CloudCode.md#sc.CloudCode)
            * [new CloudCode(id)](sc.CloudCode.md#new_sc.CloudCode_new) ⇒ [sc.CloudCode](sc.CloudCode.md#sc.CloudCode)
            * [.run(pool, callbacks)](sc.CloudCode.md#sc.CloudCode+run) ⇒ <code>promise.{error: Boolean}</code>
        * [.Messenger](sc.Messenger.md#sc.Messenger)
            * [new Messenger()](sc.Messenger.md#new_sc.Messenger_new)
            * [.sendEmail(options, callbacks)](sc.Messenger.md#sc.Messenger+sendEmail) ⇒ <code>promise.{error: Boolean, count: Number}</code>
            * [.sendPush(options, callbacks)](sc.Messenger.md#sc.Messenger+sendPush) ⇒ <code>promise.{error: Boolean, count: Number}</code>
            * [.sendSms(options, callbacks)](sc.Messenger.md#sc.Messenger+sendSms) ⇒ <code>promise.{error: Boolean, count: Number}</code>
        * [.UpdateOps](sc.UpdateOps.md#sc.UpdateOps)
            * [.set(data)](sc.UpdateOps.md#sc.UpdateOps+set)
            * [.push(key, value)](sc.UpdateOps.md#sc.UpdateOps+push) 
            * [.pull(key, value)](sc.UpdateOps.md#sc.UpdateOps+pull) 
            * [.pullAll(key, value)](sc.UpdateOps.mdd#sc.UpdateOps+pullAll) 
            * [.addToSet(key, value)](sc.UpdateOps.md#sc.UpdateOps+addToSet) 
            * [.pop(key, pos)](sc.UpdateOps.md#sc.UpdateOps+pop) 
            * [.inc(key, amount)](sc.UpdateOps.md#sc.UpdateOps+inc)
            * [.currentDate()](sc.UpdateOps.mdd#sc.UpdateOps+currentDate)
            * [.mul(key, number)](sc.UpdateOps.md#sc.UpdateOps+mul)
            * [.min()](sc.UpdateOps.md#sc.UpdateOps+min)
            * [.max()](sc.UpdateOps.md#sc.UpdateOps+max)
        * [.WebSocket](sc.WebSocket.md#sc.WebSocket)
            * [new WebSocket(channame)](sc.WebSocket.md#new_sc.WebSocket_new)
            * [.on(event, callback)](sc.WebSocket.m#sc.WebSocket+on) 
            * [.send(message)](sc.WebSocket.m#sc.WebSocket+send) 
