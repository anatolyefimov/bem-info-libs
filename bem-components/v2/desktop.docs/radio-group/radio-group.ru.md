# radio-group  

Блок `radio-group` – «радиогруппа», состоящая из набора зависимых переключателей «радиокнопок» (блоков `radio`). Радиогруппа используется для выбора единственного варианта из списка. 

Блок `radio-group` в результате BEMHTML-преобразований на странице становится HTML-элементом с тегом `<span>` – контейнером, содержащим группу переключателей (радиокнопок).


## Допустимые параметры блока

Допустимые параметры блока задаются в одноименных полях входного BEMJSON блока:

<table>
    <tr>
        <th>Атрибут</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>name</td>
        <td><code>String</code></td>
        <td>Имя радиогруппы. Преобразуется в HTML-атрибут <code>name</code> вложенного блока <code>input</code>.</td>
    </tr>
    <tr>
        <td>options</td>
        <td><code>Array</code></td>
        <td>Массив хешей. Каждый хеш соответствует одному переключателю и содержит набор его параметров. </td>
    </tr>    
</table>

Среди параметров, передаваемых в атрибуте `option` для переключателя, обязательными являются:

* `val` (`String` | `Number`) – значение, возвращаемое выбранным переключателем (элементом `radio__control`);
* `text` (`String`) – подпись, отображаемая для текущего переключателя. 


## Модификаторы блока

### Темы блока `theme`

 * simple   
 * normal  

Без указания темы к блоку применяются значения по умолчанию (*default*), установленные браузером. 

Наглядно видно на примерах ниже:

#### default

```bemjson
{
    block : 'radio-group',
    name : 'radio-default',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```


#### simple

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'simple' },
    name : 'radio-simple',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

 
#### normal

```bemjson
{
    block : 'radio-group',
    mods : { theme : 'normal', size : 'l' },
    name : 'radio-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```



### Размеры переключателей группы `size`

Задает размер переключателей для всех типов радиогрупп. Обязательный модификатор. 

Реализован только в теме *normal*.

В зависимости от значения модификатора `type` доступны следующие размеры реализации блока:

<table>
    <tr>
        <th>Размер</th>
        <th>Обычная радиогруппа</th>
        <th>Кнопочная радиогруппа (<code>_type_button</code>)</th>
    </tr>
    <tr>
        <th>s</th>
        <td>–</td>
        <td>+</td>
    </tr>
    <tr>
        <th>m</th>
        <td>+</td>
        <td>+</td>
    </tr>
    <tr>
        <th>l</th>
        <td>+</td>
        <td>+</td>
    </tr>
    <tr>
        <th>xl</th>
        <td>–</td>
        <td>+</td>
</table>


Размеры на примере темы *normal* с модификатором `radio-group_type_button`:

<table>
    <tr>
        <th>Размер</th>
        <th>Пример</th>
    </tr>
    <tr>
        <th>s</th>
        <td>
            <pre><code>
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 's', 
        type : 'button' 
    },
    name : 'radio-S',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>m</th>
        <td>
            <pre><code>
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        type : 'button' 
    },
    name : 'radio-M',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>l</th>
        <td>
            <pre><code>
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button' 
    },
    name : 'radio-L',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>xl</th>
        <td>
            <pre><code>
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'xl', 
        type : 'button' 
    },
    name : 'radio-XL',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
</table>

### Тип радиогруппы `type`

Модификатор `type` может иметь следующие значения:

* `button`. Используется для создания кнопочной радиогруппы – блока кнопок-переключателей;
* `line`. Используется для создания радиогруппы с выравниванием в строку. После каждого переключателя группы кроме последнего автоматически добавляется отступ справа. Размер отступа зависит от значения модификатора `size`. Реализован только в теме *normal*.

Модификатор реализован во всех темах блока.

