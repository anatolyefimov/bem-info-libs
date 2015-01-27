# events Module

## Event Class

### Constructor

#### Event ( type, target )

##### Parameters:

* type {String}
* target {Object}

### Instance properties

#### type {String}

Type

#### target {String}

Target

#### result {*}

Result

#### data {*}

Data

### Instance methods

#### preventDefault ()

Prevents default action

#### isDefaultPrevented () → {Boolean}

Returns whether is default action prevented

##### Returns:

{Boolean}

#### stopPropagation ()

Stops propagation

#### isPropagationStopped () → {Boolean}

Returns whether is propagation stopped

##### Returns:

{Boolean}

## Emitter Class

### Instance methods

#### on ( e, [data], fn, [ctx] ) → {Emitter}

Adds an event handler

##### Parameters:

* e {String}<br/>
  Event type
* [data] {Object}<br/>
  Additional data that the handler gets as e.data
* fn {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

##### Returns:

{Emitter}

this

#### once ( e, [data], fn, [ctx] ) → {Emitter}

Adds a one time handler for the event.
Handler is executed only the next time the event is fired, after which it is removed.

##### Parameters:

* e {String}<br/>
  Event type
* [data] {Object}<br/>
  Additional data that the handler gets as e.data
* fn {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

##### Returns:

{Emitter}

this

#### un ( [e], [fn], [ctx] ) → {Emitter}

Removes event handler or handlers

##### Parameters:

* [e] {String}<br/>
  Event type
* [fn] {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

##### Returns:

{Emitter}

this

#### emit ( e, [data] ) → {Emitter}

Fires event handlers

##### Parameters:

* e {String | events:Event}<br/>
  Event
* [data] {Object}<br/>
  Additional data

##### Returns:

{Emitter}

this

### Static methods

#### on ( e, [data], fn, [ctx] ) → {Emitter}

Adds an event handler

##### Parameters:

* e {String}<br/>
  Event type
* [data] {Object}<br/>
  Additional data that the handler gets as e.data
* fn {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

##### Returns:

{Emitter}

this

#### once ( e, [data], fn, [ctx] ) → {Emitter}

Adds a one time handler for the event.
Handler is executed only the next time the event is fired, after which it is removed.

##### Parameters:

* e {String}<br/>
  Event type
* [data] {Object}<br/>
  Additional data that the handler gets as e.data
* fn {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

##### Returns:

{Emitter}

this

#### un ( [e], [fn], [ctx] ) → {Emitter}

Removes event handler or handlers

##### Parameters:

* [e] {String}<br/>
  Event type
* [fn] {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

##### Returns:

{Emitter}

this

#### emit ( e, [data] ) → {Emitter}

Fires event handlers

##### Parameters:

* e {String | events:Event}<br/>
  Event
* [data] {Object}<br/>
  Additional data

##### Returns:

{Emitter}

this

# events__channels Module

## *function* ( [id='default'], [drop=false] ) → {events:Emitter | undefined}

Returns/destroys a named communication channel

### Parameters:

* [id='default'] {String}<br/>
  Channel ID
* [drop=false] {Boolean}<br/>
  Destroy the channel

### Returns:

{events:Emitter | undefined}

Communication channel

