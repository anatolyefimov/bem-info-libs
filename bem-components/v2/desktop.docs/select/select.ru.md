# select

Блок `select` («селект») – раскрывающийся список выбора. Реализация блока основана на блоках `button`, `popup`, `menu` и `menu-item`. Визуально представлен кнопкой и выпадающим списком с элементами меню. Щелчок по кнопке раскрывает выпадающий список под или над кнопкой в зависимости от ее положения на странице (`{ directions : ['bottom-left', 'bottom-right', 'top-left', 'top-right'] }`). Щелчок вне зоны попапа автоматически скрывает его (`{ autoclosable : true }`).

Раскрывающийся список имеет всего один уровень вложенности и позволяет выбрать:

* только один элемент из списка (`select_mode_radio`);
* один, несколько или ни одного элемента из списка (`select_mode_check`);
* один или ни одного элемента из списка (`select_mode_radio-check`).

## Допустимые атрибуты блока

Допустимые атрибуты блока задаются в одноименных полях входного BEMJSON-блока:

<table>
    <tr>
        <th>Атрибут</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>name</td>
        <td>
            <code>String</code>
        </td>
        <td>Задает имя выпадающего списка.</td>
    </tr>
    <tr>
        <td>id</td>
        <td>
            <code>String</code>
        </td>
        <td>Задает уникальный идентификатор селекта.</td>
    </tr>
    <tr>
        <td>options</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>Задает массив пунктов списка. Каждый пункт имеет обязательный атрибут <code>val</code>, реализованный скрытым элементом <code>control</code>.</td>
    </tr>
    <tr>
        <td>textMaxWidth</td>
        <td>
            <code>String</code>
        </td>
        <td>Устанавливает максимальную ширину кнопки селекта. Ширина раскрывающегося списка при этом вычисляется в зависимости от ширины пунктов.</td>
    </tr>
    <tr>
        <td>optionsMaxHeight</td>
        <td>
            <code>String</code>
        </td>
        <td>Устанавливает максимальную высоту выпадающего списка.<br>Если все пункты списка не вмещаются, появляется скролл.<br> Если значение не указано, высота выпадающего списка по умолчанию будет вычисляться в зависимости от количества пунктов.</td>
    </tr>
    <tr>
        <td>text</td>
        <td>
            <code>String</code>
        </td>
        <td>Задает значение раскрывающегося списка выбора в случае, если ни один из пунктов не отмечен.<br> Применяется только для селектов с установленным модификатором <code>mode</code> в значении <code>check</code> или <code>radio-check</code>.</td>
    </tr>
</table>

Другие допустимые атрибуты блока могут задаваться в зарезервированном поле `attrs` в BEMJSON.

## Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

* simple
* normal

Если модификатор темы не указан, отображается кастомная реализация контрола без применения стилей.

Наглядно показано на примерах ниже:

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', focused : true },
    name : 'select1',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

**simple**

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'simple', focused : true },
    name : 'select1',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

**normal**

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'normal', size : 'm', focused : true },
    name : 'select1',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

### Типы `_mode`

Обязательный модификатор.

Блок представлен следующими типами:

* селект с множественным выбором, который позволяет оставить список без выбранных элементов (`select_mode_check`). При щелчке мышью по пункту списка, его состояние меняется на противоположное. Если пункт был активен – он деактивируется, и наоборот.


```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'normal', size : 'm' },
    name : 'select1',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third', checked : true }
    ]
}
```

* меню-переключатель (`select_mode_radio`). Применяется для создания селектов, позволяющих только одиночный выбор.
Для этого типа селекта текст в кнопке устанавливается в зависимости от выбранного элемента. Если элемент не выбран, то по умолчанию выбирается первый пункт из списка.


```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'normal', size : 'm' },
    name : 'select2',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

* селект с одиночным выбором, который позволяет оставить список без выбранных элементов (`select_mode_radio-check`). При щелчке мышью по пункту списка, его состояние меняется на противоположное. Если пункт был активен – он деактивируется, и наоборот.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'normal', size : 'm' },
    name : 'select3',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

### Состояния блока

#### В фокусе `_focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

#### Ширина кнопки селекта `_width`