<table>
    <tr>
        <th>Тип</th>

        <th>Пример</th>
    </tr>
    <tr>
        <td>Обычная радиогруппа</td>
        <td>
            <pre><code>
{
    block : 'radio-group',
    mods : { theme : 'normal', size : 'l' },
    name : 'radio-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    <tr>
        <td>Кнопочная радиогруппа</td>
        <td>
            <pre><code>
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button' 
    },
    name : 'radio-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>Строчная радиогруппа (<code>_type_line</code>)</td>
        <td>
            <pre><code>
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'line' 
    },
    name : 'radio-line',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>    
</table>


### Неактивна `disabled`
   
В состоянии "неактивна" радиогруппа отображается, но недоступна для действий пользователя.  

Такая радиогруппа не будет получать фокус (модификатор `focused`).

При установке модификатора `disabled` для радиогруппы всем ее переключателям также устанавливается модификатор `disabled`. Как следствие для них не будут:

* устанавливаться модификаторы состояния `hovered`, `pressed` и `focused`;
* изменяться значения модификатора `checked`.

Модификатор реализован во всех темах блока.

```bemjson
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button',
        disabled : true 
    },
    name : 'radio-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```


### Состояния блока 

#### В фокусе `focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда один из его элементов находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

Реализован во всех темах блока.

```bemjson
{
    block : 'radio-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button',
        focused : true 
    },
    name : 'radio-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

## Зависимости блока

Блок `radio-group` зависит от следующего набора блоков и элементов:

* `i-bem__dom `
* `radio`
* `jquery`
* `radio-group_type_button` (у которого в зависимостях есть блок `button`)

# radio

Блок `radio` – «радиопереключатель», «радиокнопка». Используется для создания одиночных радиобоксов.

В реализации блока используется функциональность нативного контрола `input` с атрибутом `type="radio"` – `<input name="name" type="radio">`, который скрывается при использовании модификатора `theme`.

В результате применения шаблонов блок `radio` отображается на странице как HTML-тег `<label>` – контейнер, содержащий:

* элемент `radio__box`, содержащий скрытый контрол `input` (элемент `__control`);
* подпись к радиокнопке, если задан BEMJSON-параметр `text`.


## Допустимые атрибуты

Допустимые атрибуты блока задаются в одноименных полях входного BEMJSON-блока:

<table>
    <tr>
        <th>Атрибут</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td><code>name</code></td>
        <td><code>String|Number</code></td>
        <td>Имя радиокнопки. Преобразуется в HTML-атрибут <code>name</code> вложенного блока <code>input</code>.</td>
    </tr>
    <tr>
        <td><code>text</code></td>
        <td><code>String|Number</code></td>
        <td>Подпись, отображаемая для радиокнопки.</td>
    </tr>
    <tr>
        <td><code>val</code></td>
        <td><code>String|Number</code></td>
        <td>Значение, возвращаемое контролом радиопереключателя <code>radio__control</code>, если выбрана текущая радиокнопка. Преобразуется в HTML-атрибут <code>value</code> вложенного блока <code>input</code>.</td>
    </tr>
</table>

## Модификаторы блока

### Темы `theme`

Блок представлен в следующих темах:

 * simple
 * normal

Без указания темы к блоку отображается нативный вид контрола (*default*).

Наглядно видно на примерах ниже:

**default**

```bemjson
{
    block : 'radio',
    name : 'radio-simple',
    text : 'Lonely switch'
}
```

**simple**

```bemjson
{
    block : 'radio',
    mods : { theme : 'simple' },
    name : 'radio-simple',
    text : 'Lonely switch'
}
```

**normal**

```bemjson
{
    block : 'radio',
    mods : { theme : 'normal', size : 'l' },
    name : 'radio-normal',
    text : 'Lonely switch'
}
```

### Размеры радиопереключателя `size`

Обязательный модификатор. Задает размер всем типам радиопереключателей.

Реализован только в теме *normal*.

В зависимости от значения модификатора `type` доступны следующие размеры реализации блока:

<table>
    <tr>
        <th>Размер</th>
        <th>Обычный радиопереключатель</th>
        <th>Кнопочный радиопереключатель (<code>radio_type_button</code>)</th>
    </tr>
    <tr>
        <th>s</th>
        <td>–</td>
        <td>+</td>
    </tr>
    <tr>
        <th>m</th>
        <td>+</td>
        <td>+</td>
    </tr>
    <tr>
        <th>l</th>
        <td>+</td>
        <td>+</td>
    </tr>
    <tr>
        <th>xl</th>
        <td>–</td>
        <td>+</td>
</table>


### Тип радиопереключателя `type`

Модификатор `type` со значением `button` используется для создания кнопочного радиопереключателя – кнопки (блок `button`) с установленным модификатором `button_togglable_radio`.

При этом к блоку `button` примешивается блок `radio`, а контентом кнопки становится `radio__control`.

Кроме того, при установленном модификаторе `radio_type_button` для блока задается HTML-атрибут `role="button"`.

<table>
    <tr>
        <th>Тип</th>
        <th>Пример</th>
    </tr>
    <tr>
        <td>Обычный радиопереключатель</td>
        <td>
            <pre><code>
{
    block : 'radio',
    mods : { theme : 'normal', size : 'l' },
    name : 'radio-normal',
    text : 'Lonely switch'
}
            </code></pre>
        </td>
    <tr>
        <td>Кнопочный радиопереключатель</td>
        <td>
            <pre><code>
{
    block : 'radio',
    mods : {
        theme : 'normal',
        size : 'l',
        type : 'button'
    },
    name : 'radio-normal',
    text : 'Lonely switch2'
}
            </code></pre>
        </td>
    </tr>
</table>


### Неактивен `disabled`

В состоянии «неактивен» радиопереключатель отображается, но недоступен для действий пользователя.

Такой радиопереключатель не будет получать фокус (модификатор `focused`).

При установке модификатора `disabled` для радиопереключателя не будут:

* устанавливаться модификаторы состояния `hovered`, `pressed` и `focused`;
* изменяться значение модификатора `checked`.

```bemjson
{
    block : 'radio',
    mods : { theme : 'normal', size : 'l', disabled : true },
    name : 'radio-normal',
    text : 'Lonely switch'
}
```

### Состояния

#### В фокусе `focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

