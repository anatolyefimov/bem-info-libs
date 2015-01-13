# functions Module

A set of helpers to work with JavaScript functions

## isFunction ( obj ) → {Boolean}

Checks whether a given object is function

### Parameters:

* obj {*}

### Returns:

{Boolean}

## noop ()

Empty function

# functions__debounce Module

## *function* ( fn, timeout, [invokeAsap=false], [ctx] ) → {Function}

Debounces given function

### Parameters:

* fn {Function}<br/>
  function to debounce
* timeout {Number}<br/>
  debounce interval
* [invokeAsap=false] {Boolean}<br/>
  invoke before first interval
* [ctx] {Object}<br/>
  context of function invocation

### Returns:

{Function}

debounced function

# functions__throttle Module

## *function* ( fn, timeout, [invokeAsap=true], [ctx] ) → {Function}

Throttle given function

### Parameters:

* fn {Function}<br/>
  function to throttle
* timeout {Number}<br/>
  throttle interval
* [invokeAsap=true] {Boolean}<br/>
  invoke before first interval
* [ctx] {Object}<br/>
  context of function invocation

### Returns:

{Function}

throttled function

