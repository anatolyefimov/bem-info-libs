# loader

Блок `loader` служит для загрузки и подключения скриптов по URL.

Блок реализован в технологии `js` и подходит для использования в клиентских приложениях.


## Модификаторы блока

### `type`

В зависимости от значения модификатора `type` блок `loader` позволяет получить по URL и подключить:

* `js` - фрагмент JavaScript-кода;
* `bundle` – пакет, собранный из CSS и JS-файлов – «бандл».  


#### `type_js`

Блок с модификатором `type_js` реализует функцию, принимающую два аргумента:

* `{String}` `url` – URL загружаемого фрагмента JS-кода;
* `{Function}` `cb` – callback-функция, которая будет выполнена по завершению загрузки фрагмента кода.

Например, `loader_type_js` используется в блоке `common.blocks/jquery` библиотеки `bem-core` для загрузки и подключения jQuery:

```js
modules.define(
    'jquery',
    ['loader_type_js', 'jquery__config'],
    function(provide, loader, cfg) {

/* global jQuery */

function doProvide(preserveGlobal) {
    /**
     * @exports
     * @type Function
     */
    provide(preserveGlobal? jQuery : jQuery.noConflict(true));
}

typeof jQuery !== 'undefined'?
    doProvide(true) :
    loader(cfg.url, doProvide);
});
```


При вызове функция производит поиск строки, переданной первым аргументом:

* среди подключенных `url`. В случае успеха, callback (аргумент `cb`) немедленно выполняется, а управление возвращается вызывавшей функции;
* среди имен `url`, ожидающих подключения. В случае успеха callback помещается в очередь и управление возвращается вызывавшей функции.

Если текущее значение `url` не найдено, создается запись в очереди на подключение. Callback (аргумент `cb`) помещается в очередь. 

Затем создается DOM-элемент `script` со всеми нужными свойствами, который добавляется к элементу `head` документа.

По завершению загрузки:

* выполняются все callback из очереди на подключение;
* `url` удаляется из очереди и добавляется к списку подключенных. 


#### `type_bundle`

Блок с модификатором `type_bundle` реализует функцию от четырех аргументов:

* `{String}` `id` – идентификатор бандла;
* `{String}` `url` – путь до файла бандла в формате URL;
* `{Function}` `onSuccess` – callback, вызываемая по завершению загрузки бандла;
* `{Function}` `onError` – callback, вызываемая при неудачной загрузке бандла.

Например:

```js
modules.define('test-bundle-load', ['loader_type_bundle'], function(provide, bundleLoader) {

    provide(function() {
        var onSuccess = function() { console.log('Loaded!'); },
            onError = function() { throw new Error('ups'); };
        bundleLoader(
            'test1',
            'http://mysite.org/test.bundle.js', 
            onSuccess,
            onError
        );
    });
});
```


При инициализации блока с модификатором `type_js` создается объект бандлов. Ключами объекта служат `id`, а в значениях содержатся массивы callback-функций, которые нужно выполнить:

*  после успешной загрузки бандла;
*  в случае ошибки загрузки.

В случае успешного выполнения, функция, реализованная блоком, создает DOM-элемент `script` со всеми нужными свойствами, который добавляется перед первым дочерним элементом элемента `head`.

В ходе выполнения, функция устанавливает таймер загрузки на интервал (по умолчанию 8000 миллисекунд) с помощью `setTimeout`.

По истечению указанного интервала вызывается функция – обработчик ошибок. Обработчик:

* очищает таймер загрузки;
* вызывает все callback-функции `onError`;
* удаляет свойство, соответствующее `id`, из объекта бандлов.

##### Статические методы, доступные с модификатором `type_bundle`

Функция, реализованная блоком с модификатором `type_bundle`, обладает статическим методом – `_loaded`. Он используется как вспомогательный после успешной загрузки бандла.

На вход `_loaded` принимает объект со свойством `id`, содержащим строку с идентификатором загруженного бандла (URL). 

В ходе выполнения метод:

* очищает таймер загрузки;
* вызывает загруженный `bundle.js` в глобальном пространстве имен;
* подключает CSS:
    * создается DOM-элемент `style` с нужными свойствами;
    * DOM-элемент помещается перед первым вложенным элементом в `head`;
* выполняет все callback-функции `onSuccess`.
