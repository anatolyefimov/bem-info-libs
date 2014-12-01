# i-ecma__array Module

## i-ecma__array

### Instance methods

#### indexOf ( item, [fromIdx] ) → {Number}

Finds the index of an element in an array

##### Parameters:

* item {Object}
* [fromIdx] {Number}<br/>
  Starting from index (length - 1 - fromIdx, if fromIdx < 0)

##### Returns:

{Number}

Element index or -1, if not found

#### forEach ( callback, [ctx=null] )

Calls the callback for each element

##### Parameters:

* callback {Function}<br/>
  Called for each element
* [ctx=null] {Object}<br/>
  Callback context

#### map ( callback, [ctx=null] ) → {Array}

Creates array B from array A so that B[i] = callback(A[i])

##### Parameters:

* callback {Function}<br/>
  Called for each element
* [ctx=null] {Object}<br/>
  Callback context

##### Returns:

{Array}

#### filter ( callback, [ctx] ) → {Array}

Creates an array containing only the elements from the source array that the callback returns true for.

##### Parameters:

* callback {Function}<br/>
  Called for each element
* [ctx] {Object}<br/>
  Callback context

##### Returns:

{Array}

#### reduce ( callback, [initialVal] ) → {Object}

Wraps the array using an accumulator

##### Parameters:

* callback {Function}<br/>
  Called for each element
* [initialVal] {Object}<br/>
  Initial value of the accumulator

##### Returns:

{Object}

Accumulator

#### some ( callback, [ctx=this] ) → {Boolean}

Checks whether at least one element in the array meets the condition in the callback

##### Parameters:

* callback {Function}
* [ctx=this] {Object}<br/>
  Callback context

##### Returns:

{Boolean}

#### every ( callback, [ctx=this] ) → {Boolean}

Checks whether every element in the array meets the condition in the callback

##### Parameters:

* callback {Function}
* [ctx=this] {Object}<br/>
  Context of the callback call

##### Returns:

{Boolean}

# i-ecma__function Module

## *type* {*}

Привязывает контекст к функции

# i-ecma__json Module

## i-ecma__json

### Instance methods

#### stringify {*}

Преобразует значение в JSON-строку

#### parse ( str ) → {Object}

Считывает js-значение из строки

##### Parameters:

* str {String}

##### Returns:

{Object}

# i-ecma__object Module

Block i-ecma. Shim for some ES5 methods

## *type* {*}

Возвращает массив свойств объекта

# i-ecma__trim Module

## *type* {*}

Удаляет лишние пробелы из строки