Модификатор `width` в значении `available` растягивает кнопку селекта по ширине в зависимости от длины выбранного пункта.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'normal', size : 'm', width : 'available' },
    name : 'select4',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second second second second second second second second' },
        { val : 3, text : 'third' }
    ]
}
```

## Элементы блока

### Кнопка `__button`

Селект визуально представлен кнопкой (элемент `button`), которая содержит иконку `<i>`, реализованную блоком [icon](../icon/icon.ru.md) с примиксованным элементом `tick`. Так как иконка является частью кнопки селекта, ее размер устанавливается размером кнопки. Щелчок по кнопке раскрывает список выбора.

Так как селект реализован с помощью блока [button](../button/button.ru.md), ему можно задавать следующие модификаторы:

* `theme`
* `size`
* `focused`
* `checked`
* `disabled`

## Контрол `__control`

Вспомогательный скрытый элемент, который отвечает за формирование элементов списка выбора.

## Меню `__menu`

Элемент `menu` позволяет управлять пунктами списка выбора:

* `val` – значение, возвращаемое пунктом из списка, если он выбран. Обязательный атрибут. Может содержать уникальный идентификатор `{ val : { id : 1 } }`.
* `text` – название пункта в списке.
* `checked` – присваивается пункту из списка, если он выбран. `{ checked : true }` – пункт выбран.
* `checkedText` – задает значение, отображаемое в кнопке селекта, для выбранного пункта. Задается только для блока `select` с модификатором `mode` в значении `check`.
* `icon` – графический элемент (иконка)

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'normal', size : 'm' },
    name : 'select5',
    text : '—',
    options : [
        {
            val : { id : 1 },
            text : 'Twitter',
            checkedText : 'tw',
            icon : { block : 'icon', mods : { social : 'twitter' } }
        },
        {
            val : { id : 2 },
            text : 'VKontakte',
            checkedText : 'vk',
            icon : { block : 'icon', mods : { social : 'vk' } },
            checked : true
        }
    ]
}
```

Элементы списка могут быть объединены в группы. Для группировки пунктов выбора служит элемент `group`, в который вкладываются необходимые элементы списка. Название группы задается через атрибут `title`.

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'normal', size : 'm' },
    name : 'select5',
    text : 'empty',
    options : [
        {
            group : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true },
                { val : 3, text : 'third' }
            ],
            title : 'title of group 1'
        },
        {
            group : [
                { val : 4, text : 'fourth' },
                { val : 5, text : 'fifth', checked : true },
                { val : 6, text : 'sixth', disabled : true }
            ]
        }
    ]
}
```

# button

Блок `button` используется для создания различных типов кнопок и предоставляет возможность изменять их размер, состояние, содержимое и внешний вид.

## Варианты использования кнопок

* Обычная кнопка – применяется для любых кнопок веб-интерфейса. Используется по умолчанию.
* Кнопка-ссылка – применяется для перехода по ссылке. Задается модификатором `type` со значением `link`.
* Кнопка отправки формы – предназначена для отправки данных формы на сервер (submit). Задается модификатором `type` со значением `submit`.

## Допустимые атрибуты блока

Допустимые атрибуты блока задаются в одноименных полях входного BEMJSON блока:

<table>
    <tr>
        <th>Атрибут</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>text</td>
        <td>
            <code>String</code>
        </td>
        <td>Задает текст кнопки.</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>
            <code>BEMJSON</code></td>
        <td>Кнопка с иконкой, которая формируется блоком <code>icon</code>.</td>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>Адрес ссылки. Применяется только при наличии модификатора блока <code>button_type_link</code>. Кнопка становится ссылкой, а значение <code>url</code> – атрибутом <code>href</code>.</td>
    </tr>
    <tr>
        <td>id</td>
        <td>
            <code>String</code>
        </td>
        <td>Уникальный идентификатор кнопки.</td>
    </tr>
    <tr>
        <td>tabindex</td>
        <td>
            <code>String</code>
        </td>
        <td>Определяет последовательность перехода между кнопками при нажатии на `Tab`.</td>
    </tr>
    <tr>
        <td>value</td>
        <td>
            <code>String</code>
        </td>
        <td>Значение, отправляемое на сервер. По умолчанию пустое.</td>
    </tr>
</table>

Другие допустимые атрибуты блока могут задаваться в зарезервированном поле `attrs` в BEMJSON.

## Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * normal

Без указания модификатора темы отображается нативный вид контрола (*default*).

Наглядно показано на примерах ниже:

**default**

```bemjson
{
    block : 'button',
    text : 'Тема не указана'
}
```

**simple**

```bemjson
{
    block : 'button',
    mods : { theme : 'simple' },
    text : 'Тема simple'
}
```

**normal**

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    text : 'Тема normal'
}
```

