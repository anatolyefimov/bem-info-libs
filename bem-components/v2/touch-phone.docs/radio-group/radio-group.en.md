# radio-group

A `radio-group` block is a set of dependent switches – radio buttons (a `radio` block). It is used for a single option selection from the list of options. 

On a web page, a `radio-group` block will be rendered to a `<span>` HTML element, with nested set of a switches (radio buttons).


## Valid block's attributes

Valid block's attributes can be specified in the corresponding fields of block's BEMJSON declaration:

<table>
    <tr>
        <th align="center">Attributes</th>
        <th align="center">Type</th>
        <th align="center">Description</th>
    </tr>
    <tr>
        <td>name</td>
        <td><code>String</code></td>
        <td>Radio button group's name. Renders to the nested <code>input</code> block's <code>name</code> HTML attribute.</td>
    </tr>
    <tr>
        <td>options</td>
        <td><code>Array</code></td>
        <td>Option objects array. Each object in the array are corresponds to one switch and contains it's attributes set.</td>
    </tr>    
</table>

Among the attributes passing to an `option` field for the switch the following are mandatory:

* `val` (`String` | `Number`) – value returned by selected switcher (a 'radio__control' element);
* `text` (`String`) – a text label for the current switch.

## Block's modifiers

### The themes `theme`

 * simple
 * normal

If a `theme` modifier is not set, the browser defaults (`default`) will be applied to the block.

For example:

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


### The sizes `size`

Mandatory modifier. Available for *normal* theme only.
Provides the size value to all types of radio groups.

There are four sizes available: **S**, **M**, **L**, **XL**.

Depending on a `type` modifier value following sizes are available:

<table>
    <tr>
        <th>Size</th>
        <th>Normal radio group</th>
        <th>Button radio group (<code>_type_button</code>)</th>
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


Here are some examples with *normal* theme and and with set `radio-group_type_button` modifier:

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


### Radio group type `type`

A `type` modifier can have following values:

* `button`. It is used for creation of a button radio group – a block of button switcher;
* `line`. Is used for a line-aligned radio group creation. Right gap is automatically added after each switch of the group except the last one. Available only for *normal* theme.

<table>
    <tr>
        <th>Type</th>

        <th>Example</th>
    </tr>
    <tr>
        <td>Normal radio group</td>
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
        <td>Button radio group</td>
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
        <td>Line-aligned radio group (<code>_type_line</code>)</td>
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


### Inactive `disabled`

A `radio-group_disabled` modifier is used for an inactive radio group creation. An inactive group is displayed but not available for user actions.  

Such a group will not obtain focus (`radio-group_focused` modifier will not be toggled).

When a `disabled` modifier is set to the group all it's switches will also be disabled. As a result, for the group's switches will not be performed:

* state modifiers `hovered`, `pressed` and `focused` toggling;
* switching between `checked` modifier's values.

Modifier is available for all block themes.

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


### Radio group's states

#### `focused`

A `radio-group_focused` modifier is automaticly toggles when one of the block elements is in focus. For example, on mouse click or by `Tab` key press. 

Available for all block themes.

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


## Dependencies

The block depends on:

* `i-bem__dom `
* `radio`
* `jquery`
* `radio-group_type_button` (which is depends on `button` block)

# radio

A `radio` block is used for creating of a single radio switch. A switch can be represented by the radio switch or by the button. The `radio` block allows to manage state, content and type of a radio switches.

The `radio` blocks are used inside a `radio-group` block as a group elements.

As a result of block's template application, it will be rendered to a `<label>` HTML element, with following set of nested items:

* a `radio__box` element with hidden nested `input` HTML element (a `__control` element);
* a radio switch label, if the `text` BEMJSON attribute is passed.

Block's implementation use the logic of a native `input` HTML element with set `radio` control type: `<input name="name" type="radio">`. If a `theme` modifier is set, the `input` element is hidden by default.


## Valid block's attributes

