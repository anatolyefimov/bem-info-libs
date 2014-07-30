# dropdown

A `dropdown` block is used to create different types of dropdowns.  It allows to manage state, behavior and appearance of dropdowns. Block consist of two components – the control component and the popup window (`popup` block). Popup window is displayed in front of all other page elements.

On mouse click over control component it shows the popup window (toggles `_visible` modifier for the `popup` block).

Depending on a `_switcher` modifier value, either link, pseudo link or button can be used as a control component.


## Valid block's attributes

Valid block's attributes can be specified in a corresponding fields of block's BEMJSON declaration:

<table>
    <tr>
        <th align="center">Attributes</th>
        <th align="center">Type</th>
        <th align="center">Description</th>
    </tr>
    <tr>
        <td>switcher</td>
        <td><code>String|BEMJSON</code></td>
        <td>Label for the control component. May contain a string with the text label or BEMJSON notation of nested BEM-entities. For example, it allows to wrap the control component with other block or pass it an additional attribute values.</td>
    </tr>
       <tr>
        <td>popup</td>
        <td><code>String|BEMJSON</code></td>
        <td>Text value or BEMJSON description of popup window content. In runtime BEMJSON entities will be rendered into HTML.</td>
    </tr>
</table>

Also, BEMJSON declaration can contain an arbitrary fields used for templating.


## Block's modifiers

### The themes `_theme`

 * simple
 * normal

If a `_theme` modifier is not set, the browser defaults (`default`) will be applied to block.

#### default

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link' },
    switcher : 'link',
    popup : 'Hello, world!'
}
```


#### simple

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'simple' },
    switcher : 'link',
    popup : 'Hello, world!'
}
```


#### normal

```bemjson
{
    block : 'dropdown',
    mods : { switcher : 'link', theme : 'normal' },
    switcher : 'link',
    popup : 'Hello, world!'
}
```


### Control component type `_switcher`

Mandatory modifier. It specifies which block to use as a control component. Next types are available:

* `_switcher_link` - the pseudo link. `link` block is used as a base of the control component. 
* `_switcher_button` - the button. `button` block is used as a base of the control component. 

Available for all block themes.

```bemjson
{
    block : 'dropdown',
    mods : {
        switcher : 'button',
        theme : 'normal',
        size : 'xl'
    },
    switcher : 'button',
    popup : 'Hello, world!'
}
```


### `_disabled`

If a `_disabled` modifier is set, the dropdown is displayed but not available for user's actions.

For such disabled block an `_opened` state will not be toggled on mouse click.

If a `_disabled` modifier set, it prevents the block components from the following actions:

* `popup` block – `_visible` modifier toggle;
* `link` control component – `_focused` state toggle. Link does not obtain focus on mouse click or by `Tab` key press;
* `button` control component:
    * `_focused` state toggle. Button will not obtain focus on mouse click or by `Tab` key press;
    * `_hovered` state toggle on mouse pointer hover.

Available for all block themes.

```bemjson
{
    block : 'dropdown',
    mods : {
        switcher : 'button',
        theme : 'normal',
        size : 'xl',
        disabled : true
    },
    switcher : 'button',
    popup : 'Hello, world!'
}
```


### dropdown's states

#### `_opened`

`_opened` modifier toggles automatically on mouse click on the control component.

```bemjson
{
    block : 'dropdown',
    mods : {
        switcher : 'button',
        theme : 'normal',
        size : 'xl',
        opened : true
    },
    switcher : 'button',
    popup : 'Hello, world!'
}
```


Modifier can be removed by re-clicking on the control component or outside popup's window (in case of `_autoclosable` modifier availability for `popup` block).


## BEMJSON value of `switcher` and `popup` attributes 

As the control component and the popup attributes can contain BEM-entities it can be used for different purposes such as:

* control component warping or modifying;
* passing additional attribute values to control component;
* creating nested content in popup window.

For example, you can make a control component's button toggleable:

```bemjson
{
    block : 'dropdown',
    mods : {
        switcher : 'button',
        theme : 'normal',
        size : 'xl'
    },
    switcher : {
        block : 'button',
        mods : { togglable : 'true' },
        text : 'custom button'
    },
    popup : 'Popup message'
}
```


Or make dropdown list selector based on block:

```bemjson
{
    block : 'dropdown',
    mods : {
        switcher : 'button',
        theme : 'normal',
        size : 'xl'
    },
    switcher : 'Dropdown menu',
    popup : {
        block : 'menu',
        mods : {
            theme : 'normal',
            size : 'xl',
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
}
```


## Dependencies

The `dropdown` block depends on:

* `i-bem__dom`
* `dom`
* `popup`
* `button`/`link` (depending on `_switcher` control component type)

# popup

A `popup` block is used for popups creation. It allows to manage state, behavior and appearance of popups. Block is displayed in front of all other page elements.

Popup can be displayed by different page elements like pseudo links or buttons.

At the moment of first display (`_visible` modifier toggle) block's DOM element is created in the end of document `<body>`.


## Block's modifiers

### The themes `_theme`

 * simple
 * normal

If a `_theme` modifier is not set, browser defaults (`default`) will be applied to block.

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

### Visibility `_visible`

A `_visible` modifier allow to control block visibility. If it's not set, block will not be displayed.

```bemjson
{
    block : 'popup',
    mods : { theme : 'normal', visible : true },
    content : 'normal'
}
```


### Alignment respect to its parent `_direction`

Modifier controls the position of popup window relative to the block which opened it – popup's alignment. Popup window's position is detected automatically basing on the admissible directions array and the parent block's position.

Chosen alignment will affect the opening animation direction.

By default following admissible directions array is used:


<table>
    <tr>
        <th> Direction </td>
        <th> Index in array </td>
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

To control the popup window position you can provide directions array with desired directions set only. According to parent block's position on a page the most suitable directions will be chosen among the provided values.

For example, if the popup window should be opened at the top of the parent block:

```bemjson
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'simple' },
    js : { directions : ['top-left', 'top-center', 'top-right'] },
    content : 'Hello, world!'
}
```


Or if it should be opened strictly at the center-right position:

```bemjson
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'simple' },
    js : { directions : ['right-center'] },
    content : 'Hello, world!'
}
```


### Automatic closure  `_autoclosable`

With `_autoclosable` modifier toggled block will automatically hide away on mouse click outside popup window (`_visible` modifier will be removed).

```bemjson
{
    block : 'popup',
    mods : { theme : 'normal', autoclosable : true },
    content : 'normal'
}
```


##Relations between popup's

As long as popup's parent block itself can be nested in another popup block there is a need in a popup's relations handling. Block can handle Parent → [ Child, Child, ... ] relations by checking if the parent block is nested in another popup block. So, the children knows about the parent blocks existence.

If there were no such relations, the parent popup block will be closed on mouse click on the child block regardless of the fact that `_autoclosable` modifier is set to `true`.

This means that with `autoclosable` modifier toggled block will close itself and close all of it children on mouse click outside block's window or it child's window.

Child popup blocks can be regarded as a chain of 1 → 2 → 3 → 4. By clicking on the second element of chain, third and forth will be closed. By clicking on first, the second, third and forth will be closed. On click outside of any popup window of the chain element all popups will be closed.


## Dependencies

The block depends on:

* `i-bem__dom `
* `jquery`
* `dom`
* `objects`
* `functions__throttle`
* `keyboard`
* `ua`
* `jquery__event_pointer`
