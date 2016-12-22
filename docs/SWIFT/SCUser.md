<a name="SCUser"></a>

## SCUser

Класс для работы с польщователями приложения

* [SCUser](#SCUser)
    * [init()](#SCUser+init)
    * [.login(email, password, callback)](#SCUser+login)
    * [.logout(callback)](#SCScript+logout)
    * [.signup(username, email, password, callback)](#SCScript+signup)
    * [.signup(callback)](#SCScript+signup2)

----------------------------------------------------------------------------------------------

<a name="SCUser+init"></a>
### init()
Инициализация SCUser

**Пример**
```SWIFT
let appUser = SCUser()
```

----------------------------------------------------------------------------------------------
<a name="SCUser+login"></a>
### .login(email, password, callback)
Метод для аутентификации пользователя приложения


| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| email    | <code>String</code>                                          | Обязательный | Email пользователя          | "user@domain.zone"          | 
| password | <code>String</code>                                         | Обязательный  | Пароль пользователя        | "CorrectHorseBatteryStaple" |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |         | Коллбэк для выполняемого запроса.|                             |

**Пример**   
```SWIFT
    @IBAction private func loginPressed() {
        
        guard let email = emailTextField.text where email != "",
            let password = passwordTextField.text where password != "" else {
                let alert = UIAlertController(title: "Вход невозможен", message: "Не указан email или пароль", preferredStyle: .Alert)
                let ok = UIAlertAction(title: "OK", style: .Default) {
                    action in
                    return
                }
                alert.addAction(ok)
                presentViewController(alert, animated: true, completion: nil)
                return
        }
        
        let user = SCUser()
        user.login(email, password: password) {
            success, error, result in
            if success {
                let alert = UIAlertController(title: "Вход выполнен", message: nil, preferredStyle: .Alert)
                let ok = UIAlertAction(title: "OK", style: .Default) {
                    action in
                    self.performSegueWithIdentifier("ToObjects", sender: nil)
                }
                alert.addAction(ok)
                self.presentViewController(alert, animated: true, completion: nil)
            }
        }

```

----------------------------------------------------------------------------------------------
<a name="SCUser+logout"></a>
### .logout(callback)
Метод для завершения активной сессии пользователя.



| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |              | Коллбэк для выполняемого запроса. |                             |

**Пример**   
```SWIFT
    @IBAction private func logoutPressed() {
        SCUser.logout() {
            success, error in
            if success {
                self.dismissViewControllerAnimated(true, completion: nil)
            }
        }
    }
```
----------------------------------------------------------------------------------------------
<a name="SCUser+signup"></a>
### .signup(username, email, password, callback)
Метод для регистрации пользователя приложения.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| username | <code>String</code>                                         | Обязательный | Имя пользователя                   | "Jovan"                     | 
| email    | <code>String</code>                                         | Обязательный | Email пользователя                 | "user@domain.zone"          | 
| password | <code>String</code>                                         | Обязательный | Пароль пользователя                | "CorrectHorseBatteryStaple" |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |              | Коллбэк для выполняемого запроса. |                             |


**Пример**   
```SWIFT
@IBAction private func signupPressed() {
    guard let email = emailTextField.text where email != "",
        let password = passwordTextField.text where password != "",
    let username = usernameTextField.text where username != "" else {
            let alert = UIAlertController(title: "Регистрация невозможна", message: "Не указан email, пароль или имя пользователя", preferredStyle: .Alert)
            let ok = UIAlertAction(title: "OK", style: .Default) {
                action in
                return
            }
            alert.addAction(ok)
            presentViewController(alert, animated: true, completion: nil)
            return
    }
    
    let user = SCUser()
    user.signup(username, email: email, password: password) {
        success, error, result in
        if success {
            let alert = UIAlertController(title: "Пользователь зарегистрирован", message: nil, preferredStyle: .Alert)
            let ok = UIAlertAction(title: "OK", style: .Default) {
                action in
                self.dismissViewControllerAnimated(true, completion: nil)
            }
            alert.addAction(ok)
            self.presentViewController(alert, animated: true, completion: nil)
        } else {
            var message = ""
            switch error! {
            case .API(_, let apiMessage):
                message = apiMessage
            default:
                break
            }
            let alert = UIAlertController(title: "Ошибка при регистрации", message: message, preferredStyle: .Alert)
            let ok = UIAlertAction(title: "OK", style: .Default) {
                action in
            }
            alert.addAction(ok)
            self.presentViewController(alert, animated: true, completion: nil)
        }
    }
}
```


----------------------------------------------------------------------------------------------
<a name="SCUser+signup2"></a>
### .signup(callback)
Метод для регистрации пользователя приложения. Поля устанавливаются методами родительского класса Object.

| Параметр | Тип | Свойства | Описание | Пример значения |
| --- | --- | --- | --- | --- |
| callback | <code>(Bool, SCError?, [String: AnyObject]?) -> Void</code> |              | Коллбэк для выполняемого запроса. |                             |