### Размеры кнопок `_size`

Обязательный модификатор. Задает размер всем типам кнопок.

Реализован только в теме *normal*.

Доступно четыре размера реализации блока: **s**, **m**, **l**, **xl**.

<table>
    <tr>
        <th>Размер<br>кнопки</th>
        <th>Размер<br>шрифта</th>
        <th>Высота<br>кнопки</th>
        <th>Пример</th>
    </tr>
    <tr>
        <th>S</th>
        <td>13px</td>
        <td>24px</td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 's' },
    text : 'Small'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>M</th>
        <td>13px</td>
        <td>28px</td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    text : 'Medium'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>L</th>
        <td>15px</td>
        <td>32px</td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 'l' },
    text : 'Large'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>XL</th>
        <td>18px</td>
        <td>38px</td>
        <td>
            <pre><code>
{
    block : 'button',
    mods : { theme : 'normal', size : 'xl' },
    text : 'X-large'
}
            </code></pre>
        </td>
    </tr>
</table>

### Типы кнопок `_type`

Блок может быть представлен в виде кнопки-ссылки (`_type_link`) и кнопки отправки формы (`_type_submit`).
В случак кнопки-ссылки, дополнительно во входных данных необходимо указать обязательный атрибут `url`. В таком случае кнопка получает тег `<a>`, а значение `url` становится атрибутом `href`.

**Кнопка-ссылка**

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', type : 'link' },
    url : '#',
    text : 'Кнопка-ссылка'
}
```

**Кнопка отправки формы**

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', type : 'submit' },
    url : '#',
    text : 'Кнопка отправки формы'
}
```

### Состояния

#### Неактивна `_disabled`

В состоянии «неактивна» кнопка видна, но недоступна для действий пользователя.

Такая кнопка не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами.

```bemjson
{
    block : 'button',
    text : 'Неактивна',
    mods : { theme : 'normal', size : 'm', disabled : true }
}
```

#### В фокусе `_focused`

В состоянии блока `focused` со значением `true` кнопка всегда находится в фокусе. Нажатие по ней можно выполнить клавишей `Space` или `Enter`.

```bemjson
{
    block : 'button',
    text : 'В фокусе',
    mods : { theme : 'normal', size : 'm', focused : true }
}
```

#### Наведение курсором `_hovered`

Определяет действие «наведение курсором» на кнопку.

#### Нажатие `_pressed`

Определяет состояние «нажатие на кнопку» (действие).

#### Залипание `_togglable`

Позволяет реализовать залипание кнопки. Допустимые значения: `check` и `radio`.

```bemjson
{
    block : 'button',
    text : 'Кнопка зажата',
    mods : { theme : 'normal', size : 'm', togglable : 'check' }
}
```

#### Визуальное выделение `_action`

Визуально выделяет кнопку на странице.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', action : true },
    type : 'submit',
    text : 'Action'
}
```

#### Псевдокнопка `_pseudo`

При выборе модификатора `pseudo` со значением `true`, кнопка получает прозрачный фон.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', pseudo : true },
    text : 'Псевдокнопка'
}
```

В неактивном состоянии границы псевдокнопки исчезают и она сливается со страницей.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', pseudo : true, disabled : true },
    text : 'Псевдокнопка'
}
```

## Элементы блока

### __text

Технический элемент. Обрамляет текст кнопки.
Нужен для позиционирования текста внутри кнопки, в том числе для случаев использования вместе с иконкой.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    icon : {
        block : 'icon',
        mods : { action : 'download' }
    },
    text : 'Кнопка с иконкой'
}
```

# control

