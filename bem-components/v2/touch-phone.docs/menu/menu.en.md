# menu

A `menu` block is used for creation of various types of menus and lists. It allows to manage state, behavior and appearance of menus.

As a result of BEMHTML transformations, a block will be rendered to a `<div>` HTML element, with `role="menu"` attribute set. The block's HTML element contains a set of switches – the `menu-item` blocks.

It allow to manage the appearance, state and size of a menu blocks as well as manage the nested `menu-items` block's appearance.


## menu use cases

A `menu` block is used for creation of following menu types:

<table>
    <tr>
        <th>Type</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>Switch menu</td>
        <td>Used for creation of lists with a single selectable item.</td>
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
        <td>A multi selectable list. (<code>_mode_check</code>)</td>
        <td>Clicking on a list items will perform item's state switching to opposite. If an item was active it will be deactivated, and vice versa.</td>
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
        <td>Basic list (with <code>_mode</code> modifier is unset)</td>
        <td>Menu item's state will not change on mouse click. A <code>_cheked</code> state modifier will not be toggled.</td>
        <td>
            <pre><code>
{
    block : 'menu',
    mods : { 
        theme : 'normal', 
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
</table>

## Block's modifiers

### The themes `_theme`

 * simple
 * normal

If a `_theme` modifier is not set, browser defaults (`default`) will be applied to the block.

For example:

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

### The sizes `_size`

Mandatory modifier. Available for *normal* theme only.
Provides a size value to all types of radio groups.

There are four sizes available: **S**, **M**, **L**, **XL**.

<table>
    <tr>
        <th>A `_size` value</th>
        <th>Font size</th>
        <th>Line height <code>line-heigh</code></th>
        <th>Left padding <code>padding-left</code></th>
        <th>Global <code>padding</code></th>
        <th>The tick's icon size for normal theme</code></th>
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

### Menu item selection options `_mode`

A `_mode` modifier defines a menu item's reaction on mouse click. For example, it controls multiple items selectability.

Following modifier values are available:

* `check` – a selectable list. A menu item will change it's state to opposite on each mouse click. An active item will become inactive and vice versa. Multiple choice is available;
* `radio` – a switcher. Inactive menu item will be activated on mouse click. On re-clicking the menu item will remain **active**. Multiple choice not available;
* `radio-check` – a switcher. Inactive menu item will be activated on mouse click. On re-clicking the active menu item will become **inactive**. Multiple choice not available.


Available for all block themes.

<table>
    <tr>
        <th>List items selectability</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>Only one (<code>_mode_radio</code>)</td>
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
        <td>Plural selection or none (<code>_mode_check</code>)</td>
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
        <td>One or none (<code>_mode_radio-check</code>)</td>
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


### Block's states

#### In focus `_focused`

A `_focused` modifier is automatically toggles for the block when it is in focus. For example, on mouse click or by `Tab` key press.

Available for all block themes.

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

## The block's elements

The `menu` block is visually represented by following elements:

### __group

A `__group` element is used for menu items grouping. An Items that needed grouping should be placed to the element BEMJSON declaration's `content` field. The group elements are visually separated by a gray line.

For example:

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

This element allows to create a title for a menu items group, created using a `_group` element.

For example:

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

## Dependencies

The block depends on:

* `i-bem__dom`
* `menu-item`
* `dom`
* `keyboard`
* `control`

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

# menu item

A `menu-item` block is used for creation of various types of menu and list items. It is used inside a `menu` block. The `menu-item` block allows to manage state, content and type of menu items.

As a result of BEMHTML transformations block will be rendered to a `<div>` HTML element, with `role="menuitem"` attribute set.


## menu item use cases

The block helps to create following menu item types:

<table>
    <tr>
        <th>Type</th>
        <th>Description</th>
        <th>An example</th>
    </tr>
    <tr>
        <td>A switch element</td>
        <td>Is used to set up a dropdowns, tab menus, lists and menu items, etc.</td>
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
        <td>A link element (<code>_type_link</code>)</td>
        <td>An element with nested depended link. A <code>link</code> block should be placed into block's BEMJSON declaration <code>content</code> field. The <code>_type_link</code> modifier is required.
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


## Valid block's attributes

Valid block's attributes can be specified in the corresponding fields of block's BEMJSON declaration:

<table>
    <tr>
        <th align="center">Attributes</th>
        <th align="center">Type</th>
        <th align="center">Description</th>
    </tr>
    <tr>
        <td>val</td>
        <td><code>String|Number</code></td>
        <td>A value returned by menu item if selected.</td>
    </tr>
</table>

## Block's modifiers

### The themes `_theme`

 * simple
 * normal

If a `_theme` modifier is not set, the browser defaults (`default`) will be applied to the block.

For example:

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


### Block's states

### Inactive `_disabled`

A `_disabled` modifier helps to create an inactive menu item. Inactive menu item is displayed, but not available for user actions.  

If a `_type_link` modifier is set for the block with a nested link, the link will not be followed on mouse click.

Available for all block themes.

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
    

#### Mouse over `_hovered`

This modifier is automatically toggled when the mouse pointer is over the block. 

Available for all block themes.

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


#### Selected menu item `_checked`

Modifier defines the selected menu item.

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


For the `menu-item` blocks nested in a `menu` block `_checked` state toggles automatically on mouse click. 

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

## Dependencies

The block depends on:

* `i-bem__dom `
* `jquery`
* `dom`
