<a name="WebSocket"></a>

### WebSocket

Для использования WebSocket в вашем проекте, вы можете воспользоваться библиотекой <https://github.com/codebutler/android-websockets> (или аналогичной), используя следующую схему url при инициализации WebSocket:

```
wss://wss.scorocode.ru/{appID}/{wsKey}/{chanName}
```

| Параметр  | Тип                              | Свойства | Описание                         | Пример значения |
| --------- | -------------------------------- | -------- | -------------------------------- | --------------- |
|appID  | String | Обязательный  |  Ключ appId приложения   |a3d04e75e157b2f7ae20c2fce02f63d6 |
|wsKey  | String | Обязательный   | Ключ websocketKey  приложения  | a3d04e75e157b2f7ae20c2fce02f63d6 |
|chanName  |  String | Обязательный  |  Произвольное имя канала | chat_channel |

**Пример инициализации:**

```Java
WebSocketClient client = new WebSocketClient(URI.create("wss://wss.scorocode.ru/a3d04e75e157b2f7ae20c2fce02f63d6/a3d04e75e157b2f7ae20c2fce02f63d6/chat_channel"), handler);
```

**Пример использования:**

```Java
List<BasicNameValuePair> extraHeaders = Arrays.asList(
    new BasicNameValuePair("Cookie", "session=abcd");
);

WebSocketClient client = new WebSocketClient(URI.create("wss://wss.scorocode.ru/a3d04e75e157b2f7ae20c2fce02f63d6/b3asd4e75e1fds2f7ae20c2fce02f63d6/chat_channel"), new WebSocketClient.Handler() {
    @Override
    public void onConnect() {
        Log.d(TAG, "Connected!");
    }

    @Override
    public void onMessage(String message) {
        Log.d(TAG, String.format("Got string message! %s", message));
    }

    @Override
    public void onMessage(byte[] data) {
        Log.d(TAG, String.format("Got binary message! %s", toHexString(data));
    }

    @Override
    public void onDisconnect(int code, String reason) {
        Log.d(TAG, String.format("Disconnected! Code: %d Reason: %s", code, reason));
    }

    @Override
    public void onError(Exception error) {
        Log.e(TAG, "Error!", error);
    }
}, extraHeaders);

client.connect();

// Позже…

client.send("hello!");
client.send(new byte[] { 0xDE, 0xAD, 0xBE, 0xEF });
client.disconnect();
```