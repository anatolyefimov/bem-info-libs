# checkbox-group  

Блок `checkbox-group` служит для отображения группы однотипных переключателей – чекбоксов (блоков `checkbox`). Любой из переключателей группы может быть либо активен, либо нет, вне зависимости от состояния других переключателей.

Блок позволяет управлять внешним видом и состоянием вложенных переключателей. 

В результате BEMHTML-преобразований блок `checkbox-group` становится HTML-элементом с тегом `<span>` – контейнером, содержащим группу чекбоксов и подписи к ним.


## Допустимые параметры блока

Допустимые атрибуты блока задаются в одноименных полях входного BEMJSON блока:

<table>
    <tr>
        <th>Атрибут</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>name</td>
        <td><code>String</code></td>
        <td>Имя группы чекбоксов. Преобразуется в HTML-атрибут <code>name</code> вложенного блока <code>input</code>.</td>
    </tr>
    <tr>
        <td>options</td>
        <td><code>Array</code></td>
        <td>Массив хешей. Каждый хеш соответствует одному переключателю группы чекбоксов и содержит набор его параметров.</td>
    </tr>    
</table>

Среди параметров, передаваемых для переключателя в массиве хешей `option`, обязательными являются:

* `val` (`String`|`Number`) – значение, возвращаемое выбранным чекбоксом (элемент `checkbox__control`);
* `text`  (`String`) – подпись, отображаемая для текущего переключателя. 

Помимо обязательных параметров, в массиве `option` могут быть переданы любые параметры, допустимые для блока `checkbox`, например, модификаторы `_checked` или `_disabled`.

## Модификаторы блока

### Темы блока `_theme`

 * simple   
 * normal  

Без указания темы к блоку применяются значения по умолчанию (*default*), установленные браузером. 

Наглядно видно на примерах ниже:

#### default

```bemjson
{
    block : 'checkbox-group',
    name : 'checkbox-default',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```


#### simple

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'simple' },
    name : 'checkbox-simple',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```

 
#### normal

```bemjson
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'l' },
    name : 'checkbox-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```



### Размер переключателей `_size`

Модификатор `_size` устанавливает размер переключателей для всех типов групп чекбоксов. Обязательный модификатор. 

Реализован только в теме *normal*.

В зависимости от значения модификатора `_type`, доступны следующие размеры реализации блока:

<table>
    <tr>
        <th>Размер</th>
        <th>Обычная группа чекбоксов и <code>_type_line</code></th>
        <th>Кнопочная группа чекбоксов (<code>_type_button</code>)</th>
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

Размеры, на примере темы *normal* с модификатором `_type_button`:

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
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 's', 
        type : 'button' 
    },
    name : 'checkbox-normal',
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
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        type : 'button' 
    },
    name : 'checkbox-normal',
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
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button' 
    },
    name : 'checkbox-normal',
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
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'xl', 
        type : 'button' 
    },
    name : 'checkbox-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
</table>


### Тип группы чекбоксов `_type`

Доступны следующие значения модификатор `_type`:

* Модификатор `_type` со значением `button`. Используется для создания кнопочной группы чекбоксов – блока из кнопок-переключателей. 
* Модификатор `_type` со значением `line` используется для создания группы чекбоксов с выравниванием в строку. После каждого переключателя группы, кроме последнего, автоматически добавляется отступ справа. Размер отступа зависит от значения модификатора `_size`. Реализован только в теме *normal*.

Модификатор реализован во всех темах блока.

<table>
    <tr>
        <th>Тип</th>

        <th>Пример</th>
    </tr>
    <tr>
        <td>Обычная группа чекбоксов</td>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'l' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    <tr>
        <td>Кнопочная группа чекбоксов (<code>_type_button</code>)</td>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button' 
    },
    name : 'checkbox-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>Строчная группа чекбоксов (<code>_type_line</code>)</td>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'line' 
    },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>    
</table>


### Неактивна `_disabled`
   
В состоянии "неактивна" группа чекбоксов отображается, но недоступна для действий пользователя.  

Такая группа чекбоксов не будет получать фокус (модификатор `_focused`).

При установке модификатора `_disabled` для группы, всем переключателям группы также устанавливается модификатор `_disabled`. Как следствие, для них не будут:

* устанавливаться модификаторы состояния `_hovered`, `_pressed` и `_focused`;
* изменяться значения модификатора `_checked`.

Модификатор реализован во всех темах блока.

```bemjson
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button',
        disabled : true 
    },
    name : 'checkbox-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true }
    ]
}
```


### Состояния блока 

#### В фокусе `_focused`

Модификатор `_focused` в значении `true` автоматически выставляется блоку в момент, когда один из его элементов находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

Реализован во всех темах блока.


## Зависимости блока

Блок `checkbox-group` зависит от следующего набора блоков и элементов:

* `i-bem__dom `
* `checkbox`
* `jquery`

# checkbox

Блок `checkbox` («чекбокс») позволяет управлять параметром выбора с двумя состояниями – включено и выключено. Используется, когда необходимо выбрать более одного варианта из предложенных.

Блок создает контейнер, содержащий нативный контрол чекбокс (элемент `__control`) `<input class="checkbox__control" type="checkbox">`, который скрывается при использовании модификатора `_theme`.

Атрибут `autocomplete` принудительно переведен в состояние `off` для обеспечения корректной работы блока.

