# i-bem Module

## i-bem Block

### Instance methods

#### changeThis ( fn, [ctx=this] ) → {Function}  protected

Changes the context of the function being passed

##### Parameters:

* fn {Function}
* [ctx=this] {Object}<br/>
  Context

##### Returns:

{Function}

Function with a modified context

#### afterCurrentEvent ( fn, [ctx] )  protected

Executes the function in the context of the block, after the "current event"

##### Parameters:

* fn {Function}
* [ctx] {Object}<br/>
  Context

#### trigger ( e, [data] ) → {BEM}  protected

Executes the block's event handlers and live event handlers

##### Parameters:

* e {String}<br/>
  Event name
* [data] {Object}<br/>
  Additional information

##### Returns:

{BEM}

#### hasMod ( [elem], modName, [modVal] ) → {Boolean}  protected

Checks whether a block or nested element has a modifier

##### Parameters:

* [elem] {Object}<br/>
  Nested element
* modName {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{Boolean}

#### getMod ( [elem], modName ) → {String}  protected

Returns the value of the modifier of the block/nested element

##### Parameters:

* [elem] {Object}<br/>
  Nested element
* modName {String}<br/>
  Modifier name

##### Returns:

{String}

Modifier value

#### getMods ( [elem], [modName1] ) → {Object}  protected

Returns values of modifiers of the block/nested element

##### Parameters:

* [elem] {Object}<br/>
  Nested element
* [modName1] {String}<br/>
  ..., modNameN] Modifier names

##### Returns:

{Object}

Hash of modifier values

#### setMod ( [elem], modName, modVal ) → {BEM}  protected

Sets the modifier for a block/nested element

##### Parameters:

* [elem] {Object}<br/>
  Nested element
* modName {String}<br/>
  Modifier name
* modVal {String}<br/>
  Modifier value

##### Returns:

{BEM}

#### toggleMod ( [elem], modName, modVal1, [modVal2], [condition] ) → {BEM}  protected

Sets a modifier for a block/nested element, depending on conditions.
If the condition parameter is passed: when true, modVal1 is set; when false, modVal2 is set.
If the condition parameter is not passed: modVal1 is set if modVal2 was set, or vice versa.

##### Parameters:

* [elem] {Object}<br/>
  Nested element
* modName {String}<br/>
  Modifier name
* modVal1 {String}<br/>
  First modifier value
* [modVal2] {String}<br/>
  Second modifier value
* [condition] {Boolean}<br/>
  Condition

##### Returns:

{BEM}

#### delMod ( [elem], modName ) → {BEM}  protected

Removes a modifier from a block/nested element

##### Parameters:

* [elem] {Object}<br/>
  Nested element
* modName {String}<br/>
  Modifier name

##### Returns:

{BEM}

#### channel ( [id='default'], [drop=false] ) → {$.observable | undefined}

Returns a named communication channel

##### Parameters:

* [id='default'] {String}<br/>
  Channel ID
* [drop=false] {Boolean}<br/>
  Destroy the channel

##### Returns:

{$.observable | undefined}

Communication channel

#### getDefaultParams () → {Object}

Returns a block's default parameters

##### Returns:

{Object}

#### del ( [obj=this] )

Helper for cleaning up block properties

##### Parameters:

* [obj=this] {Object}

#### destruct ()

Deletes a block

### Static properties

#### blocks {Object} protected

Storage for block declarations (hash by block name)

### Static methods

#### decl ( decl, [props], [staticProps] )  protected

Declares blocks and creates a block class

##### Parameters:

* decl {String | Object}<br/>
  Block name (simple syntax) or description
* decl.block | decl.name {String}<br/>
  Block name
* [decl.baseBlock] {String}<br/>
  Name of the parent block
* [decl.modName] {String}<br/>
  Modifier name
* [decl.modVal] {String}<br/>
  Modifier value
* [props] {Object}<br/>
  Methods
* [staticProps] {Object}<br/>
  Static methods

#### create ( block, [params] ) → {BEM}

Factory method for creating an instance of the block named

##### Parameters:

* block {String | Object}<br/>
  Block name or description
* [params] {Object}<br/>
  Block parameters

##### Returns:

{BEM}

#### getName () → {String}  protected

Returns the name of the current block

