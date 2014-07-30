# checkbox-group

A `checkbox-group` block is a set of independed switches – checkboxes (a `checkbox` block). Any of group's switches can be either active or not regardless of other switches state.

The block allows to manage the appearance and state of a nested switches.

On a web page `checkbox-group` block will be rendered to `<span>` HTML element, with a nested set of checkboxes and their labels.


## Valid block's attributes

Valid block's attributes could be specified in the corresponding fields of block BEMJSON declaration:

<table>
    <tr>
        <th align="center">Attributes</th>
        <th align="center">Type</th>
        <th align="center">Description</th>
    </tr>
    <tr>
        <td>name</td>
        <td><code>String</code></td>
        <td>The checkbox group name. Renders to nested <code>input</code> block's <code>name</code> HTML attribute.</td>
    </tr>
    <tr>
        <td>options</td>
        <td><code>Array</code></td>
        <td>The option objects array. Each object within the array corresponds to one switch and contains it's attributes set.</td>
    </tr>    
</table>

Following attributes should be passed in an `option` field for each switch:

* `val` (`String` | `Number`) – value returned by selected switcher (a 'checkbox__control' element);
* `text` (`String`) – a text label for the current switch.

In an `options` array any valid `checkbox` block attributes can be passed. For example, a `_checked` or `_disabled` modifiers can be set for the `checkbox`.


## Block's modifiers

### The themes `_theme`

 * simple
 * normal

If a `_theme` modifier is not set, browser defaults (`default`) will be applied to the block.

For example:

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


### The sizes `_size`

Mandatory modifier. Available for *normal* theme only.
Provides all types of checkbox groups with the size value.

There are four sizes available: **S**, **M**, **L**, **XL**.

Depending on a `_type` modifier value following sizes are available:

<table>
    <tr>
        <th>Size</th>
        <th>Normal checkbox group and <code>_type_line</code></th>
        <th>Button checkbox group (<code>_type_button</code>)</th>
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


Here are some examples with *normal* theme and the `_type_button` modifier is set:

<table>
    <tr>
        <th>Size</th>
        <th>Example</th>
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
    name : 'checkbox-button',
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
    name : 'checkbox-button',
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
    name : 'checkbox-button',
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
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
</table>


### Checkbox group type `_type`

A `_type` modifier can have following values:

* `button`. It is used for creation of button checkbox group – a block of button switches;
* `line`. It is used for line-aligned checkbox group creation. Right gap is automatically added after each switch of the group except the last one. Available only for *normal* theme.

Modifier is available for all block themes.

<table>
    <tr>
        <th>Type</th>

        <th>Example</th>
    </tr>
    <tr>
        <td>Normal checkbox group</td>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { theme : 'normal', size : 'l' },
    name : 'checkbox-normal',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    <tr>
        <td>Button checkbox group</td>
        <td>
            <pre><code>
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button' 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
            </code></pre>
        </td>
    </tr>
    <tr>
        <td>Line-aligned checkbox group (<code>_type_line</code>)</td>
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


### Inactive `_disabled`

A `_disabled` modifier helps to create an inactive menu item. Inactive menu item is displayed, but not available for user actions.

Such a group will not obtain a focus (`_focused` modifier will not be toggled).

When a `_disabled` modifier is set for the group, all it's switches also will be disabled. As a result, the following will not be performed on switches:

* state modifiers `_hovered`, `_pressed` and `_focused` toggling;
* switching between `_checked` modifier's values.

Modifier is available for all block themes.

```bemjson
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button',
        disabled : true 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true }
    ]
}
```


### Block's states

#### `_focused`

A `_focused` 
_focused modifier is automatically toggled when one of the block's elements is in focus. For example, on mouse click or by `Tab` key press. 

Available for all block themes.

```bemjson
{
    block : 'checkbox-group',
    mods : { 
        theme : 'normal', 
        size : 'l', 
        type : 'button',
        focused : true 
    },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second' }
    ]
}
```


## Dependencies

The block depends on:

* `i-bem__dom `
* `checkbox`
* `jquery`

# checkbox

Block `checkbox` is a graphical user interface element that allows user to make a binary choice. The block is used when more then one case should be selected.

Block creates a container that includes a native checkbox control (`control` element) `<input class="checkbox__control" type="checkbox" attributes>` that is hidden if a `theme` modifier is specified.