```bemjson
{
    block : 'checkbox',
    text : 'Вариант 1',
    name: 'name1',
    val: '1'
}
```

## Допустимые атрибуты блока

Допустимые атрибуты блока задаются в одноименных полях входного BEMJSON:

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
        <td>Задает значение текстовой строке чекбокса.</td>
    </tr>
    <tr>
        <td>name</td>
        <td>
            <code>String</code>
        </td>
        <td>Задает имя чекбокса. Обязательный атрибут. Является частью пары имя / значение (name / val), используемой с целью отправки формы.</td>
    </tr>
    <tr>
        <td>val</td>
        <td>
            <code>String</code>
        </td>
        <td>Задает значение чекбокса. Является частью пары имя / значение (name / val), используемой с целью отправки формы.</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>Иконка, которая отображается с помощью блока <code>icon</code>.</td>
    </tr>
</table>

##  Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * normal

Без указания модификатора темы отображается нативный вид контрола (*default*).

Наглядно видно на примерах ниже:

**default**

```bemjson
{
    block : 'checkbox',
    text : 'default',
    name: 'default',
    val: '1'
}
```

**simple**

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'simple' },
    text : 'Тема Simple',
    name: 'simple',
    val: '2'
}
```

**normal**

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm' },
    text : 'Тема Normal',
    name: 'normal',
    val: '3'
}
```

### Размер `_size`

Задает размер шрифта.

Обязательный модификатор. Реализован только в теме *normal*.

Доступно два размера реализации блока: **M**, **L**.

<table>
    <tr>
        <th>Размер<br>блока</th>
        <th>Размер<br>шрифта</th>
        <th>Высота строки<br>элемента <code>__box</code></th>
        <th>Пример</th>
    </tr>
    <tr>
        <th>M</th>
        <td>13px</td>
        <td>14px</td>
        <td>
            <pre><code>
{
    block : 'checkbox',
    mods : {
        theme : 'normal',
        size : 'm'
    },
    text : 'Размер M',
    name: 'name2',
    val: '2'
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <th>L</th>
        <td>15px</td>
        <td>17px</td>
        <td>
            <pre><code>
{
    block : 'checkbox',
    mods : {
        theme : 'normal',
        size : 'l'
    },
    text : 'Размер L',
    name: 'name3',
    val: '3'
}
            </code></pre>
        </td>
    </tr>
</table>

### Тип `_type`

Блок может быть представлен в виде кнопки (модификатор `_type` в значении `_button`). В таком случае выбор элемента происходит нажатием на кнопку.

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', type : 'button' },
    text : 'Кнопка Normal',
    name: 'button',
    val: '1'
}
```

### Состояния

#### В фокусе `_focused`

В состоянии блока `_focused` со значением `_true` чекбокс всегда находится в фокусе. Если блок представлен в виде кнопки, она приобретает желтую тень. Нажатие по чекбоксу можно выполнить клавишей `Space` или `Enter`. Переход по контролам формы осуществляется клавишей `Tab`.

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', focused : true },
    text : 'В фокусе',
    name: 'name1',
    val : 1
}
```

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', type : 'button', focused : true },
    text : 'В фокусе',
    name: 'name2',
    val : 2
}
```

#### Неактивен `_disabled`

В состоянии «неактивен» чекбокс виден, но недоступен для действий пользователя.

Такой чекбос не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами.

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', disabled : true },
    text : 'Неактивна',
    name: 'name1',
    val : 1
}
```

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', type : 'button', disabled : true },
    text : 'Неактивна',
    name: 'name2',
    val : 2
}
```

#### Отмечен `_checked`

Модификатор `_checked` в значении `true` определяет, что чекбокс отмечен (выбран).

Модификатор `_checked` может быть применен ко всем чекбоксам в группе.

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', checked : true },
    text : 'Отмечен',
    name: 'name1',
    val : 1
}
```

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', type : 'button', checked : true },
    text : 'Отмечен',
    name: 'name2',
    val : 2
}
```

## Элементы блока

### `__box`

Элемент `__box` служит для отрисовки чекбокса, нативный чекбокс скрыт.

Добавляется блоку на уровне шаблонизатора.

### Контрол `__control`

Элемент `__control` служит для использования функциональности нативного контрола чекбокса.

Добавляется блоку на уровне шаблонизатора.

## Зависимости блока

* `i-bem__dom`
* `base-control`
* `button`

# base-control

Вспомогательный блок. Используется для работы большинства блоков библиотеки [bem-components](https://github.com/bem/bem-components):

* [attach](https://github.com/bem/bem-components/blob/v2/common.blocks/attach/attach.ru.md)
* [button](https://github.com/bem/bem-components/blob/v2/common.blocks/button/button.ru.md)
* [checkbox](https://github.com/bem/bem-components/blob/v2/common.blocks/checkbox/checkbox.ru.title.txt)
* [input](https://github.com/bem/bem-components/blob/v2/common.blocks/input/input.ru.md)
* [link](https://github.com/bem/bem-components/blob/v2/common.blocks/link/link.ru.md)
* [menu](https://github.com/bem/bem-components/tree/v2/common.blocks/menu/menu.ru.md)
* [radio](https://github.com/bem/bem-components/tree/v2/common.blocks/radio/radio.ru.md)

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
