# :fire: Map & Set :rocket:
JS provides Objects & Arrays as core data structures, but Maps & Sets offer better performance and flexibility for certain use cases.


## :one: Map (Key-Value Pairs)
A Map is an ordered collection of key-value pairs where keys can be any type (objects, functions, etc.), unlike regular objects that only allow string keys.

### Most Important to know about Map
- Creating a Map
- Adding Entries
- Getting Values
- Checking Key Existence
- Deleting Entries
- Looping through a Map
- Converting a Map to an Array
- Size of a Map

### Why Map Instead of Object?
Objects are great for key-value pairs, but they have limitations that Map overcomes.

|Feature|Object|Map|
|:-|:-:|:-:|
|Key Types|Only strings & symbols|Any type (object, function, etc.)|
|Key Order|Not guaranteed|Insertion order preserved|
|Performance|Slower for large data|Faster for frequent additions/removals|
|Size Retrieval|`Object.keys(obj).length` (slow)|`size` property (fast)|
|Iteration|Manual (`for...in`)|Built-in iterators (`forEach`, `for...of`)|


## :two: Set (Unique Values)
A Set is a collection of unique values.

### Most Important to know about Set
- Creating a Set
- Adding Values
- Checking for a Value
- Deleting a Value
- Looping through a Set
- Converting a Set to an Array
- Size of a Set

### Why Set Instead of Array?
Arrays store ordered elements, but they allow duplicates, whereas Set ensures uniqueness.

|Feature|Array|Set|
|:-|:-:|:-:|
|Duplicates|Allowed|Not allowed (auto-removed)|
|Checking Existence|`arr.includes()` (slow)|`.has()` (fast)|
|Insertion Order|Preserved|Preserved|
|Performance|Slower for searching|Faster for checking uniqueness|
|Iteration|`forEach`, `for...of`|`forEach`, `for...of`|


## :ok_hand: When to Use Object, Array, Map & Set?
|Scenario|Use|
|:-|:-:|
|Need key-value pairs with non-string keys|Map|
|Need to track unique values efficiently|Set|
|Need simple key-value pairs with fixed string keys|Object|
|Need ordered, duplicate elements|Array|


## :link: Helpful links
- [JSM video](https://youtu.be/hLgUTM3FOII?si=1j9UaGI7qkEhlbXK)
- [Map & Set](https://javascript.info/map-set)
- [WeakMap & WeakSet](https://javascript.info/weakmap-weakset)