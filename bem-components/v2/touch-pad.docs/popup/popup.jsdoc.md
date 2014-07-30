# popup Module

## popup Block

### Block parameters:

* [mainOffset=0] {Number}<br/>
  offset along the main direction
* [secondaryOffset=0] {Number}<br/>
  offset along the secondary direction
* [viewportOffset=0] {Number}<br/>
  offset from the viewport (window)
* [directions] {[object Object]}<br/>
  allowed directions

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

