# attach

The **attach** block is used to send a file to a server.

The block is visually represented by:

* button (`__button` based on the [button](../button/) block) that opens a system window for a file download
* deletion cross element (`__clear`)

Block functionality does not support:

* more than one file attaching
* drag-and-drop

Block **attach** provides native control functionality. The control is hidden. In MSIE8 block **attach** is rendered as native control `<input type="file">`.

## Block's modifiers

### Themes of a block
`_theme`

The block supports only the *simple* theme.

If theme is not specified, the block applies only default values:

* Theme of a button: native representation of a button by the browser.
* Localization: en
* Button's message text (`__button`): "Choose file"
* Text message rendered with no file selected (`__no-file`): "no file selected"

Following example demonstrates this:

```bemjson
    {
        block : 'attach',
        button : 'file',
        noFileText : 'no file selected'
    }
```

```bemjson
    {
        block : 'attach',
        mods : { theme : 'simple' },
        button : 'file',
        noFileText : 'no file selected'
    }
```

### Block state
`_disabled_true`

* disabled
If block is disabled a file selection button becomes unavailable for user's manipulations.

The button is active by default.

```bemjson
    {
        block : 'attach',
        mods : { disabled : true },
        button : 'file',
        noFileText : 'no file selected'
    }
```

```bemjson
    {
        block : 'attach',
        mods : { theme : 'simple', disabled : true },
        button : 'file',
        noFileText : 'no file selected'
    }
```

## Block's elements

The block is visually represented by the following elements:

### __button

A mandatory element.

A file selection button. It aims to open the system window for a file download. It is based on a [button](../button/) block and inherites its behavior (JS) and formatting (CSS).

If a theme *simple* is not declared, the button's text "Choose file" is used by default.

```bemjson
    {
        block : 'attach',
        mods : { theme : 'simple' },
        button : {
            block : 'button',
            mods : { theme : 'simple' },
            icon : { elem : 'icon' }
        },
        noFileText : 'no file selected'
    }
```
### __control

A native control of file attaching.

It is rendered by BEMHTML and BH template engines as a native control of file attaching with attributes: `<input class="file-name" type="file">`.

### __no-file

Element for description rendering with no file selected.

If a theme *simple* is not declared, the text message "no file selected" is used by default.

### __file

A container for a attached file information.

It consists of the following block's elements:

* `__text`
* `__clear`

### __text

File name. It appears after some file is attached.

### __clear

Clear attachment button (deletion cross element). It appears after some file is attached.

The element is available for a *simple* theme of **attach** block.

# base-control