```bemjson
{
    block : 'radio',
    mods : {
        theme : 'normal',
        size : 'l',
        focused : true
    },
    name : 'radio-normal',
    text : 'Lonely switch'
}
```

#### Выбран `checked`

Модификатор `checked` указывает на то, что радиопереключатель выбран (отмечен).

Модификатор устанавливается по:

* щелчку мыши по блоку (при повторных щелчках модификатор сохраняется);
* нажатию клавиш `Enter` или `Space` (возможность использования клавиши `Enter` зависит от браузера), если радиопереключатель находится в фокусе (модификатор `focused`);
* нажатию клавиш стрелок, если фокус установлен на соседний радиопереключатель в радиогруппе или в блоке, содержащем несколько блоков `radio`.

```bemjson
{
    block : 'radio',
    mods : { theme : 'normal', size : 'l', checked : true },
    name : 'radio-norma',
    text : 'Lonely switch'
}
```

#### Состояния, доступные с модификатором `radio_type_button`

При установленном модификаторе `radio_type_button` к блоку `button` примешивается блок `radio`. Как следствие, для блока с модификатором `radio_type_button` доступны состояния блока `button`:

*  `hovered` – под курсором;
*  `pressed` – кнопка нажата.


## Элементы

### `__box`

Элемент `__box` используется в стандартной реализации блока как контейнер, содержащий контрол радиокнопки (элемент `__control`). В результате BEMHTML-преобразований становится HTML-элементом `<span>`.

### `__control`

Элемент `__control` – контрол радиокнопки. В результате BEMHTML-преобразований становится HTML-элементом `<input>` с атрибутом `type="radio"`. По умолчанию элемент скрыт. В блоке используется только его функциональность.

## Зависимости

Блок `radio` зависит от следующего набора блоков и элементов:

* `i-bem__dom`
* `control`
* `jquery__event`
* `__box`
* `__control`

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
