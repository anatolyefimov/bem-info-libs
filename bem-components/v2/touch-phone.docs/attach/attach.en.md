# attach

`attach` block is used to upload a file to be sent to a server.

This block is visually represented by:

* button (`button` element is based on the [button](https://github.com/bem/bem-components/blob/v2/common.blocks/button/button.en.md) block) that opens a system window for a file upload;
* text message "No file selected".

When file upload is complete, the following elements become available:

* file icon (`icon` block);
* file name (`text` element);
* deletion cross element (`clear` element).

Block functionality does not support:

* more than one file attaching;
* drag-and-drop.

## Block's modifiers

### _theme

The block supports only a theme called *simple*.

If theme is not specified, only native representation of the block is available (*default*).

See the following examples for demonstration:

**default**

```bemjson
{
    block : 'attach',
    button : 'Select file',
    noFileText : 'No file selected'
}
```
**simple**

```bemjson
{
    block : 'attach',
    mods : { theme : 'simple' },
    button : 'Select file',
    noFileText : 'No file selected'
}
```

### Block states

#### _disabled

If block is disabled, a file selection button becomes unavailable for user's manipulations.

The button is active by default, even if `disabled` modifier is not specified.

```bemjson
{
    block : 'attach',
    mods : { theme : 'simple', disabled : true },
    button : 'Select file',
    noFileText : 'No file selected'
}
```

## Block's elements

The block is visually represented by the following elements:

### __button

A mandatory element.

A file selection button. It is designed for opening a system window for file upload. It is based on [button](https://github.com/bem/bem-components/blob/v2/common.blocks/button/button.en.md) block and inherits its behavior (JS) and formatting (CSS). Content of a button should be specified in input data.

```bemjson
{
    block : 'attach',
    mods : { theme : 'simple' },
    button : {
        block : 'button',
        mods : { theme : 'simple' },
        icon : { block : 'icon', mods : { action : 'download' },
        text: 'Select file'
        }
    },
    noFileText : 'No file selected'
}
```

### __control

A native control for file attaching.

It is rendered by BEMHTML and BH template engines as a native control of file attaching with attributes: `<input class="attach__control" type="file">`.

### __no-file

Element for description rendering with no file selected.

If a theme *simple* is not declared, the text message "no file selected" is used by default.

### __file

A container with attached file information.

It consists of the following elements of the block:

* `text`
* `clear`

The element could contain an `icon` block. Depending on a file type an `icon` block could obtain corresponding modifier that specifies a type file icon to be assigned.

### __text

File name. It becomes available when you have attached the file.

### __clear

Clear attachment button (deletion cross element). It becomes available when you have attched the file.

The element is available for a *simple* theme of `attach` block.

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

# button

The `button` block is used for different types of buttons creation. It allows you to manage size, sate, content and appearance of a button.

## Button use cases

* button – is used to create the majority of web inteface buttons. Used by default.
* link-button – a button that provides link functionality. Must have a mandatory modifier `type` with `link` value.
* action button – a button designed to send data to the server (submit). Must be always located inside a form. Sets `type` modifier with `submit` value in BEMJSON to create an action button.

## Valid block's attributes

Valid block's attributes could be specified in corresponding fields of block's BEMJSON file:

<table>
    <tr>
        <th>Attributes</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>text</td>
        <td>
            <code>String</code>
        </td>
        <td>Text of a button.</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>Button with an icon provided by an <code>icon</code> block.</td>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>URL address. It is used only if <code>button_type_link</code> modifier is specified. In this case a button
            acts as a link and <code>url</code> value is represented as a <code>href</code> attribute.
        </td>
    </tr>
    <tr>
        <td>id</td>
        <td>
            <code>String</code>
        </td>
        <td>Unique identifier of a button.</td>
    </tr>
    <tr>
        <td>tabindex</td>
        <td>
            <code>String</code>
        </td>
        <td>Defines tab order between the buttons.</td>
    </tr>
    <tr>
        <td>value</td>
        <td>
            <code>String</code>
        </td>
        <td>Value to be sent to a server. It is empty by default.</td>
    </tr>
</table>

The other valid block's attributes could be specified in the `attrs` field in BEMJSON.

## Block's modifiers

### _theme

The block supports the following themes:

 * simple
 * normal

If a `theme` modifier is not specified, the native representation (*default*) of a control is available.

Following examples demonstrate this:

**default**

```bemjson
{
    block : 'button',
    text : 'Theme is not specified'
}
```

**simple**

```bemjson
{
    block : 'button',
    mods : { theme : 'simple' },
    text : 'Simple theme'
}
```

**normal**

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    text : 'Normal theme'
}
```

### _size

Mandatory modifier that is available for *normal* theme only.

Provides all types of buttons with the `size` value.

There are four sizes available: **S**, **M**, **L**, **XL**.

Following examples demonstrate this:

<table>
  <tr>
    <th>Size</th>
    <th>Font size</th>
    <th>Button height</th>
    <th>Example</th>
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

### _type

The block could be represented as a `link-button` (`button_type_link`).

This button type has mandatory attribute `url` that should be specified in BEMJSON input data. A link-button has an `<a>` attribute. `url` value becomes `href` attribute.

```
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', type : 'link' },
    url : '#',
    text : 'Link-button'
}
```

### Button's states

#### _disabled

If `disabled` modifier has `true` value, button is visible but not available for user action.

Disabled button cannot be focused by pressing a `Tab` or on mouse click.

```bemjsom
{
    block : 'button',
    text : 'Disabled',
    mods : { theme : 'normal', size : 'm', disabled : true }
}
```

#### _focused

If `focused` modifier has `true` value, the button is always focused. You can click the focused button using `Space` or `Enter` button on your keyboard. To switch between controls use a `Tab` button.

```bemjson
{
    block : 'button',
    text : 'Focused',
    mods : { theme : 'normal', size : 'm', focused : true }
}
```

#### _hovered

Defines "hover" action.

#### _pressed

Defines "pressed" state of a button.

#### _togglable

Defines a state of the pressed button when the first click presses the button, and the second returns it to its original state.

```bemjson
{
    block : 'button',
    text : 'Togglable',
    mods : { theme : 'normal', size : 'm', togglable : true }
}
```

#### _action

Visually highlights a button on a page.


```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', action : true },
    type : 'submit',
    text : 'Action'
}
```

#### _pseudo

If `pseudo` modifier has `true` value, the button background becomes transparent.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', pseudo : true },
    text : 'pseudo'
}
```
If pseudo button is disabled, its boarders disappear.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', pseudo : true, disabled : true },
    text : 'pseudo'
}
```

## Block's elements

### __text

This auxiliary element sets a text position inside the button.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    icon : {
        block : 'icon',
        mods : { action : 'download' }
    },
    text : 'With icon'
}
```

## Block's dependencies

* `control`, that provides public API for the controls
* `i-bem__dom`
* `keyboard`

# icon

`<i>`-based block for using as a graphical element in other blocks, not for independent usage. Icon is set as `background` property and unables to fallback.

In BEMJSON you can use both the modifier and the `url` field for an icon representation:
```bemjson
{
    block : 'icon',
    mods : { social : 'twitter' }
}
```

```bemjson
{
    block : 'icon',
    url : '../../../test.blocks/icon/_action/download.svg'
}
```

```bemjson
{
    block : 'button',
    text : 'with icon',
    mods : { theme : 'normal', size : 'm' },
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

```bemjson
{
    block : 'button',
    text : 'with icon',
    mods : { theme : 'normal', size : 'm' },
    icon : {
        block : 'icon',
        url : '../../../test.blocks/icon/_action/download.svg'
    }
}
```
