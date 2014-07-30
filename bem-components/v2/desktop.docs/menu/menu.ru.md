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