##### Returns:

{String}

#### afterCurrentEvent ( fn, ctx )  protected

Adds a function to the queue for executing after the "current event"

##### Parameters:

* fn {Function}
* ctx {Object}

#### changeThis ( fn, ctx ) → {Function}  protected

Changes the context of the function being passed

##### Parameters:

* fn {Function}
* ctx {Object}<br/>
  Context

##### Returns:

{Function}

Function with a modified context

#### del ( [obj=this] )

Helper for cleaning out properties

##### Parameters:

* [obj=this] {Object}

#### channel ( [id='default'], [drop=false] ) → {$.observable | undefined}

Returns/destroys a named communication channel

##### Parameters:

* [id='default'] {String}<br/>
  Channel ID
* [drop=false] {Boolean}<br/>
  Destroy the channel

##### Returns:

{$.observable | undefined}

Communication channel

# i-bem__dom Module

## i-bem__dom

Provides methods for work with DOM tree

### Instance methods

#### findBlocksInside ( [elem], block ) → {BEM}  protected

Finds blocks inside the current block or its elements (including context)

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEM}

#### findBlockInside ( [elem], block ) → {BEM}  protected

Finds the first block inside the current block or its elements (including context)

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEM}

#### findBlocksOutside ( [elem], block ) → {BEM}  protected

Finds blocks outside the current block or its elements (including context)

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEM}

#### findBlockOutside ( [elem], block ) → {BEM}  protected

Finds the first block outside the current block or its elements (including context)

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEM}

#### findBlocksOn ( [elem], block ) → {BEM}  protected

Finds blocks on DOM elements of the current block or its elements

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEM}

#### findBlockOn ( [elem], block ) → {BEM}  protected

Finds the first block on DOM elements of the current block or its elements

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEM}

#### bindToDomElem ( domElem, event, fn ) → {BEM}  protected

Adds an event handler for any DOM element

##### Parameters:

* domElem {jQuery}<br/>
  DOM element where the event will be listened for
* event {String | Object}<br/>
  Event name or event object
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

##### Returns:

{BEM}

#### bindToDoc ( event, fn ) → {BEM}  protected

Adds an event handler to the document

##### Parameters:

* event {String}<br/>
  Event name
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

##### Returns:

{BEM}

#### bindToWin ( event, fn ) → {BEM}  protected

Adds an event handler to the window

##### Parameters:

* event {String}<br/>
  Event name
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

##### Returns:

{BEM}

#### bindTo ( [elem], event, fn ) → {BEM}  protected

Adds an event handler to the block's main DOM elements or its nested elements

##### Parameters:

* [elem] {jQuery | String}<br/>
  Element
* event {String}<br/>
  Event name
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

##### Returns:

{BEM}

#### unbindFromDomElem ( domElem, event ) → {BEM}  protected

Removes event handlers from any DOM element

##### Parameters:

* domElem {jQuery}<br/>
  DOM element where the event was being listened for
* event {String}<br/>
  Event name

##### Returns:

{BEM}

#### unbindFromDoc ( event ) → {BEM}  protected

Removes event handler from document

##### Parameters:

* event {String}<br/>
  Event name

##### Returns:

{BEM}

#### unbindFromWin ( event ) → {BEM}  protected

Removes event handler from window

##### Parameters:

* event {String}<br/>
  Event name

##### Returns:

{BEM}

#### unbindFrom ( [elem], event ) → {BEM}  protected

Removes event handlers from the block's main DOM elements or its nested elements

##### Parameters:

* [elem] {jQuery | String}<br/>
  Nested element
* event {String}<br/>
  Event name

##### Returns:

{BEM}

#### trigger ( e, [data] ) → {BEM}  protected

Triggers block event handlers and live event handlers

##### Parameters:

* e {String}<br/>
  Event name
* [data] {Object}<br/>
  Additional information

##### Returns:

{BEM}

#### setMod ( [elem], modName, modVal ) → {BEM}  protected

Sets a modifier for a block/nested element

##### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* modName {String}<br/>
  Modifier name
* modVal {String}<br/>
  Modifier value

##### Returns:

{BEM}

#### findElem ( [ctx=this.domElem], names, [modName], [modVal] ) → {jQuery}  protected

