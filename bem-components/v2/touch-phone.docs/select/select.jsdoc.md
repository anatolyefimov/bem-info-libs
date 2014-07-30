# select Module

## select Block

### Instance methods

#### getVal () → {*}

Get value

##### Returns:

{*}

#### setVal ( val ) → {select}

Set value

##### Parameters:

* val {*}

##### Returns:

{select}

this

# button Module

## button Block

Aughtments {control}

### Instance methods

#### getText () → {String}

Returns text of the button

##### Returns:

{String}

#### setText ( text ) → {button}

Sets text to the button

##### Parameters:

* text {String}

##### Returns:

{button}

this

# control Module

## control Block

### Instance methods

#### getName () → {String}

Returns name of control

##### Returns:

{String}

#### getVal () → {String}

Returns control value

##### Returns:

{String}

# menu Module

## menu Block

Aughtments {control}

### Instance methods

#### getItems () → {menu-item}

Returns items

##### Returns:

{menu-item}

#### setContent ( content ) → {menu}

Sets content

##### Parameters:

* content {String | jQuery}

##### Returns:

{menu}

this

# menu-item Module

## menu-item Block

### Block parameters:

* val {*}<br/>
  Value of item

### Instance methods

#### isValEq ( val ) → {Boolean}

Checks whether given value is equal to current value

##### Parameters:

* val {*}

##### Returns:

{Boolean}

#### getVal () → {*}

Returns item value

##### Returns:

{*}

#### getText () → {String}

Returns item text

##### Returns:

{String}

# popup Module

## popup_autoclosable_true

### Instance methods

#### setTarget ( left, [top] ) → {popup}

Sets target

##### Parameters:

* left {Number | jQuery | BEMDOM}<br/>
  x-coordinate or owner DOM elem or owner BEMDOM block
* [top] {Number}<br/>
  y-coordinate

##### Returns:

{popup}

this

#### setContent ( content ) → {popup}

Sets content

##### Parameters:

* content {String | jQuery}

##### Returns:

{popup}

this

#### redraw () → {popup}

Redraws popup

##### Returns:

{popup}

this

#### calcPossibleDrawingParams () → {Array}

Returns possible directions to draw with max available width and height.

##### Returns:

{Array}

# popup Module

## popup_autoclosable_true

### Instance methods

#### setTarget ( left, [top] ) → {popup}

Sets target

##### Parameters:

* left {Number | jQuery | BEMDOM}<br/>
  x-coordinate or owner DOM elem or owner BEMDOM block
* [top] {Number}<br/>
  y-coordinate

##### Returns:

{popup}

this

#### setContent ( content ) → {popup}

Sets content

##### Parameters:

* content {String | jQuery}

##### Returns:

{popup}

this

#### redraw () → {popup}

Redraws popup

##### Returns:

{popup}

this

#### calcPossibleDrawingParams () → {Array}

Returns possible directions to draw with max available width and height.

##### Returns:

{Array}

