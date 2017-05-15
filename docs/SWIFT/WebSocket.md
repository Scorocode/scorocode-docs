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

!!! tip "Пример"
    ```SWIFT
    var socket = WebSocket(url: NSURL(string: "wss://wss.scorocode.ru/a3d04e75e157b2f7ae20c2fce02f63d6/563452bbc611d8106d5da767365897de/chatroom")!)
    socket.connect()
    ```

**Подробную информацию о способах подключения библиотеки Starscream вы сможете найти в Readme.md репозитория [daltoniam/Starscream](https://github.com/daltoniam/Starscream).**

### Подключение библиотеки Starscream с использованием cocoapods

1) Добавить в ваш Podfile текст "pod 'Starscream', '~> 2.0.3'":

!!! tip "Пример Podfile"
    ```SWIFT
    source 'https://github.com/CocoaPods/Specs.git'
    platform :ios, '8.0'
    use_frameworks!

    target 'MyProject' do
      pod 'Scorocode'
      pod 'Starscream', '~> 2.0.3'
    end
    ```

2) Запустить в консоли в папке с проектом команду:

```
pod install 
```

### Пример использования библиотеки Starscream

**Подробную информацию о способах испольования библиотеки Starscream вы сможете найти в Readme.md репозитория [daltoniam/Starscream](https://github.com/daltoniam/Starscream).**

!!! tip "Пример"
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