Auxiliary block designed to implement the common functionality of the most blocks of [bem-components](https://github.com/bem/bem-components) library to provide them `focused` and `disabled` states: [attach](https://github.com/bem/bem-components/blob/v2/common.blocks/attach/attach.en.md), [button](https://github.com/bem/bem-components/blob/v2/common.blocks/button/button.en.md), [checkbox](https://github.com/bem/bem-components/blob/v2/common.blocks/checkbox/checkbox.en.title.txt), [input], [link], [menu], [radio].

The block uses the following methods:

<table>
    <tr>
        <th>Method</td>
        <th>Description</td>
    </tr>
    <tr>
        <td>`beforesetMod`</td>
        <td>Provides the block behavior before the modifier is set. Checks the block active state. If block is `disabled` it cannot be `focused`.</td>
    </tr>
    <tr>
        <td>`setMod`</td>
        <td>Provides `focused` or `disabled` modifier to the block.</td>
    </tr>
    <tr>
        <td>`getName`</td>
        <td>Returns the name of the control (if available). If a control name is not available, returns an empty string.</td>
    </tr>
    <tr>
        <td>`getVal`</td>
        <td>Returns control value.</td>
    </tr>
</table>

# button

The **button** block is used for different types of buttons creating. It allows you to manage size, sate, content and appearance of a button.

In MSIE8 block **button** is rendered as native button `<button>`; `link-button` is rendered as native link `<a>`.

## Button use cases

<table>
  <tr>
    <th align="center">Type</th>
    <th align="center">Description</th>
    <th align="center">Example</th>
  </tr>
  <tr>
    <td>Button</td>
    <td>Used by default.</td>
    <td>
      <pre><code>
{
  block : 'button',
  mods : {
    theme : 'normal',
    size : 'm'
  },
  icon : {
    block : 'icon',
    mods : {
      action : 'download'
    }
  }
}
      </code></pre>
    </td>
   <tr>
    <td>Link-button</td>
    <td>A button that provides link functionality. <br>Has an optional attribute `url`<br> to specify the address to which to <br>navigate.</td>
    <td>
      <pre><code>
{
  block : 'button',
  mods : {
    theme : 'normal',
    size : 'm',
    type : 'link'
  },
  url : '#',
  text : 'link'
}
      </code></pre>
    </td>
   </tr>
   <tr>
    <td>Action button</td>
    <td>Designed to send data to the server (submit).<br> Always located in the form. <br>Set a `type` modifier with `submit` value in <br>BEMJSON to create an action button.
    </td>
    <td>
      <pre><code>
{
  tag: 'form',
  content: {
    block : 'button',
    mods : {
      theme : 'normal',
      size : 'm',
      type : 'submit'
    },
    text : 'button'
  }
}
      </code></pre>
    </td>
   </tr>
</table>

## Block's API

The public methods of the block are:

<table>
  <tr>
    <th align="center">Method</th>
    <th align="center">Description</th>
  </tr>
  <tr>
    <td>getText</td>
    <td>Returns text of the button {String}.</td>
  </tr>
  <tr>
    <td>setText</td>
    <td>Sets text to the button.</td>
  </tr>
</table>

## Valid block's attributes

Valid block's attributes could be specified in the corresponding fields of the block BEMJSON file:

<table>
  <tr>
    <th align="center">Attributes</th>
    <th align="center">Type</th>
    <th align="center">Description</th>
  </tr>
  <tr>
    <td>text</td>
    <td>String</td>
    <td>Text of the button.</td>
   </tr>
   <tr>
    <td>icon</td>
    <td>BEMJSON</td>
    <td>The **icon** block.</td>
  </tr>
  <tr>
    <td>url</td>
    <td>String</td>
    <td>URL address. If URL address is specified the <br>button provides a link functionality.</td>
  </tr>
</table>

The other valid block's attributes could be specified in the `attrs` field in BEMJSON.

## Block's modifiers

### The themes `_theme`

The block supports the follwing themes:

 * simple
 * normal

It a `_theme` modifier is not specified the native representation (`default`) of a control is available.

#### default

```bemjson
{
    block : 'button',
    text : 'default'
}
```

#### simple

```bemjson
{
    block : 'button',
    mods : { theme : 'simple' },
    text : 'simple'
}
```

#### normal

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    text : 'normal'
}
```

### The sizes `_size`

Mandatory modifier for *normal* theme only.
Provides the size value to all types of buttons.

There are four sizes available: **S**, **M**, **L**, **XL**.

Following example demonstrates this:

<table>
  <tr>
    <th align="center">Size/Values</th>
    <th align="center">Font size</th>
    <th align="center">Button height</th>
    <th align="center">Example</th>
  </tr>
  <tr>
    <th align="center">s</th>
    <td>13px</td>
    <td>24px</td>
    <td>
      <pre><code>
{
  block : 'button',
  mods : {
    theme : 'normal',
    size : 's'
  },
  text : 'Small'
}
      </code></pre>
    </td>
  </tr>
  <tr>
    <th align="center">m</th>
    <td>13px</td>
    <td>28px</td>
    <td>
      <pre><code>
{
  block : 'button',
  mods : {
    theme : 'normal',
    size : 'm'
  },
  text : 'Medium'
}
      </code></pre>
    </td>
  </tr>
  <tr>
    <th align="center">l</th>
    <td>15px</td>
    <td>32px</td>
    <td>
      <pre><code>
{
  block : 'button',
  mods : {
    theme : 'normal',
    size : 'l'
  },
  text : 'Large'
}
      </code></pre>
    </td>
  </tr>
  <tr>
    <th align="center">xl</th>
    <td>18px</td>
    <td>38px</td>
    <td>
      <pre><code>
{
  block : 'button',
  mods : {
    theme : 'normal',
    size : 'xl'
  },
  text : 'X-large'
}
      </code></pre>
    </td>
  </tr>
</table>

### Button's type `_type`

The following types of button are available:

* link-button (`_link`). Has a mandatory attribute `url`. A link-button has an `<a>` attribute and the `url` value becomes a `href` attribute.

* action  button (`_submit`). Should be a part of a form only.

The `_type` modifier is available for *simple* and *normal* themes.

<table>
  <tr>
    <th align="center">Type/<br>Realisation</th>
    <th align="center">default</th>
    <th align="center">normal</th>
  </tr>
  <tr>
    <td> `_link`</td>
    <td>
      <pre><code>
{
  block : 'button',
  mods : { type : 'link' },
  url : '#',
  text : 'link'
}
      </code></pre>
    </td>
    <td>
      <pre><code>
{
  block : 'button',
  mods : {
    theme : 'normal',
    size : 'm',
    type : 'link'
  },
  url : '#',
  text : 'link'
}
      </code></pre>
    </td>
  </tr>
  <tr>
    <td>`_submit`</td>
    <td>
      <pre><code>
{
  tag: 'form',
  content: {
    block : 'button',
    mods : { type : 'submit' },
    text : 'default'
}
}
      </code></pre>
    </td>
    <td>
      <pre><code>
{
  tag: 'form',
  content: {
    block : 'button',
    mods : {
      theme : 'normal',
      size : 'm',
      type : 'submit'
    },
    text : 'normal'
  }
}
      </code></pre>
    </td>
  </tr>
</table>

### Button's states

#### `_disabled`

If a `_disabled` modifier has `_true` value the button is visible, but is not available for user action.

Disabled button cannot be focused by `Tab` pressing or mouse click.

Available for all themes of block.

<table>
  <tr>
    <th align="center">default</th>
    <th align="center">normal</th>
  </tr>
  <tr>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_disabled_true',
  mods : { disabled : true }
}
      </code></pre>
    </td>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_disabled_true',
  mods : {
    theme : 'normal',
    size : 'm',
    disabled : true
  }
}
      </code></pre>
    </td>
  </tr>
</table>

#### `_focused`

If `focused` modifier has a `true` value the button is always focused. You can click the focused button using `Space` button on your keyboard. To switch between controls use a `Tab` button.

Available for all themes of block.

```bemjson
{
    block : 'button',
    text : '_focused_true',
    mods : {
        theme : 'normal',
        size : 'm',
        focused : true
    }
}
```
#### `_hovered`

Defines the "hover" action.

Available for all themes of block.

<table>
  <tr>
    <th align="center">default</th>
    <th align="center">normal</th>
  </tr>
  <tr>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_hovered_true',
  mods : { hovered : true }
}
      </code></pre>
    </td>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_hovered_true',
  mods : {
    theme : 'normal',
    size : 'm',
    hovered : true
  }
}
      </code></pre>
    </td>
  </tr>
</table>

#### `_pressed`

Defines a "pressed" state of a button.

Available for all themes of block.

<table>
  <tr>
    <th align="center">default</th>
    <th align="center">normal</th>
  </tr>
  <tr>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_pressed_true',
  mods : { pressed : true }
}
      </code></pre>
    </td>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_pressed_true',
  mods : {
    theme : 'normal',
    size : 'm',
    pressed : true
  }
}
      </code></pre>
    </td>
  </tr>
</table>

#### `_togglable`

Determines the state of the pressed button when the first click the button presses it, and the second returns to its original state.

Available for all themes of block.

<table>
  <tr>
    <th align="center">default</th>
    <th align="center">normal</th>
  </tr>
  <tr>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_togglable_true',
  mods : { togglable : true }
}
      </code></pre>
    </td>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_togglable_true',
  mods : {
    theme : 'normal',
    size : 'm',
    togglable : true
  }
}
      </code></pre>
    </td>
  </tr>
</table>

#### `_action`

Visually detects the button on a page.

Available for all themes of block.

<table>
  <tr>
    <th align="center">default</th>
    <th align="center">normal</th>
  </tr>
  <tr>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_action_true',
  mods : { action : true }
}
      </code></pre>
    </td>
    <td>
      <pre><code>
{
  block : 'button',
  text : '_action_true',
  mods : {
    theme : 'normal',
    size : 'm',
    action : true
  }
}
      </code></pre>
  </td>
  </tr>
</table>

#### Pseudo button `_pseudo`

If `pseudo` modifier has `true` value the button background becomes transparent. If pseudo button is disabled its boarders disappear.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', pseudo : true },
    text : 'pseudo'
}
```

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm', pseudo : true, disabled : true },
    text : 'pseudo'
}
```

## B;ock's elements

The block is visually represented by the following elements:

### __text

This element intended to set a text position in the button.

```bemjson
{
    block : 'button',
    mods : { theme : 'normal', size : 'm' },
    icon : { block : 'icon', mods : { action : 'download' } },
    text : 'with icon'
}
```

## Dependencies

The `button` block depends on

* `base-control`, that provides public API for the controls.`i-bem__dom`
* `i-bem__dom`

# icon

`<i>`-based block for using as an element in other blocks, not for independent using. Picture is set as `background` property.

In BEMJSON you can use both the modifier and the `url` field for a picture representation:

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
        icon : { block : 'icon', mods : { social : 'twitter' } }
    }
```

```bemjson
    {
        block : 'checkbox',
        mods : { theme : 'simple', type : 'button' },
        text : 'icon',
        icon : { block : 'icon', mods : { action : 'download' } }
    }
```

```bemjson
    {
        block : 'button',
        text : 'with icon',
        mods : { theme : 'normal', size : 'm' },
        icon : { block : 'icon', url : '../../../test.blocks/icon/_action/download.svg' }
    }
```