Finds elements nested in a block

##### Parameters:

* [ctx=this.domElem] {String | jQuery}<br/>
  Element where search is being performed
* names {String}<br/>
  Nested element name (or names separated by spaces)
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{jQuery}

DOM elements

#### _elem ( name, [modName], [modVal] ) → {jQuery}  protected

Finds elements nested in a block

##### Parameters:

* name {String}<br/>
  Nested element name
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{jQuery}

DOM elements

#### elem ( names, [modName], [modVal] ) → {jQuery}  protected

Lazy search for elements nested in a block (caches results)

##### Parameters:

* names {String}<br/>
  Nested element name (or names separated by spaces)
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{jQuery}

DOM elements

#### dropElemCache ( [names], [modName], [modVal] ) → {BEM}  protected

Clearing the cache for elements

##### Parameters:

* [names] {String}<br/>
  Nested element name (or names separated by spaces)
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{BEM}

#### elemParams ( elem ) → {Object}

Retrieves parameters of a block element

##### Parameters:

* elem {String | jQuery}<br/>
  Element

##### Returns:

{Object}

Parameters

#### elemify ( elem, elemName ) → {jQuery}

Elemify given element

##### Parameters:

* elem {jQuery}<br/>
  Element
* elemName {String}<br/>
  Name

##### Returns:

{jQuery}

#### containsDomElem ( domElem ) → {Boolean}  protected

Checks whether a DOM element is in a block

##### Parameters:

* domElem {jQuery}<br/>
  DOM element

##### Returns:

{Boolean}

#### buildSelector ( [elem], [modName], [modVal] ) → {String}

Builds a CSS selector corresponding to a block/element and modifier

##### Parameters:

* [elem] {String}<br/>
  Element name
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{String}

#### destruct ( [keepDOM=false] )

Deletes a block

##### Parameters:

* [keepDOM=false] {Boolean}<br/>
  Whether to keep the block's DOM nodes in the document

### Static properties

#### scope {jQuery} protected

Scope
Will be set on onDomReady to tag `body`

#### doc {jQuery} protected

Document shortcut

#### win {jQuery} protected

Window shortcut

#### extractParams {*}

Retrieves block parameters from a DOM element

### Static methods

#### init ( [ctx=document] ) → {jQuery}  protected

Initializes blocks on a fragment of the DOM tree

##### Parameters:

* [ctx=document] {jQuery}<br/>
  Root DOM node

##### Returns:

{jQuery}

ctx Initialization context

#### destruct ( [keepDOM=false], ctx, [excludeSelf=false] )  protected

Destroys blocks on a fragment of the DOM tree

##### Parameters:

* [keepDOM=false] {Boolean}<br/>
  Whether to keep DOM nodes in the document
* ctx {jQuery}<br/>
  Root DOM node
* [excludeSelf=false] {Boolean}<br/>
  Exclude the context

#### update ( ctx, content, [callback], [callbackCtx] ) → {jQuery}  protected

Replaces a fragment of the DOM tree inside the context, destroying old blocks and intializing new ones

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  New content
* [callback] {Function}<br/>
  Handler to be called after initialization
* [callbackCtx] {Object}<br/>
  Handler's context

##### Returns:

{jQuery}

ctx Initialization context

#### replace ( ctx, content ) → {jQuery}

Changes a fragment of the DOM tree including the context and initializes blocks.

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

ctx Initialization context

#### append ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree at the end of the context and initializes blocks

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

ctx Initialization context

#### prepend ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree at the beginning of the context and initializes blocks

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

ctx Initialization context

#### before ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree before the context and initializes blocks

##### Parameters:

* ctx {jQuery}<br/>
  Contextual DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

ctx Initialization context

#### after ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree after the context and initializes blocks

##### Parameters:

* ctx {jQuery}<br/>
  Contextual DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

ctx Initialization context

#### liveInitOnEvent ( [elemName], event, [callback] )  protected

Helper for live initialization for an event on DOM elements of a block or its elements

##### Parameters:

* [elemName] {String}<br/>
  Element name or names (separated by spaces)
* event {String}<br/>
  Event name
* [callback] {Function}<br/>
  Handler to call after successful initialization

#### liveBindTo ( [to], event, [callback] )  protected

