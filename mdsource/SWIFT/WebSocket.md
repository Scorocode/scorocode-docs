<a name="WebSocket"></a>

## WebSocket

Для использования WebSocket в вашем проекте, вы можете воспользоваться библиотекой [daltoniam/Starscream](https://github.com/daltoniam/Starscream), используя следующую схему url при инициализации WebSocket: 

```
    var socket = WebSocket(url: NSURL(string: "wss://wss.scorocode.ru/{appID}/{wsKey}/{chanName}")!)
    socket.connect()
```
где

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- | 
| appID | <code>String</code> | Обязательное | Ключ appId вашего приложения | a3d04e75e157b2f7ae20c2fce02f63d6 |
| wsKey | <code>String</code> | Обязательное | Ключ websocketKey вашего приложения | 563452bbc611d8106d5da767365897de |
| chanName | <code>String</code> | Обязательное | Произвольное имя канала | chatroom |

Пример:
```
    var socket = WebSocket(url: NSURL(string: "wss://wss.scorocode.ru/a3d04e75e157b2f7ae20c2fce02f63d6/563452bbc611d8106d5da767365897de/chatroom")!)
    socket.connect()
```

### Подключение библиотеки Starscream

#### Подробную информацию о способах подключения библиотеки Starscream вы сможете найти в Readme.md репозитория [daltoniam/Starscream](https://github.com/daltoniam/Starscream).


Для подключения библиотеки к проекту, необходимо установить [Carthage](https://github.com/Carthage/Carthage)
 
Cоздать в корне проекта Xcode файл с именем "Cartfile" или изменить уже существующий "Cartfile", записав в него строку:

```
github "daltoniam/Starscream"
```

Закрыть проект в xcode, запустить в консоли:
```
carthage update --platform iOS,Mac
```

Открыть заново проект в Xcode. В Target -> General -> Linked Frameworks and Libraries из <Каталог проекта> -> Carthage -> Build -> iOS перетащить 1 файл:
```
Starscream.framework
```

В Target -> Build Phases добавить New Run Script Phase:

Скрипт:
```
/usr/local/bin/carthage copy-frameworks
```

и Input File:
```
$(SRCROOT)/Carthage/Build/iOS/Starscream.framework
```

### Пример использования библиотеки Starscream

#### Подробную информацию о способах испольования библиотеки Starscream вы сможете найти в Readme.md репозитория [daltoniam/Starscream](https://github.com/daltoniam/Starscream).

```
import UIKit
import Starscream

class ViewController: UIViewController {
    
    var socket: WebSocket!

    @IBOutlet private weak var textField: UITextField!
    @IBOutlet private weak var textView: UITextView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    @IBAction private func connectTapped() {
        
        socket = WebSocket(url: NSURL(string: "wss://wss.scorocode.ru/a3d04e75e157b2f7ae20c2fce02f63d6/563452bbc611d8106d5da767365897de/chatroom")!)
        socket.connect()
        
        socket.onConnect = {
            print("connected")
        }
        
        socket.onText = {
            text in
            print(text)
            self.textView.text = self.textView.text + "\n\(text)"
        }
        
        socket.onData = {
            data in
            print(data)
        }
        
    }
    
    @IBAction private func disconnectTapped() {
        
    }
    
    @IBAction private func sendTapped() {
        socket.writeString(textField.text!)
    }
    

}
```