Вспомогательный блок. Используется для работы большинства блоков библиотеки [bem-components](https://github.com/bem/bem-components):

* [attach](../attach/attach.ru.md)
* [button](../button/button.ru.md)
* [checkbox](../checkbox/checkbox.ru.md)
* [input](../input/input.ru.md)
* [link](../link/link.ru.md)
* [menu](../menu/menu.ru.md)
* [radio](../radio/radio.ru.md)

Предназначен для реализации общей функциональности данных блоков, предоставляющей состояния `focused` и `disabled`.
Следит за значением атрибута `tabIndex` в зависимости от текущего состояния блока.

Блок использует следующие методы:

<table>
    <tr>
        <th>Метод</td>
        <th>Описание</td>
    </tr>
    <tr>
        <td><code>getName</code></td>
        <td>Возвращает имя контрола при его наличии. В обратном случае должен вернуть пустую строку.</td>
    </tr>
    <tr>
        <td><code>getVal</code></td>
        <td>Возвращает значение контрола.</td>
    </tr>
</table>

# menu

Блок `menu` используется для создания различных типов меню и селектов.

Он предоставляет возможность изменять размер и внешний вид блоков меню, управлять поведением вложенных блоков – пунктов меню или селекта.

В результате BEMHTML-преобразований на странице блок становится HTML-элементом с тегом `<div>` и свойством `role="menu"`. HTML-элементом, содащим набор переключателей – пунктов меню (блок `menu-item`).


## Варианты использования меню

Блок `menu` служит для создания различных типов меню:

<table>
    <tr>
        <th>Тип</th>
        <th>Описание</th>
        <th>Пример</th>
    </tr>
    <tr>
        <td>Меню-переключатель</td>
        <td>Применяется для создания меню или селектов, позволяющих только одиночный выбор.</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal',
        size : 'm', 
        mode : 'radio'
    },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
            </code></pre>
        </td>
    <tr>
        <td>Селект с множественным выбором (<code>_mode_check</code>)</td>
        <td>При щелчке мышью по пункту меню его состояние меняется на противоположное. Если пункт был активен – он деактивируется и наоборот.</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        size : 'm',
        mode : 'check'
    },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
            </code></pre>
        </td>
    </tr>
<tr>
        <td>Простой список (без модификатора <code>_mode</code>)</td>
        <td>При щелчке мышью по пункту меню его состояние не меняется. Модификатор <code>_cheked</code> не устанавливается.</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        size : 'm',
        mode : 'check'
    },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
            </code></pre>
        </td>
    </tr>   
</table>


## Модификаторы блока

### Темы блока `_theme`

Блок представлен в следующих темах:

 * simple
 * normal

Без указания темы к блоку применяются значения, установленные браузером по умолчанию (*default*).

Наглядно показано на примерах ниже:

#### default

```bemjson
{
    block : 'menu',
    mods : { mode : 'check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```


#### simple

```bemjson
{
    block : 'menu',
    mods : { theme : 'simple', mode : 'check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```


#### normal

```bemjson
{
    block : 'menu',
    mods : { theme : 'normal', mode : 'check', size : 'xl' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```


### Размеры меню `_size`

Задает размер всем типам меню. Обязательный модификатор.

Реализован только в теме *normal*.

Доступно четыре размера реализации блока: **s**, **m**, **l**, **xl**.

<table>
    <tr>
        <th>Размер/Параметры</th>
        <th>Размер шрифта</th>
        <th>Высота строки <code>line-heigh</code></th>
        <th>Левый отступ <code>padding-left</code></th>
        <th>Отступ <code>padding</code></th>
        <th>Размер "галочки" для темы normal</code></th>
    </tr>
    <tr>
        <td>s</td>
        <td>13px</td>
        <td>24px</td>
        <td>30px</td>
        <td>14px</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        mode : 'check',
        size : 's' 
    },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>m</td>
        <td>13px</td>
        <td>24px</td>
        <td>30px</td>
        <td>14px</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        mode : 'check',
        size : 'm' 
    },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>l</td>
        <td>15px</td>
        <td>28px</td>
        <td>34px</td>
        <td>15px</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        mode : 'check',
        size : 'l' 
    },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>xl</td>
        <td>15px</td>
        <td>32px</td>
        <td>40px</td>
        <td>15px</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        mode : 'check',
        size : 'xl' 
    },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
            </code></pre>
        </td>
    </tr>
