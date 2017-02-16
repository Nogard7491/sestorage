# Библиотека для удобной работы с session storage

Session storage — локальное хранилище в пределах текущей сессии.

Свойство sessionStorage позволяет получить доступ к объекту Storage
текущей сессии. Свойство sessionStorage очень похоже на свойство
Window.localStorage, единственное различие заключается в том,
что все данные, сохраненные в localStorage не имеют определенного
времени жизни, а данные в sessionStorage очищаются в момент окончания
сессии текущий страницы. Сессия страницы остается активной все время
пока окно браузера открыто и сохраняется между перезагрузками страниц.
Открытие той же страницы в новом окне браузера или новой вкладке
приводит к созданию новой сессии страницы, что отличается от поведения
session cookies.

Поддержка браузеров:
* IE 8+
* Firefox 3.5+
* Safari 4+
* Chrome 4+
* Opera 10.5+
* iPhone 2+
* Android 2+

## Подключение библиотеки

```javascript
    // подключение с помощью тега script
    <script src="node_modules/sestorage/dist/sestorage.min.js"></script>
```

```javascript
    // подключение с помощью Webpack
    window.sestorage = require("sestorage");
```

```javascript
    // подключение с помощью RequireJS
    requirejs(
        ["sestorage"],
        function(sestorage) {
            // ...
        }
    );
```

## Примеры использования

```javascript
    // проверка работает ли локальное хранилище в текущей сессии
    sestorage.checkEnabled();
```

```javascript
    // проверка на существование элемента в локальном хранилище текущей сессии
    sestorage.exists("variable_key");
```

```javascript
    // установка значения элемента в локальном хранилище текущей сессии
    sestorage.set("variable_key", "variable_value");
```

```javascript
    // получение ключа элемента по его порядковому номеру
    sestorage.getKey();
```

```javascript
    // получение значения элемента из локального хранилища текущей сессии
    sestorage.get("variable_key");
```

```javascript
    // удаление элемента из локального хранилища текущей сессии
    sestorage.delete("variable_key");
```

```javascript
    // очистка всего локального хранилища текущей сессии
    sestorage.deleteAll();
```

```javascript
    // получение количества элементов локального хранилища текущей сессии
    sestorage.getLength();
```