Valid block's attributes can be specified in the corresponding fields of block's BEMJSON declaration:

<table>
    <tr>
        <th align="center">Attributes</th>
        <th align="center">Type</th>
        <th align="center">Description</th>
    </tr>
    <tr>
        <td><code>name</code></td>
        <td><code>String|Number</code></td>
        <td>Radio switch name. Renders to a nested <code>input</code> block's <code>name</code> HTML attribute.</td>
    </tr>
    <tr>
        <td><code>text</code></td>
        <td><code>String|Number</code></td>
        <td>A label for the radio switch.</td>
    </tr>
    <tr>
        <td><code>val</code></td>
        <td><code>String|Number</code></td>
        <td>A value which the selected radio switch will return. Renders to a nested <code>input</code> block's <code>value</code> HTML attribute.</td>
    </tr>
</table>

## Block's modifiers

### The themes `theme`

 * simple
 * normal

If a `theme` modifier is not set, the browser defaults (`default`) will be applied to the block.

For example:

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

### The sizes `size`

Mandatory modifier. Available for *normal* theme only.
Provides all types of radio switches with the size value.

The set of available sizes depends on a `type` modifier's value. Following sizes are available:

<table>
    <tr>
        <th>Size</th>
        <th>Default radio switch</th>
        <th>Button radio switch (<code>_type_button</code>)</th>
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

### Radio switch type `type`

A `type` modifier can be set to a `button` state for creating a button radio switch – the `button` block with a `button_togglable_radio` modifier set.

The `radio` block is mixed up to the `button` block with nested `radio__control` element.

In addition a `role="button"` HTML attribute is set for the block.

<table>
    <tr>
        <th>Type</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>Default radio switch</td>
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
        <td>Button radio switch</td>
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


### Block's states

#### Inactive `disabled`

A `disabled` modifier is used for an inactive radio switch creation. An inactive radio switch is displayed but not available for user actions.  

Inactive radio switch will not obtain focus (a `focused` modifier toggle) on mouse click or by `Tab` key press.

For such a inactive block will not be performed:

* `hovered`, `pressed` and `focused` state modifier toggling;
* `checked` modifier value changing.

```bemjson
{
    block : 'radio',
    mods : { theme : 'normal', size : 'l', disabled : true },
    name : 'radio-normal',
    text : 'Lonely switch'
}
```
   

#### In focus `focused`

A `focused` modifier is automatically toggled to the block when it is in focus. For example, on mouse click or by `Tab` key press.

Available for all block themes.

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


#### Selected radio switch `checked`

Modifier defines the selected radio switch.

The modifier is toggling on:

* mouse click (on re-clicking modifier state remains);
* `Enter` and `Space` key press (an option of `Enter` usage depends on a browser), if radio switch is in focus (a `focused` modifier is toggled);
* arrow key press, if one of the neighbour `radio` switches is in focus. Neighbour switch can be either a part of the same radio group or independent switch nested in the same block.

```bemjson
{
    block : 'radio',
    content : '_checked',
    mods : { 
        theme : 'normal', 
        size : 'm', 
        checked : true 
    }
}
```


#### States available with a `radio_type_button` modifier

If a `radio_type_button` modifier is set, a `radio` block is mixed up to a `button` block. As a result, for the `radio` block with the `radio_type_button` modifier are available following `button` block's states:

*  `hovered` – mouse pointer over the block;
*  `pressed` – button is pressed.


## Block's elements

### `__box`

A `__box` element is used in basic block's implementation as a container with nested control element (a `__control` element). It renders to a `<span>` HTML element.

### `__control`

A `__control` element is a radio switch controller. It renders to an `<input>` HTML element with the `type="radio"` attribute is set. In all block themes it is hidden by default. Block uses only the control's logic.

## Dependencies

The block depends on:

* `i-bem__dom`
* `control`
* `jquery__event`
* `__box`
* `__control`

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