</table>


### Способ выбора пунктов `_mode`

Модификатор `_mode` управляет поведением пунктов меню при щелчке по ним мышью, например, возможностью множественного выбора пунктов меню.

Доступны следующие значения модификатора:

* `check` – селект. Пункт, по которому был произведен щелчек мышью, изменит состояние на противоположное и будет менять состояние при повторных щелчках. Доступна возможность множественного выбора пунктов;
* `radio` – переключатель. При щелчке мышью будет производиться переключение активных пунктов меню. При повторном щелчке пункт, по которому он был произведен, останется __активным__. Множественный выбор недоступен;
* `radio-check` – переключатель. При щелчке мышью будет производиться переключение активных пунктов меню. При повторном щелчке пункт, по которому он был произведен, станет __неактивным__. Множественный выбор недоступен.


Реализован во всех темах блока.

<table>
    <tr>
        <th>Выбор пунктов</th>
        <th>Пример</th>
    </tr>
    <tr>
        <td>Только один (<code>_mode_radio</code>)</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        mode : 'radio'
    },
    content : [
        {
            block : 'menu-item',
            mods : { checked : true },
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>Множественный выбор или ни одного (<code>_mode_check</code>)</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        mode : 'check'
    },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            mods : { checked : true },
            val : 2,
            content : 'Second item'
        }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>Один или ни одного (<code>_mode_radio-check</code>)</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        mode : 'radio-check'
    },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            mods : { checked : true },
            val : 2,
            content : 'Second item'
        }
    ]
}
            </code></pre>
        </td>
    </tr>
</table>


### Состояния блока


#### В фокусе `_focused`

Модификатор `_focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

Реализован во всех темах блока.

```bemjson
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        mode : 'check',
        size : 'xl',
        focused : true 
    },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```


## Элементы блока

Визуально представлен следующими элементами:

### __group

Элемент `__group` служит для группировки пунктов меню. Пункты, которые нужно сгруппировать, помещаются в поле `content` элемента. Группы визуально отделяются серой чертой.

Например:

```bemjson
{
    block : 'menu',
    mods : { theme : 'normal', size : 'xl', mode : 'radio', focused : true  },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'New'
        },
        {
            elem : 'group',
            content : [
                {
                    block : 'menu-item',
                    mods : { checked : true },
                    val : 2,
                    content : 'Open'
                },
                {
                    block : 'menu-item',
                    val : 3,
                    content : 'Open Recent'
                }
            ]
        },
        {
            block : 'menu-item',
            val : 4,
            content : 'Open Not so Recent'
        }
    ]
}
```


### __group-title

Элемент позволяет задать заголовок для группы пунктов меню, создаваемой с помощью элемента `__group`.

Например:

```bemjson
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        size : 'xl', 
        mode : 'radio',
        focused : true  
    },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'New'
        },
        {
            elem : 'group',
            title : 'Cool title',
            content : [
                {
                    block : 'menu-item',
                    mods : { checked : true },
                    val : 2,
                    content : 'Open'
                },
                {
                    block : 'menu-item',
                    val : 3,
                    content : 'Open Recent'
                }
            ]
        }
    ]
}
```


### Зависимости блока

Блок `menu` зависит от следующего набора блоков и элементов:

* `i-bem__dom`
* `menu-item`
* `dom`
* `keyboard`
* `control`

# menu-item  

Блок `menu-item` служит для создания пунктов меню или селекта. Используется внутри блока `menu`. Блок `menu-item` предоставляет возможность изменять состояние, содержимое и тип пунктов меню.

Блок `menu-item` в результате BEMHTML-преобразований на странице становится HTML-элементом с тегом `<div>` со свойством `role="menuitem"`.


## Варианты использования пунктов меню

Блок `menu-item` служит для создания различных типов пунктов меню:

<table>
    <tr>
        <th>Тип</th>
        <th>Описание</th>
        <th>Пример</th>
    </tr>
    <tr>
        <td>Переключатель</td>
        <td>Применяется для любых выпадающих списков, табов, пунктов меню и селектов и т.п. Используется по умолчанию.</td>
        <td>
            <pre><code>
{
    block : 'menu-item',
    val : 1,
    content : 'Selector value'
}
            </code></pre>
        </td>
    <tr>
        <td>Ссылка</td>
        <td>Элемент меню со ссылкой. Блок <code>link</code> помещается в поле <code>content</code> BEMJSON-декларации блока. Так же требуется установить блоку модификатор <code>type</code> в значение <code>link</code>.
        </td>
        <td>
            <pre><code>
{
    block : 'menu-item',
    mods : { type : 'link' },
    val : 2,
    content : {
        block : 'link',
        url : '#',
        content : 'Link 1'
    }
}
            </code></pre>
        </td>
    </tr>
</table>

## Допустимые атрибуты блока
Допустимые атрибуты блока задаются в одноименных полях входного BEMJSON блока:

<table>
    <tr>
        <th>Атрибут</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>val</td>
        <td><code>String|Number</code></td>
        <td>Значение, возвращаемое пунктом меню, если он выбран.</td>
    </tr>
</table>


## Модификаторы блока

### Темы блока `_theme`

 * simple   
 * normal  

Без указания темы к блоку применяются значения, установленные браузером по умолчанию (*default*).

Наглядно видно на примерах ниже:

#### default

```bemjson
{
    block : 'menu-item',
    content : 'default',
    val : 'my value'
}
```


#### simple

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'simple' },
    content : 'simple',
    val : 'my value'
}
```