Helper for subscribing to live events on DOM elements of a block or its elements

##### Parameters:

* [to] {String | Object}<br/>
  Description (object with modName, modVal, elem) or name of the element or elements (space-separated)
* event {String}<br/>
  Event name
* [callback] {Function}<br/>
  Handler

#### liveUnbindFrom ( [elem], event, [callback] )  protected

Helper for unsubscribing from live events on DOM elements of a block or its elements

##### Parameters:

* [elem] {String}<br/>
  Name of the element or elements (space-separated)
* event {String}<br/>
  Event name
* [callback] {Function}<br/>
  Handler

#### liveInitOnBlockEvent ( event, blockName, callback )  protected

Helper for live initialization for a different block's event on the current block's DOM element

##### Parameters:

* event {String}<br/>
  Event name
* blockName {String}<br/>
  Name of the block that should trigger a reaction when initialized
* callback {Function}<br/>
  Handler to be called after successful initialization in the new block's context

#### liveInitOnBlockInsideEvent ( event, blockName, [callback] )  protected

Helper for live initialization for a different block's event inside the current block

##### Parameters:

* event {String}<br/>
  Event name
* blockName {String}<br/>
  Name of the block that should trigger a reaction when initialized
* [callback] {Function}<br/>
  Handler to be called after successful initialization in the new block's context

#### liveInitOnBlockInit ( blockName, callback )  protected

Helper for live initialization when a different block is initialized on a DOM element of the current block

##### Parameters:

* blockName {String}<br/>
  Name of the block that should trigger a reaction when initialized
* callback {Function}<br/>
  Handler to be called after successful initialization in the new block's context

#### liveInitOnBlockInsideInit ( blockName, [callback] )  protected

Helper for live initialization when a different block is initialized inside the current block

##### Parameters:

* blockName {String}<br/>
  Name of the block that should trigger a reaction when initialized
* [callback] {Function}<br/>
  Handler to be called after successful initialization in the new block's context

#### on ( [ctx], e, [data], fn, [fnCtx] )  protected

Adds a live event handler to a block, based on a specified element where the event will be listened for

##### Parameters:

* [ctx] {jQuery}<br/>
  The element in which the event will be listened for
* e {String}<br/>
  Event name
* [data] {Object}<br/>
  Additional information that the handler gets as e.data
* fn {Function}<br/>
  Handler
* [fnCtx] {Object}<br/>
  Handler's context

#### un ( [ctx], e, [fn], [fnCtx] )  protected

Removes the live event handler from a block, based on a specified element where the event was being listened for

##### Parameters:

* [ctx] {jQuery}<br/>
  The element in which the event was being listened for
* e {String}<br/>
  Event name
* [fn] {Function}<br/>
  Handler
* [fnCtx] {Object}<br/>
  Handler context

#### liveCtxBind ( ctx, e, [data], fn, [fnCtx] )  protected

Adds a live event handler to a block, based on a specified element where the event will be listened for

##### Parameters:

* ctx {jQuery}<br/>
  The element in which the event will be listened for
* e {String}<br/>
  Event name
* [data] {Object}<br/>
  Additional information that the handler gets as e.data
* fn {Function}<br/>
  Handler
* [fnCtx] {Object}<br/>
  Handler context

#### liveCtxUnbind ( ctx, e, [fn], [fnCtx] )  protected

Removes a live event handler from a block, based on a specified element where the event was being listened for

##### Parameters:

* ctx {jQuery}<br/>
  The element in which the event was being listened for
* e {String}<br/>
  Event name
* [fn] {Function}<br/>
  Handler
* [fnCtx] {Object}<br/>
  Handler context

#### buildSelector ( [elem], [modName], [modVal] ) → {String}

Builds a CSS selector corresponding to the block/element and modifier

##### Parameters:

* [elem] {String}<br/>
  Element name
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{String}

#### getBlockByUniqId ( [uniqId] ) → {BEM.DOM}

Returns a block instance by unique ID

##### Parameters:

* [uniqId] {String}

##### Returns:

{BEM.DOM}

#### getWindowSize () → {Object}

Returns the size of the current window

##### Returns:

{Object}

Object with width and height fields

# i-bem__internal Module

Module for internal BEM helpers

## i-bem__internal