`autocomplete` attribute is forced to `off` state to provide correct behavior of the block.

```bemjson
{
    block : 'checkbox',
    text : 'Вариант 1',
    name: 'name1',
    val: '1'
}
```

## Valid block's attributes

Valid block's attributes could be specified within the corresponding fields of the block BEMJSON file:

<table>
    <tr>
        <th>Attribute</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>text</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies text string value of a checkbox.</td>
    </tr>
    <tr>
        <td>name</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies a checkbox name. A mandatory attribute. The name part of the name/val pair associated with this element for form's submission purposes.</td>
    </tr>
    <tr>
        <td>val</td>
        <td>
            <code>String</code>
        </td>
        <td>Specifies a checkbox value. Value part of the name/val pair associated with this element for the form's submission purposes.</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>An icon that is rendered using an <code>icon</code> block.</td>
    </tr>
</table>

##  Block's modifiers

### _theme

Block supports following themes:

 * simple
 * normal

If a `theme` modifier is not specified, the native representation (*default*) of a control is available.

See the following examples for demonstration:

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

### _size

Mandatory modifier for *normal* theme only.
Provides checkbox text elements with font size value.

There are two sizes available: **M**, **L**.

See the following examples for demonstration:

<table>
    <tr>
        <th>Block size</th>
        <th>Font size</th>
        <th>String height<br>of <code>__box</code></th>
        <th>Example</th>
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
    text : 'Size M',
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
    text : 'Size L',
    name: 'name3',
    val: '3'
}
            </code></pre>
        </td>
    </tr>
</table>

### _type

The `checkbox` block can be rendered as a button. If needed, use `type` modifier with `button` value. In this case `checked` state of a checkbox is defined by clicking the button.

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', type : 'button' },
    text : 'Checkbox',
    name: 'button',
    val: '1'
}
```

### States of a checkbox

#### _focused

Checkbox is focused if block has `focused` modifier with `true` value. If block is designed as a button, in `focused` state it has a yellow shadow.

You can tick off the focused checkbox using `Space` or `Enter` button on your keyboard. To switch between controls use a `Tab` button.

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', focused : true },
    text : 'Focused',
    name: 'name1',
    val : 1
}
```

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', type : 'button', focused : true },
    text : 'Focused',
    name: 'name2',
    val : 2
}
```

#### `_disabled`

If `disabled` modifier has `true` value, the checkbox is visible but not available for user's action.

Disabled checkbox cannot be focused by pressing `Tab` or on mouse click.

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', disabled : true },
    text : 'Disabled',
    name: 'name1',
    val : 1
}
```

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', type : 'button', disabled : true },
    text : 'Disabled',
    name: 'name2',
    val : 2
}
```
#### `_checked`

`checked` modifier with `true` value defines checkbox as checked.

`checked` modifier can be used for all checkboxes within the group.

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', checked : true },
    text : 'Checked',
    name: 'name1',
    val : 1
}
```

```bemjson
{
    block : 'checkbox',
    mods : { theme : 'normal', size : 'm', type : 'button', checked : true },
    text : 'Checked',
    name: 'name2',
    val : 2
}
```

## Block's elements

### `__box`

`box` element is used to draw the checkbox. Native checkbox is hidden.

`box` element is added to the block on template engine level.

### `__control`

`control` element is used to provide native control checkbox functionality.

`control` element is added to the block on template engine level.

# control

Auxiliary block designed for common functionality implementation to provide the most blocks of [bem-components](https://github.com/bem/bem-components) library with `focused` and `disabled` states:

* [attach](../attach/attach.en.md)
* [button](../button/button.en.md)
* [checkbox](../checkbox/checkbox.en.md)
* [input](../input/input.en.md)
* [link](../link/link.en.md)
* [menu](../menu/menu.en.md)
* [radio](../radio/radio.en.md)

The `control` block provides valid `tabIndex` attribute value depending on the current state of a block.

The block uses following methods:

<table>
    <tr>
        <th>Method</td>
        <th>Description</td>
    </tr>
    <tr>
        <td>`getVal`</td>
        <td>Returns a control's value.</td>
    </tr>
    <tr>
        <td>`getName`</td>
        <td>Returns the name of the control (if available). If control name is not available, returns an empty string.</td>
    </tr>
</table>