#### normal

```bemjson
{
    block : 'menu-item',
    mods : { 
        theme : 'normal', 
        size : 'l'
    },
    content : 'normal',
    val : 'my value'
}
```


### Типы блока `_type`

Модификатор `_type` в значении `_link` позволяет создавать пункт меню-ссылку. Блок `link` при этом помещается в поле `content` BEMJSON-декларации блока. Если модификатор `_type_link` не установлен, вложенная ссылка будет доступна для действий пользователя при установленном модификаторе `_disabled`.

Реализован во всех темах блока.

```bemjson
{
    block : 'menu-item',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        type : 'link' 
    },
    content : {
        block : 'link',
        url : '#',
        content : 'Link 1'
    }
}
```


### Состояния блока 

#### Неактивен `_disabled`
   
В состоянии "неактивен" пункт меню отображается, но недоступен для действий пользователя.  

Такой пункт меню не изменяет состояние при щелчке мышью. Если для блока установлен модификатор `_type_link`, переход по ссылке не осуществляется. 

Реализован во всех темах блока.

```bemjson
{
    block : 'menu-item',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        disabled : true 
    },
    content : '_disabled'
}
```
    

#### Наведение курсором `_hovered`

Определяет действие "наведение курсором" на пункт меню.

Реализован во всех темах блока.

Автоматически выставляется при наведении указателем мыши на пункт меню.

```bemjson
{
    block : 'menu-item',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        hovered : true 
    },
    content : '_hovered'
}
```


#### Выбранный пункт меню `_checked`

Модификатор задает выбранный пункт меню.

```bemjson
{
    block : 'menu-item',
    content : '_checked',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        checked : true 
    }
}
```


В блоке `menu` модификатор `_checked` устанавливается для пункта при щелчке мышью:

```bemjson
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
        size : 'l',
        select : 'check'
    },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'First item'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Second item'
        }
    ]
}
```


### Зависимости блока

Блок `menu-item` зависит от следующего набора блоков и элементов:

* `i-bem__dom `
* `jquery`
* `dom`

# popup

Блок `popup` используется для создания выпадающих элементов и позволяет изменять их состояние, поведение и внешний вид. Блок отображается поверх остальных элементов страницы.

Попап может быть вызван различными элементами страницы, например, кнопками или псевдоссылками.

В момент первого показа (установка модификатора `_visible`) DOM-элемент блока создается в конце `<body>`.


## Модификаторы блока

### Темы блока `_theme`

Блок представлен в следующих темах:

 * simple
 * normal

Без указания темы к блоку применяются значения по умолчанию (*default*), установленные браузером.

Наглядно видно на примерах ниже:

#### default
```bemjson
{
    block : 'popup',
    content : 'default'
}
```


#### simple

