# i-jquery__debounce Module

## debounce ( fn, timeout, invokeAsap, ctx ) → {Function}

Организует задержку вызова функции

### Parameters:

* fn {Function}
* timeout {Number}
* invokeAsap {Boolean}
* ctx {Object}

### Returns:

{Function}

## throttle ( fn, timeout, ctx ) → {Function}

Ограничивает частоту вызова функции

### Parameters:

* fn {Function}
* timeout {Number}
* ctx {Object}

### Returns:

{Function}

# i-jquery__decodeuri Module

## decodeURI ( str ) → {String}

Decode URI

### Parameters:

* str {String}

### Returns:

{String}

## decodeURIComponent ( str ) → {String}

Decode URI component

### Parameters:

* str {String}

### Returns:

{String}

# i-jquery__observable Module

## i-jquery__observable Class

### Instance methods

#### buildEventName ( e ) → {String}  protected

Builds full event name

##### Parameters:

* e {String}<br/>
  Event type

##### Returns:

{String}

#### on ( e, [data], fn, [ctx] ) → {$.observable}

Adding event handler

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

{$.observable}

#### un ( [e], [fn], [ctx] ) → {$.observable}

Removing event handler(s)

##### Parameters:

* [e] {String}<br/>
  Event type
* [fn] {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

##### Returns:

{$.observable}

#### trigger ( e, [data] ) → {$.observable}

Fires event handlers

##### Parameters:

* e {String | $.Event}<br/>
  Event
* [data] {Object}<br/>
  Additional data

##### Returns:

{$.observable}

