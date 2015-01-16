# i-bem Module

## BEM Class

Aughtments {BEM}

Base block for creating BEM blocks

### Instance properties

#### params {Object} (readonly)

Block parameters, taking into account the defaults

### Instance methods

#### on ( e, [data], fn, [ctx] ) → {BEM}

Adds an event handler

##### Parameters:

* e {String | Object}<br/>
  Event type
* [data] {Object}<br/>
  Additional data that the handler gets as e.data
* fn {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

##### Returns:

{BEM}

this

#### un ( [e], [fn], [ctx] ) → {BEM}

Removes event handler or handlers

##### Parameters:

* [e] {String | Object}<br/>
  Event type
* [fn] {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

##### Returns:

{BEM}

this

#### emit ( e, [data] ) → {BEM}  protected

Executes the block's event handlers and live event handlers

##### Parameters:

* e {String}<br/>
  Event name
* [data] {Object}<br/>
  Additional information

##### Returns:

{BEM}

this

#### hasMod ( [elem], modName, [modVal] ) → {Boolean}

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

#### getMod ( [elem], modName ) → {String}

Returns the value of the modifier of the block/nested element

##### Parameters:

* [elem] {Object}<br/>
  Nested element
* modName {String}<br/>
  Modifier name

##### Returns:

{String}

Modifier value

#### getMods ( [elem], [...modNames] ) → {Object}

Returns values of modifiers of the block/nested element

##### Parameters:

* [elem] {Object}<br/>
  Nested element
* [...modNames] {String}<br/>
  Modifier names

##### Returns:

{Object}

Hash of modifier values

#### setMod ( [elem], modName, modVal ) → {BEM}

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

this

#### _onSetMod ( modName, modVal, oldModVal, [elem], [elemName] )  protected

Function after successfully changing the modifier of the block/nested element

##### Parameters:

* modName {String}<br/>
  Modifier name
* modVal {String}<br/>
  Modifier value
* oldModVal {String}<br/>
  Old modifier value
* [elem] {Object}<br/>
  Nested element
* [elemName] {String}<br/>
  Element name

#### toggleMod ( [elem], modName, modVal1, [modVal2], [condition] ) → {BEM}

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

this

#### delMod ( [elem], modName ) → {BEM}  protected

Removes a modifier from a block/nested element

##### Parameters:

* [elem] {Object}<br/>
  Nested element
* modName {String}<br/>
  Modifier name

##### Returns:

{BEM}

this

#### getDefaultParams () → {Object}  protected

Returns a block's default parameters

##### Returns:

{Object}

#### nextTick ( fn ) → {BEM}  protected

Executes given callback on next turn eventloop in block's context

##### Parameters:

* fn {Function}<br/>
  callback

##### Returns:

{BEM}

this

### Static properties

#### blocks {Object}

Storage for block declarations (hash by block name)

### Static methods

#### decl ( decl, [props], [staticProps] ) → {Function}

Declares blocks and creates a block class

##### Parameters:

* decl {String | Object}<br/>
  Block name (simple syntax) or description
* decl.block | decl.name {String}<br/>
  Block name
* [decl.baseBlock] {String}<br/>
  Name of the parent block
* [decl.baseMix] {Array}<br/>
  Mixed block names
* [decl.modName] {String}<br/>
  Modifier name
* [decl.modVal] {String | Array}<br/>
  Modifier value
* [props] {Object}<br/>
  Methods
* [staticProps] {Object}<br/>
  Static methods

##### Returns:

{Function}

#### create ( block, [params] ) → {BEM}

Factory method for creating an instance of the block named

##### Parameters:

* block {String | Object}<br/>
  Block name or description
* [params] {Object}<br/>
  Block parameters

##### Returns:

{BEM}

#### getName () → {String}

Returns the name of the current block

##### Returns:

{String}

#### on ( e, [data], fn, [ctx] ) → {Function}

Adds an event handler

##### Parameters:

* e {String | Object}<br/>
  Event type
* [data] {Object}<br/>
  Additional data that the handler gets as e.data
* fn {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

##### Returns:

{Function}

this

#### un ( [e], [fn], [ctx] ) → {Function}

Removes event handler or handlers

##### Parameters:

* [e] {String | Object}<br/>
  Event type
* [fn] {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

##### Returns:

{Function}

this

#### decl ( decl, [props], [staticProps] ) → {Function}  protected

Declares elements and creates an elements class

##### Parameters:

* decl {Object}<br/>
  Element description
* decl.block {String}<br/>
  Block name
* decl.elem {String}<br/>
  Element name
* [decl.baseBlock] {String}<br/>
  Name of the parent block
* [decl.baseMix] {Array}<br/>
  Mixed block names
* [decl.modName] {String}<br/>
  Modifier name
* [decl.modVal] {String | Array}<br/>
  Modifier value
* [props] {Object}<br/>
  Methods
* [staticProps] {Object}<br/>
  Static methods

##### Returns:

{Function}

#### create ( desc, [params] ) → {BEM}

Factory method for creating an instance of the element named

##### Parameters:

* desc {Object}<br/>
  Description
* [params] {Object}<br/>
  Instance parameters

##### Returns:

{BEM}

#### getName ( [shortName] ) → {String}  protected

Returns the name of the current instance

##### Parameters:

* [shortName] {Boolean}<br/>
  return the short name of the current instance

##### Returns:

{String}

# i-bem__internal Module

## buildClass ( block, [elem], [modName], [modVal] ) → {String}

Builds the class of a block or element with a modifier

### Parameters:

* block {String}<br/>
  Block name
* [elem] {String}<br/>
  Element name
* [modName] {String}<br/>
  Modifier name
* [modVal] {String | Number}<br/>
  Modifier value

### Returns:

{String}

Class

## buildClasses ( block, [elem], [mods] ) → {String}

Builds full classes for a buffer or element with modifiers

### Parameters:

* block {String}<br/>
  Block name
* [elem] {String}<br/>
  Element name
* [mods] {Object}<br/>
  Modifiers

### Returns:

{String}

Class

# i-bem Module

## BEM Class

Aughtments {BEM}

Base block for creating BEM blocks

### Instance properties

#### params {Object} (readonly)

Block parameters, taking into account the defaults

### Instance methods

#### on ( e, [data], fn, [ctx] ) → {BEM}

Adds an event handler

##### Parameters:

* e {String | Object}<br/>
  Event type
* [data] {Object}<br/>
  Additional data that the handler gets as e.data
* fn {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

##### Returns:

{BEM}

this

#### un ( [e], [fn], [ctx] ) → {BEM}

Removes event handler or handlers

##### Parameters:

* [e] {String | Object}<br/>
  Event type
* [fn] {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

##### Returns:

{BEM}

this

#### emit ( e, [data] ) → {BEM}  protected

Executes the block's event handlers and live event handlers

##### Parameters:

* e {String}<br/>
  Event name
* [data] {Object}<br/>
  Additional information

##### Returns:

{BEM}

this

#### hasMod ( [elem], modName, [modVal] ) → {Boolean}

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

#### getMod ( [elem], modName ) → {String}

Returns the value of the modifier of the block/nested element

##### Parameters:

* [elem] {Object}<br/>
  Nested element
* modName {String}<br/>
  Modifier name

##### Returns:

{String}

Modifier value

#### getMods ( [elem], [...modNames] ) → {Object}

Returns values of modifiers of the block/nested element

##### Parameters:

* [elem] {Object}<br/>
  Nested element
* [...modNames] {String}<br/>
  Modifier names

##### Returns:

{Object}

Hash of modifier values

#### setMod ( [elem], modName, modVal ) → {BEM}

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

this

#### _onSetMod ( modName, modVal, oldModVal, [elem], [elemName] )  protected

Function after successfully changing the modifier of the block/nested element

##### Parameters:

* modName {String}<br/>
  Modifier name
* modVal {String}<br/>
  Modifier value
* oldModVal {String}<br/>
  Old modifier value
* [elem] {Object}<br/>
  Nested element
* [elemName] {String}<br/>
  Element name

#### toggleMod ( [elem], modName, modVal1, [modVal2], [condition] ) → {BEM}

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

this

#### delMod ( [elem], modName ) → {BEM}  protected

Removes a modifier from a block/nested element

##### Parameters:

* [elem] {Object}<br/>
  Nested element
* modName {String}<br/>
  Modifier name

##### Returns:

{BEM}

this

#### getDefaultParams () → {Object}  protected

Returns a block's default parameters

##### Returns:

{Object}

#### nextTick ( fn ) → {BEM}  protected

Executes given callback on next turn eventloop in block's context

##### Parameters:

* fn {Function}<br/>
  callback

##### Returns:

{BEM}

this

### Static properties

#### blocks {Object}

Storage for block declarations (hash by block name)

### Static methods

#### decl ( decl, [props], [staticProps] ) → {Function}

Declares blocks and creates a block class

##### Parameters:

* decl {String | Object}<br/>
  Block name (simple syntax) or description
* decl.block | decl.name {String}<br/>
  Block name
* [decl.baseBlock] {String}<br/>
  Name of the parent block
* [decl.baseMix] {Array}<br/>
  Mixed block names
* [decl.modName] {String}<br/>
  Modifier name
* [decl.modVal] {String | Array}<br/>
  Modifier value
* [props] {Object}<br/>
  Methods
* [staticProps] {Object}<br/>
  Static methods

##### Returns:

{Function}

#### create ( block, [params] ) → {BEM}

Factory method for creating an instance of the block named

##### Parameters:

* block {String | Object}<br/>
  Block name or description
* [params] {Object}<br/>
  Block parameters

##### Returns:

{BEM}

#### getName () → {String}

Returns the name of the current block

##### Returns:

{String}

#### on ( e, [data], fn, [ctx] ) → {Function}

Adds an event handler

##### Parameters:

* e {String | Object}<br/>
  Event type
* [data] {Object}<br/>
  Additional data that the handler gets as e.data
* fn {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

##### Returns:

{Function}

this

#### un ( [e], [fn], [ctx] ) → {Function}

Removes event handler or handlers

##### Parameters:

* [e] {String | Object}<br/>
  Event type
* [fn] {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

##### Returns:

{Function}

this

#### decl ( decl, [props], [staticProps] ) → {Function}  protected

Declares elements and creates an elements class

##### Parameters:

* decl {Object}<br/>
  Element description
* decl.block {String}<br/>
  Block name
* decl.elem {String}<br/>
  Element name
* [decl.baseBlock] {String}<br/>
  Name of the parent block
* [decl.baseMix] {Array}<br/>
  Mixed block names
* [decl.modName] {String}<br/>
  Modifier name
* [decl.modVal] {String | Array}<br/>
  Modifier value
* [props] {Object}<br/>
  Methods
* [staticProps] {Object}<br/>
  Static methods

##### Returns:

{Function}

#### create ( desc, [params] ) → {BEM}

Factory method for creating an instance of the element named

##### Parameters:

* desc {Object}<br/>
  Description
* [params] {Object}<br/>
  Instance parameters

##### Returns:

{BEM}

#### getName ( [shortName] ) → {String}  protected

Returns the name of the current instance

##### Parameters:

* [shortName] {Boolean}<br/>
  return the short name of the current instance

##### Returns:

{String}

# i-bem__collection Module

## BEMCollection Class

Aughtments {Array}

Base class for collections. Create collection of similar objects.

### Static methods

#### getMethods () → {Array}

Get method names that will be implemented in collection

##### Returns:

{Array}

#### getBase () → {Object}

Get base prototype for collection

##### Returns:

{Object}

#### create ( a ) → {Object}

Create collection instance

##### Parameters:

* a {Array}<br/>
  list of similar objects

##### Returns:

{Object}

# i-bem__collection_type_dom Module

## BEMDOMCollection Class

Aughtments {i-bem__collection}

Collection of BEM.DOM blocks. Implementation of BEM.DOM methods for array of blocks.

### Static methods

#### getMethods () → {Array}

Get methods that will be implemented in BEMDOMCollection

##### Returns:

{Array}

# i-bem__dom Module

## BEMDOM Class

Aughtments {BEMDOM}

Base block for creating BEM blocks that have DOM representation

### Instance properties

#### domElem {jQuery} (readonly)

DOM elements of block

### Instance methods

#### findBlocksInside ( [elem], block ) → {BEMDOM}

Finds blocks inside the current block or its elements (including context)

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### findBlockInside ( [elem], block ) → {BEMDOM}

Finds the first block inside the current block or its elements (including context)

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### findBlocksOutside ( [elem], block ) → {BEMDOM}

Finds blocks outside the current block or its elements (including context)

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### findBlockOutside ( [elem], block ) → {BEMDOM}

Finds the first block outside the current block or its elements (including context)

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### findBlocksOn ( [elem], block ) → {BEMDOM}

Finds blocks on DOM elements of the current block or its elements

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### findBlockOn ( [elem], block ) → {BEMDOM}

Finds the first block on DOM elements of the current block or its elements

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### bindToDomElem ( domElem, event, [data], fn ) → {BEMDOM}  protected

Adds an event handler for any DOM element

##### Parameters:

* domElem {jQuery}<br/>
  DOM element where the event will be listened for
* event {String | Object}<br/>
  Event name or event object
* [data] {Object}<br/>
  Additional event data
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

##### Returns:

{BEMDOM}

this

#### bindToDoc ( event, [data], fn ) → {BEMDOM}  protected

Adds an event handler to the document

##### Parameters:

* event {String | Object}<br/>
  Event name or event object
* [data] {Object}<br/>
  Additional event data
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

##### Returns:

{BEMDOM}

this

#### bindToWin ( event, [data], fn ) → {BEMDOM}  protected

Adds an event handler to the window

##### Parameters:

* event {String | Object}<br/>
  Event name or event object
* [data] {Object}<br/>
  Additional event data
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

##### Returns:

{BEMDOM}

this

#### bindTo ( [elem], event, [data], fn ) → {BEMDOM}  protected

Adds an event handler to the block's main DOM elements or its nested elements

##### Parameters:

* [elem] {jQuery | String}<br/>
  Element
* event {String | Object}<br/>
  Event name or event object
* [data] {Object}<br/>
  Additional event data
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

##### Returns:

{BEMDOM}

this

#### unbindFromDomElem ( domElem, event, [fn] ) → {BEMDOM}  protected

Removes event handlers from any DOM element

##### Parameters:

* domElem {jQuery}<br/>
  DOM element where the event was being listened for
* event {String | Object}<br/>
  Event name or event object
* [fn] {Function}<br/>
  Handler function

##### Returns:

{BEMDOM}

this

#### unbindFromDoc ( event, [fn] ) → {BEMDOM}  protected

Removes event handler from document

##### Parameters:

* event {String | Object}<br/>
  Event name or event object
* [fn] {Function}<br/>
  Handler function

##### Returns:

{BEMDOM}

this

#### unbindFromWin ( event, [fn] ) → {BEMDOM}  protected

Removes event handler from window

##### Parameters:

* event {String | Object}<br/>
  Event name or event object
* [fn] {Function}<br/>
  Handler function

##### Returns:

{BEMDOM}

this

#### unbindFrom ( [elem], event, [fn] ) → {BEMDOM}  protected

Removes event handlers from the block's main DOM elements or its nested elements

##### Parameters:

* [elem] {jQuery | String}<br/>
  Nested element
* event {String | Object}<br/>
  Event name or event object
* [fn] {Function}<br/>
  Handler function

##### Returns:

{BEMDOM}

this

#### setMod ( [elem], modName, modVal ) → {BEMDOM}

Sets a modifier for a block/nested element

##### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* modName {String}<br/>
  Modifier name
* modVal {String}<br/>
  Modifier value

##### Returns:

{BEMDOM}

this

#### findElem ( [ctx=this.domElem], names, [modName], [modVal], [strictMode=false] ) → {jQuery}

Finds elements nested in a block

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  Element where search is being performed
* names {String}<br/>
  Nested element name (or names separated by spaces)
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value
* [strictMode=false] {Boolean}

##### Returns:

{jQuery}

DOM elements

#### _filterFindElemResults ( res ) → {jQuery}

Filters results of findElem helper execution in strict mode

##### Parameters:

* res {jQuery}<br/>
  DOM elements

##### Returns:

{jQuery}

DOM elements

#### elem ( names, [modName], [modVal] ) → {jQuery}

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

#### closestElem ( ctx, elemName ) → {jQuery}

Finds elements outside the context

##### Parameters:

* ctx {jQuery}<br/>
  context
* elemName {String}<br/>
  Element name

##### Returns:

{jQuery}

DOM elements

#### dropElemCache ( [names], [modName], [modVal] ) → {BEMDOM}  protected

Clearing the cache for elements

##### Parameters:

* [names] {String}<br/>
  Nested element name (or names separated by spaces)
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{BEMDOM}

this

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

#### containsDomElem ( [ctx=this.domElem], domElem ) → {Boolean}  protected

Checks whether a DOM element is in a block

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  Element where check is being performed
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

#### getMod ( [elem], modName ) → {String}  protected

Delegates native getMod helper to element's instance

##### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* modName {String}<br/>
  Modifier name

##### Returns:

{String}

Modifier value

#### getMods ( [elem], [modName1] ) → {Object}  protected

Delegates native getMods helper to element's instance

##### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* [modName1] {String}<br/>
  ..., modNameN] Modifier names

##### Returns:

{Object}

Hash of modifier values

#### setMod ( [elem], modName, modVal ) → {BEM}  protected

Delegates native setMod helper to element's instances

##### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* modName {String}<br/>
  Modifier name
* modVal {String}<br/>
  Modifier value

##### Returns:

{BEM}

#### block () → {BEMDOM}

Returns and initializes (if necessary) the own block of current element

##### Returns:

{BEMDOM}

#### _filterFindElemResults ( res ) → {jQuery}

Filters results of findElem helper execution in strict mode

##### Parameters:

* res {jQuery}<br/>
  DOM elements

##### Returns:

{jQuery}

DOM elements

#### elemInstance ( elem, [modName], [modVal] ) → {BEMDOM}

Lazy search (caches results) for the first instance of defined element and intializes it (if necessary)

##### Parameters:

* elem {String | jQuery}<br/>
  Element
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{BEMDOM}

#### elemInstances ( elem, [modName], [modVal] ) → {BEMDOM}

Lazy search (caches results) for instances of defined elements and intializes it (if necessary)

##### Parameters:

* elem {String | jQuery}<br/>
  Element
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{BEMDOM}

#### findElemInstance ( [ctx=this.domElem], elem, [modName], [modVal], [strictMode=false] ) → {BEMDOM}

Finds the first instance of defined element and intializes it (if necessary)

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  Element where search is being performed
* elem {String | jQuery}<br/>
  Element
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value
* [strictMode=false] {Boolean}

##### Returns:

{BEMDOM}

#### findElemInstances ( [ctx=this.domElem], elem, [modName], [modVal], [strictMode=false] ) → {BEMDOM}

Finds instances of defined elements and intializes it (if necessary)

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  Element where search is being performed
* elem {String | jQuery}<br/>
  Element
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value
* [strictMode=false] {Boolean}

##### Returns:

{BEMDOM}

#### closestElem ( [ctx=this.domElem], elemName ) → {jQuery}

Finds elements outside the context or current element

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  context (current element by default)
* elemName {String}<br/>
  Element name

##### Returns:

{jQuery}

DOM elements

#### closestElemInstance ( [ctx=this.domElem], elemName ) → {BEMDOM}

Finds instance of defined element outside the context or current element

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  context (current element by default)
* elemName {String}<br/>
  Element name

##### Returns:

{BEMDOM}

#### closestElemInstances ( [ctx=this.domElem], elemName ) → {BEMDOM}

Finds instances of defined elements outside the context or current element

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  context (current element by default)
* elemName {String}<br/>
  Element name

##### Returns:

{BEMDOM}

### Static properties

#### scope {jQuery}

Scope, will be set on onDomReady to `<body>`

#### doc {jQuery}

Document shortcut

#### win {jQuery}

Window shortcut

### Static methods

#### init ( [ctx=scope] ) → {jQuery}

Initializes blocks on a fragment of the DOM tree

##### Parameters:

* [ctx=scope] {jQuery | String}<br/>
  Root DOM node

##### Returns:

{jQuery}

ctx Initialization context

#### destruct ( ctx, [excludeSelf=false] )

Destroys blocks on a fragment of the DOM tree

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* [excludeSelf=false] {Boolean}<br/>
  Exclude the main domElem

#### update ( ctx, content ) → {jQuery}

Replaces a fragment of the DOM tree inside the context, destroying old blocks and intializing new ones

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  New content

##### Returns:

{jQuery}

Updated root DOM node

#### replace ( ctx, content ) → {jQuery}

Changes a fragment of the DOM tree including the context and initializes blocks.

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

New content

#### append ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree at the end of the context and initializes blocks

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

New content

#### prepend ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree at the beginning of the context and initializes blocks

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

New content

#### before ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree before the context and initializes blocks

##### Parameters:

* ctx {jQuery}<br/>
  Contextual DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

New content

#### after ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree after the context and initializes blocks

##### Parameters:

* ctx {jQuery}<br/>
  Contextual DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

New content

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

#### on ( [ctx], e, [data], fn, [fnCtx] )

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

#### un ( [ctx], e, [fn], [fnCtx] )

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

#### buildClass ( [elem], [modName], [modVal] ) → {String}

Builds a CSS class corresponding to the block/element and modifier

##### Parameters:

* [elem] {String}<br/>
  Element name
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{String}

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

#### decl ( name, [props], [staticProps], [_autoDecl] ) → {Function}  protected

Auto-declarator for elements

##### Parameters:

* name {Object}<br/>
  Instance name
* [props] {Object}<br/>
  Methods
* [staticProps] {Object}<br/>
  Static methods
* [_autoDecl] {Object}<br/>
  Auto-declaration flag

##### Returns:

{Function}

#### liveInitOnBlockEvent ( event, [callback] ) → {Function}  protected

Helper for live initialization for an own block's event

##### Parameters:

* event {String}<br/>
  Event name
* [callback] {Function}<br/>
  Handler to be called after successful initialization in the new element's context

##### Returns:

{Function}

this

#### buildClass ( [elem], [modName], [modVal] ) → {String}

Builds a CSS class corresponding to the block/element and modifier

##### Parameters:

* [elem] {String}<br/>
  Element name
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{String}

# i-bem__dom Module

Overrides BEM.DOM.findBlocks* methods that they return i-bem__collection_type_dom

## BEMDOM Class

Aughtments {BEMDOM}

Base block for creating BEM blocks that have DOM representation

### Instance properties

#### domElem {jQuery} (readonly)

DOM elements of block

### Instance methods

#### findBlocksInside ( [elem], block ) → {BEMDOM}

Finds blocks inside the current block or its elements (including context)

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### findBlockInside ( [elem], block ) → {BEMDOM}

Finds the first block inside the current block or its elements (including context)

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### findBlocksOutside ( [elem], block ) → {BEMDOM}

Finds blocks outside the current block or its elements (including context)

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### findBlockOutside ( [elem], block ) → {BEMDOM}

Finds the first block outside the current block or its elements (including context)

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### findBlocksOn ( [elem], block ) → {BEMDOM}

Finds blocks on DOM elements of the current block or its elements

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### findBlockOn ( [elem], block ) → {BEMDOM}

Finds the first block on DOM elements of the current block or its elements

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### bindToDomElem ( domElem, event, [data], fn ) → {BEMDOM}  protected

Adds an event handler for any DOM element

##### Parameters:

* domElem {jQuery}<br/>
  DOM element where the event will be listened for
* event {String | Object}<br/>
  Event name or event object
* [data] {Object}<br/>
  Additional event data
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

##### Returns:

{BEMDOM}

this

#### bindToDoc ( event, [data], fn ) → {BEMDOM}  protected

Adds an event handler to the document

##### Parameters:

* event {String | Object}<br/>
  Event name or event object
* [data] {Object}<br/>
  Additional event data
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

##### Returns:

{BEMDOM}

this

#### bindToWin ( event, [data], fn ) → {BEMDOM}  protected

Adds an event handler to the window

##### Parameters:

* event {String | Object}<br/>
  Event name or event object
* [data] {Object}<br/>
  Additional event data
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

##### Returns:

{BEMDOM}

this

#### bindTo ( [elem], event, [data], fn ) → {BEMDOM}  protected

Adds an event handler to the block's main DOM elements or its nested elements

##### Parameters:

* [elem] {jQuery | String}<br/>
  Element
* event {String | Object}<br/>
  Event name or event object
* [data] {Object}<br/>
  Additional event data
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

##### Returns:

{BEMDOM}

this

#### unbindFromDomElem ( domElem, event, [fn] ) → {BEMDOM}  protected

Removes event handlers from any DOM element

##### Parameters:

* domElem {jQuery}<br/>
  DOM element where the event was being listened for
* event {String | Object}<br/>
  Event name or event object
* [fn] {Function}<br/>
  Handler function

##### Returns:

{BEMDOM}

this

#### unbindFromDoc ( event, [fn] ) → {BEMDOM}  protected

Removes event handler from document

##### Parameters:

* event {String | Object}<br/>
  Event name or event object
* [fn] {Function}<br/>
  Handler function

##### Returns:

{BEMDOM}

this

#### unbindFromWin ( event, [fn] ) → {BEMDOM}  protected

Removes event handler from window

##### Parameters:

* event {String | Object}<br/>
  Event name or event object
* [fn] {Function}<br/>
  Handler function

##### Returns:

{BEMDOM}

this

#### unbindFrom ( [elem], event, [fn] ) → {BEMDOM}  protected

Removes event handlers from the block's main DOM elements or its nested elements

##### Parameters:

* [elem] {jQuery | String}<br/>
  Nested element
* event {String | Object}<br/>
  Event name or event object
* [fn] {Function}<br/>
  Handler function

##### Returns:

{BEMDOM}

this

#### setMod ( [elem], modName, modVal ) → {BEMDOM}

Sets a modifier for a block/nested element

##### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* modName {String}<br/>
  Modifier name
* modVal {String}<br/>
  Modifier value

##### Returns:

{BEMDOM}

this

#### findElem ( [ctx=this.domElem], names, [modName], [modVal], [strictMode=false] ) → {jQuery}

Finds elements nested in a block

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  Element where search is being performed
* names {String}<br/>
  Nested element name (or names separated by spaces)
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value
* [strictMode=false] {Boolean}

##### Returns:

{jQuery}

DOM elements

#### _filterFindElemResults ( res ) → {jQuery}

Filters results of findElem helper execution in strict mode

##### Parameters:

* res {jQuery}<br/>
  DOM elements

##### Returns:

{jQuery}

DOM elements

#### elem ( names, [modName], [modVal] ) → {jQuery}

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

#### closestElem ( ctx, elemName ) → {jQuery}

Finds elements outside the context

##### Parameters:

* ctx {jQuery}<br/>
  context
* elemName {String}<br/>
  Element name

##### Returns:

{jQuery}

DOM elements

#### dropElemCache ( [names], [modName], [modVal] ) → {BEMDOM}  protected

Clearing the cache for elements

##### Parameters:

* [names] {String}<br/>
  Nested element name (or names separated by spaces)
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{BEMDOM}

this

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

#### containsDomElem ( [ctx=this.domElem], domElem ) → {Boolean}  protected

Checks whether a DOM element is in a block

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  Element where check is being performed
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

#### getMod ( [elem], modName ) → {String}  protected

Delegates native getMod helper to element's instance

##### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* modName {String}<br/>
  Modifier name

##### Returns:

{String}

Modifier value

#### getMods ( [elem], [modName1] ) → {Object}  protected

Delegates native getMods helper to element's instance

##### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* [modName1] {String}<br/>
  ..., modNameN] Modifier names

##### Returns:

{Object}

Hash of modifier values

#### setMod ( [elem], modName, modVal ) → {BEM}  protected

Delegates native setMod helper to element's instances

##### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* modName {String}<br/>
  Modifier name
* modVal {String}<br/>
  Modifier value

##### Returns:

{BEM}

#### block () → {BEMDOM}

Returns and initializes (if necessary) the own block of current element

##### Returns:

{BEMDOM}

#### _filterFindElemResults ( res ) → {jQuery}

Filters results of findElem helper execution in strict mode

##### Parameters:

* res {jQuery}<br/>
  DOM elements

##### Returns:

{jQuery}

DOM elements

#### elemInstance ( elem, [modName], [modVal] ) → {BEMDOM}

Lazy search (caches results) for the first instance of defined element and intializes it (if necessary)

##### Parameters:

* elem {String | jQuery}<br/>
  Element
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{BEMDOM}

#### elemInstances ( elem, [modName], [modVal] ) → {BEMDOM}

Lazy search (caches results) for instances of defined elements and intializes it (if necessary)

##### Parameters:

* elem {String | jQuery}<br/>
  Element
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{BEMDOM}

#### findElemInstance ( [ctx=this.domElem], elem, [modName], [modVal], [strictMode=false] ) → {BEMDOM}

Finds the first instance of defined element and intializes it (if necessary)

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  Element where search is being performed
* elem {String | jQuery}<br/>
  Element
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value
* [strictMode=false] {Boolean}

##### Returns:

{BEMDOM}

#### findElemInstances ( [ctx=this.domElem], elem, [modName], [modVal], [strictMode=false] ) → {BEMDOM}

Finds instances of defined elements and intializes it (if necessary)

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  Element where search is being performed
* elem {String | jQuery}<br/>
  Element
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value
* [strictMode=false] {Boolean}

##### Returns:

{BEMDOM}

#### closestElem ( [ctx=this.domElem], elemName ) → {jQuery}

Finds elements outside the context or current element

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  context (current element by default)
* elemName {String}<br/>
  Element name

##### Returns:

{jQuery}

DOM elements

#### closestElemInstance ( [ctx=this.domElem], elemName ) → {BEMDOM}

Finds instance of defined element outside the context or current element

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  context (current element by default)
* elemName {String}<br/>
  Element name

##### Returns:

{BEMDOM}

#### closestElemInstances ( [ctx=this.domElem], elemName ) → {BEMDOM}

Finds instances of defined elements outside the context or current element

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  context (current element by default)
* elemName {String}<br/>
  Element name

##### Returns:

{BEMDOM}

### Static properties

#### scope {jQuery}

Scope, will be set on onDomReady to `<body>`

#### doc {jQuery}

Document shortcut

#### win {jQuery}

Window shortcut

### Static methods

#### init ( [ctx=scope] ) → {jQuery}

Initializes blocks on a fragment of the DOM tree

##### Parameters:

* [ctx=scope] {jQuery | String}<br/>
  Root DOM node

##### Returns:

{jQuery}

ctx Initialization context

#### destruct ( ctx, [excludeSelf=false] )

Destroys blocks on a fragment of the DOM tree

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* [excludeSelf=false] {Boolean}<br/>
  Exclude the main domElem

#### update ( ctx, content ) → {jQuery}

Replaces a fragment of the DOM tree inside the context, destroying old blocks and intializing new ones

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  New content

##### Returns:

{jQuery}

Updated root DOM node

#### replace ( ctx, content ) → {jQuery}

Changes a fragment of the DOM tree including the context and initializes blocks.

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

New content

#### append ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree at the end of the context and initializes blocks

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

New content

#### prepend ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree at the beginning of the context and initializes blocks

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

New content

#### before ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree before the context and initializes blocks

##### Parameters:

* ctx {jQuery}<br/>
  Contextual DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

New content

#### after ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree after the context and initializes blocks

##### Parameters:

* ctx {jQuery}<br/>
  Contextual DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

New content

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

#### on ( [ctx], e, [data], fn, [fnCtx] )

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

#### un ( [ctx], e, [fn], [fnCtx] )

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

#### buildClass ( [elem], [modName], [modVal] ) → {String}

Builds a CSS class corresponding to the block/element and modifier

##### Parameters:

* [elem] {String}<br/>
  Element name
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{String}

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

#### decl ( name, [props], [staticProps], [_autoDecl] ) → {Function}  protected

Auto-declarator for elements

##### Parameters:

* name {Object}<br/>
  Instance name
* [props] {Object}<br/>
  Methods
* [staticProps] {Object}<br/>
  Static methods
* [_autoDecl] {Object}<br/>
  Auto-declaration flag

##### Returns:

{Function}

#### liveInitOnBlockEvent ( event, [callback] ) → {Function}  protected

Helper for live initialization for an own block's event

##### Parameters:

* event {String}<br/>
  Event name
* [callback] {Function}<br/>
  Handler to be called after successful initialization in the new element's context

##### Returns:

{Function}

this

#### buildClass ( [elem], [modName], [modVal] ) → {String}

Builds a CSS class corresponding to the block/element and modifier

##### Parameters:

* [elem] {String}<br/>
  Element name
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{String}

# i-bem__dom Module

## BEMDOM Class

Aughtments {BEMDOM}

Base block for creating BEM blocks that have DOM representation

### Instance properties

#### domElem {jQuery} (readonly)

DOM elements of block

### Instance methods

#### findBlocksInside ( [elem], block ) → {BEMDOM}

Finds blocks inside the current block or its elements (including context)

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### findBlockInside ( [elem], block ) → {BEMDOM}

Finds the first block inside the current block or its elements (including context)

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### findBlocksOutside ( [elem], block ) → {BEMDOM}

Finds blocks outside the current block or its elements (including context)

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### findBlockOutside ( [elem], block ) → {BEMDOM}

Finds the first block outside the current block or its elements (including context)

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### findBlocksOn ( [elem], block ) → {BEMDOM}

Finds blocks on DOM elements of the current block or its elements

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### findBlockOn ( [elem], block ) → {BEMDOM}

Finds the first block on DOM elements of the current block or its elements

##### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

##### Returns:

{BEMDOM}

#### bindToDomElem ( domElem, event, [data], fn ) → {BEMDOM}  protected

Adds an event handler for any DOM element

##### Parameters:

* domElem {jQuery}<br/>
  DOM element where the event will be listened for
* event {String | Object}<br/>
  Event name or event object
* [data] {Object}<br/>
  Additional event data
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

##### Returns:

{BEMDOM}

this

#### bindToDoc ( event, [data], fn ) → {BEMDOM}  protected

Adds an event handler to the document

##### Parameters:

* event {String | Object}<br/>
  Event name or event object
* [data] {Object}<br/>
  Additional event data
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

##### Returns:

{BEMDOM}

this

#### bindToWin ( event, [data], fn ) → {BEMDOM}  protected

Adds an event handler to the window

##### Parameters:

* event {String | Object}<br/>
  Event name or event object
* [data] {Object}<br/>
  Additional event data
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

##### Returns:

{BEMDOM}

this

#### bindTo ( [elem], event, [data], fn ) → {BEMDOM}  protected

Adds an event handler to the block's main DOM elements or its nested elements

##### Parameters:

* [elem] {jQuery | String}<br/>
  Element
* event {String | Object}<br/>
  Event name or event object
* [data] {Object}<br/>
  Additional event data
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

##### Returns:

{BEMDOM}

this

#### unbindFromDomElem ( domElem, event, [fn] ) → {BEMDOM}  protected

Removes event handlers from any DOM element

##### Parameters:

* domElem {jQuery}<br/>
  DOM element where the event was being listened for
* event {String | Object}<br/>
  Event name or event object
* [fn] {Function}<br/>
  Handler function

##### Returns:

{BEMDOM}

this

#### unbindFromDoc ( event, [fn] ) → {BEMDOM}  protected

Removes event handler from document

##### Parameters:

* event {String | Object}<br/>
  Event name or event object
* [fn] {Function}<br/>
  Handler function

##### Returns:

{BEMDOM}

this

#### unbindFromWin ( event, [fn] ) → {BEMDOM}  protected

Removes event handler from window

##### Parameters:

* event {String | Object}<br/>
  Event name or event object
* [fn] {Function}<br/>
  Handler function

##### Returns:

{BEMDOM}

this

#### unbindFrom ( [elem], event, [fn] ) → {BEMDOM}  protected

Removes event handlers from the block's main DOM elements or its nested elements

##### Parameters:

* [elem] {jQuery | String}<br/>
  Nested element
* event {String | Object}<br/>
  Event name or event object
* [fn] {Function}<br/>
  Handler function

##### Returns:

{BEMDOM}

this

#### setMod ( [elem], modName, modVal ) → {BEMDOM}

Sets a modifier for a block/nested element

##### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* modName {String}<br/>
  Modifier name
* modVal {String}<br/>
  Modifier value

##### Returns:

{BEMDOM}

this

#### findElem ( [ctx=this.domElem], names, [modName], [modVal], [strictMode=false] ) → {jQuery}

Finds elements nested in a block

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  Element where search is being performed
* names {String}<br/>
  Nested element name (or names separated by spaces)
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value
* [strictMode=false] {Boolean}

##### Returns:

{jQuery}

DOM elements

#### _filterFindElemResults ( res ) → {jQuery}

Filters results of findElem helper execution in strict mode

##### Parameters:

* res {jQuery}<br/>
  DOM elements

##### Returns:

{jQuery}

DOM elements

#### elem ( names, [modName], [modVal] ) → {jQuery}

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

#### closestElem ( ctx, elemName ) → {jQuery}

Finds elements outside the context

##### Parameters:

* ctx {jQuery}<br/>
  context
* elemName {String}<br/>
  Element name

##### Returns:

{jQuery}

DOM elements

#### dropElemCache ( [names], [modName], [modVal] ) → {BEMDOM}  protected

Clearing the cache for elements

##### Parameters:

* [names] {String}<br/>
  Nested element name (or names separated by spaces)
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{BEMDOM}

this

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

#### containsDomElem ( [ctx=this.domElem], domElem ) → {Boolean}  protected

Checks whether a DOM element is in a block

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  Element where check is being performed
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

#### getMod ( [elem], modName ) → {String}  protected

Delegates native getMod helper to element's instance

##### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* modName {String}<br/>
  Modifier name

##### Returns:

{String}

Modifier value

#### getMods ( [elem], [modName1] ) → {Object}  protected

Delegates native getMods helper to element's instance

##### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* [modName1] {String}<br/>
  ..., modNameN] Modifier names

##### Returns:

{Object}

Hash of modifier values

#### setMod ( [elem], modName, modVal ) → {BEM}  protected

Delegates native setMod helper to element's instances

##### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* modName {String}<br/>
  Modifier name
* modVal {String}<br/>
  Modifier value

##### Returns:

{BEM}

#### block () → {BEMDOM}

Returns and initializes (if necessary) the own block of current element

##### Returns:

{BEMDOM}

#### _filterFindElemResults ( res ) → {jQuery}

Filters results of findElem helper execution in strict mode

##### Parameters:

* res {jQuery}<br/>
  DOM elements

##### Returns:

{jQuery}

DOM elements

#### elemInstance ( elem, [modName], [modVal] ) → {BEMDOM}

Lazy search (caches results) for the first instance of defined element and intializes it (if necessary)

##### Parameters:

* elem {String | jQuery}<br/>
  Element
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{BEMDOM}

#### elemInstances ( elem, [modName], [modVal] ) → {BEMDOM}

Lazy search (caches results) for instances of defined elements and intializes it (if necessary)

##### Parameters:

* elem {String | jQuery}<br/>
  Element
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{BEMDOM}

#### findElemInstance ( [ctx=this.domElem], elem, [modName], [modVal], [strictMode=false] ) → {BEMDOM}

Finds the first instance of defined element and intializes it (if necessary)

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  Element where search is being performed
* elem {String | jQuery}<br/>
  Element
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value
* [strictMode=false] {Boolean}

##### Returns:

{BEMDOM}

#### findElemInstances ( [ctx=this.domElem], elem, [modName], [modVal], [strictMode=false] ) → {BEMDOM}

Finds instances of defined elements and intializes it (if necessary)

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  Element where search is being performed
* elem {String | jQuery}<br/>
  Element
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value
* [strictMode=false] {Boolean}

##### Returns:

{BEMDOM}

#### closestElem ( [ctx=this.domElem], elemName ) → {jQuery}

Finds elements outside the context or current element

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  context (current element by default)
* elemName {String}<br/>
  Element name

##### Returns:

{jQuery}

DOM elements

#### closestElemInstance ( [ctx=this.domElem], elemName ) → {BEMDOM}

Finds instance of defined element outside the context or current element

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  context (current element by default)
* elemName {String}<br/>
  Element name

##### Returns:

{BEMDOM}

#### closestElemInstances ( [ctx=this.domElem], elemName ) → {BEMDOM}

Finds instances of defined elements outside the context or current element

##### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  context (current element by default)
* elemName {String}<br/>
  Element name

##### Returns:

{BEMDOM}

### Static properties

#### scope {jQuery}

Scope, will be set on onDomReady to `<body>`

#### doc {jQuery}

Document shortcut

#### win {jQuery}

Window shortcut

### Static methods

#### init ( [ctx=scope] ) → {jQuery}

Initializes blocks on a fragment of the DOM tree

##### Parameters:

* [ctx=scope] {jQuery | String}<br/>
  Root DOM node

##### Returns:

{jQuery}

ctx Initialization context

#### destruct ( ctx, [excludeSelf=false] )

Destroys blocks on a fragment of the DOM tree

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* [excludeSelf=false] {Boolean}<br/>
  Exclude the main domElem

#### update ( ctx, content ) → {jQuery}

Replaces a fragment of the DOM tree inside the context, destroying old blocks and intializing new ones

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  New content

##### Returns:

{jQuery}

Updated root DOM node

#### replace ( ctx, content ) → {jQuery}

Changes a fragment of the DOM tree including the context and initializes blocks.

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

New content

#### append ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree at the end of the context and initializes blocks

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

New content

#### prepend ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree at the beginning of the context and initializes blocks

##### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

New content

#### before ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree before the context and initializes blocks

##### Parameters:

* ctx {jQuery}<br/>
  Contextual DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

New content

#### after ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree after the context and initializes blocks

##### Parameters:

* ctx {jQuery}<br/>
  Contextual DOM node
* content {jQuery | String}<br/>
  Content to be added

##### Returns:

{jQuery}

New content

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

#### on ( [ctx], e, [data], fn, [fnCtx] )

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

#### un ( [ctx], e, [fn], [fnCtx] )

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

#### buildClass ( [elem], [modName], [modVal] ) → {String}

Builds a CSS class corresponding to the block/element and modifier

##### Parameters:

* [elem] {String}<br/>
  Element name
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{String}

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

#### decl ( name, [props], [staticProps], [_autoDecl] ) → {Function}  protected

Auto-declarator for elements

##### Parameters:

* name {Object}<br/>
  Instance name
* [props] {Object}<br/>
  Methods
* [staticProps] {Object}<br/>
  Static methods
* [_autoDecl] {Object}<br/>
  Auto-declaration flag

##### Returns:

{Function}

#### liveInitOnBlockEvent ( event, [callback] ) → {Function}  protected

Helper for live initialization for an own block's event

##### Parameters:

* event {String}<br/>
  Event name
* [callback] {Function}<br/>
  Handler to be called after successful initialization in the new element's context

##### Returns:

{Function}

this

#### buildClass ( [elem], [modName], [modVal] ) → {String}

Builds a CSS class corresponding to the block/element and modifier

##### Parameters:

* [elem] {String}<br/>
  Element name
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

##### Returns:

{String}

# i-bem__dom_init Module

## *function* ( [ctx=scope] ) → {jQuery}

Initializes blocks on a fragment of the DOM tree

### Parameters:

* [ctx=scope] {jQuery}<br/>
  Root DOM node

### Returns:

{jQuery}

ctx Initialization context