```bemjson
{
    block : 'popup',
    mods : { theme : 'simple' },
    content : 'simple'
}
```


#### normal

```bemjson
{
    block : 'popup',
    mods : { theme : 'normal' },
    content : 'normal'
}
```


### Видимый `_visible`

Модификатор, отвечающий за видимость блока. При значении модификатора `false` блок не отображается.

```bemjson
{
    block : 'popup',
    mods : { theme : 'normal', visible : true },
    content : 'normal'
}
```


### Расположение относительно родителя `_direction`

Модификатор управляет положением попапа на странице относительно вызвавшего его блока. Расположение блока определяется автоматически, исходя из массива допустимых расположений и положения родителя на странице.

Выбранное расположение влияет на направление анимации раскрытия.

По умолчанию используется следующий массив допустимых расположений:

<table>
    <tr>
        <th> Направление раскрытия </td>
        <th> Индекс в массиве </td>
    </tr>
        <td> bottom-left </td>
        <td> 0 </td>
    </tr>
    <tr>
        <td> bottom-center </td>
       <td> 1 </td>
   </tr>
    <tr>
        <td> bottom-right</td>
        <td> 2 </td>
    </tr>
    <tr>
        <td> top-left </td>
        <td> 3 </td>
    </tr>
    <tr>
        <td> top-center </td>
        <td> 4 </td>
    </tr>
    <tr>
        <td> top-right </td>
        <td> 5 </td>
    </tr>
    <tr>
        <td> right-top </td>
        <td> 6 </td>
    </tr>
    <tr>
        <td> right-center </td>
        <td> 7 </td>
    </tr>
    <tr>
        <td> right-bottom </td>
        <td> 8 </td>
    </tr>
    <tr>
        <td> left-top </td>
        <td> 9 </td>
    </tr>
    <tr>
        <td> left-center </td>
        <td> 10 </td>
    </tr>
    <tr>
        <td> left-bottom </td>
        <td> 11 </td>
    </tr>
</table>

Чтобы управлять расположением попапа, можно ограничить массив расположений, оставив только требуемые. Пользовательский массив нужно передать в качестве JS-параметра с ключом `directions`. При этом из значений массива будет выбрано наиболее подходящее, исходя из положения родителя на странице.

Например, если требуется, чтобы попап раскрывался над родителем:

```bemjson
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'simple' },
    js : { directions : ['top-left', 'top-center', 'top-right'] },
    content : 'Hello, world!'
}
```


Или разместить попап справа по центру:

```bemjson
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'simple' },
    js : { directions : ['right-center'] },
    content : 'Hello, world!'
}
```


### Автоматическое скрытие `_autoclosable`

Модификатор отвечает за автоматическое скрытие попапа при клике вне блока. При установке модификатора `_autoclosable` в значении `_true` блок будет скрываться при щелчке за его пределами (будет снят модификатор `_visible`).

```bemjson
{
    block : 'popup',
    mods : { theme : 'normal', autoclosable : true },
    content : 'normal'
}
```


##Взаимосвязи между popup'ами

Так как попап выносит себя в конец `<body>`, чтобы перекрывать другие элементы страницы, возникает необходимость в построении взаимосвязей. Блок умеет выстраивать связи Parent → [ Child, Child, ... ]. Для этого он выполняет проверку, вложен ли блок, вызывающий попап в другой `popup`. Потомки знают о наличии родителя.
Если бы этих взаимосвязей не было, то родительский попап (при наличии модификатора `autoclosable` со значением `true`) закрылся бы при клике внутри дочернего.

Другими словами модификатор `autoclosable` со значением `true` означает, что попап закроется сам и закроет свои дочерние блоки при клике за пределами его самого и дочерних попапов.

Дочерние блоки popup можно рассматривать в виде цепочки 1 → 2 → 3 → 4. При клике на втором попапе – закрываются третий и четвертый. При клике в первом – закрываются второй, третий, четвертый. При клике за пределами любого попапа из цепочки – закроются все.

### Зависимости блока

Блок `popup` зависит от следующего набора блоков и элементов:

* `i-bem__dom `
* `jquery`
* `dom`
* `objects`
* `functions__throttle`
* `keyboard`
* `ua`
* `jquery__event_pointer`
