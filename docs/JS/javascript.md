Дистрибутив Scorocode JavaScript SDK можно скачать [тут](https://github.com/Scorocode/scorocode-SDK-JS).

## Подключение SDK

Для использования SDK на стороне браузера, скачайте библиотеку [lib/browser/scorocode.min.js](https://github.com/Scorocode/scorocode-SDK-JS/blob/master/lib/browser/scorocode.min.js) и подключите ее в проекте: 
```js
<script src="js/scorocode.min.js"></script>
```
 
Для использования SDK на стороне сервера (NodeJS) установите модуль SDK `npm install scorocode` и подключите его в проекте:
```js
var Scorocode = require('scorocode');
```

## Быстрый старт

Зарегистрируйтесь и создайте приложение с любым именем в [Scorocode](https://scorocode.ru/).

Для разработки примера мы использовали библиотеку [react](https://facebook.github.io/react/) и утилиту для быстрого создания каркаса приложения [create-react-app](https://github.com/facebookincubator/create-react-app) Требования для установки смотрите по ссылке. Установить утилиту можно из консоли командой:

```
npm install -g create-react-app
```

Создайте новое приложение и установите JS SDK последовательностью команд в консоли:

```
create-react-app first-scorocode
cd first-scorocode
npm install scorocode --save
```

Откройте файл `src/index.js` и добавьте в него строки, заменив ключи "xxx" на соответствующие ключи из вашего приложения (раздел Настройки -> Безопасность):

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Scorocode from 'scorocode' // <- добавить импорт SDK Scorocode

// Добавить инициализацию SDK
Scorocode.Init({
    ApplicationID: "xxx", // <- заменить xxx на ключ appId приложения
    JavaScriptKey: "xxx", // <- заменить xxx на ключ javascript приложения
    MasterKey:     "xxx"  // <- заменить xxx на ключ masterKey приложения
});

ReactDOM.render(
  <App >,
  document.getElementById('root')
);
```

Откройте файл `src/App.js` замените его содержимое на следующий код:

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Scorocode from 'scorocode' // <- добавить импорт SDK


class App extends Component {

    constructor(props) {
        super(props);

        // Создаем переменные, которые будут хранить результаты запросов
        this.state = {
            registerResult: "",
            loginResult: ""
        };
    }

    // Заменяем содержимое
    // Создаем две формы: для регистрации и для авторизации
    render() {
        return (
            <div>
                <h2>Регистрация</h2>
                <form onSubmit={(event) => {this.handleRegister(event)}}>
                    <input type="text" placeholder="имя пользователя"> {' '}
                    <input type="email" placeholder="email"> {' '}
                    <input type="password" placeholder="password">
                    <button type="submit">Зарегистрироваться</button>
                </form>

                <pre>{this.state.registerResult}</pre>

                <h2>Вход в систему</h2>
                <form onSubmit={(event) => {this.handleLogin(event)}}>
                    <input type="email" placeholder="email"> {' '}
                    <input type="password" placeholder="password">
                    <button type="submit">Войти</button>
                </form>

                <pre>{this.state.loginResult}</pre>
            </div>
        );
    }

    // Обработчик формы регистрации
    handleRegister(event) {
        event.preventDefault()
        const username = event.target.elements[0].value
        const email = event.target.elements[1].value
        const password = event.target.elements[2].value

        // Очищаем переменную результата
        this.setState({registerResult: ""})

        // Создадим новый экземпляр Scorocode.User
        var appUser = new Scorocode.User();

        // Установим данные, необходимые для регистрации пользователя приложения
        appUser
            .set("username", username)
            .set("email", email)
            .set("password", password);

        // Зарегистрируем нового пользователя приложения
        appUser.signup()
            // Обработчик успешного выполнения запроса
            .then((data)=>{
                // Обновляем переменную результата, переводя полученный объект в строку
                this.setState({registerResult: JSON.stringify(data, null, 2)})
            })
            .catch((err) => {
                // Обновляем переменную результата, переводя полученный объект в строку
                this.setState({registerResult: JSON.stringify(err, null, 2)})
            })
    }

    // Обработчик формы авторизации
    handleLogin(event) {
        event.preventDefault()
        const email = event.target.elements[0].value
        const password = event.target.elements[1].value

        // Очищаем переменную результата
        this.setState({loginResult: ""})

        // Создадим новый экземпляр Scorocode.User
        var appUser = new Scorocode.User();

        // Аутентифицируем пользователя приложения, используя email и password
        appUser.login(email, password)
            // Обработчик успешного выполнения запроса
            .then((data)=>{
                // Обновляем переменную результата, переводя полученный объект в строку
                this.setState({loginResult: JSON.stringify(data, null, 2)})
            })
            .catch((err) => {
                // Обновляем переменную результата, переводя полученный объект в строку
                this.setState({loginResult: JSON.stringify(err, null, 2)})
            })
    }
}

export default App;
```

Сохраните файл и запустите приложение из консоли командой:

```
npm start
```

В результате в браузере откроется страница с двумя формами: регистрации и авторизации.
Поэкспериментируйте с регистрацией пользователей и их авторизацией и посмотрите на ответы от API Scorocode.
После успешной регистрации вы можете увидеть в коллекции users добавленного пользователя и авторизоваться, используя его email и пароль.
